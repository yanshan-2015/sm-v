<template>
    <div class="g-age">

      <MyLocalHead>
        <h1 slot="e-num">{{head.num}}</h1>
        <h1 slot="e-cn">{{head.cn}}</h1>
        <p slot="e-en">{{head.en}}</p>
      </MyLocalHead>

      <div class="g-input">
        <my-input>
          <label slot="str" for="age">{{inputAge.str}}：</label>
          <input slot="input" type="number" id="age" v-model.lazy="inputAge.inputVal">
          <span slot="unit">{{inputAge.unit}}</span>
        </my-input>
      </div>

      <MyLoDecoration></MyLoDecoration>

      <MyLocalHead>
        <h1 slot="e-num">{{head.numA}}</h1>
        <h1 slot="e-cn">{{head.cnA}}</h1>
        <p slot="e-en">{{head.enA}}</p>
      </MyLocalHead>

      <div class="g-word">
        <p>测试方法：赤脚两腿并拢站直，背靠墙站立，从头顶到地面的高度即为身高。</p>
      </div>

      <div class="g-input">
        <my-input>
          <label slot="str" for="bodyH">{{inputH.str}}：</label>
          <input slot="input" type="number" id="bodyH" v-model.lazy="inputH.inputVals">
          <span slot="unit">{{inputH.unit}}</span>
        </my-input>
      </div>

      <div class="g-footer" :class="classObj">
        <MyNextBtn>
          <router-link to="/weight">下一步</router-link>
        </MyNextBtn>
      </div>

    </div>
</template>

<script>
  import MyNextBtn from '../components/NextButton.vue'
  import MyLocalHead from '../components/localNumHead.vue'
  import MyInput from '../components/input.vue'
  import MyLoDecoration from '../components/localDecoration.vue'
  import { ageC, heightC } from '../js/components/numRangeCheck'
    export default {
      name: '',
      components: { MyNextBtn, MyLocalHead, MyInput, MyLoDecoration },
      data() {
          return {
            title: '慕斯睡眠测试系统',
            input1: false,
            input2: false,
            head: {
              num: '01',
              cn: '年龄',
              en: 'Age',
              numA: '02',
              cnA: '身高',
              enA: 'Height'
            },
            inputAge: {
              str: '年龄',
              inputVal: '',
              unit: '岁'
            },
            inputH: {
              str: '身高',
              inputVals: '',
              unit: 'cm'
            },
          }
      },
      computed:{
        classObj:function () {
          return{
            show: this.input1 && this.input2
          }
        }
      },
      watch:{
        inputAge:{
          handler: function (val, oldVal) {
            if(!ageC(val.inputVal)){
              alert('年龄超出【0~150】范围');
              this.input1 = false;
            }else {
              this.input1 = true;
            }
          },
          deep: true
        },
        inputH: {
          handler:function (val, oldVal) {
            if(!heightC(val.inputVals)){
              alert('身高超出【110~230】范围');
              this.input2 = false;
            }else {
              this.input2 = true;
            }
          },
          deep:true
        }
      },
      methods: {
        back() {
          this.$router.back();
        }
      },
    }
</script>

<style lang="less" scoped>
  .show{
    display: block !important;
  }
  .g-age{
    background: url("../assets/3-body.png")no-repeat 94% 140px;
    background-size: 310px auto;
  }
  .g-input{
    width: 48%;
    margin-top: 39px;
    margin-left: 30px;
  }
  .g-word{
    width: 50%;
    margin: 100px 0 50px 30px;
    text-align: justify;
    line-height: 46px;
    font-size: 30px;
    color: #8fa0af;
  }
  .g-decoration {
    padding: 40px 30px 0;
  }
  .g-footer{
    display: none;
    padding: 200px 0 90px;
  }
</style>
