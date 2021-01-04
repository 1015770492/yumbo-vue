<template>
  <!--    侧边导航栏-->
  <el-container>
    <el-menu default-active="/pc/admin/allDataView"
             :unique-opened="uniqueOpened"
             class="el-menu-vertical-demo message" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
             background-color="#545c64"
             text-color="#fff"
             :router="openRouter"
             active-text-color="#ffd04b">

      <!--  仪表盘-->
      <el-submenu index="/pc/admin" style="margin-top: 1px">
        <template slot="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-el-icon-odometer"></use>
          </svg>
          <span slot="title">仪表盘</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/pc/admin/allDataView">
            <i class="el-icon-s-marketing"></i>数据总览
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--媒体库-->
      <el-submenu index="/pc/admin/media">
        <template slot="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-media-library"></use>
          </svg>
          <span slot="title">媒体库</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/pc/admin/media/music">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-music"></use>
            </svg>
            音乐
          </el-menu-item>
          <el-menu-item index="/pc/admin/media/video">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-play-video"></use>
            </svg>
            视频
          </el-menu-item>
          <el-menu-item index="/pc/admin/media/images">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-image"></use>
            </svg>
            图片
          </el-menu-item>
          <el-menu-item index="/pc/admin/media/file">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-directory"></use>
            </svg>
            文件
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--文章管理-->
      <el-submenu index="/pc/admin/article/manage">
        <template slot="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-el-icon-documentfile"></use>
          </svg>
          <span slot="title">文章管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/pc/admin/article/manage/all">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-el-icon-files"></use>
            </svg>
            所有文章
          </el-menu-item>
          <el-menu-item index="/pc/admin/article/manage/add">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-el-icon-edit"></use>
            </svg>
            写文章
          </el-menu-item>
          <el-menu-item index="/pc/admin/article/manage/category">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-el-icon-notebook-2"></use>
            </svg>
            分类目录
          </el-menu-item>
          <el-menu-item index="/pc/admin/article/manage/tags">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-tag"></use>
            </svg>
            标签
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--用户管理-->
      <el-submenu index="/pc/admin/user/manage">
        <template slot="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-group"></use>
          </svg>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/pc/admin/user/manage/account">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-relation"></use>
            </svg>
            账号管理
          </el-menu-item>
          <el-menu-item index="/pc/admin/user/manage/power">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-el-icon-unlock"></use>
            </svg>
            权限管理
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--网站统计-->
      <el-submenu index="/pc/admin/statistical">
        <template slot="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-el-icon-s-data"></use>
          </svg>
          <span slot="title">网站统计</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/pc/admin/statistical/user">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-el-icon-s-custom"></use>
            </svg>
            用户统计
          </el-menu-item>
          <el-menu-item index="/pc/admin/statistical/article">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-el-icon-star-off"></use>
            </svg>
            文章欢迎度
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--网站设置-->
      <el-submenu index="/pc/admin/settings">
        <template slot="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-el-icon-setting"></use>
          </svg>
          <span slot="title">网站设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/pc/admin/settings/theme">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-theme"></use>
            </svg>
            <span>
                主题设置
            </span>
          </el-menu-item>
          <el-menu-item index="/pc/admin/settings/user/comment">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-el-icon-chat"></use>
            </svg>
            用户评论设置
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>


    </el-menu>
  </el-container>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
  name: 'Aside',
  data() {
    return {
      openRouter: true,
      isCollapse: true,
      uniqueOpened: true,
    }
  },
  methods: {

    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    changeIsCollapse() {
      this.isCollapse = !this.isCollapse
    }

  },
  mounted() {
    PubSub.subscribe('changeIsCollapse', (msg, data) => {
      console.log(msg)
      console.log(data)
      this.changeIsCollapse()
    })
  },

}
</script>

<style scoped lang="stylus" rel="stylessheet/stylus">
/*字体图标svg全局变量*/
fontColor = #909399
fontSize = 18px
marginRight = 3px
.icon
  color fontColor
  font-size fontSize
  margin-right marginRight
  vertical-align middle
  width 24px
  text-align center


.nav-color
  color white


.el-menu-vertical-demo:not(.el-menu--collapse)
  width 200px


.my-el-dropdown-menu
  margin-left 35px

</style>
