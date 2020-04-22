<template>
  <div style="width: 100%">
    <nuxt style="width: 100%" />
  </div>
</template>

<script>
  export default {
    mounted() {
      const titleStyle =
      `padding: 20px; background-color: darkblue; color: white; font-size: 1.5em;`;
      const subtitleStyle =
      `padding: 20px; background-color: darkblue; color: white; font-style:
       italic; font-size: 1,5em;`;
      console.log('%cWelcome to the real world.%cMorpheus, Matrix', titleStyle, subtitleStyle);
    }
  }
</script>

<style></style>
