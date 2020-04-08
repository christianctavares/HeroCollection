import axios from "axios";

const state = {
    herois: [
      {
        "HeroId": 1,
        "id": 1,
        "name": "Homem de Ferro",
        "date": "1999-02-02",
        "description" : "muito rico",
        "categories": ["Pode Voar"],
        "universe": "Marvel"
      },
      {
        "HeroId": 2,
        "id": 2,
        "name": "Hulk",
        "date": "1999-02-02",
        "description" : "muito forte",
        "categories": ["Super Força"],
        "universe": "Marvel"
      },
      {
        "HeroId": 3,
        "id": 3,
        "name": "Capitao America",
        "date": "1999-02-02",
        "description" : "muito capitao",
        "categories": ["Super Força"],
        "universe": "Marvel"
      },]
  };
  const getters = {
    allHerois: state => state.herois,
    heroById: (state) => (id) => (state.herois = state.herois.filter(h => h.id == id))[0]
  };
  const actions = {
    fetchHero({ commit }) {
        commit("setHerois");
    },
    addHero({ commit }, hero) {
    const new_index =  state.herois.length +1
    const response =  {
            "HeroId": 1,
            "id": new_index ,
            "name": hero.name,
            "date": hero.date,
            "completed": false,
            "description" : hero.description, 
            "categories" : hero.categories,
            "universe" : hero.universe
          }
    commit("newHerois",response);
  },
  
    //action
    deleteHero({ commit }, id) {
      commit("removeHero", id);
    },

    updateHero({ commit }, updHero) {
      commit("updateHero", updHero);
    },
  };
  const mutations = {
    setHerois: (state) => state.herois,
    getHero: (state, hero) => (state.herois = hero),
    newHerois: (state, hero) => state.herois.push(hero),
    removeHero: (state, id) =>
      (state.herois = state.herois.filter(t => t.id !== id)),
    updateHero: (state, updHero) => {
      const index = state.herois.findIndex(h => h.id === updHero.id)
      if (index !== -1) {
        state.herois.splice(index, 1, updHero);
        }
      }
  };
  
  export default {
    state,
    actions,
    getters,
    mutations
  };
  