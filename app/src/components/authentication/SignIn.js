import React, {Component} from "react";


class SignIn extends Component{

    state = {
        email: '',
        password: ''
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div className="signin-container">
                <form onSubmit={this.handleSubmit} className="signin-form">
                    <h1 className="lead">Login to your Account</h1>
                    <div className="form-group">
                        <label htmlFor="code">Email</label>
                        <input id="email" type="email" className="form-control" placeholder="johndoe@email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pin">Password</label>
                        <input id="password" type="password" className="form-control" onChange={this.handleChange}/>
                    </div>

                    <div className="signin-button-group">
                        <button type="submit" className="signin-primary-button">Sign In</button>
                        <button type="submit" className="signup-button">Sign Up</button>
                    </div>
                </form>

            </div>
        )
    }

}

export  default SignIn;