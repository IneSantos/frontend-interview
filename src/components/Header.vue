
<template>
    <header class="site-header"  :class="[hideHeader ? 'active' : '']">
        <img src="@/assets/images/SWORD_Health_logo.svg" alt="Site Logo" />
        <div class="site-identity">
            <h3>Frontend developer</h3>
            <p>Challenge</p>
        </div>   
    </header>
</template>


<script>
import '@/styles/header.scss';

export default {
  name: 'Header',
    data() {
        return {
            hideHeader: false
        };
    },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.hideHeader = window.scrollY > 150
    }
  }
}
</script>