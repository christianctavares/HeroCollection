
<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import addHero from './components/addHero.vue';
import header from './components/header.vue';

export default {
    components: {
        'app-header': header
    },
    data(){
      return {

      }
    },
    methods: {

    }

}
</script>

<style>
  body{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
  }
  
  

</style>

