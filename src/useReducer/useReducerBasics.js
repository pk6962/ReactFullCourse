import React, { useReducer } from 'react'

const reducer = (state,action)=> {
  console.log("State",state)
  console.log("Action",action)
  if (action.type === "DELETE_PERSON"){
    const newPersons = state.data.filter((eachItem)=>{
      return eachItem.id !== action.payload 
    })
    console.log("newPersons",newPersons)
    return {
      ...state,
      data : newPersons
    }
  }
  return ({
    ...state
  })
};


const UseReducerBasics = () => {
  const initialState = {
    data : [
      {id :"123343445", name: "Prasanna from initialState "},
      {id :"23445", name: "Id 23445 from initialState" },
    ]
  }
  console.log(useReducer(reducer,initialState))
  const [state,dispatch]= useReducer(reducer,initialState)

  const handleDelete = (id) => {
    console.log(id)
    dispatch({
      type : "DELETE_PERSON",
      payload : id
    }
    )
  }
  const handleEdit = (id) => {
    dispatch({
      type : "UPDATE",
      payload : id 
    })
  }
  return (
    <div>
      {state.data.map((eachItem) => {
        const {id,name} = eachItem
        return(
          <div key={id}> 
            <h1> {name}</h1>
            <button onClick={() => handleDelete(id)}> Delete </button>
            <button onClick={() => handleEdit(id)}> Edit </button>
          </div>
        )
      })
        
      }
    </div>
  )
}

export default UseReducerBasics