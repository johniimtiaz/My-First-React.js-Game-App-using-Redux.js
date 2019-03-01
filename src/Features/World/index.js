import React from 'react'
import Player from '../Player'
import Map from '../map/index'
import {tiles } from '../../data/maps/1'
import store from '../../Configure/store'

function World(props) {
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles,
    } })
    
    return (
        <div
        style= {{
            position: 'relative',
            width: '800px',
            height: '400px',
            margin: '20px Auto',
        }}
        >
        <Map />
        <Player />
        </div>
    )
}


export default World