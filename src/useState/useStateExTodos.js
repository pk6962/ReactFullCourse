import React, { useState } from 'react'

const Index = () => {
    const [list,setList] = useState([])
    const [message,setMessage] = useState({
        text:"",
        id:"",
    });
    const [editingItem,setEditingItem] = useState({
        id : "",
        isEditing : false
    })
    const changeMessage = (e) => {
        setMessage({
            ...message,
            text:e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        let newTodo = {
            text:message.text,
            id : new Date().getTime().toString(),
        };
        setList([...list,newTodo]);
        setMessage({
            text:"",
            id:"",
        });
    };
    const handleDelete = (e,id) => {
        e.preventDefault()
        let newTodos = list.filter((eachItem) => {
            console.log(eachItem.id,id)
            return eachItem.id !== id 
        })
        setList(newTodos);
        console.log(newTodos);
    };
    const changeEditState = (e,id) => {
        e.preventDefault()
        setEditingItem({
            ...editingItem,
            id:id,
            isEditing:true,
        })
        console.log(id)
        let editableItem = list.find((eachItem) => eachItem.id === id);
        setMessage({
            ...message,
            text:editableItem.text,
            id : editableItem.id,
        }
        )
    };
    const handleEdit = (e) => {
        e.preventDefault()
        let newTodos = list.map((eachItem) => {
            if(eachItem.id === editingItem.id){
                return ({
                    id: editingItem.id,
                    text : message.text,
                })
            }else {
                return eachItem
            }
        })
        setList(newTodos)
        setMessage ({
            id : "",
            text : "",
        })
        setEditingItem({
            id:"",
            isEditing:false,
        })
    }
  return (
    <div>
        <h2> Prasannas Todos App.. </h2>
        <form > 
            <input 
                type='text'
                name='message'
                id='message' 
                value={message.text}
                placeholder='enterMessage'
                onChange={changeMessage}
            /> 
            {   editingItem.isEditing ? 
            ( <button onClick={handleEdit} type='submit'> Save Changes  </button>) : (<button onClick={handleSubmit} type='submit'> Add  </button>)
            }
            <hr/>
            {   
                list.length === 0 &&  <h3> There is no Items in the list </h3>}
            <ul>
                {   
                 list.map((eachItem) => {
                    const {text,id} = eachItem ;
                    return (
                    <li key={id} >
                        <span> {text} </span>
                        <button onClick={(e) => changeEditState(e,id)}> Edit  </button>       
                        <button onClick={(e) => handleDelete(e,id)}> Delete </button>
                    </li>
                    )
                 })
                }
            </ul>
        </form> 
    </div>
  )
}

export default Index