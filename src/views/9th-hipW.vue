<template>
  <div class="g-hipW">
    <MyLocalHead>
      <h1 slot="e-num">{{head.num}}</h1>
      <h1 slot="e-cn">{{head.cn}}</h1>
      <p slot="e-en">{{head.en}}</p>
    </MyLocalHead>

    <div class="g-word">
      <div class="g-left">
        <p>测量方法：双脚并拢直立，两臂自然下垂，皮尺围绕臀部最宽处水平测量两端，量出的尺寸即为臀宽尺寸。</p>

        <div class="g-input">
          <my-input>
            <label slot="str" for="hipW">{{input.str}}：</label>
            <input slot="input" type="number" placeholder="25~60" id="hipW" v-model.lazy="input.inputVal">
            <span slot="unit">{{input.unit}}</span>
          </my-input>
        </div>

        <MyLoDecoration></MyLoDecoration>

      </div>
      <div class="g-right">
        <img src="../assets/9-pic.png" alt="picImg">
      </div>
    </div>

    <div class="g-footer" :class="{show: isShow}">
      <MyNextBtn>
        <router-link to="/hipH">下一步</router-link>
      </MyNextBtn>
    </div>
  </div>
</template>

<script>
  import MyNextBtn from '../components/NextButton.vue'
  import MyLocalHead from '../components/localNumHead.vue'
  import MyInput from '../components/input.vue'
  import MyLoDecoration from '../components/localDecoration.vue'
  import {hipWC} from '../js/components/numRangeCheck'
  export default {
    name: '',
    components: { MyNextBtn, MyLocalHead, MyInput, MyLoDecoration },
    data() {
      return {
        title: '慕斯睡眠测试系统',
        isShow: false,
        head: {
          num: '09',
          cn: '臀宽',
          en: 'Hip Width'
        },
        input: {
          str: '臀宽',
          inputVal: '',
          unit: 'cm'
        }
      }
    },
    watch:{
      input:{
        handler:function (val) {
          if(!hipWC(val.inputVal)){
            this.isShow = false;
            alert('臀宽超出【25~60】范围');
          }else {
            this.isShow = true;
            localStorage.hipW = val.inputVal;
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
  #hipW{
    width: 120px;
  }
  .g-decoration {
    padding: 30px 30px 0;
  }
  .g-footer{
    display: none;
    padding: 350px 0 90px;
  }
</style>
