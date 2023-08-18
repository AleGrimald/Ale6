
const Input = (props) =>{
    const{clase, tipo, valor, cambiarValor, fondo, requerido,soloLectura, focus}=props
    const manejarCambios=(event)=>{
        cambiarValor(event.target.value);
    }

    return (
        <input 
            type={tipo}
            className={clase}
            value={valor}
            onChange={manejarCambios}
            style={{backgroundColor: fondo}}
            required={requerido}
            readOnly= {soloLectura}
            autoFocus={focus}
        />
    )
}
export default Input;