import React from "react";
import VampCard from "./components/VampCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import vampires from "./vampires.json";
import update from "immutability-helper";
import "./App.css";

class App extends React.Component {
  state = {
     topScore: 0,
     score: 0,
     vampires
  }


// On click function to handle each time a vampire card is clicked on.
handleClick = vampireID => {

  console.log(vampireID)

  let vampArr = this.state.vampires;

  // iterate through the vamp array to see if the vampire that was clicked
  // has already been clicked.  If it hasn't, then increase score. If it has,
  // then compare old top score to current score.  If current score > top score replace top score. 
  // Reset score and then vampires clicked state to false

  for(let i = 0; i < vampArr.length; i++) {

    if(vampireID === vampArr[i].id) {

      if(vampArr[i].clicked === false){
         
        this.setState({
          score:  this.state.score + 1,
          vampires: update(this.state.vampires, {[i]: {clicked: {$set: true}}})
        })


      } else {

        if(this.state.score > this.state.topScore){
          this.setState({
            topScore: this.state.score,
            score: 0,
            vampires
          },
          () => {
            console.log('Updated new top score!')
          });

        }

        if(this.state.score <= this.state.topScore){
          this.setState({
            score: 0,
            vampires
          },
          () => {
            console.log('Reset, did not beat the top score!')
          });
        }

      }

   }
  }


};

// shuffle array function so that vampires are rendered in a random order each time on render.
shuffleArray = array => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

  render() {

    //map the vampires stored in the component state and set them each up in a component with props

    let characterCards = this.state.vampires.map((vampire) =>
      <VampCard
        name = {vampire.name}
        image = {vampire.image}
        key = {vampire.id}
        id = {vampire.id}
        handleClick = {this.handleClick}
      />
    )

    //shuffle the vampires array, so that they can be in a random order each time the site renders

    let shuffledCards = this.shuffleArray(characterCards)

    return (
      
    <div>

    <Header score={this.state.score} topScore = {this.state.topScore}/>
      <Wrapper>
        {shuffledCards}
      </Wrapper>

    </div>
    
  );
  }
}

export default App;
