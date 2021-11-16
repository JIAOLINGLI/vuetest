<template>
	<div class="all">
    <div class="header">
    <img class="ph"src="../../assets/v2_qv33ib.jpg">
    </div>
<div class="login-a">

 <p class="name">用户登陆</p>
 <p class="la-in">用户名</p>
  <br />
 <input type="text" v-model="username"/>
 <p class="la-in">密  码</p>
 <br>
  <input type="password" v-model="password" />
  <br/>
 <button @click="login">{{msg}}</button>


</div>
  </div>

</template>

<script>
export default{
  data(){
    return{
      msg:'登录',
      username:'',
      password:''
    }
  },
  created() {

  },
  methods:{
    login(){
      var form = new FormData();
       form.append('username',this.username);
       form.append('password',this.password)
      var list ={
        username:this.username,
        password:this.password
      }
      //传参的两种方式 1.form表单传参 2.json格式传参 3.跟到url后面传参
      // const
      // let
      this.$axios.post('https://interface5.spicit.com.cn/api/v1.0/captcha/check?username='+this.username+'&password='+this.password,
      form,{
        headers:{
        'Authorization':'kdhoasfwierjolse'
        }
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
      var res = {
        code:200,
        message:'success',
        auth:'3124124sfdsafsa',
        data:{
          username:'用户名',
          role:'管理员,组员',
          key:'kdhoasfwierjolse'
        },
      };
      sessionStorage.setItem('userInfo',JSON.stringify(res.data))//浏览器关了 该缓存就清除
      localStorage.setItem("userInfo",JSON.stringify(res.data))//浏览器关了 该缓存还在
      // sessionStorage.removeItem('userInfo')
      this.$router.push('/home')
      // console.log(this.username,this.password)
    }
  }
}
</script>

<style scoped="scoped">
	@import '../../styles/common.css'
</style>
