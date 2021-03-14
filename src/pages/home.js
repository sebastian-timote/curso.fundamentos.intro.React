import {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {indigo400, redA400, lightBlueA400, amber400} from 'material-ui/styles/colors';

import Title from '../components/Title';
import data from '../request/places';
import Benefits from './benefits';
import PlacesCard from './placesCard';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            places: data.places
        }
        this.hidePlaces = this.hidePlaces.bind(this);
    }
    places(){
        return this.state.places.map((place,index) => {
           return (
               <PlacesCard onRemove={this.hidePlaces} place={place} index={index}></PlacesCard>
           )
       });
   }
   hidePlaces(place) {
        this.setState({
            places: this.state.places.filter(el => el != place)
        })
   }
    render(){
        return(
            <section>
                <div className="header-main ">
                    <div className="flex-item-nameButton">
                        <Title></Title>
                        <RaisedButton label="Crear cuenta gratuita" primary="true"></RaisedButton>
                    </div>
                    <img src={process.env.PUBLIC_URL + 'images/logo_places.jpg'} height="400" />
                </div>
                <Benefits></Benefits>
                <div style={{'backgroundColor': indigo400, 'height':'600px', 'padding':'50px'}}>
                    <h3 style={{'color': 'white', 'fontSize': '2em'}}>Sitios populares</h3>
                    <div className= "row">
                        {this.places()};
                    </div>
                </div>
            </section>
        )
    }
}