import React from 'react'

export const PopUp = () => {
    const onClickBtn = () => {
        console.log("Click")
    }
    return (
        <div class="popup">
            <p>Title</p>
            <div class="popup_inner"></div>
            <button onClick={onClickBtn}>Начать игру</button>
        </div>
    )
}