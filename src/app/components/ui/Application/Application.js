/**
 * Created by yn on 10/07/17.
 */
import React from 'react'
import {Button,ButtonToolbar} from 'react-bootstrap'


import './Application.css'


class Application extends React.Component{
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    }

    //search
    search(){

    }

    //create a new application
    handleCreateApp(){

    }
    render(){
        return(
            <div className="page page-table-static clearfix">
                <div className="page-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-lined table-responsive mb30">
                                <div className="panel-body">
                                    <div className="small text-bold left mt5">
                                        <ButtonToolbar>
                                            <Button bsStyle="primary" onClick={this.handleCreateApp.bind(this)}>创建应用</Button>
                                            <Button >启动</Button>
                                            <Button >停止</Button>
                                            <Button >删除</Button>
                                        </ButtonToolbar>
                                    </div>
                                    <form className="form-horizontal right col-lg-4">
                                        <input type="text" className="form-control input-sm" placeholder="Type keyword" onKeyUp={this.search.bind(this)} />
                                    </form>
                                </div>
                                {/*data table*/}
                                <table className="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            <th>

                                            </th>
                                            <th>
                                                应用名称
                                            </th>
                                            <th>
                                                镜像
                                            </th>
                                            <th>
                                                应用描述
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                    {/*end data table*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Application

