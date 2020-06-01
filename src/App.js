import React, { useState } from 'react'

import { Game } from './game'
import { NewReg} from './new-add'


import { PopUp } from './components/popUp'

import  './styles.scss'


const App = () => {
    const [text, setText] = useState('')
    const [data, setData] = useState([])

    const [isOpenPopUp, setIsOpenPopUp] = useState (true)

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
        <div class="container">

            {isOpenPopUp && 
                <>
                <div class="overlay" ></div>
                <PopUp setIsOpenPopUp={setIsOpenPopUp}/>
                </>
            }
            
            <div class="sky">
                <div class="cost">
                    333
                </div>
                <div class="clouds">
                    <img src="svg/cloud.svg" alt="cloud" class="first_cloud"></img>
                    <img src="svg/cloud.svg" alt="cloud" class="second_cloud"></img>
                    <img src="svg/cloud.svg" alt="cloud" class="third_cloud"></img>
                </div>  
            </div>
            <div class="earth">
                {/* <div class="name">
                    <input value={text} onChange={onChangeInput}></input>
                    <button onClick={onClick1}>Введи ник и нажми</button>
                </div>
                <div className="list">
                    {data.map((el, i )=> (<div>{el} <button i={i} onClick={onClick2}>Удалить</button></div>))}
                </div>
                <Game />
                <NewReg />
                 */}
                <div class="flowers">
                    <img src="svg/flower.svg" alt="flower" class="first_flower"></img>
                    <img src="svg/flower.svg" alt="flower" class="second_flower"></img>
                    <img src="svg/flower.svg" alt="flower" class="third_flower"></img>
                </div>
            </div>
            <div class="water">
                <div class="fishs">
                    <img src="svg/fish.svg" alt="fish" class="first_fish"></img>
                    <img src="svg/fish.svg" alt="fish" class="second_fish"></img>
                    <img src="svg/fish.svg" alt="fish" class="third_fish"></img>
                </div>
            </div>  
        </div>
    )
}

export default App