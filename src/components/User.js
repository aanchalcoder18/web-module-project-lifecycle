import React from "react";
import axios from "axios";

class User extends React.Component{
    constructor(){
        super();
        this.state = {
            user: {}
        };
    }

    componentDidMount(){
        axios
            .get("https://api.github.com/users/aanchalcoder18")
            .then((response) =>{
                this.setState({
                    ...this.state,
                    user: response.data
                });
            })
            .catch((errors)=>{
                console.log(errors);
            });
    }

    render(){
        const { user } = this.state;
        return(
            <div>
                <h3 className = "user-image">
                    <img
                        width = {200}
                        src = {this.state.user.avatar.url}
                        alt="User Profile"
                    />
                </h3>
                <div>
                    <p>Name: {this.state.user.name} </p>
                    <p>Bio: {this.state.user.bio} </p>
                    <p>Location: {this.state.user.location} </p>
                    <p>Followers: {this.state.user.followers} </p>
                    <p>Following: {this.state.user.following} </p>
                    <a href={this.state.user.html_url}>
                        <button>Profile</button>
                    </a>
                </div>
            </div>
        );

    }
}
export default User;