import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
     friends
  }

handleRemoveFriend = filterID => {
 
  let newFriendArray = this.state.friends.filter( friend => {
    
    for (let i = 0; i < this.state.friends.length; i++){
     
      if (friend.id === filterID) return false;
    }
    return true;
  })


  this.setState({
    friends: newFriendArray
  })
};

  render() {

    const CharacterCards = this.state.friends.map((friend) =>
      <FriendCard
        name = {friend.name}
        image = {friend.image}
        occupation = {friend.occupation}
        location = {friend.location}
        key = {friend.id}
        id = {friend.id}
        removeFriend = {this.handleRemoveFriend}
      />

    )
    return (
      
    <div>

      
      <Wrapper>
      <Header/>
        {CharacterCards}
      </Wrapper>

    </div>
    
  );
  }
}

export default App;
