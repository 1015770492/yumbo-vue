<template>
  <div>
    <div class="login-wrap">
      <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked=""><label for="tab-1" class="tab">登录</label>
        <input id="tab-2" ref="register" type="radio" name="tab" class="sign-up"><label for="tab-2"
                                                                                        class="tab">注册</label>
        <div class="login-form">
          <!--登录表单--->
          <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm">
            <div class="sign-in-htm">
              <div class="group">
                <label class="label">用户名</label>
                <el-form-item prop="username">
                  <el-input type="text" placeholder="请输入用户名" v-model="loginForm.username"></el-input>
                </el-form-item>
              </div>
              <div class="group">
                <label class="label">密码</label>
                <el-form-item prop="password">
                  <el-input type="password"
                            :show-password='true'
                            placeholder="请输入密码"
                            @keyup.enter.native="check_login"
                            v-model="loginForm.password"
                            auto-complete="off"></el-input>
                </el-form-item>
              </div>
              <div class="group">
                <div style="padding-bottom: 5px;margin-bottom: 10px">
                  <!--  记住密码开关 -->
                  <span class="el-col-offset-0">
                <span><el-switch v-model="password_status" active-color="#13ce66"></el-switch></span>
                <span class="font_color">记住密码</span>
            </span>
                  <!--  忘记密码 -->
                  <a @click.prevent="forgetPass" class="forget_Password_color" style="float: right">忘记密码?</a>
                </div>
                <div style="margin-top: 35px">
                  <el-button class="el-col-24 div_margin" type="primary" @click="check_login">登录</el-button>
                </div>
                <el-button class="el-col-24 div_margin" type="danger" @click="register_num">注册</el-button>
                <!-- 第三方登录分割线 -->
                <div>
                  <hr class="el-col-8" style="color: #3a8ee6">
                  <span class="el-col-8" style="color: rgba(15,5,5,0.57);text-align: center">第三方登录</span>
                  <hr class="el-col-8">
                </div>

                <!-- 第三方登录图标链接 -->
                <div class="el-col-18 el-col-offset-3 " style="margin-bottom: 10px;text-align: center">
                  <el-link type="success"><img src="./img/qq_24px.png" style="margin-right: 5px" alt=""></el-link>
                  <el-link type="default"><img src="./img/Wechat_24px.png" width="26px" alt="">
                  </el-link>
                </div>

              </div>

            </div>
          </el-form>
          <!--注册表单--->
          <div class="sign-up-htm">
            <RegisterNum/>
          </div>
        </div>
      </div>

    </div>
    <div class="hr">
      <div style="text-align: center;color: rgba(89,89,89,0.65);">
        Copyright © 版权所有 <a href="https://github.com/1015770492/yumbo-vue">诗水人间</a> 著作权
      </div>
    </div>
  </div>


</template>


<script>
import RegisterNum from '../register/RegisterAccount'
// import axios from 'axios'
import PubSub from 'pubsub-js'

export default {
  name: 'login_form',
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (this.loginForm.password !== '') {
          this.$refs.loginForm.validateField('username')
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        // if (this.loginForm.password !== '') {
        //   this.$refs.loginForm.validateField('password')
        // }
        callback()
      }
    }

    return {
      loginForm: JSON.parse(window.localStorage.getItem('loginForm') || '{}'),
      password_status: false,
      loginFormStaut: true,
      rules: {
        username: [
          {required: true, validator: validateUser, trigger: 'blur'}
        ],
        password: [
          {required: true, validator: validatePass, trigger: 'blur'}
        ],

      }
    }
  },
  components: {
    RegisterNum
  },
  methods: {
    check_login() {
      if (this.loginForm.username !== '' && this.loginForm.password !== '') {
        if (this.password_status === true) {
          // 存储密码到文件中
          // alert(JSON.stringify(this.loginForm))
          window.localStorage.setItem('loginForm', JSON.stringify(this.loginForm))
        } else {
          window.localStorage.setItem('loginForm', '{}')
        }
        this.$router.push('/pc/admin/allDataView')
        this.$message({
          message: '登录成功',
          type: 'success'
        })
      }
      // if (this.password_status){
      // 做缓存
      // }
      // if (false){
      //   axios.get('').catch(error=>{
      //     userConsole.log(error)
      //   })
      // }
    }, register_num() {
      this.$refs.register.click()
    },
    forgetPass() {
      PubSub.publish('isShow', true)
    }

  },
  mounted() {
    //直接点击注册过来的
    if (window.location.href.indexOf("register") > 0) {
      this.$refs.register.click()
    }
  }

}


