import React, { Component } from 'react';
import Form from './components/Form';
import View from './components/View';
import Popup from './components/Popup';
import Notes from './components/Notes';
import axios from 'axios';

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      message: "",
      role: "",
    },
      showPopup: false,
      data: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3000/notes").then((res) => this.setState({data: res.data}));
  }

  inputHandler = (e) => {
    this.setState({
      inputData: {...this.state.inputData, [e.target.name]: e.target.value,
      },
    });
  };

  popupHandler = (event) => {
    event.preventDefault();
    this.setState({ showPopup: true});
  };

  postHandler = () => {
    axios
    .post('http://localhost:3000/notes', this.state.inputData)
    .then((res) => { 
      console.log(res);
    this.setState({showPopup:false});
    window.location.reload();
    })
    .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
      <div className="main">
        <Form change={this.inputHandler} submit={this.popupHandler}/>
        <View {...this.state.inputData}        
        />
        {this.state.showPopup && <Popup {...this.state.inputData} posting={this.postHandler}/>}
        </div>

        <div className='notes'>
       {this.state.data.map((note) => (
        <Notes {...note} key={note.id}/>
       ))}
      </div>
      </div>
    );
  }
}

export default App;