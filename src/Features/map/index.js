import React from 'react'
import {SPRITE_SIZE} from '../../Configure/constant'

import '../../Features/map/styles.css'

function getTileSprite(type){
    switch (type) {
        case 0 :
        return 'grass'
        case 5 :
        return 'rock'
        case 6 :
        return "tree"
    }
}


function MapTile(props){
    return <div 
    className={`tile  ${getTileSprite(props.tile)}` }
    
    style={{
        height : SPRITE_SIZE,
        width : SPRITE_SIZE,
    }}
    />

}

function MapRow(props){
    return <div className="row">
    {
        props.tiles.map( tile => <MapTile tile={tile} />)
    }
    </div>
}


function Map(props) {
    return (
        <div
        style= {{
            width: '800px',
            height: '400px',
            backgroundColor: 'green',
    
            border: '4px solid white',
            margin: '10px Auto',
        }}
        >
            {
                props.tiles.map(row => <MapRow tiles={row} />)
            }
        </div>
    )
}


export default Map