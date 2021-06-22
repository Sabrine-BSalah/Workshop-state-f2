import React from 'react'
import './App.css';
import Counter from './Components/Counter/Counter';
import { Button } from 'react-bootstrap'

class App extends React.Component {

  state = {
    show: false
  }

  handleClickShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App" >
        <Button variant="secondary" onClick={this.handleClickShow}>Show</Button>
        {this.state.show &&
          <Counter />
        }
      </div>

    );
  }
}

export default App;
