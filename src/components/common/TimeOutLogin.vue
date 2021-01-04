<!--超时重定向到根目录 / -->
<script type="text/ecmascript-6">
  export default{
    data(){
      return{

      }
    },
    created () {
      this.backFun();
    },
    methods: {
      backFun() {
        this.$router.replace({path: '/'})
      }
    },

  }
</script>
