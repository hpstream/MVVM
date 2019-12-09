<template>
  <div class="about">
    <h1 @click="a">This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      ss1: "s"
    };
  },
  beforeCreate() {
    // 逻辑...
    console.log("------------------------------------");
    console.log(this.$options.ajaxApi);
    console.log(this.$options.Event);
    Object.entries(this.$options.ajaxApi).forEach(arr => {
      var [name, fn] = arr;
      this[name] = fn.bind(this);
    });
    Object.entries(this.$options.Event).forEach(arr => {
      var [name, fn] = arr;
      this[name] = fn.bind(this);
    });
  },
  methods: {
    ss() {}
  },
  ajaxApi: {
    a: function() {
      console.log("------------------------------------");
      console.log(1);
      console.log("------------------------------------");
    }
  },
  Event: {
    a() {
      console.log("------------------------------------");

      console.log(this.ss1);
      console.log("------------------------------------");
    }
  },
  Utils: {
    c() {
      console.log("------------------------------------");
      console.log(1);
      console.log("------------------------------------");
    }
  }
};
</script>
