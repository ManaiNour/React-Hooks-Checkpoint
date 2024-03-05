import Film from "./Film"
import {useState} from 'react'
import './ListFilm.css'
const  ListFilm = ({movies} ) =>{
  const [dele, setDele] = useState('')
  const [films, setFilms] = useState(movies)
    const del=()=>setFilms(films.filter((movie)=>movie.id===dele))

{console.log(films,'aa')}
  return(    <>




   {films.map((movie)=>(<div className="film"><Film  title={movie.title} id={movie._id}
     rate={movie.rate} date={movie.date} disc={movie.description} src={movie.imgUrl} /> <button onClick={()=> (setDele(movie.id)) &&console.log(movie._id)&& del(movie)}  >delete</button>
     </div>))}
        </>
       
       
      )
}
 


    
export default ListFilm;