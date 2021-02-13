import React, { Component } from "react";
import { withAuth } from './../context/auth-context';
import axios from 'axios';


class Private extends Component {
  
  componentDidMount() {

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

      <form action="">
        <input type="text"/>
        <button type="submit" name="name">Add Story</button>
      </form>

        

        </div>
        

      </div>
    );
  }
}


export default withAuth(Private);
