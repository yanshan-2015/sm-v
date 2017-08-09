<template>
  <div class="shoulderH">
    <MyLocalHead>
      <h1 slot="e-num">{{head.num}}</h1>
      <p slot="e-cn">{{head.cn}}</p>
      <p slot="e-en">{{head.en}}</p>
    </MyLocalHead>

    <MyLoDecoration></MyLoDecoration>

    <div class="footer">
      <MyNextBtn>
        <router-link to="/waistline">下一步</router-link>
      </MyNextBtn>
    </div>
  </div>
</template>

<script>
  import MyNextBtn from '../components/NextButton.vue'
  import MyLocalHead from '../components/localNumHead.vue'
  import MyLoDecoration from '../components/localDecoration.vue'
  export default {
    name: '',
    components: { MyNextBtn, MyLocalHead, MyLoDecoration },
    data() {
      return {
        title: '慕斯睡眠测试系统',
        head: {
          num: '05',
          cn: '肩高',
          en: 'Shoulder Height'
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
  .footer{
    padding: 50px 0 90px;
  }
</style>
