import {Link} from'react-router-dom'
function Nav (){
    return(
        < >
       <li> <Link to="/AddFilm">add</Link></li>
       <li> <Link to="/ListFilm">list</Link></li>
        </>
    )
}
export default Nav