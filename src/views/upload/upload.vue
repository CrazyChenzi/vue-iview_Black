<template>
	<div>
		<Upload
			:before-upload="handleUpload"
			ref="upload"
			action="https://jsonplaceholder.typicode.com/posts/">
			<i-button type="ghost" icon="ios-cloud-upload-outline">选择要上传文件的文件</i-button>
		</Upload>
		<div v-if="file !== null">
			待上传文件：{{ file.name }} 
			<i-button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? '上传中' : '点击上传' }}</i-button>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				file: null,
      	loadingStatus: false
			}
		},
		mounted() {},
		methods: {
			handleUpload (file) {
        this.file = file;
        return false;
      },
      upload () {
      	console.log(this.file)
      	console.log(this.$refs.upload)
        this.$refs.upload.post(this.file)
        
        this.loadingStatus = true;
        setTimeout(() => {
          this.file = null;
          this.loadingStatus = false;
          this.$Message.success('上传成功')
        }, 1500);
      }
		}
	}
</script>
<style>
</style>
