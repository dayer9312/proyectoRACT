import "./Texto.css"

const Texto=(props)=>{  //props
    const placeHolderModificado = `${props.placeholder}...`
    return <div className ="texto" >
        <label>{props.titulo}</label>
        <imput placeholder={placeHolderModificado}></imput>
    </div>
}
export default Texto