<template>
  <div style="width: 660px;">
    <el-timeline style="padding-left: 0px">
      <el-timeline-item timestamp="2018/4/12" placement="top">
      </el-timeline-item>

      <el-timeline-item  style="margin-top: -15px;padding: 0;margin-bottom: 27px;"></el-timeline-item>
      <!-- 分页 -->
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :background="true"
          :total="1000">
        </el-pagination>
      </div>
    </el-timeline>
  </div>
</template>

<script>
  export default {
    name: 'BlogRecord',
    data() {
      return {
        currentPage1: 5,
      };
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylessheet/stylus">

</style>
