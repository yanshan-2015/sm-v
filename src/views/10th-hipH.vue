<template>
  <div class="g-hipH">

    <my-login :class="{ active: display }" :data="display" v-on.capture.closeNow="add()"></my-login>

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
      <p @click="btn()">获取报告</p>
    </div>
  </div>
</template>

<script>
  import MyNextBtn from '../components/NextButton.vue'
  import MyLocalHead from '../components/localNumHead.vue'
  import MyInput from '../components/input.vue'
  import MyLogin from '../components/login.vue'
  import MyLoDecoration from '../components/localDecoration.vue'
  import Bus from '../js/bus'
  export default {
    name: '',
    components: { MyNextBtn, MyLocalHead, MyInput, MyLogin, MyLoDecoration },
    data() {
      return {
        display: true,
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
      },
      btn(){
        this.display = !this.display
      },
      add(){
        let that = this;
        Bus.$on('closeNow',function (val) {
          that.display = !val
        });
      }
    },
  }

</script>

<style lang="less" scoped>
  .active{
    display: none;
  }
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
    width: 100%;
    p{
      width: 500px;
      height: 90px;
      margin: 0 auto;
      text-align: center;
      line-height: 90px;
      background: -webkit-linear-gradient(left, #75c7f0 , #74a0ef);
      font-size: 40px;
      color: #fff;
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      border-radius: 8px;
    }
  }
</style>
