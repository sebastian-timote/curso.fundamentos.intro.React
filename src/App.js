
import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';
import {indigo400, redA400, lightBlueA400, amber400} from 'material-ui/styles/colors';

import './App.css';
import Title from './components/Title';
class App extends Component {
    
    render() {
        return (
            <MuiThemeProvider>
                <div className="header-main ">
                    <div className="flex-item-nameButton">
                        <Title></Title>
                        <RaisedButton label="Crear cuenta gratuita" primary="true"></RaisedButton>
                    </div>
                    <img src={process.env.PUBLIC_URL + 'images/logo_places.jpg'} height="400" />
                </div>
                <ul className="flex-container-card">
                    <Card className="header-benefit">
                        <CardText>
                            <div className="row">
                                <div className="header-benefit-image">
                                    <img className="header-card-ilustration"  src={process.env.PUBLIC_URL + '/images/corazon.png'} />
                                </div>
                                <div className="header-benefit-content">
                                    <h3>Calificaciones con emociones</h3>
                                    <p>califica tus lugares con experiencias, no con numeros</p>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                    <Card className="header-benefit">
                        <CardText>
                            <div className="row">
                                <div className="header-benefit-image">
                                    <img className="header-card-ilustration" src={process.env.PUBLIC_URL + '/images/sininternet.png'} />
                                </div>
                                <div className="header-benefit-content">
                                    <h3>Sin internet? sin problemas</h3>
                                    <p>Places funcion sin internet o en conexiones lentas</p>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                    <Card className="header-benefit">
                        <CardText>
                            <div className="row">
                                <div className="header-benefit-image">
                                    <img className="header-card-ilustration" src={process.env.PUBLIC_URL + '/images/lugares.png'} />
                                </div>
                                <div className="header-benefit-content">
                                    <h3>Tus lugares favoritos</h3>
                                    <p>Definir tu lista de sitios favoritos</p>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </ul>
                <div style={{'backgroundColor': indigo400, 'height':'100px'}}>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default App;
