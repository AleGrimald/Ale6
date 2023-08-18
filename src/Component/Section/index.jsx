import "./Section.css"
import Input from "../Input";
import Button from "../Button"
import { useState } from "react";

const Seccion=(props)=>{
    const {registrarApuesta,controlBoton,controlBoton2, boton, boton2}= props;
    
    const [num1, setNum1]= useState("");
    const [num2, setNum2]= useState("");
    const [num3, setNum3]= useState("");
    const [num4, setNum4]= useState("");
    const [num5, setNum5]= useState("");
    const [num6, setNum6]= useState("");

    const capturarNumeros=(event)=>{
        event.preventDefault();
        let numeros=[
            num1,
            num2,
            num3,
            num4,
            num5,
            num6
        ]
        registrarApuesta(numeros);
        controlBoton();
    }

    const limpiarInp=()=>{
        setNum1("");
        setNum2("");
        setNum3("");
        setNum4("");
        setNum5("");
        setNum6("");
        controlBoton();
    }

    const cambiarBoton=()=>{
        limpiarInp();
        controlBoton2(!boton2)
    }
    
    return <section className="seccion">
        <h2 className="titulo">Haz tu apuesta! <br/> Elige 6 numeros del 0 al 45.</h2>
        <form className="carton" onSubmit={capturarNumeros}>
            <Input clase="carton_num" tipo="text" valor={num1} cambiarValor={setNum1} requerido={true} focus={true}/>
            <Input clase="carton_num" tipo="text" valor={num2} cambiarValor={setNum2} requerido={true} />
            <Input clase="carton_num" tipo="text" valor={num3} cambiarValor={setNum3} requerido={true} />
            <Input clase="carton_num" tipo="text" valor={num4} cambiarValor={setNum4} requerido={true} />
            <Input clase="carton_num" tipo="text" valor={num5} cambiarValor={setNum5} requerido={true} />
            <Input clase="carton_num" tipo="text" valor={num6} cambiarValor={setNum6} requerido={true} />            
            
           <div className="contenedor_botones">
            {boton===true
                ?<Button clase="boton_apostar" tipo="submit" nombre="Confirmar Jugada"/>
                :<></>
            }
            {boton2===true
                ?<Button clase="boton_apostar" nombre="¿Volver a Jugar?" click={cambiarBoton}/>
                :<></>
            }
           </div>
        </form>
    </section>
}

export default Seccion;