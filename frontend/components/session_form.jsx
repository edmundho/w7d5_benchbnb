import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(this.props.history.push("/"));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }
  
  render () {
    let formType;
    let link;
    if (this.props.formType === 'signup') {
      formType = 'Sign Up';
      link = <Link to="/login">log in</Link>;
    } else {
      formType = 'Log In';
      link = <Link to="/signup">sign up</Link>;
    }

    let errors;
    if (this.props.errors) {
      errors = this.props.errors;
    }
    
    return (
      <div>
        <h2>{formType}</h2>
        <h3>{link}</h3>


        <form onSubmit={this.handleSubmit}>
          <label>username:
            <input 
              type="text" 
              onChange={this.update('username')} 
              value={this.state.username} />
          </label>
          <label>password:
            <input 
              type="password" 
              onChange={this.update('password')} 
              value={this.state.password} />
          </label>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);