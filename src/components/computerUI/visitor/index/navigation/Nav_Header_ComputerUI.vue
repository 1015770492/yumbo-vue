<template>
  <!--   电脑样式  -->
  <div style="background-color: #222222;height: 100%;">
    <!--电脑端的header导航栏 -->
    <Navigation style="height: 100%" class="el-col-sm-12 el-col-md-12  el-col-sm-offset-0 el-col-md-offset-0"/>
    <!--首页导航栏上的 搜索输入框 -->
    <div class="el-col-sm-7 el-col-md-7 el-col-sm-offset-0 el-col-md-offset-0">
      <el-input style="margin-top: 10px;width: 100%" placeholder="请输入内容">
        <!--显示输入框的搜索图标-->
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <!--用户登录状态栏 -->
    <UserStatus style="height: 100%" class="el-col-sm-5 el-col-md-5 el-col-sm-offset-0 el-col-md-offset-0"/>
  </div>
</template>

<script>
import Navigation from './Navigation'
import UserStatus from './userInfo/UserStatus'

export default{
  name: 'IndexHeader',
  components: {
    Navigation,
    UserStatus,
  }
}
</script>

<style lang="stylus" rel="stylessheet/stylus" scoped>
.el-menu.el-menu--horizontal
  border-bottom 0

</style>
