<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div><h2>Nome:</h2></div>
      <div><input type="text" v-model="hero_add.name" placeholder="Nome do Heroi"></div>
      <div><h2>Data de Criacao:</h2></div>
      <div><input type="date" v-model="hero_add.date" placeholder="Data de Criacao"></div>
       <div><h2>Descricao:</h2></div>
      <div><input type="text" v-model="hero_add.description" placeholder="Descriacao do heroi"></div>
      <div><input type="submit" value="Submit"></div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditHero",
  data() {
    return {
      id:this.$route.params.id,
      hero_add :{
          name: "",
          date: "",
          description: "",
          categories: [],
          universe: ""
      }
    }
  },computed: mapGetters(["heroById"]),
  created() {
    this.hero_add = this.heroById(this.id)
  },
  methods: {
    ...mapActions(["updateHero"]),
    onSubmit() {
      this.updateHero(this.hero_add);
      alert("Dados esditados com sucesso")
    }
  }
}
</script>

<style>

</style>