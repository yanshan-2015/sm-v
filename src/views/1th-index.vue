<template>
  <div class="index">
    <div class="headBar">
      <my-header>
        <div slot="left" class="left" @click="back()">
          <img src="../assets/images/back.png" alt="back">
        </div>
        <p slot="mid" class="mid">{{title}}</p>
      </my-header>
    </div>

    <div class="banner">
      <img src="../assets/images/1-index-pic.jpg" alt="banner">
      <div class="word">
        <p>我们一生大约有三分之一的时间是在床上度过，心理、生理和物理环境的共同作用会对睡眠的质量产生影响。好的睡眠从选择一款合适自己的床垫开始，输入您的数据进行测试，我们将帮您选择合适您的床垫。</p>
      </div>
    </div>

    <div class="choseBar">
      <man-women>
        <h1 slot="title" class="title">请选择性别:</h1>
        <div slot="man" class="man" @click="man()">
          <img src="../assets/images/1-index-man.png" alt="">
          <i>男</i>
          <span></span>
        </div>
        <div slot="women" class="women" @click="women()">
          <img src="../assets/images/1-index-girl.png" alt="">
          <i>女</i>
          <span></span>
        </div>
      </man-women>
    </div>

    <div class="footer">
      <my-next>
       <router-link to="/shape">开始测试</router-link>
      </my-next>
    </div>
  </div>
</template>

<script>
  import '@/less/common.less'
  import MyHeader from '../components/Head.vue'
  import MyNext from '../components/NextButton.vue'
  import ManWomen from '../components/manAndwomen.vue'

  export default {
    name: 'Index',
    components: { MyHeader,MyNext,ManWomen },
    data(){
      return{
        title: '慕斯睡眠测试系统'
      }
    },
    methods: {
      back() {
        this.$router.back();
      },
      man(){
        alert('这里要处理背景图切换')
      },
      women(){
        alert('这里要处理背景图切换')
      }
    }
  }
</script>

<style lang="less" scoped>
  .banner{
    position: relative;
    width: 100%;
    img{
      display: block;
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
    .word{
      position: absolute;
      bottom: -100px;
      padding: 40px;
      margin: 0 30px;
      background: rgba(244,244,244,0.6);
      p{
        text-indent: 2em;
        text-align: justify;
        font-size: 24px;
        color: #5a6676;
      }
    }
  }
  .choseBar{
    padding: 100px 70px 0;
    .title{
      padding-bottom: 20px;
      font-size: 32px;
      color: #5a6676;
    }
    img{
      width: 60px;
      height: 60px;
      display: inline-block;
      vertical-align: bottom;
    }
    i{
      display: inline-block;
      vertical-align: bottom;
      font-style: normal;
      font-size: 30px;
      color: #5a6676;
    }
    span{
      display: inline-block;
      vertical-align: bottom;
      width: 30px;
      height: 30px;
      margin-left: 10px;
      border-radius: 50%;
    }
    .man{
      span{
        border: 2px solid #74a0ef;
      }
    }
    .women{
      margin-left: 78px;
      span{
        border: 2px solid #ef7474;
      }
    }
  }
  .footer{
    width: 500px;
    padding: 50px 0 90px;
    margin: 0 auto;
    div{
      background: -webkit-linear-gradient(left, #75c7f0 , #74a0ef);
      a{
        font-size: 40px;
        color: #f2f6f9;
      }
    }
  }
</style>
