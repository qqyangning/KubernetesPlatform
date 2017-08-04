/**
 * Created by yn on 10/07/17.
 */
import React from 'react'
import {Link} from 'react-router-dom'

class Register extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="page page-auth clearfix">
                <div className="auth-container">

                    <h1 className="site-logo h2 mb15"><a href="/"><span>App</span>&nbsp;Board</a></h1>

                    <div className="form-container">
                        <p className="small">Already have an account.<Link to="/login"> Sign in Now.</Link>
                        </p>
                        <form className="form-horizontal" action="/">
                            <div className="row">
                                <div className="form-group form-group-lg col-lg-6">
                                    <input className="form-control" type="text" placeholder="First Name" />
                                </div>

                                <div className="form-group form-group-lg col-lg-6">
                                    <input className="form-control" type="text" placeholder="Last Name"/>
                                </div>
                            </div>

                            <div className="form-group form-group-lg">
                                <input className="form-control" type="text" placeholder="Create Username"/>
                            </div>

                            <div className="form-group form-group-lg">
                                <input className="form-control" type="password" placeholder="Password"/>
                            </div>

                            <div className="form-group form-group-lg">
                                <input className="form-control" type="email" placeholder="john@doe.com"/>
                            </div>


                            <button type="submit" className="btn btn-lg btn-primary text-uppercase">Register Now</button>

                        </form>
                    </div>

                </div>
            </div>
        );
    }
}
export default Register
