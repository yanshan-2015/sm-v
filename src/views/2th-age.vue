<template>
    <div class="age">

      <MyLocalHead>
        <h1 slot="e-num">{{head.num}}</h1>
        <p slot="e-cn">{{head.cn}}</p>
        <p slot="e-en">{{head.en}}</p>
      </MyLocalHead>

      <div class="bodyShape"></div>

      <MyLoDecoration></MyLoDecoration>

      <div class="footer">
        <MyNextBtn>
          <router-link to="/weight">下一步</router-link>
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
                num: '01',
                cn: '年龄',
                en: 'Age'
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
  .bodyShape{
    height: 560px;
    margin-top: 20px;
    background-color: #eee;
  }
  .footer{
    padding: 50px 0 90px;
    background: url("../assets/1-index-girl.png");
  }

</style>
