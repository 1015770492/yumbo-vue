<template>
    <textarea/>
</template>

<script>
    import {reqLoginEmail} from "@/api/music/163/163musicApi";

    export default {
        name: 'App',
        methods: {
            // 判断phone端还是pc端
            _isMobile() {
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                return flag;
            },
            async test() {
                const result = await reqLoginEmail('yjh15727742367@163.com', 'abc159951');
                console.log(result);
            }
        },
        mounted: function () {
            // this.test();
            let pathstr = this.$route.path;
            if (this._isMobile()) {
                //是手机端，需要将页面切换成手机端路由
                let regex = /\/pc\/(\S*)/;
                //测试是否匹配，进入则说明路由切换到电脑端
                if (regex.test(pathstr)) {
                    let temp = pathstr.match(regex);
                    if (temp != null) {
                        pathstr = "/phone/" + temp[1]
                    }
                    // 切换到手机端路由
                    this.$router.replace(pathstr);
                }
            } else {
                //是pc端，需要将页面切换到pc端路由
                let regex = /\/phone\/(\S*)/;
                //测试是否匹配，进入则说明路由切换到手机端
                if (regex.test(pathstr)) {
                    let temp = pathstr.match(regex);
                    if (temp != null) {
                        pathstr = "/pc/" + temp[1]
                    }
                    // 切换到pc端路由
                    this.$router.replace(pathstr);
                }
            }

        },
    }

</script>

<style scoped>

</style>
