<template>
  <div class="el-row">
    <div class="content login_form" >
      <el-form :model="forgetNumForm" ref="forgetNumForm" label-width="100px"
               class="demo-ruleForm el-row" method="post">
        <div class="el-col-18 el-col-offset-3">
          <h2 style="text-align: center">
            <span>忘&nbsp;&nbsp;记&nbsp;&nbsp;密&nbsp;&nbsp;码</span>
          </h2>
          <el-input v-model="forgetNumForm.username" placeholder="请输入用户名/电话/邮箱"></el-input>
          <div class="el-row" style="margin-top: 10px;margin-bottom: 10px">
            <el-button class="el-col-24" type="primary" @click="submitForm('forgetNumForm')">下一步</el-button>
          </div>
          <div class="el-row" style="margin-bottom: 20px">
            <el-button class="el-col-24" type="danger" @click.prevent="returnForm">返回登录</el-button>
          </div>
        </div>

      </el-form>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    name: 'ForgetPassword',
    data () {
      return {
        forgetNumForm:{
          username:''
        }
      }
    },
    methods:{
      submitForm(forgetNumForm){
        alert('进行ajax查询判断')
      },
      returnForm(){
        PubSub.publish('isShow',false)
      }
    },


  }
</script>

<style scoped lang="stylus" rel="stylessheet/stylus">

</style>
