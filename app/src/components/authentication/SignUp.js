import React, {Component} from "react";


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
        console.log(this.state);
    }

    render() {
        return(
            <div className="signup-container">
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <h1 className="lead">Create a new account</h1>
                    <div className="form-group">
                        <label htmlFor="code">Email</label>
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
                        <button type="submit" className="signin-button">Sign In</button>
                    </div>
                </form>

            </div>
        )
    }

}

export  default SignUp;