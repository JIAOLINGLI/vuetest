<template>
	<div>
		<child @two="twos" :head="msg"></child>
	</div>
</template>

<script>
	import child from '@/components/child.vue';
	export default{
		data(){
			return{
				msg:'我向子组件传递的消息'
			}
		},
		components:{
			child
		},
		methods:{
			twos(data){
				console.log(data)
			}
		}

	}
</script>

<style>
</style>