<template>
  <div class="el-row">
    <div class="content login_form" style="margin-top: 140px">
      <form :model="resetPasswordForm" status-icon :rules="rules" ref="resetPasswordForm" class="el-row demo-ruleForm" action="" method="post" >
        <h2>
          <span>重&nbsp;&nbsp;置&nbsp;&nbsp;密&nbsp;&nbsp;码</span>
        </h2>
        <div class="el-col-18 el-col-offset-3 div_margin">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="resetPasswordForm.password"
            autocomplete="off">
          </el-input>
        </div>
        <div class="el-col-18 el-col-offset-3 div_margin">
          <el-input
            type="password2"
            placeholder="请确认密码"
            v-model="resetPasswordForm.password2">
          </el-input>
        </div>

        <div class="el-col-18 el-col-offset-3 div_margin">
          <el-button class="el-col-24" type="danger" round @click="submitForm('resetPasswordForm')">重置</el-button>
        </div>
      </form>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'ResetPassword',
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.resetPasswordForm.password2 !== '') {
            this.$refs.resetPasswordForm.validateField('password2')
          }
          callback()
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.resetPasswordForm.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      };
      return {
        resetPasswordForm:{
          password: '',
          password2: '',
        },
        rules: {
          password: [
            {validator: validatePass, trigger: 'blur'}
          ],
          password2: [
            {validator: validatePass2, trigger: 'blur'}
          ],
        }
      }

    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }


</script>

<style scoped lang="stylus" rel="stylessheet/stylus">

</style>
