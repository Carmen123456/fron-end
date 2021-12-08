import React from 'react';

const PersonasLista = (props) => {
    return (
        <div>
             
            <ul className="collection with-header">
            <img  src="columpio.jpeg" style={{
                                'width': '130px',
                                'height': '100px',
                               ' border-radius': '100px',
                                'position': 'absolute',
                                'top': '-10px',
                                'left': 'calc(50% - 50px)'}}></img>
                <li className="collection-header"><h4><strong>Frases</strong></h4></li>
                
                {
                    props.listaPersonas.map((element)=>{
                        return (
                            <li className="collection-item" 
                                key={element._id}
                                onClick={props.actualizarPersona.bind(this, element)}
                                style={{
                                    'cursor': 'pointer'
                                }}
                            > 
                                {element.titulo} </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PersonasLista;
