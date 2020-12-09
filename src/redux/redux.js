const redux = require('redux')
const createStore = redux.createStore

//buat latihan aja, gak kepake di apps

//bikin initial state
const initialState = {
    pokemons: []
}


//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDFAV':
            let arr = state.pokemons
            arr.push('newPokemon')
            return { ...state, pokemons: arr }

        default:
            return state
    }
}

//store
const store = createStore(reducer)
console.log(store.getState())


//dispatch/action
store.dispatch({ type: 'ADDFAV' })
console.log(store.getState(), '<<<<<afteraction')