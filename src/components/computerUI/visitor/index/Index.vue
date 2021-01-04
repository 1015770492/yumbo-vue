<template>
  <!--  首页 博客网站的首页  -->
  <el-container style="height: auto">
    <!--    顶栏导航栏-->
    <el-header class="el-row" style="padding: 0 0 0 0;height: auto">
      <!--      判断屏幕的宽度是否大于768 大于则显示电脑端的header-->
      <Nav_Header_ComputerUI v-if="screenWidth>768" style="height: 60px"/><!--这里设置header的高度，下面计算出展示博客的主界面的高度-->
      <!--      不大于768则显示手机端的header-->
      <!--      <Nav_Header_PhoneUI v-else style="min-height: 60px"/>&lt;!&ndash;这里设置header的高度，下面计算出展示博客的主界面的高度&ndash;&gt;-->
    </el-header>
    <!--    首页主容器 界面展示博客信息  -->
    <el-container direction="horizontal" style="padding: 0;border-top: #5f5d58 1px solid">
      <!--   main中垂直布局，并且带滚动条  -->
      <el-container direction="vertical" style="height: calc(100vh - 61px);"><!--注意这里主容器的高度，用css3的calc计算出100%-61px的高度-->
        <el-main style="padding: 0;" id="mainbody">
          <!--          头-->
          <el-header></el-header>
          <!--          脚注-->
          <el-footer></el-footer>

        </el-main>
      </el-container>
    </el-container>

  </el-container>

</template>


<script>
import Nav_Header_ComputerUI from './navigation/Nav_Header_ComputerUI'

export default {
  name: 'hello',
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,//屏幕宽度
      screenHeight: document.documentElement.clientHeight,//屏幕高度
    }
  },
  components: {
    Nav_Header_ComputerUI
  },
  mounted() {
    var _this = this;
    window.onresize = function () { // 定义窗口大小变更通知事件
      _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
      _this.screenHeight = document.documentElement.clientHeight; //窗口高度
    };
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylessheet/stylus">
/*overflow: hidden;隐藏滚动条*/
#mainbody
  width 100%
  height 100%
  clear both
  background-color #333333


html, body
  background #333
  height 100%
  width 100%
  margin 0px
  padding 0px
  text-align center


h1
  color #EFEFEF


</style>
