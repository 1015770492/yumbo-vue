<template>
  <div>
    <!--    阿里云的字体样式 -->
    <el-header>
      <el-input v-model="articleForm.title" placeholder="输入文章标题" maxlength="100" show-word-limit></el-input>
    </el-header>
    <div class="markdown">
      <markdown-pro :height="500" :value="articleForm.value" theme="oneDark"/>
    </div>
    <el-footer>
      <el-form ref="form" :model="articleForm">
        <!-- 标签-->
        <span class="el-col-12">
          <el-form-item label="标签 :">
            <el-tag
                :key="tag"
                v-for="tag in articleForm.tags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
              {{ tag }}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="mini"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm">
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新标签</el-button>
          </el-form-item>
          <el-form-item label="发布形式 :">
            <el-radio v-model="articleForm.showLimit" label="1">公开</el-radio>
            <el-radio v-model="articleForm.showLimit" label="2">仅自己可见</el-radio>
          </el-form-item>
        </span>
        <!-- 新建文章个人分类-->
        <span class="el-col-12">
          <el-form-item label="文章个人分类 :" class="el-row">
            <el-tag
                :key="category"
                v-for="category in articleForm.categories"
                closable
                :disable-transitions="false"
                @close="handleClose2(category)">
              {{ category }}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputVisible2"
                v-model="inputValue2"
                ref="saveCategoryInput"
                size="mini"
                @keyup.enter.native="handleInputConfirm2"
                @blur="handleInputConfirm2">
            </el-input>

            <el-button v-else class="button-new-tag" size="small" @click="showInput2">+ 新分类</el-button>
          </el-form-item>

          <el-form-item label="文章分类:">

            <el-checkbox @change="selectedList(listItem2)" v-for="listItem2 in articleForm.categoryList"
                         :key="listItem2">{{ listItem2 }}</el-checkbox>
          </el-form-item>
        </span>

        <div>
          <span class="el-col-12">
            <el-button @click="submitArticleForm" class="el-button-style" type="danger"
                       plain>
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-publish"></use>
              </svg> 发布文章</el-button>
            <el-button class="iconfont iconcaogao el-button-style" type="danger" plain>
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-save-draft"></use>
              </svg>存为草稿</el-button>
            <el-button class="iconfont iconfanhui el-button-style" type="info" plain>
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-back"></use>
              </svg>返回</el-button>
          </span>
        </div>
        <div style="height: 50px">
          &nbsp;
        </div>


      </el-form>
    </el-footer>
  </div>
</template>

<script>
import {MarkdownPro} from 'vue-meditor'

export default {
  name: 'AddArticle',
  components: {
    MarkdownPro
  },
  data() {
    return {
      inputVisible: false,
      inputValue: '',
      inputVisible2: false,
      inputValue2: '',
      articleForm: {
        title: '',
        value: "### 预览显示文章组件\n" +
            "这是一个预览显示文章\n" +
            "\n" +
            "```java\n" +
            "import org.aspectj.lang.annotation.*;\n" +
            "import org.springframework.stereotype.Component;\n" +
            "\n" +
            "@Aspect\n" +
            "@Component\n" +
            "public class UserControllerAop{\n" +
            "    @Before(\"execution(public String com.example.demo.controller.UserController.div(..))\")\n" +
            "    public void testIndexBefore(){\n" +
            "        System.out.println(\"=====》before\");\n" +
            "    }\n" +
            "    @After(value = \"execution(public String com.example.demo.controller.UserController.div(..))\")\n" +
            "    public void testIndexAfter(){\n" +
            "        System.out.println(\"======》after\");\n" +
            "    }\n" +
            "    @AfterThrowing(value = \"execution(public String com.example.demo.controller.UserController.div(..))\")\n" +
            "    public void testIndexAfterThrowing(){\n" +
            "        System.out.println(\"======》AfterThrowing\");\n" +
            "    }\n" +
            "    @Around(value = \"execution(public String com.example.demo.controller.UserController.div(..))\")\n" +
            "    public void testIndexAround(){\n" +
            "        System.out.println(\"======》Around\");\n" +
            "    }\n" +
            "    @AfterReturning(value = \"execution(public String com.example.demo.controller.UserController.div(..))\")\n" +
            "    public void testIndexAfterReturning(){\n" +
            "        System.out.println(\"======》Around\");\n" +
            "    }\n" +
            "    \n" +
            "}\n" +
            "```\n" +
            "### 图片\n" +
            "\n" +
            "![测试图片](https://th.wallhaven.cc/small/3k/3kp6yv.jpg)",
        showLimit: '1',
        tags: [],
        categories: [],
        categoryList: ['程序人生', 'IT', '天马行空'],
        categorySelectedList: [],

      }
    }
  },
  methods: {
    handleClose(index) {
      this.articleForm.tags.splice(this.articleForm.tags.indexOf(index), 1);
    },
    handleClose2(index) {
      this.articleForm.categories.splice(this.articleForm.categories.indexOf(index), 1);
      this.selectedList(index);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    showInput2() {
      this.inputVisible2 = true;
      this.$nextTick(() => {
        this.$refs.saveCategoryInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.articleForm.tags.push(inputValue)
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    handleInputConfirm2() {
      let inputValue2 = this.inputValue2;
      if (inputValue2) {
        this.articleForm.categories.push(inputValue2)
        this.selectedList(inputValue2)
      }
      this.inputVisible2 = false;
      this.inputValue2 = '';
    },
    selectedList(listItem2) {
      if (this.articleForm.categorySelectedList.indexOf(listItem2) !== -1) {
        console.log("删除" + listItem2)
        // 删除已选择的文章分类
        this.articleForm.categorySelectedList.splice(listItem2, 1);
      } else {
        // 增加 选中的分类文章
        console.log("增加" + listItem2)
        this.articleForm.categorySelectedList.push(listItem2);
      }
    },
    submitArticleForm() {
      console.log("文章标题：" + this.articleForm.title +
          "\n===》文章内容:" + this.articleForm.value +
          ",\n标签：" + this.articleForm.tags
          + ",\n选择的分类：" + this.articleForm.categorySelectedList)
    }

  }
}
</script>

<style scoped lang="stylus" rel="stylessheet/stylus">

>>> *
  /* 设置滚动条的样式 */

  ::-webkit-scrollbar
    height 5px /*设置横向滚动条的高度*/
    width 5px /*设置纵向向滚动条宽带*/
    background-color: rgba(0, 0, 0, .3)

  ::-webkit-scrollbar-track
    display none
    border-radius 10px

  /* 滚动条滑块样式 */

  ::-webkit-scrollbar-thumb
    background-color hsla(0, 0%, 100%, .5)
    border-radius 10px

  ::-webkit-scrollbar-track-piece
    border-radius 10px

.iconfont
  font-size 16px
  margin-right 8px


.button-new-tag
  margin-left 10px
  height 32px
  line-height 30px
  padding-top 0
  padding-bottom 0


.input-new-tag
  width 90px
  margin-left 10px
  vertical-align bottom


.el-button-style
  margin-bottom 10px
  margin-right 10px
  margin-left 0px

</style>
