<template>
  <div>
    <div class="title">{{ articleForm.title }}</div>
    <MarkdownPreview :initialValue="articleForm.value" theme="oneDark"/>
  </div>
</template>

<script>
import {MarkdownPreview} from 'vue-meditor';

export default {
  name: "ShowArticle",
  components: {
    MarkdownPreview
  },
  data() {
    return {
      articleForm: {
        type: '原创',/*文章类型：原创、转载、翻译、草稿、已删除、回收站*/
        pv: '2818',/*访问量*/
        collect: '3',/*多少人收藏*/
        publish:'2020-10-12 23:00:03',/*发布时间*/
        author:'诗水人间',/*作者*/
        column:[
          {
            name:'专栏名称'
          }
        ],/*所属专栏*/
        title: '家用移动光猫（型号：HS8545M5）利用公网ipv6对外提供公网服务。(100M的宽带真香！)',
        value: "\n" +
            "因为家里有空闲电脑，并且家里的移动宽带是100M。\n" +
            "想着自己的阿里云服务器才5M的带宽，这简直不是一个档次，阿里云服务器网速640k/s上限。\n" +
            "640k/s*20倍就相当于12M/s的网速。（太香了）\n" +
            "\n" +
            "家里的电脑有好几个T的资料一直存着，出门的时候就可以利用它来进行访问，然后以后就可以不用在阿里云服务器了，这样也挺好的。\n" +
            "\n" +
            "我研究了好多天，一直找资料，有人实现了公网访问，网上的资料都说移动宽带有提供公网的`ipv6`，然而我一直尝试，结果一直都是失败，我一直怀疑网上的资料是不是假的，或者说他们所在的网络环境和我所在的网络环境不一致，某种原因导致网络并没有通。\n" +
            "\n" +
            "最终我成功了！也想明白了整个网络的原理和我失败的原因。\n" +
            "\n" +
            "***\n" +
            "### 先讲原理\n" +
            "移动的宽带的确是有提供公网的`ipv6`地址，如果我们将光猫作为路由器使用，那么就是利用光猫进行拨号，通过宽带账号拨号分配了一个公网`ipv6`，这个公网ip被光猫本身使用了。\n" +
            "\n" +
            "##### 设置光猫，首先需要登录光猫的超级管理员后台\n" +
            "也就是输入 `192.168.1.1` 输入超级管理员账号和密码，不是光猫后面的！！！这是一个坑\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213041903936.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "\n" +
            "###### 一个坑的记录\n" +
            "很多人认为光猫后面提供的用户名和密码就是光猫的管理员账号，实则不然，这账号和密码是没有权限配置宽带账号这些东西的，我们需要使用超级管理员进行登录，这是一个坑！需要注意一下\n" +
            "\n" +
            "###### 常用的超级管理员账号和密码\n" +
            "账号：\n" +
            "1.移动光猫常用超级账号：\n" +
            "```bash\n" +
            "CMCCAdmin\n" +
            "```\n" +
            "密码：\n" +
            "```bash\n" +
            "aDm8H%MdA\n" +
            "```\n" +
            "\n" +
            "2.华为光猫常用超级账号：telecomadmin，超级密码：admintelecom\n" +
            "3.移动光猫常用超级账号：telecomadmin，超级密码：nE7jA%5m\n" +
            "\n" +
            "输入超管账号登录后会有如下的界面\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210212233348478.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213000242547.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "\n" +
            "### 第一步、将拨号的连接名称设置为桥接\n" +
            "之所以设置为桥接的目的是让本地电脑直接拨号得到公网ip，如果不是桥接，就如上图所示，在光猫这个界面配置了宽带账号，也就是相当于利用光猫进行拨号得到公网ip（这种方式也就是电脑插网线就能直接连通互联网）。好比虚拟机的vmnet8模式使用了nat网络地址转换，也就相当于光猫它创造了一个局域网，而我们的电脑在这个局域网内，然后通过vmnet8与外网进行访问。\n" +
            "\n" +
            "很多人拿这个地址来检测公网ip也就是：[http://test-ipv6.com/index.html.zh_CN](http://test-ipv6.com/index.html.zh_CN)\n" +
            "实际上用光猫拨号的时候得到的这个ipv6是局域网内部的，并非真正的公网ip地址。\n" +
            "\n" +
            "会发现上面网站得到的公网ipv6与光猫的ipv6是不一样的网段，这也就是为什么你明明通过上面那个网址查到了公网ip，但是你发现根本访问不到（`另外一个原因是端口被移动禁用了，例如80、443、8080`）\n" +
            "\n" +
            "\n" +
            "#### 选择连接名带Internet_B_VID_的连接名\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213000350155.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "将连接模式`路由 改成 桥接`，这里先完成测试，把原理搞通，后面我们再想办法（因为桥接这种方式会导致家里的wifi没法用了）\n" +
            "\n" +
            "然后直接保存即可\n" +
            "\n" +
            "下面是我家光猫的设置，可以参考，实际上什么也不用做，直接`保存/应用`就可以了\n" +
            "\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213000643532.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "\n" +
            "#### 第二步、进行拨号获取公网ipv6\n" +
            "为了方便，以及避免不必要的坑，我们将win10自带的网卡的ipv6给去掉,在powershell或者cmd下执行\n" +
            "\n" +
            "```bash\n" +
            "netsh interface IPv6 set privacy state=disable\n" +
            "```\n" +
            "执行完后，当我们拨号完成后就不会有多个ipv6地址，也是方便后面ddns动态的将本地的公网 ipv6 添加到dns服务器上，方便我们用域名进行访问\n" +
            "\n" +
            "接着我们在设置宽带连接\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213001222590.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213001356501.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213001830256.gif)\n" +
            "完成连接后，可以使用上面的网站获取到公网ip或者win10的ipconfig得到\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213002835348.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "访问的参考格式：`http://[2409:8a38:8603:2e61:6046:fd40:5852:2fd6]:1880/` 其中1880是端口\n" +
            "注意移动宽带`禁了80，443，8080端口（这是第二个坑，要注意一下）`，这些端口是访问不到的，需要将服务器端口改成其它端口\n" +
            "\n" +
            "以tomcat为例，将`conf/server.xml`中的8080端口改成其它端口，先证明我们能通过公网ipv6能访问到家中的tomcat服务器\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213003145770.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "\n" +
            "这个时候用手机的流量访问\n" +
            "\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213004142738.gif)\n" +
            "\n" +
            "###### 需要注意的是，这个访问不一定在所有网络都生效，一般情况下可以直接访问的到。如果不能访问到则尝试改端口（有些端口可能被移动禁用，例如80，443，8080等）\n" +
            "\n" +
            "***\n" +
            "\n" +
            "##### `为了方便使用一般都会买个域名做dns解析，有些域名很便宜，在阿里云上买一个域名，然后备案，备案后就可以使用dns解析了。这样就可以通过域名访问自己家里的服务器`\n" +
            "#### 阿里云DDNS解析，首先得有一个备案完后的域名，国内网站是需要备案才能解析\n" +
            "DDNS 很多人会另外买一台路由器，例如黑群辉，如果要做到ddns动态的修改解析记录并不用额外买另外的网络设备。\n" +
            "\n" +
            "实际上他们要做的事情无非就是在域名解析这里添加了一条AAAA类型的记录，也就是将这个ipv6加入到域名解析中，如下。也可以手动添加，如下图左上角蓝色的添加记录可以手动添加\n" +
            "\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213005040613.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "\n" +
            "#### 最简单的DDNS\n" +
            "\n" +
            "我找到最简单的ddns就是这个\n" +
            "去github：找到release，其中有windows版本的\n" +
            "[https://github.com/NewFuture/DDNS/releases](https://github.com/NewFuture/DDNS/releases)\n" +
            "\n" +
            "下载二进制文件`ddns.exe`，然后运行一次就会在相同目录下生成一个配置文件\n" +
            "\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213005455852.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "我下载了那个定时任务bat文件，其作用就是做定时的执行ddns.exe程序，形成动态的修改dns，因为拨号得到的ipv6过了一定时间后就会重新分配。\n" +
            "\n" +
            "如下，我们需要修改`config.json`（双击ddns.exe就会生成它）\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213005937159.png)\n" +
            "用文本编辑器编辑它\n" +
            "\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/202102130324156.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "#### id和token的获取\n" +
            "可以通过下面先找到子账号，用于管理dns用\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021303370389.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "\n" +
            "[https://ram.console.aliyun.com/overview](https://ram.console.aliyun.com/overview)\n" +
            "创建一个用户\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213033825471.png)\n" +
            "##### 1、创建用户\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213033922830.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "##### 2、授予DNS相关的权限\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213034138570.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "因为我们要管理dns，所以如下\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213034336178.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "##### 3、获取id和token\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213034537604.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210213034645856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "将上图中两个信息填入前面提到的`id 和 token`即可，然后运行一次定时任务就可以每5分钟自动更新dns记录的值\n" +
            "完成后就可以实现 `域名+端口`的方式进行访问，这种方式是将服务器彻底暴露在公网上，但注意有些端口是被移动禁用掉的，例如`80、443、8080`这些端口\n" +
            "\n" +
            "### 实测网速\n" +
            "很明显达到了100M宽带应有的速度。我用我的笔记本下载搭建好的ftp服务（空闲主机）\n" +
            "\n" +
            "最后献上我收藏的一些资料\n" +
            "使用 ftp 客户端，\n" +
            "地址：huashengshu.top 端口：21 \n" +
            "选择匿名登录，匿名登录我设置了读取权限\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210214232356601.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "\n" +
            "使用windows自带的文件管理器也能访问，如下在标出的位置输入： `ftp://huashengshu.top` 就可以直接访问\n" +
            "\n" +
            "![在这里插入图片描述](https://img-blog.csdnimg.cn/20210216141213551.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxODEzMjA4,size_16,color_FFFFFF,t_70)\n" +
            "\n" +
            "\n" +
            "\n" +
            "***\n" +
            "\n" +
            "其它参考文章：[https://www.pc936.com/index.php/article/22.html](https://www.pc936.com/index.php/article/22.html)\n" +
            "***\n" +
            "这种方式会导致光猫本身的wifi功能就废了，在我研究光猫管理页面的时候我发现这款光猫有关于DMZ的设置，兴许我可以直接使用将光猫设置为路由，然后将分配到的公网ip指向指定的内网服务器。\n" +
            "\n" +
            "后面再继续研究\n" +
            "****\n" +
            "后续文章推荐：\n" +
            "\n" +
            "[开机自动拨号与DDNS](https://blog.csdn.net/qq_41813208/article/details/113813131)\n" +
            "\n"
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylessheet/stylus">
.title
  font-size 28px
  font-weight 600

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
</style>