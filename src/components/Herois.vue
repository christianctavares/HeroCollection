<template>
  <div>
    <div>
      <AddHero />
    </div>
    <h3>Lista de Herois</h3>
    <div class="herois">
      <div
        v-for="hero in allHerois"
        :key="hero.id"
        :id="hero.id"
        class="card"        
      >
        <div class="card w-50">
        <div class="card-body">
          <h4 class="card-title">{{hero.name}}</h4>
          <p  class="card-text">Data de criação: {{hero.date}}</p>
          <p  class="card-text">Descricao do Heroi:</p>
          <p  class="card-text">{{hero.description}}</p>
          <p  class="card-text">Categoria do Heroi:</p>
          <ul>
            <li v-bind:key="category" v-for="category in hero.categories">{{category}}</li>
          </ul>
          <p  class="card-textUniverse"  :class="{'marvel':hero.universe == 'Marvel'} ">Universo: {{hero.universe}}</p>
          <a href="#" class="btn btn-primary" v-on:click="deleteHero(hero.id)" >Apagar</a>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddHero from "./addHero.vue";
export default {
  name: "herois",
  components: { AddHero },
  methods: {
    
    ...mapActions(["fetchHero", "deleteHero"])
  },
  computed: mapGetters(["allHerois"]),
  created() {
    this.fetchHero();
  }
};
</script>

<style>
.cards {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: auto;

  grid-gap: 1rem;
}

.card {
  border: 2px solid #e7e7e7;
  border-radius: 4px;

  padding: 0.5rem;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
.card-textUniverse{
  color: blue;
}

.marvel{
  color: red;
}
</style>