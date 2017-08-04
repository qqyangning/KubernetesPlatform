/**
 * Created by yn on 21/06/17.
 */
import React from 'react'
import ReactDom from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import '../../../static/styles/family.css'

/**Icon*/
import '../../../static/styles/font-awesome.min.css'

/*bootstrap style*/
import '../../../static/styles/bootstrap.css'

/*Sidebar style*/
import './sidebar.css'

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isDropdown:false
        }
    }

    Dropdown = ()=>{
        var isDropdown = this.state.isDropdown;
        this.setState({
            isDropdown:!isDropdown
        });
    }

    render() {
        return (
                <div className="nav-wrap ps-container ps-active-y" id="site-nav">
                    {/*Site nav (vertical)*/}
                    <nav className="site-nav clearfix" role="navigation" >
                        <div className="nav-title panel-heading"><i>导航</i></div>
                        <ul className="list-unstyled nav-list">
                            <li>
                                <Link to="/dashboard">
                                    <i className="fa fa-dashboard icon"></i>
                                    <span className="text">总览</span>
                                </Link>
                            </li>
                            <li className={this.state.isDropdown ? 'open' : ''} onClick={this.Dropdown}>
                                <Link to="/application">
                                    <i className="fa fa-qrcode icon"></i>
                                    <span className="text">应用管理</span>
                                    <i className="arrow fa fa-angle-right right" style={{float:'center'}}></i>
                                </Link>
                                <ul className="inner-drop list-unstyled" style={{display: (this.state.isDropdown ? 'block' : 'none')}}>
                                    <li><Link to="/application" >应用</Link></li>
                                    <li><Link to="/imagemanage">镜像</Link></li>
                                    <li><Link to="/servicemanage">服务</Link></li>
                                    <li><Link to="/resource">资源</Link></li>
                                    <li><Link to="/datavolume">数据卷</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/CICD">
                                    <i className="fa  fa-cube icon"></i>
                                    <span className="text">CI/CD</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="database">
                                    <i className="fa  fa-database icon"></i>
                                    <span className="text">数据库</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="log">
                                    <i className="fa   fa-line-chart icon"></i>
                                    <span className="text">日志</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="usercenter">
                                    <i className="fa   fa-user icon"></i>
                                    <span className="text">用户中心</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        );
    }
}

export default Sidebar
