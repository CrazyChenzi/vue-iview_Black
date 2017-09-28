<template>
    <button class="pan-btn" :class="type">
      <Icon :type="icon"></Icon>
      <slot></slot>
    </button>
</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    props: {
      type: {
        type: String,
        default: 'light-blue-btn'
      },
      icon: {
        type: String
      }
    }
  }
</script>