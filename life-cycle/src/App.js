import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    name: "",
    avatarInfo: {},
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/JesusNavarrete215`)
      .then((res) => {
        this.setState({
          ...this.state,
          avatarInfo: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  handleInput = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("onsubmit");
    axios
      .get(`https://api.github.com/users/${this.state.name}`)
      .then((res) => {
        this.setState({
          ...this.state,
          avatarInfo: res.data,
        });
      })
      .catch((err) => console.log(err));
  }; //data.<info you need>

  render() {
    return (
      <div className="container">
        <h1>GitHub Account</h1>
        <form onSubmit={this.onSubmit}>
          <div className="inner-container">
            <div className="img-div">
              <img
                className="img-container"
                src={this.state.avatarInfo.avatar_url}
                alt="avatar_img"
              />
            </div>
            <h3>Username: {this.state.avatarInfo.login}</h3>
            <h3>Name: {this.state.avatarInfo.name}</h3>
            <h3>Followers: {this.state.avatarInfo.followers}</h3>
            <h3>Following: {this.state.avatarInfo.following}</h3>
          </div>
          <input onChange={this.handleInput} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
