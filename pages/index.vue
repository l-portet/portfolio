<template>
  <div class="page">
    <blob />
    <div class="hero">
      <h1>
        I’m <span>Lucas</span>, an interdisciplinary<br />
        <span>software engineer</span> focused on<br />
        crafting meaningful <span>experiences</span>.
      </h1>
    </div>
    <works />
    <contact />
  </div>
</template>

<script>
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Blob from '@/components/Blob';

export default {
  components: {
    Works,
    Contact,
    Blob
  }
};
</script>

<style media="screen" lang="scss">
@import '@/assets/styles/pages/index.scss';
</style>
