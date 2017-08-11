<template>
    <div class="g-login" id="login">
      <div class="g-dialog">
        <img src="../assets/8-close.png" alt="close" @click="closeCover()">
        <h1>快捷登录以查看测试结果</h1>
        <ul>
          <li>
            <img src="../assets/8-icon1.png" alt="img">
            <input type="text" placeholder="请填写姓名">
          </li>
          <li>
            <img src="../assets/8-icon2.png" alt="img">
            <input type="tel" maxlength="11" placeholder="请输入手机号码">
          </li>
        </ul>
        <div class="g-btn">
          <router-link to="/report">确认</router-link>
        </div>
      </div>
    </div>
</template>

<script>
  import Bus from '../js/bus'
    export default {
        name: 'login',
        props: ['data'],
        data() {
            return {

            }
        },
        methods:{
          closeCover(){
            Bus.$emit('closeNow', this.data)
          }
        }
    }
</script>

<style lang="less" scoped>
  .g-login{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(24,24,24,0.8);
  }
  .g-dialog{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 76%;
    height: 5.6rem;
    margin: auto;
    background-color: #fefefe;
    border-radius: 15px;
    >img{
      position: absolute;
      top: 5px;
      right: 5px;
      width: 30px;
      height: 30px;
      padding: 15px;
    }
    h1{
      margin: 40px 40px 0;
      text-align: center;
      line-height: 70px;
      font-size: 36px;
      color: #555;
      border-bottom: 1px solid #e1e1e1;
    }
    ul{
      padding: 30px 60px 0;
      li{
        height: 70px;
        line-height: 70px;
        border-bottom: 1px solid #e1e1e1;
        img{
          height: auto;
          display: inline-block;
          vertical-align: middle;
        }
        input{
          display: inline-block;
          vertical-align: middle;
          width: 300px;
          height: 50px;
          font-size: 30px;
          color: #555;
          border: none;
        }
      }
      li:nth-of-type(1){
        img{
          width: 40px;
          margin-left: 15px;
        }
        input{
          margin-left: 10px;
        }
      }
      li:nth-of-type(2){
        img{
          width: 46px;
          height: 42px;
          margin-left: 12px;
        }
        input{
          margin-left: 7px;
        }
      }
    }
    .g-btn{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 80px;
      text-align: center;
      line-height: 80px;
      background-color: #aaa;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      a{
        display: block;
        font-size: 36px;
        color: #555;
      }
    }
  }
</style>
