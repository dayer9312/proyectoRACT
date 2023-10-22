import './Ghost.css'
import SectionAnime from '../SectionAnime/Index.js'

const Ghost=(props)=>{
    console.log(props)
    return <div>
            <section className='ghostSection'>
            <h3 className='title'>Mis Personajes</h3>
            <img src='/img/add.png' alt='add' onClick={props.cambiarMostrar}></img>
        </section>
        <SectionAnime></SectionAnime>
    </div>
    

}

export default Ghost;