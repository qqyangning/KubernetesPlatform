/**
 * Created by yn on 23/06/17.
 */
import React from 'react'
import ReactDom from 'react-dom'
import Echarts from 'echarts'
import Cookies from 'universal-cookie'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './../../../../static/styles/family.css'

/**Icon*/
import './../../../../static/styles/font-awesome.min.css'

/*bootstrap style*/
import './../../../../static/styles/bootstrap.css'
import './dashboard.css'

import Chart from './../../chart/chart.js'
import Healthstate from './../../healthstate/healthstate.js'
import Liquidfill from './../../store/liquidFill.js'
import Login from './../Login/login.js'

const cookies = new Cookies();

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.SignIn = this.SignIn.bind(this);
        this.SignUp = this.SignUp.bind(this);
    }

    SignIn(){

    }

    SignUp(){

    }


    render(){
        return (
            <div className="page page-dashboard clearfix ng-scope" >
                <div className="dash-head clearfix">
                    <div className="left">
                        <h3 className="text-uppercase title text-normal">Dashboard</h3>
                        <p className="small text-uppercase">Welcome {cookies.get('Username')? cookies.get('Username') : '游客'}</p>
                    </div>
                    <div className="right mt15">
                        <Link to="/login"><button className="btn btn-primary text-uppercase btn-lg btn-rounded" >Sign In</button></Link>
                        <Link to="/register"><button className="btn btn-primary text-uppercase btn-lg btn-rounded" >Sign Up</button></Link>
                    </div>

                </div>
                <div className="page-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-xs-6">
                            <div className="panel panel-default mb30 mini-box">
                                <div className="panel-body">
                                    <div className="info left">
                                        <span className="title">用户信息</span>
                                    </div>
                                </div>
                                <div className="panel-footer panel-footer-sm clearfix bg-primary">
                                    {/*<Chart data={data} />*/}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xs-6">
                            <div className="panel panel-default mb30 mini-box">
                                <div className="panel-body">
                                    <div className="info left">
                                        <span className="title">应用</span>
                                    </div>
                                </div>
                                <div className="panel-footer panel-footer-sm clearfix bg-info">
                                    <Chart/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xs-6">
                            <div className="panel panel-default mb30 mini-box">
                                <div className="panel-body">
                                    <div className="info left">
                                        <span className="title">服务</span>
                                    </div>
                                </div>
                                <div className="panel-footer panel-footer-sm clearfix bg-primary">
                                    <Chart/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xs-6">
                            <div className="panel panel-default mb30 mini-box">
                                <div className="panel-body">
                                    <div className="info left">
                                        <span className="title">健康状态</span>
                                    </div>
                                </div>
                                <div className="panel-footer panel-footer-sm clearfix bg-info">
                                    <Healthstate/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-xs-6">
                            <div className="panel panel-default mb30 mini-box">
                                <div className="panel-body">
                                    <div className="info left">
                                        <span className="title">存储</span>
                                    </div>
                                </div>
                                <div className="panel-footer panel-footer-sm clearfix bg-primary">
                                    <Liquidfill/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xs-6">
                            <div className="panel panel-default mb30 mini-box">
                                <div className="panel-body">
                                    <div className="info left">
                                        <span className="title">CPU</span>
                                    </div>

                                </div>
                                <div className="panel-footer panel-footer-sm clearfix bg-info">
                                    <Liquidfill/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xs-6">
                            <div className="panel panel-default mb30 mini-box">
                                <div className="panel-body">
                                    <div className="info left">
                                        <span className="title">节点</span>
                                    </div>
                                </div>
                                <div className="panel-footer panel-footer-sm clearfix bg-primary">
                                    <Chart />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xs-6">
                            <div className="panel panel-default mb30 mini-box">
                                <div className="panel-body">
                                    <div className="info left">
                                        <span className="title">审计日志</span>
                                    </div>
                                </div>
                                <div className="panel-footer panel-footer-sm clearfix bg-info">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard
