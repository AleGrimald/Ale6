
const Button = (props) =>{
    const {link, nombre, claseCss, tipo, clase, click} = props;
    return <button className={clase} type={tipo} onClick={click}>
        <a 
            className={claseCss} 
            href={link}>
            {nombre}    
        </a>
    </button>
}

export default Button;