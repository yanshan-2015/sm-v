<template>
  <div class="g-waistW">
    <MyLocalHead>
      <h1 slot="e-num">{{head.num}}</h1>
      <h1 slot="e-cn">{{head.cn}}</h1>
      <p slot="e-en">{{head.en}}</p>
    </MyLocalHead>

    <div class="g-word">
      <div class="g-left">
        <p>测量方法：…… 量出的尺寸即为腰宽尺寸。</p>
      </div>
      <div class="g-right">
        <img src="../assets/7-pic.png" alt="picImg">
      </div>
    </div>

    <div class="g-input">
      <my-input>
        <label slot="str" for="waistW">{{input.str}}：</label>
        <input slot="input" type="number" id="waistW" v-model="input.inputVal">
        <span slot="unit">{{input.unit}}</span>
      </my-input>
    </div>

    <MyLoDecoration></MyLoDecoration>

    <div class="g-footer">
      <MyNextBtn>
        <router-link to="/waistH">下一步</router-link>
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
          num: '07',
          cn: '腰宽',
          en: 'Waist Width'
        },
        input:{
          str: '腰宽',
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
  .g-input{
    margin: 50px 0 10px 30px;
  }
  .g-decoration {
    padding: 30px 30px 0;
  }
  .g-footer{
    padding: 150px 0 90px;
  }
</style>
