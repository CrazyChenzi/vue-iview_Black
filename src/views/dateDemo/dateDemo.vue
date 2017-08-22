<template>
<div>
    <Row>
        <Col span="12">
            <Date-picker type="daterange" :options="options3" placeholder="选择日期" style="width: 200px"></Date-picker>
        </Col>
    </Row>
</div>
</template>
<script>
    export default {
        data () {
            return {
                options3: {
                    disabledDate (date) {
                        return date && 
                        date.valueOf() < Date.now()- 86400000 || date.valueOf() > Date.now()+86400000*30;
                    }
                },
            }
        }
    }
</script>
