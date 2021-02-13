import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link to={'/'} id='home-btn'>
        <h4>TravelStories</h4>  
      </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link to={'/'} id='home-btn'>
            <h4>Home</h4>
          </Link>
          <Link className="nav-link" aria-current="page" to={"/user"}> Find Travelers</Link>
          <Link className="nav-link" to={'/private'}>My Profile</Link>
          {this.props.isLoggedIn ? (
          <>
            <p>username: {this.props.user && this.props.user.username}</p>
            <button onClick={this.props.logout}>Logout</button>
          </>
          ) : (
          <>
          <Link to="/login">
            <button className="navbar-button">Login</button>{' '}
          </Link>
            <br />
          <Link to="/signup">
            <button className="navbar-button">Sign Up</button>{' '}
          </Link>
          </>
        )}
            


            {/* <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a> */}
          </div>
        </div>
      </div>
    </nav>




    );
  }
}

export default withAuth(Navbar);


      {/* <nav className="navbar">
        <Link to={'/'} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {this.props.isLoggedIn ? (
          <>
            <p>username: {this.props.user && this.props.user.username}</p>
            <button onClick={this.props.logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-button">Login</button>{' '}
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{' '}
            </Link>
          </>
        )}
      </nav> */}