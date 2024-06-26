import React, { useEffect, useRef } from "react";

function PopUp({ popUp, handlePopUp, addTask, newTaskText, setNewTaskText }){
    const inputRef = useRef(null);

    useEffect(() =>{
        const handleKeyDown = (e) => {
            if(e.key === "Escape"){
                handlePopUp("close");
            }
            else if(e.key === "Enter"){
                addTask();
            }
        };
        if(popUp){
            window.addEventListener("keydown", handleKeyDown);
            if(inputRef.current){
                inputRef.current.focus();
            }
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [popUp, addTask, handlePopUp]);

    return(
        popUp &&
        <div className='pop-up-container'>
            <div className='pop-up'>
            <p className='pop-up-title'>
                Let's add a new task
            </p>
            <input
                ref={inputRef}
                className='pop-up-input'
                type='text'
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
            />
            <div className='pop-up-button-container'>
                <button className='pop-up-button back' onClick={() => handlePopUp("close")}>
                Go Back
                </button>
                <button className='pop-up-button add' onClick={addTask}>
                Add Task
                </button>
            </div>
            </div>
        </div>
    )
}

export default PopUp;