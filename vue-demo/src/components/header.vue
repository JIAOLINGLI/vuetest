<template>
	<div class="header">
		<img class="img" src="../assets/a1.jpg"/>
		<p class="a-1">一体化智能跨境电商ERP</p>
		<div class="a-2">
			<!--<a>首页</a>
			<a>产品价格</a>
			<a>关于我们</a>
			<a>帮助中心</a>-->
			<router-link v-for="(item,index) in heads" :class="index==item.path?'active':''"  :to="item.path" :key="index">{{item.name}}  </router-link>
		</div>
		<div class="a-3">
			<p class="p-1">免</p>
			<p class="p-2">免费试用</p>
			<img class="img-1"src="../assets/a14.png"/>
			<p class="p-3">登陆</p>
		</div>
		<ul>
			 
			<!--<p @click="getData('index')">向父级传参</p>-->
			<!--<router-link v-for="(item,index) in heads"  :to="item.path" style="margin-right: 10px;">{{item.name}}  </router-link>-->
			<!--<router-link  v-for="(item,index) in head" :to="item.path" :key="index" @click="getData">{{item.name}}</router-link> -->
		</ul>
	</div>
	
</template>

<script>
	export default{
		props:{
			heads:{
				default:null
			}
		},
		watch:{
			$route(){
				this.index=this.$route.path;
			},
			heads:{
				deep:true,//深度监听
				handler(val){
					console.log(val)
				}
			}
		},
		created(){
		},
		mounted(){
		},
		methods:{
			getData(name){
				this.$emit("getName",name)
			},
			clicks(){
				
				
			}
		},
		data(){
			return{
				index:'/home',
				msg:'这是变量的值',
				list:[],
				iconList:[{
					icon:require("@/assets/logo.png"),
					name:'免费使用'
				}]
			}
		}
	}
</script>

<style>
	.header{
    /* display: flex; */
    overflow: hidden;
    width: 100%;
    height: 80px;
    background: #fff;
		
	}
	.img{
		float: left;
		width:190px;
		height:45px;
		margin-top:18px;
		padding-left:15px;
	
	}
	.a-1{
		float: left;
		height:20px;
		margin-top:25px;
		border-left:1px solid #000;
		font-size:16px;
		margin-left:22px;
		padding-left:15px;
		padding-right:10px;
	}
	.a-2{
		float: left;
	margin-left:78px;
	text-align: center;
		width:calc(100% - 670px);
		line-height: 80px;
		
	}
	.a-2 a{
		height:20px;
		text-align:center;
		border-right:1px solid black;
		padding-left:15px;
		padding-right:30px;
		margin-top:20px;
		font-size:16px;
	    color: #000;
	    text-decoration: none;
	}
	.a-3{
		float: right;
		margin-right: 20px;
		display:flex;
	}
	.p-1{
		width:20px;
		height:20px;
		text-align: center;
		font-size:14px;
		background:orange;
		border-radius: 100%;
		padding:5px 5px;
		float:right;
		margin-top:20px;
		color:white;
	}
	.p-2{
		text-align: center;
		font-size:16px;
		height:20px;
		float:right;
		margin-left:-50px;
		margin-top:50px;
		color:orange;
		padding:5px 5px;
	}
	.img-1{
		width:27px;
		height:27px;
		margin-left:10px;
		margin-top:20px;
	}
	.p-3{
		float:right;
		margin-top:55px;
		margin-left:-25px;
		font-size:16px;
		color:mediumpurple;
	}
	.a-2 a.router-link-active{
		color:blue
	}
</style>