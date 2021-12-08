import axios from 'axios';
import React from 'react';
const PersonasDetalle = (props) => {
    const submitDelete=()=>{
        
            axios.delete(`http://localhost:500/frases/${props.personita._id}`)
            .then(()=>{
                alert('El registro se ha eliminado Correctamente');
                window.location.reload();
            })
            .catch((err)=>alert(`Ha ocurrido un error ${err}`));
    }
 
    return (
        <div>
            <div>
                <div className="col s6 m5" style={{
                    'display':'inline-block'
      }} >   
                    <div className="card cyan">
                    <img  src="caballo.jpeg" style={{
        'width': '100px',
        'height': '80px',
       ' border-radius': '100px',
        'position': 'absolute',
        'top': '-38px',
        'left': 'calc(50% - 50px)'}}></img>
        <br></br>
                        <div className="card-content white-text">
                            <span className="card-title"><strong>{props.personita.titulo}</strong></span>
                            <p>{props.personita.contexto}</p>
                            <br></br>
                            <p>{props.personita.frase}</p>
                            <br></br>
                            <p>{props.personita.autor}</p>
                        </div>
                        <div className="card-action">
                        <center> <button name="action" className="waves-effect red btn" onClick={submitDelete}>Eliminar</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonasDetalle;
