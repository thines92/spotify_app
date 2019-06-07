import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {}

    login() {
        let client_id = '141023eb3c84455998932d0226875b29';
        // let client_secret = '0a1dcc69369647bda3cd453b1af1fc92';
        let scopes = 'user-read-private user-read-email';
        fetch('https://accounts.spotify.com/authorize?response_type=code&client_id=' + client_id + (scopes ? '&scope=' + encodeURIComponent(scopes) : ''))
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                    console.log("result")
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )        
    }


    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return (
                <div>Error: {error.message}</div>
            )
        } 
        // else if (!isLoaded) {
        //     return <div>Loading...</div>;
        // } 
        else {
            return (
                <button onClick={this.login}>Login</button>
                // <ul>
                //     <li>{items}</li>
                //     {items.map(item => (
                //         <li key={item / name}>
                //             {item.name} {item.price}
                //         </li>
                //     ))}
                // </ul>
            )
        }
    }
}

export default Login;