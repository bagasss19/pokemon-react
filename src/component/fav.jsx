import React, {} from 'react'
import {useSelector} from 'react-redux'
import { Card } from 'react-bootstrap'

function Fav() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const favPokemon = useSelector((state) => state.favPokemon)

    console.log(favPokemon, '<<<<ini favPokemons')

    return (
      <div>
        <h3>Your Deck</h3>
        {/* <p> {JSON.stringify(favPokemon)}</p> */}
        <div className="container">
                <div className="row">
                    {favPokemon.map((pokemon) => (
                        <div className="col-md-3 col-sm-6">
                            <Card>
                                <Card.Img variant="top" src={pokemon} />
                            </Card><br></br>
                            <br></br><br></br>

                        </div>))}
                </div></div>

            {/* <center>
              
            <table>
                <tr>
                    <th>Name</th>
                </tr>
                {favPokemon.map(x =>
                <tr>
                    <td>{x}</td>
                </tr>
                )}
            </table>
            </center><br></br><br></br><br></br> */}
      </div>
    );
  }

export default Fav

