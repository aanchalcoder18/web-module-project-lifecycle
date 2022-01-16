import React from "react";
import axios from "axios";


class FollowerList extends React.Component{
    constructor() {
        super();
        this.state = {
          followersInfo: [],
          followers: [],
          liveFollowers: []
        };
      }

    componentDidMount(){
        axios
            .get("https://api.github.com/users/aanchalcoder18/followers")
            .then((response =>{
                this.setState({
                    ...this.setState,
                    followerInfo: response.data,
                    liveFollwers: response.data
                });
            }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get("https://api.github.com/users/aanchalcoder18/${this.state.followers}")
            .then((r) =>{
                this.setState({
                    ...this.state,
                    followerInfo: r.data,
                    liveFollowers: r.data
                });
            });
    };

    handleChange = (e) => {
        this.setState({
            ...this.setState,
            followers: e.target.value,
            liveFollowers: this.state.followerInfo.filter((s) =>{
                console.log(s);
                return s.LF.includes(e.target.value);
            })
        })
    }
    render() {
        const { followers } = this.state;
        if (!this.state.followers) return <p>Loading Information...</p>;
        return (
          <div>
            <div>
              <form>
                <input value={this.state.followers} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Lookup Followers</button>
              </form>
            </div>
            <div>
              {this.state.liveFollowers.map((LF) => {
                console.log(LF);
                return (
                  <div>
                    <div className="followers-Pic">
                      <img
                        width={250}
                        src={LF.avatar_url}
                        alt="List of Followers Profile"
                      />
                    </div>
                    <div>
                      <h3>Username: {LF.login}</h3>
                      <p>
                        Github Profile:
                        <a href={LF.html_url}>{LF.html_url}</a>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
    }
    
    export default FollowerList;