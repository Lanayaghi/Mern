import React, { Component } from 'react';

 class PersonCard extends Component {
     constructor (props){
         super (props);
         this.state = {
             clickAge :props.age
         }
     }

        increaseAge(){
            this.setState({
                clickAge: this.state.clickAge +1
            });
        }

    render() {
        return (
            <div>
                <h1>{this.props.lastname}, {this.props.firstname}</h1>
                <p>Age:{this.state.clickAge}</p>
                <p>HairColor: {this.props.haircolor}</p>
                <button onClick={this.increaseAge.bind(this)}>Birthday Button for {this.props.firstname} {this.props.lastname}</button>
            </div>
        );
    }
}

export default PersonCard;