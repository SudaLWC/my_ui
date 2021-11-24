<template>
  <div id="app">
    <div class="test">
      <my-button plain type="primary">按钮</my-button>
      <my-button round type="info">按钮</my-button>
      <my-button icon="my-icon-delete" circle type="success"></my-button>
      <my-button type="danger">按钮</my-button>
      <my-button type="warning">按钮</my-button>
      <my-button @click="func">按钮</my-button>
      <my-button @click="func" round>按钮</my-button>
    </div>
    <div class="test">
      <my-input
        showPassword
        v-model="input"
        placeholder="请输入密码"
        clearable
      ></my-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    func() {
      console.log("hi");
    },
  },
};
</script>

<style lang="scss">
.test {
  margin-bottom: 10px;
  .my-button {
    margin-right: 10px;
  }
  .my-input {
    width: 300px;
  }
}
</style>
