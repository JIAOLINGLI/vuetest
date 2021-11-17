<template>
	<div class="home">
		<div class="home-one">
		<img class="home-ph" src="../../assets/a21.png" alt="" />
		<div class="home-text">
			<h1 class="home-wr">关于海量ERP</h1>
			<p class="home-wri">专注跨境电商解决方案，帮助Amazon卖家轻松盈利</p>
		</div>
		</div>
		<div class="home-body">
			<img src="../../assets/a22.png" />
			<p class="home-title">关于公司
				<br/>ABOUT THE COMPANY</p>
		</div>
		<div class="maing">
			<div class="center">
				<div>
					<p>深圳市海量信息技术有限公司</p>
					<p class="homecenter">SHENZHEN MAGNANIMITY INFORMATION TECHNOLOGY CO.,LTD</p>
					<p class="homecen"> 深圳市海量信息技术有限公司成立于2018年，专注服务于亚马逊卖家，围绕客户打造智能化企业内部管理服务平台。 创始团队成员来自于YY，搜房网等知名企业，拥有数十年的互联网行业产品技术沉淀，负责过日活过千万的产品技术研发，深谙系统架构；从事过5年以上跨境电商行业运作， 熟知卖家痛点。
					</p>
					<p class="homecen"> 海量ERP是一款会分析、懂经营的智能跨境电商ERP，业财融合，以打造更有盈利能力的Amazon卖家为目标。海量ERP关注企业经营指标，以企业运营和财务管理见长。 本系统深度对接亚马逊等多家平台，立志成为全球领先的跨境电商解决方案，成为最让企业信任的跨境电商品牌。
					</p>
				</div>
				<img src="../../assets/0.png" />
			</div>
		</div>
		<div class="home-body">
			<img class="photo" src="../../assets/a22.png" />
			<p class="home-title">企业文化
				<br/>CORPORATE CULTURE</p>
		</div>
		<div class="home-bodyy">
			<company :data="list"></company>
		</div>
		<div class="home-body">
			<img class="photo" src="../../assets/a22.png" />
			<p class="home-title">联系我们
				<br/>CONTACT US</p>
		</div>
			<img class="map" src="../../assets/4.png">
		<div class="footer">
			<div class="ccenter">
				<div class="footer-left">
					<p>联系我们:</p>
					<p class="left-one"><img src="../../assets/a15.jpg" class="left-two">3270288655</p>
					<p class="left-one"><img src="../../assets/a16.jpg" class="left-two">13728754631</p>
				</div>
				<div class="footer-med">
					<p>深圳市海量信息科技有限公司</p>
					<p class="med-one">Copyright © 2018</p>
					<p class="med-one">深圳市海量信息技术有限公司</p>
					<p class="med-one">粤ICP备18077198号-1</p>
				</div>
				<div class="footer-right">
					<div>
						<p>联系邮箱：</p>
						<p class="med-one">hailiang-erp@foxmail.com</p>
						<p class="med-two">公司地址：</p>
						<p class="med-one">深圳市宝安区宝源路1009号 互联网产业基地A区5栋B606</p>
					</div>
					<div>
						<p>二维码：</p>
						<img src="../../assets/a13.jpg" class="maing-t20">
					</div>
				</div>
			</div>
		</div>
		<!-- <ul>
			<li v-for="(item,index) in leftList" :key="index">
			<img  :src="require('@/assets/'+item.icon)" alt="" />
			{{item.name}}
			</li>
		</ul> -->
	</div>
</template>

<script>
	import company from './components/company';
	
	export default {
		components: {
			company
		},
		data(){
			return{
				list:null,
				leftList:[{
					name:'海量ERP',
					icon:'5.png'
				},{
					name:'海量ERP',
					icon:'5.png'
				},{
					name:'海量ERP',
					icon:'5.png'
				},{
					name:'海量ERP',
					icon:'5.png'
				},{
					name:'海量ERP',
					icon:'5.png'
				}]
			}
		},
		mounted(){
			var urls = require('@/components/imgList.json')
			console.log(urls);
			this.list=urls.data;
//			this.$axios.get('./components/imgList.json','').then(res=>{
//				console.log(res)
//			})
		},
		create(){
			
		}
	}
</script>
<style scoped>
*{
	padding: 0;
	margin: 0;
}
	.home{
		min-width: 1200px;
	}
	.home-one{
		position: relative;
		overflow: hidden;
	}
	.home-one img{
		width:100%;
	}
	.home-text{
		position: absolute;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
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
    margin: 20px auto;
    border: 1px solid white;
    display:flex;
    justify-content: space-between;
	
}
	.space-texs{
    padding-left: 20px;
    margin-top: 10px;
    font-size: 14px;
    margin-top: 30px;
    color: rgb(153, 153, 153);
}
	.home-ph {
		width: 100%;
	}
	
	.home-wr {
		text-align: center;
		color: rgb(255, 255, 255);
		font-size: 50px;
		width: 100%;
	}
	
	.home-wri {
		text-align: center;
		margin-top: 10px;
		color: rgb(255, 255, 255);
		font-size: 30px
	}
	.home-body{
		position: relative;
	}
	.home-body img {
		position: absolute;
		top: 32%;
		left:50%;
		transform: translate(-50%,-50%);
	}
	
	.home-title {
		text-align: center;
		font-size: 24px;
		color: blueviolet;
	}
	
	.center {
		width: 1200px;
		margin: 0 auto;
		/* border: 1px solid white; */
		display: flex;
		justify-content: space-between;
	}
	
	.homecenter {
		color: rgb(145, 142, 142);
	}
	
	.homecen {
		margin-top: 50px;
		font-size: 14px
	}
	
	.maing {
		margin-top: 40px;
	}
	
	.center img {
		padding-left: 60px;
	}
	
	.home-bodyy {
		width: 100%;
		height: 325;
	}
	
	.map {
		width: 100%;
	}
	
	.footer {
		width: 100%;
		height: 260px;
		background: rgb(19, 26, 34);
	}
	
	.ccenter {
		display: flex;
		justify-content: space-between;
		width: 1200px;
		margin: 0 auto;
	}
	
	.footer-left {
		color: rgb(255, 255, 255);
		margin-top: 70px;
		width: 175px;
		height: 105px;
		background: rgb(19, 26, 34);
		border-right: 1px dashed rgb(255, 255, 255);
	}
	
	.left-one {
		font-size: 12px;
		color: rgb(120, 161, 143);
	}
	
	.left-two {
		width: 15px;
		height: 15px;
		margin-top: 10px;
		padding-right: 10px;
	}
	
	.med-one {
		font-size: 12px;
		margin-top: 5px;
		color: rgb(120, 161, 143);
	}
	
	.med-two {
		font-size: 12px;
		margin-top: 15px;
		color: rgb(120, 161, 143);
	}
	
	.footer-med {
		color: rgb(255, 255, 255);
		margin-top: 70px;
		width: 305px;
		height: 105px;
		background: rgb(19, 26, 34);
		border-right: 1px dashed rgb(255, 255, 255)
	}
	
	.footer-right {
		color: rgb(255, 255, 255);
		display: flex;
		justify-content: space-between;
		margin-top: 70px;
		width: 530px;
		height: 105px;
		background: rgb(19, 26, 34);
	}
</style>