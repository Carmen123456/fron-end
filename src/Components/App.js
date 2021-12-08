import React from 'react'; 
import PersonasLista from "./Personas/PersonasLista";
import PersonasDetalle from "./Personas/PersonasDetalle";
import PersonasForm from "./Personas/PersonasForm";
import axios from 'axios';

class App extends React.Component {

    constructor(props){
        super(props)
        this.state={
            personas:[],
            personaActual:{}
        }
        //vincular la funcion actualizarPersona al objeto - Metodo como propiedad
        this.actualizarPersona=this.actualizarPersona.bind(this)
    }
    
    componentDidMount(){
        const URL='http://localhost:500/frases';
        axios.get(URL)
             .then((res)=>{
                this.setState({
                    personas: res.data
                })
             }).catch((err)=>console.log(err));
    }

    //Funcion para asignar personaActual - tipo clase - Metodo
    actualizarPersona(persona){
        this.setState({
            personaActual: persona
        })
    }

    render(){
        return (
            <div>
              <div className="row">    
                    <nav className="#ffe082 amber lighten-3">
                        <div className="nav-wrapper container">
                        <a href="/" className="brand-logo" style={{
                'color':'black'}}>HERCAI</a>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;  <img  width ="80px" height="65px" src="hercai.jpeg"></img>
                        
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a style={{
                'color':'black'}}>Entre el amor y la venganza</a></li>
                        </ul>
                        </div>
                    </nav>
              </div>
              <br></br>
              <div className="row">
                  <div className="col s12 m4">
                      <PersonasLista 
                            listaPersonas={this.state.personas}
                            actualizarPersona={this.actualizarPersona} />
                  </div>
                  <div className="col s12 m8">
                    <PersonasDetalle personita={this.state.personaActual} />
                  </div>
              </div>
              <PersonasForm />
            </div>
        );
    }       
 
}

export default App;
