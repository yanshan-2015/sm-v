<template>
  <div class="g-waistH">
    <MyLocalHead>
      <h1 slot="e-num">{{head.num}}</h1>
      <h1 slot="e-cn">{{head.cn}}</h1>
      <p slot="e-en">{{head.en}}</p>
    </MyLocalHead>

    <div class="g-word">
      <p>测量方法：肩部到脚掌与地面接触面的垂直距离。</p>
    </div>

    <div class="g-input">
      <my-input>
        <label slot="str" for="waistH">{{input.str}}：</label>
        <input slot="input" type="number" id="waistH" v-model.lazy="input.inputVal">
        <span slot="unit">{{input.unit}}</span>
      </my-input>
    </div>

    <MyLoDecoration></MyLoDecoration>

    <div class="g-footer" :class="{show: isShow}">
      <MyNextBtn>
        <router-link to="/hipW">下一步</router-link>
      </MyNextBtn>
    </div>
  </div>
</template>

<script>
  import MyNextBtn from '../components/NextButton.vue'
  import MyLocalHead from '../components/localNumHead.vue'
  import MyInput from '../components/input.vue'
  import MyLoDecoration from '../components/localDecoration.vue'
  import {waistlineHC} from '../js/components/numRangeCheck'
  export default {
    name: '',
    components: { MyNextBtn, MyLocalHead, MyInput, MyLoDecoration },
    data() {
      return {
        title: '慕斯睡眠测试系统',
        isShow: false,
        head: {
          num: '08',
          cn: '腰高',
          en: 'Hip Height'
        },
        input:{
          str: '腰高',
          inputVal: '',
          unit: 'cm'
        }
      }
    },
    watch:{
      input:{
        handler:function (val) {
          if(!waistlineHC(val.inputVal)){
            this.isShow = false;
            alert('腰高超出【50~180】范围');
          }else {
            this.isShow = true;
          }
        },
        deep:true
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
  .show{
    display: block !important;
  }
  .g-waistH{
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
    margin: 50px 0 10px 30px;
  }
  .g-decoration {
    padding: 30px 30px 0;
  }
  .g-footer{
    display: none;
    padding: 400px 0 90px;
  }
</style>
