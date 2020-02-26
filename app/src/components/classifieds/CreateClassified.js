import React, {Component} from "react";


class CreateClassified extends Component{

    state = {
        title: '',
        content: ''
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
            <div className="create-classified-container">
                <form onSubmit={this.handleSubmit} className="create-classified-form">
                    <h1 className="lead">Create new ad</h1>
                    <div className="form-group">
                        <label htmlFor="code">Title</label>
                        <input id="title" type="text" className="form-control" placeholder="Add text" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" type="text" className="form-control" placeholder="write something" onChange={this.handleChange}/>
                    </div>

                        <button type="submit" className="create-classified-primary-button">Create</button>


                </form>

            </div>
        )
    }

}

export  default CreateClassified;