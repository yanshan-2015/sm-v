<template>
    <div class="g-weight">
      <MyLocalHead>
        <h1 slot="e-num">{{head.num}}</h1>
        <h1 slot="e-cn">{{head.cn}}</h1>
        <p slot="e-en">{{head.en}}</p>
      </MyLocalHead>

      <div class="g-blueTitle">
        <h1><img src="../assets/4-timeok.png" alt="timeOk"><span>最佳测量时间</span></h1>
        <p>起床后、睡觉前、三餐后至少一个小时。</p>
      </div>

      <MyLoDecoration></MyLoDecoration>

      <div class="g-imgAndWord">
        <div class="g-left">
          <img src="../assets/4-foot.png" alt="foot-img">
        </div>
        <div class="g-right">
          <ul>
            <li>赤脚、只穿轻薄衣物</li>
            <li>坚硬、平坦的地方</li>
            <li>以中心为圆点，两脚自然分布两侧</li>
          </ul>

          <div class="g-input">
            <my-input>
              <label slot="str" for="weight">{{input.str}}：</label>
              <input slot="input" type="number" id="weight" v-model="input.inputVal">
              <span slot="unit">{{input.unit}}</span>
            </my-input>
          </div>

        </div>
      </div>

      <div class="g-warning">
        <h1><img src="../assets/4-no.png" alt="noimg"><span>以下情况请尽量避免称重</span></h1>
        <ul>
          <li><img src="../assets/4-icon1.png" alt=""><span>剧烈运动后</span></li>
          <li><img src="../assets/4-icon2.png" alt=""><span>沐浴或桑拿后</span></li>
          <li><img src="../assets/4-icon3.png" alt=""><span>暴饮暴食后</span></li>
          <li><img src="../assets/4-icon4.png" alt=""><span>发烧中后</span></li>
          <li><img src="../assets/4-icon5.png" alt=""><span>大量饮酒后</span></li>
          <li><img src="../assets/4-icon6.png" alt=""><span>过度饮酒后</span></li>
        </ul>
      </div>
      <div class="g-footer">
        <MyNextBtn>
          <router-link to="/shoulderW">下一步</router-link>
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
              num: '03',
              cn: '体重',
              en: 'Weight'
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
  .g-warning{
    padding: 0 30px;
    h1{
      img{
        width: 40px;
        height: 40px;
        vertical-align: middle;
        display: inline-block;
      }
      span{
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        font-size: 34px;
        color: #ef7474;
      }
    }
    ul{
      padding: 0 50px;
      overflow: hidden;
      li{
        float: left;
        width: 50%;
        margin-top: 30px;
        img{
          width: 28px;
          height: 28px;
          display: inline-block;
          vertical-align: middle;
        }
        span{
          display: inline-block;
          vertical-align: middle;
          margin-left: 10px;
          font-size: 24px;
          color: #8fa0af;
        }
      }
    }
  }
  .g-imgAndWord{
    padding: 20px 30px 50px;
    overflow: hidden;
    >div{
      float: left;
      width: 50%;
      overflow: hidden;
    }
    .g-left{
      img{
        width: 95%;
        height: auto;
        display: block;
        vertical-align: middle;
      }
    }
    .g-right{
      ul{
        padding-left: 54px;
        li{
          list-style: disc;
          line-height: 46px;
          font-size: 30px;
          color: #8fa0af;
        }
      }
    }
  }
  .g-input{
    margin-left: 20px;
    margin-top: 50px;
  }
  .g-blueTitle{
    padding-left: 30px;
    margin-top: 40px;
    h1{
      img{
        width: 40px;
        height: 40px;
        display: inline-block;
        vertical-align: middle;
      }
      span{
        margin-left: 10px;
        font-size: 34px;
        color: #74efce;
        display: inline-block;
        vertical-align: middle;
      }
    }
    p{
      margin: 15px 0 0 50px;
      font-size: 28px;
      color: #8fa0af;
    }
  }
  .g-decoration {
    padding: 20px 30px 0;
  }
  .g-footer{
    padding: 50px 0 90px;
  }
</style>
