import "./Card.css"

const Card=()=>{
    return <div className="card">
        <div className="encabezado">
            <img src="https://assets.newatlas.com/dims4/default/1ea7f73/2147483647/strip/true/crop/1619x1080+0+0/resize/1619x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fsupercool-water-liquid-1.jpg" 
                alt="imgaen"></img>
        </div>
        <div className="letras">
        <h4>nombre</h4>
        <h5>rango</h5>
        </div>
    </div>
}
export default Card