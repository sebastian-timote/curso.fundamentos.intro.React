import {Component} from 'react';
import {Card, CardText, CardMedia, CardTitle, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class PlacesCard extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-4" key={this.props.index}>
                   <Card>
                       <CardMedia>
                           <img src={process.env.PUBLIC_URL + this.props.place.imageUrl}></img>
                       </CardMedia>
                       <CardTitle title={this.props.place.title}></CardTitle>
                       <CardText>{this.props.place.description}</CardText>
                       <CardActions style={{'textAlign':'right'}}>
                           <FlatButton secondary={true} label="ver mas"></FlatButton>
                           <FlatButton secondary={true} label="ocultar" onClick={() => this.props.onRemove(this.props.place)}></FlatButton>
                       </CardActions>
                   </Card>
            </div>
        )
    }
}