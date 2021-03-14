//props -> son inmutables es decir siempre va a tener el mismo valor usar solo para lectura 
import {Component} from 'react';
class Title extends Component {
    render(){
        return(
            <div>
                <h1>Places</h1>
                <p>descubre lugares maravillosos</p>
            </div>
        );
    }
}
export function hola(){
    return "hola amigos";
}
export default Title;