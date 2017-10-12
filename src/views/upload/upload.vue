<template>
	<div>
		<Row>
			<Col span="12">
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
			</Col>
			<Col span="12">
				<KButton type="pink-btn" @click.native="toggleShow">设置头像</KButton>
				<my-upload field="img"
					@crop-success="cropSuccess"
					@crop-upload-success="cropUploadSuccess"
					@crop-upload-fail="cropUploadFail"
					v-model="show"
					:width="300"
					:height="300"
					url="https://jsonplaceholder.typicode.com/posts/"
					:params="params"
					:headers="headers"
					img-format="png">
				</my-upload>
				<imgHover :image='imgDataUrl' v-show="showImg">
					<span style="font-size: 20px; color: red">Black_晨</span>
				</imgHover>
			</Col>
		</Row>
	</div>
</template>
<script>
	import myUpload from 'vue-image-crop-upload';
	import imgHover from '../../components/img/imgHover'
	export default {
		components: {
			'my-upload': myUpload,
			imgHover
		},
		data() {
			return {
				file: null,
      	loadingStatus: false,
				show: false,
				showImg: false,
				params: {
					token: '123456798',
					name: 'avatar'
				},
				headers: {
					smail: '*_~'
				},
				imgDataUrl: '' // the datebase64 url of created image
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
      },
			toggleShow() {
				this.show = !this.show;
			},

			 /**
			 * crop success
			 *
			 * [param] imgDataUrl
			 * [param] field
			 */
			cropSuccess(imgDataUrl, field){
				console.log('-------- crop success --------');
				this.imgDataUrl = imgDataUrl;
				this.imgDataUrl = '../../../static/img/404-1.jpg'
				this.showImg = true;
			},
			/**
			 * upload success
			 *
			 * [param] jsonData   服务器返回数据，已进行json转码
			 * [param] field
			 */
			cropUploadSuccess(jsonData, field){
				this.showImg = true;
				console.log('-------- upload success --------');
				console.log(jsonData);
				console.log('field: ' + field);
			},
			/**
			 * upload fail
			 *
			 * [param] status    server api return error status, like 500
			 * [param] field
			 */
			cropUploadFail(status, field){
				console.log('-------- upload fail --------');
				console.log(status);
				console.log('field: ' + field);
			}
		}
	}
</script>
<style>
</style>
