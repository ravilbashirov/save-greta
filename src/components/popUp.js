import React from 'react'

export const PopUp = ({setIsOpenPopUp}) => {
    const onClickBtn = () => {
        setIsOpenPopUp(false);
    }
    return (
        <div class="popup_wrap">
            <div class="popup">
                <p>Title</p>
                <div class="popup_inner"></div>
                <button onClick={onClickBtn}>Начать игру</button>
            </div>
        </div>
    )
}