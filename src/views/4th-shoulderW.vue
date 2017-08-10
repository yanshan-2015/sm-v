<template>
    <div class="g-shoulderW">
      <MyLocalHead>
        <h1 slot="e-num">{{head.num}}</h1>
        <h1 slot="e-cn">{{head.cn}}</h1>
        <p slot="e-en">{{head.en}}</p>
      </MyLocalHead>

      <div class="g-img">
        <img src="../assets/5-pic.png" alt="picImg">
      </div>

      <div class="g-word">
        <p>测量方法：将皮尺环绕于胸部包含手臂部分，取最高点，与地面保持水平。</p>
      </div>

      <div class="g-input">
        <my-input>
          <label slot="str" for="shoulderW">{{input.str}}：</label>
          <input slot="input" type="number" id="shoulderW" v-model="input.inputVal">
          <span slot="unit">{{input.unit}}</span>
        </my-input>
      </div>

      <MyLoDecoration></MyLoDecoration>

      <div class="g-footer">
        <MyNextBtn>
          <router-link to="/shoulderH">下一步</router-link>
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
              num: '04',
              cn: '肩宽',
              en: 'Shoulder Width'
            },
            input:{
              str: '体重',
              inputVal: '',
              unit: 'kg'
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
    margin-left: 30px;
    margin-bottom: 15px;
  }
  .g-word{
    padding: 0 30px 40px;
    p{
      line-height: 42px;
      font-size: 30px;
      color: #8fa0af;
    }
  }
  .g-img{
    padding-bottom: 50px;
    text-align: center;
    img{
      width: 355px;
      height: 423px;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .g-decoration {
    padding: 30px 30px 0;
  }
  .g-footer{
    padding: 150px 0 90px;
  }
</style>
