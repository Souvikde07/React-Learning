
import { useState } from 'react';
import './App.css';
import { RiCheckboxBlankFill } from "react-icons/ri"
import { RiCheckboxFill } from "react-icons/ri"
import { RiDeleteBin6Fill } from "react-icons/ri"
import { TbPencilPlus } from "react-icons/tb"


function App() {

  return (
    <>
      <div className='header-container'>
        <div className='header'>
          <p className='header-title'>
            My Tasks
          </p>
          <div className='header-add-task'>
            <p className='header-add-task-text'>
              <TbPencilPlus/>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
