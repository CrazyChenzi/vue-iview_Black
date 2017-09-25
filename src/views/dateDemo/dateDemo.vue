<template>
	<div>
		<div style="margin-bottom: 10px">
			<span style="color: red">设置时间区间：</span>
			<InputNumber :min="1" v-model="dateSection"></InputNumber>
		</div>
		<Row>
			<i-col span="12">
				<Date-picker type="daterange" :options="options3" placeholder="选择日期" style="width: 200px"></Date-picker>
			</i-col>
		</Row>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				options3: {
					disabledDate: (date) => {
						return this.setDisabledDate(date, this.dateSection);
					}
				},
				dateSection: 1
			}
		},
		mounted() {
			
		},
		methods: {
			setDisabledDate : function (date, val) {
				return date &&
							date.valueOf() < Date.now() - 86400000 || date.valueOf() > Date.now() + 86400000 * val;
			}
		}
	}
</script>
