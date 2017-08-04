/**
 * Created by yn on 23/06/17.
 */
import React from 'react'
import ReactDom from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Dashboard from './../ui/Dashboard/dashboard.js'
import Login from './../ui/Login/login.js'
import Register from './../ui/Register/register.js'
import Application from './../ui/Application/Application.js'
import ImageManage from './../ui/ImageManage/ImageManage.js'
import Resource from './../ui/Resource/resource.js'

import './content.css'


class Content extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <div className="content-container ng-scope" id="content" >
                    {/*content using routing*/}
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register}/>
                    <Route path="/application" component={Application} />
                    <Route path="/imagemanage" component={ImageManage} />
                    <Route path="/resource" component={Resource}/>
                </div>
        );
    }
}

export default Content
