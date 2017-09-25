<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">名字：</span>
                <span class="expand-value">{{ row.name }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">年龄：</span>
                <span class="expand-value">{{ row.age }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">性别：</span>
                <span class="expand-value">{{ row.sex }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">switch状态：</span>
                <span class="expand-value">{{ row.switchSlot }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">_checked状态：</span>
                <span class="expand-value">{{ row._checked }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    };
</script>
<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>