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
        <div slot="man">
          <img src="" alt="">
          <i>男</i>
          <span></span>
        </div>
        <div slot="women">
          <img src="" alt="">
          <i>女</i>
          <span></span>
        </div>
      </man-women>
    </div>


    <!--<my-next>
      <p>下一步</p>
    </my-next>-->
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
      bottom: -1.5rem;
      padding: 0.4rem;
      margin: 0 0.35rem;
      background: rgba(244,244,244,0.6);
      p{
        text-indent: 2em;
        text-align: justify;
        font-size: 0.34rem;
        color: #5a6676;
      }
    }
  }
  .choseBar{
    padding-top: 50px;
  }
</style>
