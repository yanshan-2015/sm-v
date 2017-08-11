<template>
    <div class="g-history">

      <div class="g-listContain">
        <ul>
          <li v-for="(item, index) in items">
            <div class="g-list">
              <h1>测试记录{{index}}</h1>
              <p>
                <span>性别：</span><i>{{item.sex}}</i>
                <span>年龄：</span><i>{{item.age}}</i>
                <span>身高：</span><i>{{item.height}}</i>
              </p>
              <button class="e-btn" @click="goReport(item)">查看报告</button>
            </div>
          </li>
        </ul>
      </div>

      <div class="g-footer">
        <MyNextBtn>
          <router-link to="/">返回测试</router-link>
        </MyNextBtn>
      </div>
    </div>
</template>

<script>
  import MyNextBtn from '../components/NextButton.vue'
    export default {
      name: '',
      components: { MyNextBtn },
      data() {
        return {
          items:[
            {
              id: '0',
              sex: '男',
              age: '25岁',
              height: '175cm',
              phone: '18824869177'
            },
            {
              id: '1',
              sex: '男',
              age: '23岁',
              height: '170cm',
              phone: '18824864356'
            },
            {
              id: '2',
              sex: '男',
              age: '25岁',
              height: '173cm',
              phone: '15878723800'
            }
          ]
        }
      },
      methods: {
        goReport(obj){
          this.$router.push({name: 'report',query: {id: obj.id, phone: obj.phone}})
        }
      }
    }
</script>

<style lang="less" scoped>
  .g-listContain{
    padding: 0 30px;
  }
  ul{
    li{
      height: 120px;
      border-bottom: 1px solid #e1e1e1;
    }
  }
  .g-list{
    position: relative;
    padding: 0 20px;
    h1{
      padding-top: 15px;
      font-size: 36px;
      color: #51565c;
    }
    p{
      width: 64%;
      margin-top: 3px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 24px;
      color: #8fa0af;
      i{
        margin-right: 15px;
        font-style: normal;
      }
    }
  }
  .e-btn{
    position: absolute;
    right: 20px;
    top: 20px;
    width: 160px;
    height: 80px;
    font-size: 32px;
    color: #fff;
    background: -webkit-linear-gradient(left, #75c7f0 , #74a0ef);
    border: none;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
  }
  .g-footer{
    position: absolute;
    bottom: 100px;
    width: 100%;
  }
</style>
