export default {
  props: {
    data: {
      type: Object,
      default: () => new Object()
    },
    deep: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  },
  computed: {
    name() {
      return this.data.name;
    },
    children() {
      return this.data.children;
    }
  },
  methods: {
    isChildren(item) {
      return item.children && item.children.length > 0;
    },
    unfold(item) {
      if (item._unfold === undefined) {
        this.$set(item, '_unfold', true);
      } else {
        item._unfold = !item._unfold;
      }
      this.emitClick(item);
    },
    emitClick(item) {
      // console.log(this.$parent.$parent.$parent.$parent);
      // this.$parent.$parent.$parent.$parent.dataTab2 = item;
      this.$emit('on-click', item);
      // if (this.$parent.$parent.$parent.$parent.clickTreeHadnle) {
      //   this.$parent.$parent.$parent.$parent.clickTreeHadnle();
      // }
    }
  }
};