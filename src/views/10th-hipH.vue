<template>
  <div class="g-hipH">
    <MyLocalHead>
      <h1 slot="e-num">{{head.num}}</h1>
      <h1 slot="e-cn">{{head.cn}}</h1>
      <p slot="e-en">{{head.en}}</p>
    </MyLocalHead>

    <div class="g-word">
      <p>测量方法：臀部到脚掌与地面接触面的垂直距离。</p>
    </div>

    <div class="g-input">
      <my-input>
        <label slot="str" for="hipH">{{input.str}}：</label>
        <input slot="input" type="number" id="hipH" v-model="input.inputVal">
        <span slot="unit">{{input.unit}}</span>
      </my-input>
    </div>

    <MyLoDecoration></MyLoDecoration>

    <div class="g-footer">
      <MyNextBtn>
        <router-link to="/report">开始测试</router-link>
      </MyNextBtn>
    </div>
  </div>
</template>

<script>
  import MyNextBtn from '../components/NextButton.vue'
  import MyLocalHead from '../components/localNumHead.vue'
  import MyInput from '../components/input.vue'
  import MyLoDecoration from '../components/localDecoration.vue'
  export default {
    name: '',
    components: { MyNextBtn, MyLocalHead, MyInput, MyLoDecoration },
    data() {
      return {
        title: '慕斯睡眠测试系统',
        head: {
          num: '10',
          cn: '臀高',
          en: 'Hip Height'
        },
        input:{
          str: '臀高',
          inputVal: '',
          unit: 'cm'
        }
      }
    },
    methods: {
      back() {
        this.$router.back();
      }
    }
  }
</script>

<style lang="less" scoped>
  .g-hipH{
    background: url("../assets/8-pic.png")no-repeat 93% 140px;
    background-size: 289px auto;
  }
  .g-word{
    width: 43%;
    padding: 100px 0 0 30px;
    p{
      text-align: justify;
      line-height: 46px;
      font-size: 30px;
      color: #8fa0af;
    }
  }
  .g-input{
    margin: 40px 0 10px 30px;
  }
  .g-decoration {
    padding: 30px 30px 0;
  }
  .g-footer{
    padding: 410px 0 90px;
  }
</style>
