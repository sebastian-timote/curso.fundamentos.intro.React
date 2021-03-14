
import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './pages/home';
import data from './request/places';
import './App.css';
class App extends Component {
    constructor (props){
        super(props);
        // console.log(data);
    }
    render() {
        return (
            <MuiThemeProvider>
                <Home></Home>
            </MuiThemeProvider>
        );
    }
}
export default App;
