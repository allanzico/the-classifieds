import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signUp} from "../../store/actions/authActions";


class SignUp extends Component{

    state = {
        email: '',
        password: '',
        name: ''
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.signUp(this.state);
        console.log(this.state);
    }

    render() {
        const {auth, authError} = this.props;
        if (auth.uid) return <Redirect to="/"/>
        return(
            <div className="signup-container">
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <h1 className="lead">Create a new account</h1>
                    <div className="form-group">
                        <label htmlFor="code">Name</label>
                        <input id="name" type="text" className="form-control" placeholder="John Doe" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">Email</label>
                        <input id="email" type="email" className="form-control" placeholder="johndoe@email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pin">Password</label>
                        <input id="password" type="password" className="form-control" onChange={this.handleChange}/>
                    </div>

                    <div className="signup-button-group">
                        <button type="submit" className="signup-primary-button">Sign Up</button>

                    </div>
                    <div className="signup-error" >
                        {authError && <p>{authError}</p>}
                    </div>
                </form>

            </div>
        )
    }

}
const mapStateToProps =(state)=> {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps =(dispatch)=> {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export  default connect(mapStateToProps, mapDispatchToProps) (SignUp);