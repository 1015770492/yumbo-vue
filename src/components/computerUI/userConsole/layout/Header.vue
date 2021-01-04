<template>
  <el-menu style="height: 61px;"
           ref="topCollapse"
           class="el-menu-demo el-col-24"
           mode="horizontal"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b">

    <el-row>

      <!-- 打开侧边导航栏图标 -->
      <el-col span="2" style="width: 63px;height: 61px;">
        <el-menu-item class="el-icon-s-unfold" style="font-size: 23px;"
                      @click="this.openAside"></el-menu-item>
      </el-col>
      <!-- 首页图标 -->
      <el-col span="4" style="margin-left: 15px;margin-top: 15px;width: 61px;">
        <el-link type="info" :underline="false" href="/" style="margin-top: -6px">
                  <span class="header-font-style">
                    <i class="iconfont iconindex" style="font-size: 25px;"></i>
                    <span style="margin-left: -3px">首页</span>
                  </span>
        </el-link>
      </el-col>
      <!-- 新建下拉菜单-->
      <el-col span="4" style="margin-left: 20px;margin-top: 17px;width: 61px;">
        <el-dropdown placement="bottom-start">
                  <span class="el-dropdown-link header-font-style">
                    <svg class="icon" aria-hidden="true" style="width: 18px;height: 18px;">
                      <use xlink:href="#iconnew"></use>
                    </svg>
                    <span style="margin-left: -15px;">
                      新建
                    </span>
                  </span>
          <el-dropdown-menu slot="dropdown" class="el-dropdown-menu2">
            <el-dropdown-item class="el-dropdown-item">
              <!--                    <router-link>新建文章</router-link>-->
              <router-link to="/adminMeau/addArticle" type="info">
                <i class="iconfont iconxinxitianxie i"></i>文章
              </router-link>
            </el-dropdown-item>

            <el-dropdown-item class="el-dropdown-item">
              <!--                    <router-link>媒体</router-link>-->
              <el-link :underline="false" type="info" @click.prevent="userMessage">
                <i class="iconfont icontianjiashipin i" style="font-size: 16px;margin-right: 7px"></i>媒体
              </el-link>
            </el-dropdown-item>

            <el-dropdown-item class="el-dropdown-item">
              <!--                    <router-link>用户</router-link>-->
              <el-link :underline="false" type="info" @click.prevent="logout">
                <i class="iconfont icon27 i"></i>用户
              </el-link>
            </el-dropdown-item>

            <el-dropdown-item class="el-dropdown-item">
              <!--                    <router-link>页面</router-link>-->
              <el-link :underline="false" type="info" @click.prevent="sercurityCenter">
                <i class="iconfont iconwangye i"></i>页面
              </el-link>
            </el-dropdown-item>


          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <!--  用户登录状态 头像、消息通知-->
      <el-col span="6" style="width: 200px;float: right"
              class="el-dropdown_style">
        <el-dropdown>
              <span class="el-dropdown-link">
                <span class="userimg">
                 <el-badge is-dot class="dot-location"></el-badge>
                 <img src="./img/avator.jpg" class="el-avatar"/>
                </span>
                <span class="username">
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
        </el-dropdown>
      </el-col>
    </el-row>


  </el-menu>
</template>

<script>
import Pubsub from 'pubsub-js'

export default {
  name: 'Header',
  data() {
    return {
      user: {
        name: '诗水人间',
        username: ''
      },

    }
  },
  methods: {
    logout() {
      this.$router.replace('/helloWorld')
      this.$message({
        showClose: true,
        message: '已退出登录',
        type: 'success'
      })
    },
    userInfo() {
      this.$router.push('/userInfo')
    },
    userMessage() {
      this.$router.push('/userMessage')
    },
    sercurityCenter() {
      this.$router.push('/securityCenter')
    },
    openAside() {
      Pubsub.publish('changeIsCollapse')
    },

  },

  filters: {
    ellipsis(value) {
      if (!value) return ''
      if (value.length > 7) {
        return value.slice(0, 3) + '...'
      }
      return value
    }
  }

}
</script>

<style scoped lang="stylus" rel="stylessheet/stylus">
.el-avatar
  border-radius 50%

a
  text-decoration none
  color #909399


/*取消路由下划线*/
.router-link-active
  text-decoration none


.i
  font-size 18px


.header-font-style
  font-size 15px
  color #909399


.dot-location
  position relative
  left 45px
  top -30px


.el-avatar
  margin-top 10px


.username
  position relative
  color white
  top -10px


.el-dropdown-item
  margin-top 5px
  color white


.el-dropdown_style
  background-color #545c64
  color white
  text-align right


.el-dropdown-link
  cursor pointer


.el-dropdown-menu
  margin-top 5px
  border 0px
  color white
  background-color #545c64


.el-dropdown-menu2
  margin-top: 18px
  border 0px
  color white
  background-color: #545c64


/*屏幕小于400px则隐藏用户名称*/
@media screen and (max-width: 400px) {
  .username {
    display: none;
  }

  .userimg {
    margin-right: 8px;
  }
}


</style>
