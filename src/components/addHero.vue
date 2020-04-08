<template>
  <div id="add-hero">
    <h2>Adicionar um novo Heroi</h2>
    <form v-if="!submitted" @submit.prevent="onSubmit">
        <label>Nome do Heroi:</label>
        <input type="text" v-model.lazy="hero.name" required>
        <label>Data de criação:</label>
        <input type="date" v-model.lazy="hero.date" required>
        <label>Descricao do Heroi:</label>
        <textarea v-model.lazy="hero.description" required></textarea>
        <div id="checkboxes"  required>
            <label>Super Força</label>
            <input type="checkbox" value="Super Força" v-model="hero.categories">
            <label>Super Velocidade</label>
            <input type="checkbox" value="Super Velocidade" v-model="hero.categories">
            <label>Pode Voar</label>
            <input type="checkbox" value="Pode Voar" v-model="hero.categories">
            <label>Invisibilidade</label>
            <input type="checkbox" value="vilao-marvel" v-model="hero.categories">
        </div>
        <label>Universo:</label>
        <select v-model="hero.universe"  required>
            <option v-bind:key="universe" v-for="universe in universes">{{universe}}</option>
        </select>
        <div><input type="submit" value="Submit"></div>
    </form>
    <div v-if="submitted">
       <h3> Heroi Adicionado Com Sucesso </h3>
    </div>
    <div id="preview">
        <h3>Pré-visualização do Heroi</h3>
        <p>Nome do Heroi: {{hero.name}}</p>
        <p>Data de criação: {{hero.date}}</p>
        <p>Descricao do Heroi: </p>
        <p>{{hero.description}}</p>
        <p>Categoria do Heroi:</p>
        <ul>
            <li v-bind:key="category" v-for="category in hero.categories">{{category}}</li>
        </ul>
        <p>Universo: {{hero.universe}}</p>

    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "addHero",
    data(){
      return {
         hero:{
             name: "",
             date: "",
             description: "",
             categories: [],
             universe: ""
         },
         universes: ['Marvel', 'DC'],
         submitted: false,
      }
    },
    methods: {
        ...mapActions(["addHero"]),
        onSubmit(){
            this.addHero(this.hero);
            this.submitted = true;
        }
    }

}
</script>

<style scoped>
#add-hero *{
    box-sizing: border-box;
}
#add-hero{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes input{
    display: inline-block;
    margin-right: 5px;
}
#checkboxes label{
    display: inline-block;
}

</style>
