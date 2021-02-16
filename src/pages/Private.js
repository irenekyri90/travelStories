import React, { Component } from "react";
import { withAuth } from './../context/auth-context';
import axios from 'axios';
import AddStory from "../components/AddStory/AddStory";


class Private extends Component {
  state = {
    showForm: false
  }
  
  componentDidMount() {
    axios.get("http://localhost:5000/api/stories")
      .then(res => {
        console.log("PLEEAASSSEEEEe WOOOrkkkkkkkkkkKKK!!!")
      })

      
    axios
      .get("http://localhost:5000/api/user", {
        withCredentials: true,
      });



    // workshopService.getUser().then((data) => {
    //   console.log(data);
    //   this.setState({
    //     hostedWorkshops: data.hostedWorkshops,
    //     attendedWorkshops: data.attendedWorkshops,
    //     wallet: data.wallet,
    //   });
    // });
  }

  // addOneStory = () => {
  //   axios.post('http://localhost:5000/api/stories', {title, location, image, description, writtenBy}, { withCredentials: true })
  //     .then((response) => {
  //       console.log(response);
  //       console.log(response.data);

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   }
  





  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
    console.log(this.state.showForm);
  }

  render() {
    console.log(this.props.user.image);
    return (
      <div>
        <h1>Private Route</h1>
        <h2>Welcome {this.props.user && this.props.user.username}</h2>
        {/* 
        <h2>Welcome {this.props.user ? this.props.user.username : null }</h2> 
        */}
        <img src={this.props.user.image} alt=""/>

        <div>


        <AddStory />

        <button onClick={this.toggleForm}>ADD A STORY</button>
        

        </div>
        

      </div>
    );
  }
}


export default withAuth(Private);

