<template>
        <div class="centers" >
        <div class="home-bodys" v-for="(item,index) in data" :key="index">
            <img src="@/assets/1.png">
            <p class="space-texs" >{{item.title}}</p>
            <p class="space-tex">{{item.content}}</p>
        </div>
    </div>
</template>

<script>
	export default{
		props:{
			data:{
				default:[]
			}
		}
	}
</script>

<style >
	*{
        padding: 0;
        margin: 0;
    }
	.space-tex{
    padding-left: 20px;
    margin-top: 10px;
    font-size: 14px
}
	.home-bodys{
    height: 325px;
    border: 1px solid #cfcfcf
}
	.centers{
	width: 1200px;
    margin: 50px auto;
    /* border: 1px solid white; */
    display:flex;
    justify-content: space-between;
  
  height:100%;
  width:100%;
  
	
}
	.space-texs{
    padding-left: 20px;
    margin-top: 10px;
    font-size: 14px;
    margin-top: 30px;
    color: rgb(153, 153, 153);
}
</style>