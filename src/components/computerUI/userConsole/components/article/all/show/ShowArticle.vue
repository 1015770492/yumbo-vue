<template>
  <div>
    <mavon-editor :boxShadow="false" defaultOpen="preview" :subfield="false"
                  :navigation="true" :editable="false" :toolbarsFlag="false"
                  v-model="articleForm.value" :ishljs="true" codeStyle="atom-one-dark"
                  boxShadowStyle="0 2px 12px 0 rgba(0, 0, 0, .0)"
                  style="max-height: 72vh;padding: 20px;min-height: 50vh"></mavon-editor>

  </div>
</template>

<script>
export default {
  name: "ShowArticle",
  data() {
    return {
      articleForm:{
        value:"### 预览显示文章组件\n" +
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
            "![测试图片](https://th.wallhaven.cc/small/3k/3kp6yv.jpg)"
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylessheet/stylus">

</style>