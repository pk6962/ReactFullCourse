import React,{useState,useEffect} from 'react'
const url = "https://jsonplaceholder.typicode.com/users"
const Final = () => {
    const [usersData, setusersData] = useState([])
    const [loading,setLoading] = useState(false)
    const [isError,setisError] = useState({status: false, msg :""});

    const fetchUsersData = async  (apiURL) => {
      setLoading(true)
      setisError({status: false, msg :""})
        try{
          const response = await fetch(apiURL)
          const data = await response.json()
          setusersData(data)
          setLoading(false)
          setisError({status: false, msg :""})
          if (response.status === 404){
            throw new Error ("Data not Found...");
          }
        } catch(error) {
          console.log(error.message)
          setLoading(false)
          setisError({
            status:true,
            msg : error.message || "Something went wrong Plz try...",
          });
        }
      };

    useEffect(()=> {
        fetchUsersData(url)
    },[]) ;

    if (loading ){
      return (
        <div>
          <h3> Loading...</h3>
        </div>
      );
    }
    if (isError.status) {
      return (
        <div> 
          <h3> {isError.msg } </h3>
        </div>
      )
    }
  return (
    <div> 
      <ul> 
        {
          usersData.map((eachUser)=>{
            const {name,email} = eachUser
            return(
              <li> 
                <h1> {name}</h1>
                <p> {email}</p>
              </li>
            )
          })
        }
      </ul> 
    </div>
  )
}

export default Final