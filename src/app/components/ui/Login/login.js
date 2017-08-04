import React from 'react'
import {Link,Redirect,Route} from 'react-router-dom'
import Cookies from 'universal-cookie'


import './login.css'
import Dashboard from  './../Dashboard/dashboard.js'

const cookies = new Cookies();
var isAuthenticate = false;


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Username:'',
            Password:'',
            isSignin:false
        };

        this.Submit = this.Submit.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.SignInClick = this.SignInClick.bind(this);
    }


    //submit form function
    Submit(event){
        // var url = 'http://tangbc:9090/login?username=admin&password=admin';
        var url = 'http://controller:9090/login?username=' + this.state.Username + '&password=' +this.state.Password;
        // var xhr = new XMLHttpRequest();
        // xhr.open('GET',url,true);
        // xhr.responseType = 'json';
        //
        // xhr.send();
        // xhr.onload = function () {
        //     if(xhr.response.msg === 'ok'){
        //         console.log(xhr.response);
        //         isAuthenticate = true;
        //         console.log('success login');
        //     }else{
        //         console.log('fail login');
        //     }
        // };
        fetch(url,{
            method:'GET'
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            if(json.msg == 'ok'){
                isAuthenticate = true;
            }
        }).catch(function (ex) {
            console.log('parsing failed',ex);
        });
        event.preventDefault();
    }
    //when children parameters change, trigging this function
    usernameChange(event){
        this.setState({
            Username:event.target.value
        })
    }
    passwordChange(event){
        this.setState({
            Password:event.target.value
        })
    }
    //Click Sign In button
    SignInClick(){
        this.setState({
            isSignin:true
        })
    }
    render(){
        var isSignin = this.state.isSignin;

        if(isAuthenticate && isSignin){
            return (
                <Redirect to="/dashboard" />
            );
        }

        return(
            <div className="page page-auth clearfix">
                <div className="auth-container">
                    <h1 className="site-logo h2 mb15"><a href="/"><span>App</span>&nbsp;Board</a></h1>
                    <h3 className="text-normal h4 text-center">Sign in to your account</h3>

                    <div className="form-container">
                        <form className="form-horizontal" onSubmit={this.Submit.bind(this)}>
                            <div className="form-group form-group-lg">
                                <input className="form-control" type="text" placeholder="Username" onChange={this.usernameChange.bind(this)} />
                            </div>

                            <div className="form-group form-group-lg">
                                <input className="form-control" type="password" placeholder="Password" onChange={this.passwordChange.bind(this)} />
                            </div>

                            <div className="clearfix mb15">
                                <input type="submit" className="btn btn-lg btn-w120 btn-primary text-uppercase" value="Sign in"  onClick={this.SignInClick.bind(this)} />
                                <div className="ui-checkbox ui-checkbox-primary mt15 right">
                                    Don't have an account? <Link to="/register">Register Now</Link>
                                </div>

                            </div>

                            <div className="clearfix text-center">
                            </div>
                        </form>
                    </div>

                </div>
                <Route path="/dashboard" component={Dashboard}/>
            </div>
        );
    }
}

export default Login
