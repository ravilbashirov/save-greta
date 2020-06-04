import React from 'react'

export const PopUp = ({setIsOpenPopUp, inner, title, isDisabled}) => {
    const onClickBtn = () => {
        setIsOpenPopUp(false);
    }
    return (
        <div class="popup_wrap">
            <div class="popup">
                <p>{title}</p>
                <div class="popup_inner">{inner}</div>
                <button 
                    onClick={onClickBtn} 
                    class={isDisabled && "btn_disabled"}
                    >
                    Начать игру
                    </button>
            </div>
        </div>
    )
}
