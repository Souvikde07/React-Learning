import React from "react";
import { TbPencilPlus } from "react-icons/tb"

function Header({handlePopUp}){
    return (
        <div className='header-container'>
            <div className='header'>
                <p className='header-title'>
                    My Tasks
                </p>
                <div className='header-add-task' onClick={() => handlePopUp("open")}>
                    <p className='header-add-task-text'>
                        <TbPencilPlus/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header;