import style from './search.module.css'

const Search = ()=>{
    return(
        <div className={style.container}>
            <input type="text"placeholder='Buscar' />
            <button className={style.suscribirse}>Suscribirse</button>
        </div>
    )
}

export default  Search;