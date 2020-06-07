import React, { useState } from 'react'

// import { Game } from './game'
// import { NewReg} from './new-add'


import { PopUp } from './components/popUp'
import { ItemGeneration } from './components/item-generation'

import  './styles.scss'


const App = () => {

    // const [data, setData] = useState([])

    const [isOpenPopUp, setIsOpenPopUp] = useState (true)
    const [isDisabled, setIsDisabled] = useState (true)

    // function onChangeInput(event) {
    //     setText(event.target.value)
    // }
    // function onClick1 (){
    //     setData([...data, text])
    // }
    // function onClick2 (eventClick){
    //     let index = Number(eventClick.target.getAttribute('i'))
    //     let newData = data.filter((ddd, indexArray) => {
    //         if(indexArray === index) {
    //             return false
    //         } else return true
    //     })
    //     setData(newData)
    // }
  
 

    const FormInnerPopUp = () => {
        const [text, setText] = useState('')
        function onChangeInput(event) {
            setText(event.target.value)
        }
        function onClickFormBtn (event) {
            setIsDisabled(false)
            event.preventDefault()
            console.log(text)
        }
        
        return (
        <div class="inner_popup">
            <form>
                <input 					
					value={text} onChange={onChangeInput}
					type="text"/>
                <button onClick={onClickFormBtn}>войти</button>
            </form>
        </div>)
        
    }
    
    return(
        <div class="container">

            <ItemGeneration />

            {isOpenPopUp && 
                <>
                <div class="overlay" ></div>
                <PopUp setIsOpenPopUp={setIsOpenPopUp} title={'Save Greta'} inner={<FormInnerPopUp />} isDisabled={isDisabled} />
                </>
            }
            
            
            <div class="sky fail">
                <div class="cost">
                    333
                </div>
                {/* <div class="clouds">
                    <img src="svg/cloud.svg" alt="cloud" class="first_cloud"></img>
                    <img src="svg/cloud.svg" alt="cloud" class="second_cloud"></img>
                    <img src="svg/cloud.svg" alt="cloud" class="third_cloud"></img>
                </div>   */}
                <div class="clouds">
                    <img src="svg/cloud_fail.svg" alt="cloud" class="first_cloud"></img>
                    <img src="svg/cloud_fail.svg" alt="cloud" class="second_cloud"></img>
                    <img src="svg/cloud_fail.svg" alt="cloud" class="third_cloud"></img>
                </div>  
            </div>
            <div class="earth fail">
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
                {/* <div class="flowers">
                    <img src="svg/flower.svg" alt="flower" class="first_flower"></img>
                    <img src="svg/flower.svg" alt="flower" class="second_flower"></img>
                    <img src="svg/flower.svg" alt="flower" class="third_flower"></img>
                </div> */}
                <div class="flowers">
                    <img src="svg/flower_fail.svg" alt="flower" class="first_flower"></img>
                    <img src="svg/flower_fail.svg" alt="flower" class="second_flower"></img>
                    <img src="svg/flower_fail.svg" alt="flower" class="third_flower"></img>
                </div>
            </div>
            <div class="water fail">
                {/* <div class="fishs">
                    <img src="svg/fish.svg" alt="fish" class="first_fish"></img>
                    <img src="svg/fish.svg" alt="fish" class="second_fish"></img>
                    <img src="svg/fish.svg" alt="fish" class="third_fish"></img>
                </div> */}
                <div class="fishs">
                    <img src="svg/fish_fail.svg" alt="fish" class="first_fish"></img>
                    <img src="svg/fish_fail.svg" alt="fish" class="second_fish"></img>
                    <img src="svg/fish_fail.svg" alt="fish" class="third_fish"></img>
                </div>
            </div>  
        </div>
    )
}

export default App