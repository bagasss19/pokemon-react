import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { url } from '../config/url'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { SETPOKEMON, GETPOKEMON } from '../index'

import {
    Link
} from "react-router-dom";

const Pokemon = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemon)
    const [search, setSearch] = useState([]);
    useEffect(() => {
        dispatch(GETPOKEMON())
    }, []);

    return (
        <div>
            <div>
                <input data-testid="search" type="text" placeholder="search a card here" value={search} onChange={(event) => setSearch(event.target.value)}
                    onInput={(event) => {
                        event.preventDefault()
                        fetch(url + '/cards?name=' + search)
                            .then(response =>
                                response.json()
                            )
                            .then(data => {
                                console.log(search, pokemons, '<<<<ini hasil search')
                                dispatch(SETPOKEMON(data.cards))
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    }}></input>
                <br></br><br></br>
                <img src="https://i.pinimg.com/originals/50/e1/db/50e1db4684e6f697f93590950eb832f6.png" className="App-logo" alt="logo" />
                <p>
                    Pokemon Card
      </p>
            </div>
            <div className="container">
                <div className="row">
                    {pokemons.map((pokemon) => (
                        <div className="col-md-3 col-sm-6">
                            <Card key={pokemon.id}>
                                <Card.Img variant="top" src={pokemon.imageUrl} />
                            </Card><br></br>
                            <Link to={`/detail/${pokemon.id}`}><button className="btn btn-primary btn-mrgn">
                                Detail</button></Link>
                            <button className="btn btn-primary" onClick={() => dispatch({ type: "ADDFAV", value: pokemon.imageUrl })} >
                                Add to Deck</button>
                            <br></br><br></br>

                        </div>))}
                </div></div>
        </div>

    )
}

export default Pokemon