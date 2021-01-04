<template>
  <!--  用户登录状态 头像、消息通知等-->
  <el-dropdown>
    <!--    头像图标-->
    <div v-if="isLogin()">
        <span class="el-dropdown-link" style="float: right">
        <span>
         <el-badge is-dot class="dot-location"></el-badge>
          <img src="./img/avator.jpg" class="el-avatar" alt=""/>
          <!--         <el-avatar src="img/avator.jpg" ></el-avatar>-->
        </span>
        <span class="usermeau">
          {{ user.name|ellipsis }}<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
      </span>
      <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
        <el-dropdown-item class="el-dropdown-item">
          <el-link :underline="false" type="info" @click.prevent="userInfo">个人信息</el-link>
        </el-dropdown-item>
        <el-dropdown-item class="el-dropdown-item">
          <el-link :underline="false" type="info" @click.prevent="userMessage">消息</el-link>
          <el-badge class="mark" :value="12"/>
        </el-dropdown-item>
        <el-dropdown-item class="el-dropdown-item">
          <el-link :underline="false" type="info" @click.prevent="sercurityCenter">安全中心</el-link>
          <el-badge class="mark" :value="3"/>
        </el-dropdown-item>
        <el-dropdown-item class="el-dropdown-item">
          <el-link :underline="false" type="danger" @click.prevent="logout">退出登录</el-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </div>

    <div v-else style="float: right">
      <span class="header_right"><a href="/#/pc/login">登录</a></span>
      <span class="header_right"><a href="/#/pc/login?register">注册</a></span>
    </div>
  </el-dropdown>
</template>

<script>
export default {
  name: 'UserStatus',
  data() {
    return {
      user: {
        name: '诗水人间',
        username: ''
      }
    }
  },
  filters: {
    ellipsis(value) {
      if (!value) return ''
      if (value.length > 4) {
        return value.slice(0, 4) + '...'
      }
      return value
    }
  },
  methods: {
    // 判断是否已经登录过
    isLogin() {
      return true;
    },
    userInfo() {
      this.$router.push('/admin/userInfo')
    },
    userMessage() {
      this.$router.push('/admin/userMessage')
    },
    sercurityCenter() {
      this.$router.push('/admin/securityCenter')
    },
    logout() {
      this.$router.go(0)//退出登录并且 刷新页面
      this.$message({
        showClose: true,
        message: '已退出登录',
        type: 'success'
      })
    },
  }
}
</script>

<style lang="stylus" rel="stylessheet/stylus">
a
  text-decoration none
  color #909399


/*注册登录字体的样式*/
.header_right
  padding 0 10px
  font-size 14px
  line-height 60px
  color rgb(185, 185, 185)


/*红点提示的位置*/
.dot-location
  position relative
  left 45px
  top -30px


/*头像下移10像素*/
.el-avatar
  margin-top 10px
  border-radius 50%


/*下拉文本菜单*/
.el-dropdown_style
  text-align right

</style>
