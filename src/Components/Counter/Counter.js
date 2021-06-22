import React, { Component } from 'react'
import './Counter.css'
import { Button, Form } from 'react-bootstrap'


class Counter extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0
    //     }
    //     console.log("Initialisation")
    // }

    state = {
        count: 0,
        inputText: ""
    }


    handleClickAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClickMinus = () => {
        this.state.count > 0 &&
            this.setState({
                count: this.state.count - 1
            })
    }

    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }


    // Component life cycle
    componentDidMount = () => {
        console.log("Component counter did mount")
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("Component counter did update")
        console.log(prevState)
    }

    componentWillUnmount = () => {
        console.log("Component Counter will unmount")
    }

    render() {
        console.log("Render")
        return (
            <div className="counterContainer" >
                <h1>This is a counter :</h1>
                <div className="counterContent">
                    <Button variant="success" className="counterBtns"
                        onClick={this.handleClickAdd}
                    >+</Button>
                    <h2>{this.state.count}</h2>
                    <Button variant="success" className="counterBtns"
                        onClick={this.handleClickMinus}

                    >-</Button>
                </div>
                <Form.Control type="text" placeholder="Enter text ..."
                    onChange={this.handleChange}
                />
                <h3>{this.state.inputText}</h3>
            </div>
        )
    }
}

export default Counter
