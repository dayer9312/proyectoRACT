import { useState } from "react"
import "./Formulario.css"
import Texto from "../Texto/Texto.js"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton/Boton"

/*const Formulario =()=>{
    return <section className="formulario">
        <form>
            <h2>Rellena en el formulario para crear un nuevo personaje</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre"/>
            <Texto titulo="Rango" placeholder="Ingresar el rango"/>
            <Texto titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones/>
            <Boton>Crear</Boton>
        </form>
    </section>
}*/

/*const Formulario =()=>{
    const envio=(e)=>{
        e.preventDefault();
        console.log(envio,e)
        
    }
    return <section className="formulario">
        <form onSubmit={envio}>
            <h2>Rellena en el formulario para crear un nuevo personaje</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre" required/>
            <Texto titulo="Rango" placeholder="Ingresar el rango"required />
            <Texto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
            <ListaOpciones/>
            <Boton>Crear</Boton>
            

        </form>
    </section>
}*/
const Formulario =()=>{
    const [nombre,actualizarNombre]=useState("");
    const [rango,actualizarRango]=useState("");
    const [foto,actualizarFoto]=useState("");
    const [equipo,actualizarEquipo]=useState("");


    const envioDatos=(e)=>{
        e.preventDefault();
        let datosEnviar={
            nombre:nombre,
            rango:rango,
            foto:foto,
            equipo:equipo
        }
        console.log(datosEnviar)
    }
    return <section className="formulario">
        <form onSubmit={envioDatos}>
            <h2>Rellena en el formulario para crear un nuevo personaje</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <Texto titulo="Rango" placeholder="Ingresar el rango" required valor={rango} actualizarValor={actualizarRango}/>
            <Texto titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo}/>
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario;