<template>
  <el-container direction="vertical">
    <!--    顶栏导航栏-->
    <el-header class="el-row" style="padding: 0 0 0 0;">
      <Header/>
    </el-header>

    <!-- Aside 和 main 并列布局   -->
    <el-container direction="horizontal" style="padding: 0">
      <el-aside width="auto">
        <Aside style="margin-top: 1px;height: calc(100vh - 61px);"/>
      </el-aside>
      <!--   main中垂直布局，并且带滚动条  -->
      <!--    后台管理显示具体页面的主容器    -->
      <el-container direction="vertical" style="height: calc(100vh - 61px);">
        <el-main style="padding: 0;">
          <div class="el-header" style="margin-top: 10px">
            <!--  电脑端 -->
            <!--  可关闭标签导航 -->
            <el-tag v-for="tag in tags" :key="tag.name" class="el-tag-style" closable :type="tag.type"
                    @click="changRouter(tag.url)" @close="handleClose(tag)">
              {{ tag.name }}
            </el-tag>
            <hr>
          </div>
          <!--后台显示内容的页面路由
          作用：
          当点击侧边导航栏引起路由变化时，
          这里的路由就会变成对应页面的UI组件
          -->
          <router-view class="el-main"></router-view>
        </el-main>
      </el-container>
    </el-container>

  </el-container>
</template>


<script>
import Header from './Header'
import Aside from './Aside'


export default {
  name: 'AdminMeau',
  data() {
    return {
      selectedId: 0,
      clientHeight: '',
      tags: [
        {name: '所有文章', url: '/pc/admin/article/manage/all', type: ''},
        {name: '写文章', url: '/pc/admin/article/manage/add', type: 'success'},
        {name: '账号管理', url: '/pc/admin/user/manage/account', type: 'info'},
        {name: '音乐', url: '/pc/admin/media/music', type: 'warning'},
        {name: '主题设置', url: '/pc/admin/settings/theme', type: 'danger'}
      ]
    }
  },
  methods: {
    handleClose(index) {
      this.tags.splice(this.tags.indexOf(index), 1)
    },
    changRouter(url) {
      this.$router.push(url)
    }
  },
  components: {
    Header,
    Aside,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylessheet/stylus">
.el-tag-style
  margin-right 10px
  margin-bottom 8px

</style>
