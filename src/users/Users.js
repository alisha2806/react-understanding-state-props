//class component
import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    state = {
        users: [
            { name: "John", age: 20 },
            { name: "Jill", age: 40 },
            { name: "Peter", age: 60 }
        ],
        title: "Users List"
    };

    makeMeYounger = () => {
        const newState = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser;
        });
        this.setState({
            newState
        });
    } 

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.makeMeYounger}>Make us 10 yrs younger</button>
                <br />
                {
                    this.state.users.map((user) => {
                        return <User age={user.age}>{user.name}</User>

                    })
                }
              
            </div>)
    }

}

export default Users;