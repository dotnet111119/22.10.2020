import React from 'react';
import './App.css';
import react, {Component } from 'react'

class App extends Component {
  state = {
      did_update : true,
      posts : []
  }
  render () {
    // 1. subscribe
    //     here we will take the getState and store it into this.state
    console.log("this.props")
    console.log(this.props)
    const { store } = this.props
    console.log(store)
    console.log(store.getState().posts)

    // 2. for each post
    // <p>{this.state.posts[0].title}</p>

    return (  <div className="App">

              </div>
    );
  }
  // 3. component did mount
  // dispatch (only if did_update == true)
  // did_update = false
  /*
   {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          }
          */
}

export default App;
