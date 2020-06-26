import ResizeObserver from "resize-observer-polyfill";

const EVENTNAME = "resize";

const VueObserverResize = {
  name: "ObserverResize",
  props: {
    disabled: Boolean
  },
  data() {
    this.currentElement = null;
    this.resizeObserver = null;
    return {
      width: 0,
      height: 0
    };
  },

  mounted() {
    this.onComponentUpdated();
  },

  updated() {
    this.onComponentUpdated();
  },
  beforeDestroy() {
    this.destroyObserver();
  },
  methods: {
    onComponentUpdated() {
      const { disabled } = this.$props;

      if (disabled) {
        this.destroyObserver();
        return;
      }

      const element = this.$el;
      const elementChanged = element !== this.currentElement;
      if (elementChanged) {
        this.destroyObserver();
        this.currentElement = element;
      }

      if (!this.resizeObserver && element) {
        this.resizeObserver = new ResizeObserver(this.onResize);
        this.resizeObserver.observe(element);
      }
    },

    onResize(entries) {
      const { target } = entries[0];
      const { width, height } = target.getBoundingClientRect();

      const fixedWidth = Math.floor(width);
      const fixedHeight = Math.floor(height);

      if (this.width !== fixedWidth || this.height !== fixedHeight) {
        const size = { width: fixedWidth, height: fixedHeight };
        this.width = fixedWidth;
        this.height = fixedHeight;
        this.$emit(EVENTNAME, size);
      }
    },

    destroyObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    }
  },

  render() {
    return this.$slots.default[0];
  }
};

export default {
  install: Vue => {
    Vue.component(VueObserverResize.name, VueObserverResize);

    Vue.directive(EVENTNAME, {
      bind: (element, binding, vnode) => {
        var _this = vnode.context;

        _this.onResize = function(entries) {
          const { target } = entries[0];
          const { width, height } = target.getBoundingClientRect();

          const size = { width: width, height: height };
          binding.value(size);
        };

        _this.resizeObserver = new ResizeObserver(_this.onResize);
        _this.resizeObserver.observe(element);
      },
      unbind: (el, binding, vnode) => {
        if (vnode.context.resizeObserver) {
          vnode.context.resizeObserver.disconnect();
          vnode.context.resizeObserver = null;
        }
      }
    });
  }
};

export { VueObserverResize };