</script>

<style scoped lang="stylus" rel="stylessheet/stylus">
/*********登录注册表单css样式************/
.forget_Password_color
  color rgba(95, 95, 95, 0.85)


.font_color
  color rgba(95, 95, 95, 0.85)


.div_margin
  margin-bottom: 20px


*, :after, :before
  box-sizing border-box


a
  color: inherit
  text-decoration: none


input, button
  outline none
  border none


.login-wrap
  width 100%
  height 100%
  margin auto
  max-width 525px
  min-height 520px
  position relative
  box-shadow 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19)


.login-html
  width 100%
  height 100%
  position absolute
  padding 70px 70px 50px
  background rgba(255, 255, 255, 0.48)


.login-html .sign-in-htm,
.login-html .sign-up-htm
  top 0
  left 0
  right 0
  bottom 0
  position absolute
  -webkit-transform rotateY(180deg)
  transform rotateY(180deg)
  -webkit-backface-visibility hidden
  backface-visibility hidden
  -webkit-transition all .4s linear
  transition all .4s linear


.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check
  display none


.login-html .tab,
.login-form .group .label,
.login-form .group .button
  text-transform uppercase


.login-html .tab
  font-size 22px
  padding-bottom 5px
  margin 0 15px 10px 0
  display inline-block
  border-bottom 2px solid transparent


.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab
  color #fff
  border-color #1161ee


.login-form
  min-height 345px
  position relative
  -webkit-perspective 1000px
  perspective 1000px
  -webkit-transform-style preserve-3d
  transform-style preserve-3d


.login-form .group
  margin-bottom 15px


.login-form .group .label,
.login-form .group .input,
.login-form .group .button
  width 100%
  color #fff
  display block


.login-form .group .input,
.login-form .group .button
  border none
  padding 15px 20px
  border-radius 25px
  background rgba(255, 255, 255, .1)


.login-form .group input[data-type="password"]
  text-security circle
  -webkit-text-security circle


.login-form .group .label
  color #4d4d4d
  font-size 12px


.login-form .group .button
  background #1161ee


.login-form .group label .icon
  width 15px
  height 15px
  border-radius 2px
  position relative
  display inline-block
  background rgba(255, 255, 255, .1)


.login-form .group label .icon:before,
.login-form .group label .icon:after
  content ''
  width 10px
  height 2px
  background #fff
  position absolute
  -webkit-transition all .2s ease-in-out 0s
  transition all .2s ease-in-out 0s


.login-form .group label .icon:before
  left 3px
  width 5px
  bottom 6px
  -webkit-transform scale(0) rotate(0)
  -ms-transform scale(0) rotate(0)
  transform scale(0) rotate(0)


.login-form .group label .icon:after
  top 6px
  right 0
  -webkit-transform scale(0) rotate(0)
  -ms-transform scale(0) rotate(0)
  transform scale(0) rotate(0)


.login-form .group .check:checked + label
  color #fff


.login-form .group .check:checked + label .icon
  background #1161ee


.login-form .group .check:checked + label .icon:before
  -webkit-transform scale(1) rotate(45deg)
  -ms-transform scale(1) rotate(45deg)
  transform scale(1) rotate(45deg)


.login-form .group .check:checked + label .icon:after
  -webkit-transform scale(1) rotate(-45deg)
  -ms-transform scale(1) rotate(-45deg)
  transform scale(1) rotate(-45deg)


.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm
  -webkit-transform rotate(0)
  -ms-transform rotate(0)
  transform rotate(0)


.login-html .sign-up:checked + .tab + .login-form .sign-up-htm
  -webkit-transform rotate(0)
  -ms-transform rotate(0)
  transform rotate(0)


.hr
  height 2px
  margin 20px 0 0px 0
  background rgba(255, 255, 255, .2)

</style>
