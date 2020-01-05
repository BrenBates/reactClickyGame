import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
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

    const friendCardStuff = this.state.friends.map((friend) =>
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
      
    <Wrapper>
      {/* <h1 className="title">Friends List</h1> */}
      {friendCardStuff}
    </Wrapper>
  );
  }
}

export default App;
