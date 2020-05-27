import React, { useState} from 'react'

const bucket_data = [
    {img: "/metall.jpg"},
    {img:"/paper.jpg"},
    {img:"/plactic.jpg"}
];

const Arr = [
    1, 2, 3
]
let counter = 0
let errors = 0
let img_src = null
let errors3 = false
let errors5 = false


export const Game = () => {
    const [number, setNumber] = useState()
    const [status, setStatus] = useState()
    const [isStarted, setIsStarted] = useState()
 

    function OnClickCheck1(){
        img_src = bucket_data[0].img;
        if(number === 1) {
            setStatus(true)
            counter++;
        }   else {
            setStatus(false)
            errors++;
        }

    }
    function OnClickCheck2(){
        img_src = bucket_data[1].img;
        if(number === 2) {
            setStatus(true)
            counter++;
        }   else {
            setStatus(false)
            errors++;
        }
    }
    function OnClickCheck3(){
        img_src = bucket_data[2].img;
        if(number === 3) {
            setStatus(true)
            counter++;
        }   else {
            setStatus(false)
            errors++;
        }
    }

    function OnClickButton1(){
        let number = Arr[Math.floor(Math.random() * Arr.length)]
        setNumber(number)
        setStatus('')
    }

    function GameStart() {
        if(isStarted === true) {
            return
        }
        setIsStarted(true)
        let timerId = setInterval(OnClickButton1, 3000);
        if(counter <3) {
            setInterval(timerId, 0);
        } else {
            clearInterval(timerId)
        }
    }

    function errorCount () {
        if (errors>3) {
            errors3 = true
        }
        if (errors>5) {
            errors5 = true
        }
    }
   
    errorCount(errors)

    return(
        <div class="game">
            <div class="body">
                <div class="wrap">{number}</div>
                <button onClick={GameStart}>Начать игру</button>
                <button onClick={OnClickCheck1}>Один</button>
                <button onClick={OnClickCheck2}> Два</button>
                <button onClick={OnClickCheck3}>Три</button>
            </div>
            {status && (
                <div class="prav">Правильно</div>
            )}
            {!status && (
                <div class="error">Ошибка</div>
            )}
            <div class="count">Счетчик очков:{counter}</div>
            <div class="count">Ошибки:{errors}</div>
            <div>
                <p>Мусорный контейнер</p>
                 <img src={img_src} alt="img"></img>
            </div>
            <div class="error_wrap">
                {(errors3 === true)&& <div class="error_3">error</div>}
                {(errors5 === true)&& <div class="error_5">error</div>}
            </div>
        </div>
    )
}

export default Game