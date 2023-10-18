import "./Formulario.css"
import Texto from "../Texto/Texto.js"

const Formulario =()=>{
    return <section className="formulario">
        <form>
            <h2>Rellena en el formulario para crear un nuevo personaje</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre"/>
        </form>
    </section>
}