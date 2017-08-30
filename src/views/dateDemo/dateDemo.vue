<template>
<div>
    <Row>
        <Col span="12">
            <Date-picker type="daterange" :options="options3" placeholder="选择日期" style="width: 200px"></Date-picker>
        </Col>
    </Row>
   <p> {{$t('message.hello')}}</p>
   <p> {{ $t('hello_in') }} {{ $i18n.locale }}</p>
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
        },
    }
</script>
<i18n>
    {
        "en": {
            "hello_in": "Hello in"
        }
    }
</i18n>
