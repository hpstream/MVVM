class MVVM {
  constructor(option) {
    this.$el = option.el;
    this.$data = option.data;
    this.$option = option;
    new Compile(this);
  }
}
