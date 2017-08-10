<template>
  <div class="g-waistline">
    <MyLocalHead>
      <h1 slot="e-num">{{head.num}}</h1>
      <h1 slot="e-cn">{{head.cn}}</h1>
      <p slot="e-en">{{head.en}}</p>
    </MyLocalHead>

    <div class="g-word">
      <div class="g-left">
        <p>测量方法：双脚并拢站直，两臂自然垂直，不要收腹，呼吸保持平稳，皮尺围绕腰最细的部位（髋骨上，肋骨下最窄的部位），水平测量一周，让皮尺和身体之间有一个手指的位置，量出的尺寸即为腰围尺寸。</p>
      </div>
      <div class="g-right">
        <img src="../assets/6-pic.png" alt="picImg">
      </div>
    </div>

    <div class="g-input">
      <my-input>
        <label slot="str" for="waistline">{{input.str}}：</label>
        <input slot="input" type="number" id="waistline" v-model="input.inputVal">
        <span slot="unit">{{input.unit}}</span>
      </my-input>
    </div>

    <MyLoDecoration></MyLoDecoration>

    <div class="g-footer">
      <MyNextBtn>
        <router-link to="/waistW">下一步</router-link>
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
          num: '06',
          cn: '腰围',
          en: 'Waistline'
        },
        input:{
          str: '腰围',
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
  .g-input{
    margin: 40px 0 20px 30px;
  }
  .g-word{
    padding: 100px 0 0;
    overflow: hidden;
    >div{
      float: left;
      width: 50%;
      overflow: hidden;
    }
    .g-left{
      p{
        padding: 0 30px;
        text-align: justify;
        font-size: 30px;
        color: #8fa0af;
      }
    }
    .g-right{
      img{
        width: 92%;
        height: auto;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  .g-decoration {
    padding: 30px 30px 0;
  }
  .g-footer{
    padding: 150px 0 90px;
  }
</style>
