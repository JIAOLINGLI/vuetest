<template>
	<div>
		<headers @getName="getNames" :heads="head"></headers>
		<div class="content">
			<keep-alive>
			<router-view/>
			</keep-alive>
		</div>
	</div>
</template>
<script>
	import headers from '@/components/header.vue';
	export default {
		components: {
			headers
		},
		methods:{
			getNames(name){
				alert('接受到headers子组件传来的参数为：'+name)
			}
		},
		data() {
			return {
				head: [{
						name: '首页',
						path: '/home'
					},
					{
						name: '产品价格',
						path: '/productPrice'
					},
					{
						path: '/aboutUs',
						name: '关于我们'
					},
					{
						path: '/helpCenter',
						name: '帮助中心'
					}
				
				]
			}
		}
	}
</script>
<style></style>