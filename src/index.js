import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { url } from './config/url'

const globalState = {
  favPokemon: [],
  pokemon: [],
  search: ''
}


//action creators
export const GETPOKEMON = (dispatch) => {
  return (dispatch) => {
    fetch(url + '/cards')
      .then(response =>
        response.json()
      )
      .then(data => {
        console.log(data.cards, '>>>>>>ini data dari custom hooks')
        dispatch(SETPOKEMON(data.cards))

      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const SETPOKEMON = (data) => {
  return { type: 'SETPOKEMON', value: data }
}

export const SETSEARCH = (data) => {
  return { type: 'SETSEARCH', value: data }
}


//reducer
const reducer = (state = globalState, action) => {
  switch (action.type) {
    case 'ADDFAV':
      let arr = state.favPokemon
      console.log(arr, '<<<< ini isinya apasih')
      arr.push(action.value)
      return { ...state, favPokemon: arr }

    case 'SETPOKEMON':
      return { ...state, pokemon: action.value }

    case 'SETSEARCH':
      return { ...state, search: action.value }

    default:
      return state
  }
}

//store
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')|| document.createElement('div') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
