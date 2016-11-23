<template>
  <div>
    <HeaderArea></HeaderArea>
    <div class="container">
      <router-view></router-view>
      <FooterArea></FooterArea>
    </div>
  </div>
</template>

<script>
import HeaderArea from './HeaderArea';
import FooterArea from './FooterArea';

export default {
  components: {
    HeaderArea,
    FooterArea
  }
}
</script>
