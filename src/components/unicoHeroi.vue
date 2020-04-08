  
<template>
    <div>
        <h1> Detalhes do Heroi</h1>

        <div class="card w-50">
        <div class="card-body">
          <h4 class="card-title">{{heroById(id).name}}</h4>
          <p  class="card-text">Data de criação: {{heroById(id).date}}</p>
          <p  class="card-text">Descricao do Heroi:</p>
          <p  class="card-text">{{heroById(id).description}}</p>
          <p  class="card-text">Categoria do Heroi:</p>
          <p  class="card-text">Universo: {{heroById(id).universe}}</p>
        </div>
        <button class="btn btn-primary" @click="editar">Editar Heroi</button>
        <router-view></router-view>
      </div>




    </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
    name: "unicoHeroi",
    data: function()
    {
    return{ 
        id : this.$route.params.id}
    },
    computed: {
      ...mapGetters(["heroById"])
      },
    methods: {
    editar() {
      this.$router.push({ name: "edit-hero", params: { id: this.id } });
    }

  }
}
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