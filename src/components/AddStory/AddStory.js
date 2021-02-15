import React, { Component } from 'react';
import axios from 'axios';
import { withAuth } from './../../context/auth-context';


class AddStory extends Component {
  state = {
    title: "",
    location: "",
    image: "",
    description: "",
    comments: [],
    likes: [],
    writtenBy: ""
  }

  handleInput = (event) => {
    let { name, value } = event.target;
    console.log(value);
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Button submitted");

    const {
      title,
      location,
      description
    } = this.state;

    const writtenBy = this.props.user._id;
    console.log(writtenBy);

    axios.post('http://localhost:5000/api/stories', {title, location, description, writtenBy}, { withCredentials: true })
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  
  }

  // axios
  // .post("http://localhost:5000/auth/upload", uploadData, {
  //   withCredentials: true,
  // })
  // .then((response) => {
  //   console.log("response is: ", response);
  //   // after the console.log we can see that response carries 'secure_url' which we can use to update the state
  //   this.setState({ image: response.data.secure_url });
  // })
  // .catch((err) => {
  //   console.log("Error while uploading the file: ", err);
  // });

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label for="title">Title:</label>
          <input name="title" type="text" value={this.state.title} onChange={this.handleInput} required/>

          <label for="location">Location:</label>
          <input name="location" type="text" value={this.state.location} onChange={this.handleInput}/>

          <p>image</p>

          <label for="description">Describe your experience</label>
          <input name="description" type="text" value={this.state.description} onChange={this.handleInput}/>


          <button type="submit" name="name">Add Story</button>
        
        
        </form>
      </div>
    )
  }
}

export default withAuth(AddStory);
