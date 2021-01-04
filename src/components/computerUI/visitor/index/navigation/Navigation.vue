<template>
  <el-menu default-active="1" class="el-menu-demo" mode="horizontal"
           @select="handleSelect" background-color="#222222" text-color="#B9B9B9" active-text-color="#ffd04b">
    <el-menu-item index="1">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">程序人生</template>
      <el-submenu index="2-1">
        <template slot="title">后端</template>
        <el-menu-item index="2-1-1">java</el-menu-item>
        <el-menu-item index="2-1-2">springboot</el-menu-item>
        <el-menu-item index="2-1-3">mybatis/mybatis-Plus</el-menu-item>
      </el-submenu>
      <el-submenu index="2-2">
        <template slot="title">前端</template>
        <el-menu-item index="2-2-1">Vue</el-menu-item>
        <el-menu-item index="2-2-2">Element-ui</el-menu-item>
        <el-menu-item index="2-2-3">bootstrap</el-menu-item>
      </el-submenu>
      <el-submenu index="2-3">
        <template slot="title">Linux</template>
        <el-menu-item index="2-3-1">Linux基础</el-menu-item>
        <el-menu-item index="2-3-2">vim编辑器</el-menu-item>
      </el-submenu>
      <el-submenu index="2-4">
        <template slot="title">大数据</template>
        <el-menu-item index="2-4-1">hadoop</el-menu-item>
      </el-submenu>
      <el-submenu index="2-5">
        <template slot="title">云计算</template>
        <el-menu-item index="2-4-1">shell编程</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3">丰富生活</el-menu-item>
    <el-menu-item index="4">人生规划</el-menu-item>
  </el-menu>

</template>

<script>

    export default {
        name: 'Navigation',
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            },
        },
    }
</script>

<style scoped lang="stylus" rel="stylessheet/stylus">

</style>
