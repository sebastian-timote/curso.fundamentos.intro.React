//props -> son inmutables es decir siempre va a tener el mismo valor usar solo para lectura 
import React from 'react';
class Title extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>descubre lugares maravillosos</p>
            </div>
        );
    }
}
export function hola(){
    return "hola amigos";
}
export default Title;