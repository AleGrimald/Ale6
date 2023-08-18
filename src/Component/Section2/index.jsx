import "./Section2.css"
import Input from "../Input";
import Button from "../Button"

const Seccion=(props)=>{
    const {numSorteo, verificar, fondo,boton2}= props;
    
    return <section className="seccion">
        <h2 className="titulo">Numeros del sorteo!! <br/> </h2>
        <form className="carton" onSubmit={verificar}> 
            {
                numSorteo.map((sorteo, index=0)=><Input clase="carton_num" valor={sorteo} key={index} fondo={fondo[index]} soloLectura={true}/>)
            }
            <div className="contenedor_botones">
                {boton2===false
                    ?<Button clase="boton_apostar" tipo="submit" nombre="Verificar Jugada"/>
                    :<></>
                }
            </div>
        </form>
    </section>
}

export default Seccion;