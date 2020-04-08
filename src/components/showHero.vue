<template>
  <div>
    <h3>Lista de Herois</h3>
    <div class="herois">
      <div
        v-for="hero in allHerois"
        :key="hero.id"
        :id="hero.id"
        class="card"
        :class="{'is-marvel':true}"
      >
        <div class="card w-50">
        <div class="card-body">
          <h4 class="card-title">{{hero.name | to-uppercase}}</h4>
          <p  class="card-text">Data de criação: {{hero.date}}</p>
          <p  class="card-text">Descricao do Heroi:</p>
          <p  class="card-text">{{hero.description}}</p>
          <p  class="card-text">Categoria do Heroi:</p>
          <ul>
            <li v-bind:key="category" v-for="category in hero.categories">{{category}}</li>
          </ul>
          <p  class="card-text">Universo: {{hero.universe}}</p>
          <a href="#" class="btn btn-primary" v-on:click="deleteHero(hero.id)" >Apagar</a>
          <router-link tag="h5" :to="{name: 'unicoHeroi', params: {id: hero.id} }">
              <button class="btn btn-primary">Detalhar</button>
          </router-link>
          
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "herois",
  methods: {
    ...mapActions(["fetchHero", "deleteHero"]),
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
</style>