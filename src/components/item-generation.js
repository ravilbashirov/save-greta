import React from 'react'

const items = [
    { 
        name: 'paper', 
        img: '/paper-item.png',
        id: 1
    },
    { 
        name: 'metall', 
        img: '/metall-can.jpg',
        id: 2 
    },
    { 
        name: 'regular', 
        img: '/apple.png',
        id: 3
    },
]

export const ItemGeneration = () => {
    let item = items[Math.floor(Math.random() * items.length)]

    
    return (
        <div class="item">
            <img src={item.img} alt="img"></img>
        </div>
    )
}
  