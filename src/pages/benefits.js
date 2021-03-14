import {Component} from 'react';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';

export default class Benefits extends Component {
    render(){
        return(
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
        )
    }
}