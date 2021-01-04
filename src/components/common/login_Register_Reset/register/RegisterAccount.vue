<template>
  <div class="el-row">
    <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" class="demo-ruleForm">
      <label>用户名</label>
      <el-form-item prop="username">
        <el-input type="text" placeholder="请输入用户名" v-model="registerForm.username"></el-input>
      </el-form-item>
      <label>密码</label>
      <el-form-item prop="pass">
        <el-input type="password" :show-password="true" v-model="registerForm.pass" auto-complete="off"
                  onpaste="return false"
                  placeholder="请输入密码" oncopy="return false" oncut="return false">
        </el-input>
      </el-form-item>
      <label>确认密码</label>
      <el-form-item prop="checkPass">
        <el-input type="password" :show-password="true" v-model="registerForm.checkPass" auto-complete="off"
                  onpaste="return false"
                  placeholder="请确认密码" oncopy="return false" oncut="return false">
        </el-input>
      </el-form-item>
      <label>邮箱</label>
      <el-form-item
          prop="email"
          :rules="[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                  ]">
        <el-input v-model="registerForm.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <!--        <el-form-item>-->
      <!--          <slide-verify :l="22"-->
      <!--                        :r="10"-->
      <!--                        :w="300"-->
      <!--                        :h="100"-->
      <!--                        @success="onSuccess"-->
      <!--                        @fail="onFail"-->
      <!--                        @refresh="onRefresh"-->
      <!--                        :slider-text="text"-->
      <!--          ></slide-verify>-->
      <!--&lt;!&ndash;          <div>{{registerForm.msg}}</div>&ndash;&gt;-->
      <!--        </el-form-item>-->

      <el-button type="primary" class="el-col-24" @click="submitForm('registerForm')">注册</el-button>

    </el-form>
  </div>
</template>

<script>

// import ValidateCode from '../validateCode/ValidateCode'

export default {
  name: 'RegisterNum',
  // components: {ValidateCode},
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        /**
         * 进行ajax检查用户名是否已存在
         * if(判断用户名是否已存在){
         * 存在提醒用户
         *     callback(new Error(‘用户名已存在’))
         * }else{
         *     callback()
         * }
         */
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      text: '向右滑',
      registerForm: {
        msg: '',
        username: '',
        pass: '',
        checkPass: '',
        email: '',
      },
      rules: {
        pass: [
          {required: true, validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {required: true, validator: validatePass2, trigger: 'blur'}
        ],
        username: [
          {required: true, validator: validateUser, trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    onSuccess() {
      this.registerForm.msg = 'success'
    },
    onFail() {
      this.registerForm.msg = ''
    },
    onRefresh() {
      this.registerForm.msg = ''
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid && this.RegisterNum.msg == 'success') {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.onRefresh()
      this.$refs[formName].resetFields()
    },
  }
}
</script>

<style scoped lang="stylus" rel="stylessheet/stylus">
.code
  margin 0 auto
  width 114px
  height 40px
  border 1px solid red


input
  padding 0


label
  color #4d4d4d
  font-size 12px
  width 100%

</style>
