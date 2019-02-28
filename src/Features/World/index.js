import React from 'react'
import Player from '../Player'
import Map from '../map/index'
import {tiles } from '../../data/maps/1'

function World(props) {
    return (
        <div
        style= {{
            position: 'relative',
            width: '800px',
            height: '400px',
            margin: '20px Auto',
        }}
        >
        <Map tiles={tiles} />
        <Player />
        </div>
    )
}


export default World