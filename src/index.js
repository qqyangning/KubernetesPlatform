import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './common.css'

import Header from './app/components/header/header.js'
import Sidebar from './app/components/sidebar/sidebar.js'
import Content from './app/components/content/content.js'


class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            isSidenavopen:false
        };
        this.Sidenavopen = this.Sidenavopen.bind(this);
    }

    //whether the side nav is opened or not
    Sidenavopen = (val)=>{
        this.setState({
            isSidenavopen:val
        });
    }
    render() {
        return (
            <Router>
                <div id="app" className={'app theme-one ' + (this.state.isSidenavopen ? 'on-canvas nav-min' : '') } >
                    <Header Sidenavopen={this.Sidenavopen} />
                    <div className="main-container clearfix">
                        <Sidebar/>
                        <Content/>
                    </div>
                    {/*<Route path="/login" component={Login} />*/}
                    {/*<Route path="/register" component={Register} />*/}
                </div>

            </Router>

        );
    }
}

ReactDOM.render(
   <App/>,
    document.getElementById('application')
)
