// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
    constructor() {
        super();

        this.state = {
            hasBeenClicked: false
        };
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })
    }
    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}> Click me!</button>
            </div>
        )
    }
}

/* It's important to note the difference between changes in state and changes in props. Changes in state and/or props will both trigger a re-render of our React component. However, changes in state can only happen internally due to components changing their own state. Thus, a component can trigger changes in its own state.

A component cannot change its props. Changes in props can only happen externally, meaning the parent or grandparent component changes the values it passing down to its children. */