import React, { useState } from 'react'

import { Game } from './game'
import { NewReg} from './new-add'


import { PopUp } from './components/popUp'

import  './styles.scss'


const App = () => {
    const [text, setText] = useState('')
    const [data, setData] = useState([])

    function onChangeInput(event) {
        setText(event.target.value)
    }
    function onClick1 (){
        setData([...data, text])
    }
    function onClick2 (eventClick){
        let index = Number(eventClick.target.getAttribute('i'))
        let newData = data.filter((ddd, indexArray) => {
            if(indexArray === index) {
                return false
            } else return true
        })
        setData(newData)
    }
    return(
        <div className="container">
            <div class="name">
                <input value={text} onChange={onChangeInput}></input>
                <button onClick={onClick1}>Введи ник и нажми</button>
            </div>
            <div className="list">
                {data.map((el, i )=> (<div>{el} <button i={i} onClick={onClick2}>Удалить</button></div>))}
            </div>
            <Game />
            <NewReg />
            <PopUp />
        </div>
    )
}

export default App