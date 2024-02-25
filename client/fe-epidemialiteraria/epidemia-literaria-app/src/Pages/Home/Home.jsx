import style from './home.module.css'
import Navbar from '../../components/Navbar/Nav';

const Home = () =>{
    return(
        <>
            <div>
                <h2>Soy el hero</h2>
                <p className={style.text}>Episodios los 15 y 30 de cada mes a las 15:00 Hrs Arg</p>
            </div>
            <section className={style.container}>
                <h2>Episodios</h2>
            </section>
            <section className={style.container}>
                <h2>Nosotras</h2>
            </section>
            <section className={style.container}>
                <h2>Contactanos</h2>
            </section>
        </>
    )
}
export default Home;