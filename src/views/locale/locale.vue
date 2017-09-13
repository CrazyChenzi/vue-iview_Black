<template>
    <div>
      <div>
        <select v-model="locale" @change="$i18n.locale = locale">
          <option value="en-US">english</option>
          <option value="ja-JP">日本語</option>
        </select>
      </div>
      <div>
        <p id="normal">{{ $t('message.hello') }}</p>
        <p id="plural">{{ $t('message.plural', { n: 4 }) }}</p>
        <p id="select">{{ $t('message.select', { gender: 'male' }) }}</p>
        <p id="number">{{ $t('message.number', { current: 0.5 }) }}</p>
        <p id="time">{{ $t('message.time', { current: new Date() }) }}</p>
      </div>
        <p> {{$t('hello_in') }} {{ $i18n.locale }}</p>
    </div>
</template>
<script>
   //  import i18n from '../../assets/js/i18n'
    export default {
        // i18n,
        data () {
            return {
              locale: 'en-US',
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
