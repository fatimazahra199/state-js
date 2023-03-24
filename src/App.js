
import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Fatima Zahra Faryat",
        bio: "Hi, I'm a FullStack Developer & UI/UX designer",
        imgSrc:
          "https://i.pinimg.com/originals/ca/63/1c/ca631c51a4dfa41c7964eb38bc831f3a.jpg",
        profession: "Web Developer",
      },
      Shows: false,
      mountTime: new Date(),
      // currentTime: new Date(),
      interval: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { mountTime } = this.state;
      const currentTime = new Date();
      const interval = Math.floor(
        (currentTime.getTime() - mountTime.getTime()) / 1000
      );
      this.setState({ interval });
    }, 1000);
  }

  handleClick = () => {
    this.setState((prevState) => ({ Shows: !prevState.Shows }));
  };

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div className='profile'>
        <button className="toggle" onClick={this.handleClick}>Toggle Profile</button>
        {this.state.Shows && (
          <div className='profile_items'>
            <img className="image" src={this.state.Person.imgSrc} alt="profile" />
            <h1>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.profession}</h2>
            <p>{this.state.Person.bio}</p>
          </div>
        )}
        <p>Component mounted {this.state.interval} seconds ago.</p>
      </div>
    );
  }
}

export default App;
