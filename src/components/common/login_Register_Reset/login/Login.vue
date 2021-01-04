<template>
  <div style="margin: auto">
    <Star_Background style="position: absolute"/>
    <ForgetPassword v-show="isShow" style="position: absolute;margin-top: 15vh;"
                    class="el-col-xs-24 el-col-xs-offset-0
                       el-col-sm-14 el-col-sm-offset-5
                       el-col-md-8 el-col-md-offset-8
                       el-col-1g-6 el-col-lg-offset-8"/>
    <LoginNum_form v-show="!isShow" style="position: absolute;margin-top: 15vh;"
                   class="el-col-xs-24 el-col-xs-offset-0
                       el-col-sm-14 el-col-sm-offset-5
                       el-col-md-8 el-col-md-offset-8
                       el-col-1g-6 el-col-lg-offset-8"/>

  </div>
</template>


<script>
  import Star_Background from '../background/Login_Background'
  import LoginNum_form from './Login_form'
  import ForgetPassword from '../password/ForgetPassword'
  import * as PubSub from "pubsub-js";


  export default {
    name: 'login',
    data(){
      return{
        isShow:false
      }
    },
    components: {
      Star_Background,
      LoginNum_form,
      ForgetPassword,
    },
    mounted () {
      PubSub.subscribe('isShow',(msg,data)=>{
        this.isShow=data
      })
    },
    methods:{
      changeIsShow(){
        this.isShow=!this.isShow
      }
    },

  }


</script>

<style scoped lang="stylus" rel="stylessheet/stylus">

</style>
