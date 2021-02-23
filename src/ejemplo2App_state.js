
import './App.css';
import Title from './components/Title';
import { Component } from 'react';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {//guarda datos que se pueden actualizar
            numero: 0
        };
        this.updateNumber = this.updateNumber.bind(this);//con esta linea this no se va a reasignar, siempre va a hacer el mismo que el componente
    }
    updateNumber() {
        this.setState({//para modificar el state
            numero: this.state.numero + 1
        });
    }
    render() {
        return (
            <section>
                <div className="header-main">
                    <div className="flex-container">
                        <div className="flex-item-nameButton">
                            <Title></Title>
                            <h2>{this.state.numero}</h2>
                            <button onClick={this.updateNumber}>Crear cuenta gratuita</button>
                        </div>
                        <img src={process.env.PUBLIC_URL + 'images/logo_places.jpg'} height="400" />
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h3>Calificaciones con emociones</h3>
                                <p>califica tus lugares con experiencias, no con numeros</p>
                            </li>
                            <li>
                                <h3>Sin internet? sin problemas</h3>
                                <p>Places funcion sin internet o en conexiones lentas</p>
                            </li>
                            <li>
                                <h3>Tus lugares favoritos</h3>
                                <p>Definir tu lista de sitios favoritos</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
export default App;
