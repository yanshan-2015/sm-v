<template>
  <div class="g-index">

    <div class="g-history">
      <router-link to="/history"><img src="../assets/history.png" alt="historyImg"></router-link>
    </div>

    <div class="banner">
      <img src="../assets/1-index-pic.jpg" alt="banner">
      <div class="word">
        <p>我们一生大约有三分之一的时间是在床上度过，心理、生理和物理环境的共同作用会对睡眠的质量产生影响。好的睡眠从选择一款合适自己的床垫开始，输入您的数据进行测试，我们将帮您选择合适您的床垫。</p>
      </div>
    </div>

    <div class="choseBar">
      <man-women>
        <h1 slot="title" class="title">请选择性别:</h1>
        <div slot="man" class="man" @click="man()" >
          <img src="../assets/1-index-man.png" alt="">
          <i>男</i>
          <span v-bind:class="{manBg: bgM}"></span>
        </div>
        <div slot="women" class="women" @click="women()" >
          <img src="../assets/1-index-girl.png" alt="">
          <i>女</i>
          <span v-bind:class="{womenBg: !bgM}"></span>
        </div>
      </man-women>
    </div>

    <div class="footer">
      <my-next>
       <router-link to="/age">开始测试</router-link>
      </my-next>
    </div>
  </div>
</template>

<script>
  import '@/less/common.less'
  import MyNext from '../components/NextButton.vue'
  import ManWomen from '../components/manAndwomen.vue'

  export default {
    name: 'Index',
    components: { MyNext,ManWomen },
    data(){
      return{
        title: '慕斯睡眠测试系统',
        bgM: true,
      }
    },
    methods: {
      back() {
        this.$router.back();
      },
      man(){
        this.bgM = !this.bgM;
      },
      women(){
        this.bgM = !this.bgM
      }
    }
  }
</script>

<style lang="less" scoped>
  .g-history{
    position: absolute;
    z-index: 100;
    top: 250px;
    right: 0;
    a{
      display: block;
      img{
        width: 100px;
        height: 62px;
        display: block;
        vertical-align: middle;
      }
    }
  }
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

  .manBg{
    background: url("../assets/1-index-circle1.png");
    background-size: 30px 30px;
  }
  .womenBg{
    background: url("../assets/1-index-circle2.png");
    background-size: 30px 30px;
  }
  .footer{
    padding: 50px 0 90px;
  }
</style>
