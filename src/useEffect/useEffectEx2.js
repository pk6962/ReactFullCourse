import React,{useState,useEffect} from 'react'
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const Final = () => {
    const [drinksData,setdrinksData] = useState([])
    const [searchTerm ,setSearchTerm] = useState("")
    const [loading,setLoading] = useState(false)
    const [isError,setisError] = useState({status:false, msg :""})
    
    const fetchUsersData = async (apiURL) => {
    setLoading(true)
    setisError({status:false, msg :""})
    try { 
    const response = await fetch(apiURL)
    const { drinks }= await response.json()
    setdrinksData(drinks);
    setLoading(false)
    setisError({status:false, msg :""})
    if (!drinks){
        throw new Error("data Not Found")
    }

    } catch(error) {
        console.log(error)
        setisError({status:true, msg : error.message || "Something went wrong.."})

    }
    }
    useEffect (() => {
        const inputURL = `${url}${searchTerm}`
        fetchUsersData(inputURL)
    },[searchTerm])

    return (
    <div>
         <h1> Drinks </h1> 
         <form> 
            <input 
            type='text' 
            name='search' 
            id='search' 
            placeholder='search the items'
            value = {searchTerm}
            onChange={(e) =>setSearchTerm(e.target.value)}
            />
            
         </form>
         <hr/>
         {loading && !isError?.status && <h1> Page loading for items..</h1>}
         {isError?.status && <h2> {isError.msg}</h2>}
         { ! loading && !isError?.status && (
         <ul className='cocktail-data'>
             {
                 drinksData.map((eachDrink) => {
                 const {idDrink,strDrink,strDrinkThumb}   = eachDrink;
                 return <li key={idDrink}>
                     <div>
                         <img src={strDrinkThumb} alt='strDrink'/>
                     </div>
                     <div className='text'>
                        <h3> {strDrink}</h3>
                     </div>
                 </li>
                   })}
          </ul>)
         }
    </div>
    )
}

export default Final