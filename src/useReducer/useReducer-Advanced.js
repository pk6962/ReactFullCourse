import React ,{useReducer,useEffect, useState} from 'react'
    
const reducer = (state,action) => {
        if (action.type === "UPDATE_USERS_DATA") {

            return {
                ...state,
                usersData : action.payload,
            }
        }
        if (action.type === "LOADING") {             
            return {
                ...state,
                isLoading : action.payload,
            }
        }
        if (action.type === "DELETE") {             
            const newPersons = state.usersData.filter((eachItem) => 
                ( eachItem.id !== action.payload))
                return {
                    ...state,
                    usersData : newPersons
                }
        }
        if (action.type === "ONCLICK_EDIT") {
            return {
              ...state,
              isEditing: action.payload,
            };
          }
          if (action.type === "UPDATE_USER") {
            const newUsers = state.usersData.map((eachUser) => {
              if (eachUser.id === action.payload.id) {
                console.log("Action" ,action,state)
                return {
                  id: action.payload.id,
                  name: action.payload.name,
                  email: action.payload.email,
                };
              } else {
                return eachUser;
              }
            });
            return {
                ...state,
                usersData: newUsers,
              };
          }
        
          return state;
        };

    const UseReduceAdvance = () => {

    const fetchUsersData = async (URL) => {
        dispatch ({type : "LOADING", payload : true})
        dispatch({type : "ERROR", payload : {status : false, msg : "" }});
        try {
        const response = await fetch (URL)
        const data  = await response.json()
        dispatch({type: "UPDATE_USERS_DATA",payload : data})
        dispatch ({type : "LOADING", payload : false})
        dispatch({type : "ERROR", payload : {status : false, msg : "" }})
        }
        catch (e) {
        console.log(e)
        dispatch ({type : "LOADING", payload : false})
        dispatch({type : "ERROR", payload : {status : true, msg : e.msg }})
        }
    }

    useEffect(() => {
        fetchUsersData("https://jsonplaceholder.typicode.com/users");
    },[])

    const initialState  = {
        usersData : [],
        isLoading : false,
        isError :   {status : false, msg : ""},
        isEditing : {status:false, id:"", name:"" , email:""}
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    const handleDelete =  (id) => {
        dispatch({
            type : "DELETE",
            payload : id
        })

    }

    const updateData = (id, name, email) => {
        dispatch({
          type: "UPDATE_USER",
          payload: {
            id,
            name,
            email,
          },
        });
        dispatch({
          type: "ONCLICK_EDIT",
          payload: { status: false, id: "", name: "", email: "" },
        });
      };

    return (
        <div> 
            <h1> Users Data Info...</h1>
            {state.isEditing?.status && (
            <EditFormContainer 
                id={state.isEditing.id}
                comingTitle={state.isEditing.name}
                comingEmail ={state.isEditing.email} 
                updateData={updateData}
            /> 
            )}
            { state.usersData.map((eachItem) => {
                    const {id,email, name} = eachItem ;
                    return (
                    <div key={id} style={{background :"lightblue", borderRadius: "16px"}} >
                            <p> {email} </p>
                            <p> {name} </p>
                            <button onClick={() => handleDelete(id)}> Delete </button>
                            <button onClick={() => dispatch({type: "ONCLICK_EDIT", payload : {status : true , id:id, name:name,email:email},
                        })
                        }
                        > Edit </button>
                    </div>
                    )
                })
            }
        </div>
    );
};

const EditFormContainer = ({id, comingTitle, comingEmail, updateData}) => {

  const [title,setTitle] = useState(comingTitle || "")
  const [email,setEmail] = useState(comingEmail || "")

    return (
    <>  
    <form>
        <input id='title' type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input id='email' type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
        <button onClick={() => updateData(id,title,email)}> Update </button>
    </form>
    </>
  )
}

export default UseReduceAdvance ;

