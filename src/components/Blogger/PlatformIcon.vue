<template>
  <li class="platforms-icon">
    <div class="platforms-icon-img" :class="className"></div>
    <p>{{content}}</p>
  </li>
</template>

<script>
export default {
  props: ['id', 'content'],
  data() {
    return {
      className: 'platforms-icon-img--' + this.id
    }
  }
}
</script>
