// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
        super();

        this.state = {
            hasBeenClicked: false,
            //currentTheme: 'blue',
        };
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })
        //     {
        //     hasBeenClicked: true,
        //     //currentTheme: 'blue',
        // }, () => console.log(this.state.hasBeenClicked))
        // console.log(this.state.hasBeenClicked)
    }

    render() {
        return (
            <div>
                {/* <p>i have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p> */}
        <button onClick={this.handleClick}>{this.state.hasBeenClicked ? "ON" : "OFF"}Click me!</button>
            </div>
        );
    }
}
export default ClickityClick