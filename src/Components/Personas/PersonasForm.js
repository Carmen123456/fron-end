import axios from 'axios';
import React from 'react';
class PersonasForm extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }
    
    //Funcion para enviar request POST al endpoint
    submitNuevaPersona(e){
        //Anular comportamiento por defecto del form
        e.preventDefault();
        //peticion con axios
        axios.post('http://localhost:500/frases', {
            titulo: this.refs.titulo.value,
            contexto: this.refs.contexto.value,
            frase: this.refs.frase.value,
            autor: this.refs.autor.value
        }) .then(()=>{
            alert('El registro se ha registrado Correctamente');
            window.location.reload();
        })
        .catch(err=>console.log(err));
    }
    render(){
        return (
            <div className="card" style={{
                'backgroundColor': '#eeeeee',
                'padding': '5px 10px',
                'marginBottom': '30px',
                'borderRadius': '2px',
                'width':'350px',
                'marginLeft':'670px',
                'float':'left',
                'marginTop':'-225px'
               
            }}> <div>
                   <img  src="Reyyan.jpeg" style={{
                'width': '100px',
                'height': '80px',
                'top': '-38px',
                'position': 'absolute',
                'left': 'calc(50% - 50px)'
               
                }}></img>
                 <br></br>
                   <h4 className="center"><strong>Nueva frase</strong></h4>
                   <div  className="card-content white-text">
                  
              
                    <form className="col s12 m10" onSubmit={this.submitNuevaPersona.bind(this)}>
                  
                        <div className=" row">
                     

                            <div className="input-field col s6">
                         
                                <input id="titulo" ref="titulo" type="text" className="validate" />
                                <label htmlFor="titulo">Titulo: </label>
                            </div>
                            <div className="input-field col s6">
          <textarea id="contexto" ref="contexto" class="materialize-textarea"></textarea>
          <label htmlFor="contexto">Contexto</label>
        </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <textarea id="frase" ref="frase" className="validate" class="materialize-textarea"></textarea>
                                <label htmlFor="frase">Frase: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="autor" ref="autor" type="text" className="validate" />
                                <label htmlFor="autor">Autor: </label>
                            </div>
                            
                        </div>
                        <div>
                          <center><button type="submit" name="action" className="waves-effect waves-light btn">Enviar</button></center>
                        </div>
                    </form>
                    </div>
                    </div>
                </div>
        )
    }
   
}

export default PersonasForm;
