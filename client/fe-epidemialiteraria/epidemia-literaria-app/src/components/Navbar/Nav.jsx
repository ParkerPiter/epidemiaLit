import style from './nav.module.css'
import { Link } from 'react-router-dom'
import Search from '../Search/search'

const Navbar = () => {
    return(
        <div  className={style.container}>
            <Link><p style={{textDecoration:'none'}} className={style.links}>Home</p></Link>
            <Link><p className={style.links}>Episodios</p></Link>
            <Link><p className={style.links}>Contacto</p></Link>
            <Link><p className={style.links}>Nosotras</p></Link>
            <Search />
        </div>
    )
}

export default  Navbar; 