
import { useEffect, useState } from 'react';
import './App.css';
import { RiCheckboxBlankFill } from "react-icons/ri"
import { RiCheckboxFill } from "react-icons/ri"
import { RiDeleteBin6Fill } from "react-icons/ri"
import { TbPencilPlus } from "react-icons/tb"
import { v4 as uuid} from "uuid"
import PopUp from './PopUp';
import Header from './Header';

function App() {
  const [toDoList, setToDoList] = useState(()=> {
    const storedList = localStorage.getItem('toDoList');
    return storedList ? JSON.parse(storedList) : [];
  });
  const [popUp, setPopup] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");

  useEffect(() => {
    localStorage.setItem('toDoList',JSON.stringify(toDoList));
  }, [toDoList]);

  function handlePopUp(action){
    if (action == "open"){
      setPopup(true)
    }else{
      setPopup(false)
    }
  }

  function addTask(){
    if(newTaskText !== ""){
      setToDoList(current =>{
        return [
          ...current,
          {
            id : uuid(),
            complete : false,
            text : newTaskText
          }
        ]
      })
      setNewTaskText("");
      setPopup(false);
    }
  }

  function toggleComplete(id){
    setToDoList(current => {
      return current.map(item => {
        if(item.id === id) {
          return{
            ...item,
            complete : !item.complete
          }
        }
        return item;
      });
    });
  }

  function deleteTask(id){
    setToDoList(current => {
      return current.filter(item => item.id !== id);
    });
  }

  return (
    <>
    <PopUp
      popUp={popUp}
      handlePopUp={handlePopUp}
      addTask={addTask}
      newTaskText={newTaskText}
      setNewTaskText={setNewTaskText}
    />
      <Header
      handlePopUp={handlePopUp}/>
      <div className='to-do-list'>
        {toDoList.map(listItem => {
          return (
            <div className='to-do-container' key = {listItem.id}>
              <p className='to-do-checkbox' onClick={() => toggleComplete(listItem.id)}>
                {listItem.complete ? <RiCheckboxFill/> : <RiCheckboxBlankFill/>}
              </p>
              <p className='to-do-text'>
                {listItem.text}
              </p>
              <p className='to-do-delete' onClick={() => deleteTask(listItem.id)}>
                <RiDeleteBin6Fill/>
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
