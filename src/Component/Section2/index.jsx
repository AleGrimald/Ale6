import "./Section2.css"
import Input from "../Input";
import Button from "../Button"

const Seccion=(props)=>{
    const {numSorteo, verificar, fondo}= props;
    
    return <section className="seccion">
        <h2 className="titulo">Numeros del sorteo!! <br/> </h2>
        <form className="carton" onSubmit={verificar}> 
            {
                numSorteo.map((sorteo, index=0)=><Input clase="carton_num" valor={sorteo} key={index} fondo={fondo[index]} soloLectura={true}/>)
            }
            <Button clase="boton_apostar" tipo="submit" nombre="Verificar Apuesta"/>
        </form>
    </section>
}

export default Seccion;