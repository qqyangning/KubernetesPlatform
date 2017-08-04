/**
 * Created by yn on 19/06/17.
 */
import React from 'react'
import screenfull from 'screenfull'

import '../../../static/styles/family.css'

/**Icon*/
import '../../../static/styles/font-awesome.min.css'

/*bootstrap style*/
import '../../../static/styles/bootstrap.css'
/*Header style*/
import './header.css'

import admin from '../../../static/images/admin.jpg'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isfullscreen : true,//whether fullscreen or not
            isMobile:true,  //whether the sidebar is open or not
            isDropdown:false,//whether the dropdown is dropdown or not
            isSidebaropen:false,//whether the Siderbar is open
            isUserdropdown:false,//whether the userinfo is open
        };

        this.fullScreen = this.fullScreen.bind(this);
        this.isStretch = this.isStretch.bind(this);
        this.dropdown = this.dropdown.bind(this);
        this.userdropdown = this.userdropdown.bind(this);
    }
    // 使组件全屏显示
    fullScreen=() => {
        this.setState({
            isfullscreen:!this.state.isfullscreen
        });
        if(this.state.isfullscreen){
            screenfull.request();
        }else {
            screenfull.exit();
        }
    }
    //使侧边栏展开
    isStretch = () => {
        var isMobile = this.state.isMobile;
        this.setState({
            isMobile:!isMobile
        });
        this.props.Sidenavopen(isMobile);
    }
    //弹出菜单
    dropdown = () => {
        var isDropdown = this.state.isDropdown;
        this.setState({
            isDropdown:!isDropdown
        });
    }
    //从侧边栏滑出菜单
    toggleSidebar = ()=>{
        var isSidebaropen = this.state.isSidebaropen;
        this.setState({
            isSidebaropen:!isSidebaropen
        });

    }

    //用户信息下拉菜单
    userdropdown = () =>{
        var isUserdropdown = this.state.isUserdropdown;
        this.setState({
            isUserdropdown:!isUserdropdown
        });

    }
    render() {
        return (
            <div className="site-head clearfix" id="site-head">
                    <div className="nav-head">
                    {/*Sitelogo*/}
                    <a href="/" className="site-logo"><span>Cloud</span>&nbsp;Platform</a>
                        <span onClick={this.isStretch} className={'nav-trigger fa ' + ( this.state.isMobile ? ' fa-indent' : 'fa-outdent') }  >
                        </span>
                    {/*EndSitelogo*/}
                    </div>
                    <div className="head-wrap clearfix">
                    {/*navbar rigth*/}
                    <ul className="list-unstyled navbar-right">
                        {/*fullscreen*/}
                        <li onClick={this.fullScreen}>
                            {/*<i className="fa fa-expand" ></i>*/}
                            <a><i className="fa fa-expand" ></i></a>
                        </li>
                        {/*endfullscreen*/}
                        {/*Notification Dropdown*/}
                        <li onClick={this.dropdown} className={'dropdown ' + (this.state.isDropdown ? 'open' : '' )}>
                            <a className="dropdown-toggle notification" aria-haspopup="true" aria-expanded={this.state.isDropdown ? 'false' : 'true'}>
                                <i className="fa fa-bell-o"></i>
                                <span className="badge badge-danger badge-xs circle">3</span>
                            </a>
                            <div className="panel panel-default dropdown-menu">
                                <div className="panel-heading">
                                    <p className="panel-title">You have <strong>3</strong> new notifications</p>
                                </div>
                                <ul className="list-unstyled noti-drop clearfix" >
                                    <li>
                                        <a href className="clearfix">
                                            <i className="fa fa-bolt icon left bg-primary"></i>
                                            <div className="info left">
                                                <strong>New app uploaded</strong>
                                                <span className="small time">few secs ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href className="clearfix">
                                            <i className="fa fa-info icon left bg-info"></i>
                                            <div className="info left">
                                                <strong>Samuel left a message</strong>
                                                <span className="small time">3 min ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href className="clearfix">
                                            <i className="fa fa-calendar-o icon left"></i>
                                            <div className="info left">
                                                <strong>Meetup at 3:00 P.M</strong>
                                                <span className="small time">2 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="panel-footer">
                                    <p className="read-all mb0 small"><a href="#na">View all notifications</a>
                                        <i className="fa fa-circle-o-notch right" title="mark all read"></i>
                                    </p>
                                </div>
                            </div>
                        </li>
                        {/*#end notification dropdown*/}
                        {/*# floating sidebar*/}
                        <li onClick={this.toggleSidebar} className={this.state.isSidebaropen ? 'open' : ''} >
                            <a>
                                <i className="fa fa-tasks"></i>
                            </a>
                            <div className="floating-sidebar">
                                {/*tasks*/}
                                <div className="ongoing-tasks">
                                    <h3 className="small title mb30">Ongoing Tasks</h3>
                                    <ul className="list-unstyled mb15 clearfix">
                                        <li>
                                            <div className="clearfix mb10">
                                                <small className="left">App Upload</small>
                                                <small className="right">80%</small>
                                            </div>
                                            <progressbar value="80" className="progress-xxs" type="success"></progressbar>
                                        </li>
                                        <li>
                                            <div className="clearfix mb10">
                                                <small className="left">Creating Assets</small>
                                                <small className="right">50%</small>
                                            </div>
                                            <progressbar value="50" className="progress-xxs" type="danger"></progressbar>
                                        </li>
                                        <li>
                                            <div className="clearfix mb10">
                                                <small className="left">New UI 2.0</small>
                                                <small className="right">90%</small>
                                            </div>
                                            <progressbar value="90" className="progress-xxs" type="warning"></progressbar>
                                        </li>
                                    </ul>
                                </div>
                                {/*#end tasks*/}

                                {/*transaction*/}
                                <div className="stats">
                                    <h3 className="small title mb15">Transaction</h3>
                                    <ul className="list-unstyled clearfix mb15">
                                        <li className="clearfix">
                                            <i className="fa fa-paypal left bg-primary"></i>
                                            <div className="info">
                                                <strong>Send to Elli at 4:00 pm</strong>
                                                <span>$3000</span>
                                            </div>
                                        </li>
                                        <li className="clearfix">
                                            <i className="fa fa-bitcoin left bg-warning"></i>
                                            <div className="info">
                                                <strong>Received from Salman at 12:00 pm</strong>
                                                <span>B 35000</span>
                                            </div>
                                        </li>
                                        <li className="clearfix">
                                            <i className="fa fa-gittip left bg-info"></i>
                                            <div className="info">
                                                <strong>Donate to gittip</strong>
                                                <span>$500</span>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                {/*#end transaction*/}
                            </div>
                        </li>
                        {/*#end floating sidebar*/}
                        {/*profile drop*/}
                        <li className={'dropdown ' + (this.state.isUserdropdown ? 'open' : '')} onClick={this.userdropdown} >
                            <a className="user-profile dropdown-toggle" aria-haspopup="true" aria-expanded={this.state.isUserdropdown ? 'true' : 'false'}>
                                <img src={admin} alt="admin-pic" />
                            </a>
                            {/*Profile drop*/}
                            <div className="panel panel-default dropdown-menu">
                                <div className="panel-body">
                                    <figure className="photo left">
                                        <img src={admin} alt="admin-pic" />
                                            <a href="j:;">Photo</a>
                                    </figure>
                                    <div className="profile-info right">
                                        <p className="user-name">Bryan R.</p>
                                        <p>bryan.r@gmail.com</p>
                                        <a href="j:;" className="btn btn-info btn-xs">See Profile</a>
                                    </div>
                                </div>
                                <div className="panel-footer clearfix">
                                    <a href="j:;" className="btn btn-default btn-sm left">Account</a>
                                    <a href="#/pages/lock-screen" className="btn btn-info btn-sm right">Sign Out</a>
                                </div>
                            </div>
                        </li>
                        {/*#end profile drop*/}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header
