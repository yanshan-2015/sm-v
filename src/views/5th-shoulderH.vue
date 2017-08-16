<template>
  <div class="g-shoulderH">
    <MyLocalHead>
      <h1 slot="e-num">{{head.num}}</h1>
      <h1 slot="e-cn">{{head.cn}}</h1>
      <p slot="e-en">{{head.en}}</p>
    </MyLocalHead>

    <div class="g-word">
      <p>测试方法：肩部到脚掌与地面接触面的垂直距离。</p>
    </div>

    <div class="g-input">
      <my-input>
        <label slot="str" for="shoulderH">{{input.str}}：</label>
        <input slot="input" type="number" placeholder="80~180" id="shoulderH" v-model.lazy="input.inputVal">
        <span slot="unit">{{input.unit}}</span>
      </my-input>
    </div>

    <MyLoDecoration></MyLoDecoration>

    <div class="g-footer" :class="{show: isShow}">
      <MyNextBtn>
        <router-link to="/waistline">下一步</router-link>
      </MyNextBtn>
    </div>
  </div>
</template>

<script>
  import MyNextBtn from '../components/NextButton.vue'
  import MyLocalHead from '../components/localNumHead.vue'
  import MyInput from '../components/input.vue'
  import MyLoDecoration from '../components/localDecoration.vue'
  import {shoulderHC} from '../js/components/numRangeCheck'
  export default {
    name: '',
    components: { MyNextBtn, MyLocalHead, MyInput, MyLoDecoration },
    data() {
      return {
        title: '慕斯睡眠测试系统',
        isShow: false,
        head: {
          num: '05',
          cn: '肩高',
          en: 'Shoulder Height'
        },
        input:{
          str: '肩高',
          inputVal: '',
          unit: 'cm'
        }
      }
    },
    watch:{
      input:{
        handler:function (val) {
          if(!shoulderHC(val.inputVal)){
            this.isShow = false;
            alert('肩高超出【80~180】范围');
          }else {
            this.isShow = true;
            localStorage.shoulderH = val.inputVal;
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
  .g-shoulderH{
    padding-bottom: 400px;
    background: url("../assets/5human.png")no-repeat 93% 140px;
    background-size: 289px auto;
  }
  .g-word{
    width: 46%;
    padding: 0 30px;
    margin-top: 100px;
    p{
      line-height: 46px;
      font-size: 30px;
      color: #8fa0af;
    }
  }
  .g-input{
    margin: 40px 0 30px 30px;
  }
  .g-decoration {
    padding: 30px 30px 0;
  }
  .g-footer{
    display: none;
    padding: 430px 0 90px;
  }
</style>
