<template>
  <li class="brand__card">
    <div :class="className" class="brand__img"></div>
  </li>
</template>

<script>
export default {
  props: ['brandName'],
  data() {
    return {
      className: 'brand__img--' + this.brandName,
    }
  }
}
</script>
