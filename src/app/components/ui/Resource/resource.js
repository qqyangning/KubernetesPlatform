/**
 * Created by yn on 24/07/17.
 */
import React from 'react'
import {Button,ButtonToolbar,Modal,DropdownButton,MenuItem} from 'react-bootstrap'
import Loading from './../../loading/loading.js'
import 'whatwg-fetch'

import './resource.css'

//搜索框组件
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search:''//搜索框中的内容
        };
        this.searchChange = this.searchChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onKeydown = this.onKeydown.bind(this);
    }
    onSearch(){
        // if(e.keyCode === '13') {
        var keyWord = this.state.search;
        this.props.search(keyWord);
        // }
        // e.preventDefault();
    }
    onKeydown(e){
        if(e.keyCode == 13) {
            var keyWord = this.state.search;
            this.props.search(keyWord);
        }
    }

    searchChange(e){
        this.setState({
            search: e.target.value
        });
    }

    render(){
        return (

            <div className="form-horizontal right">
                <input type="text" className="input-sm" placeholder="Type keyword" onKeyDown={this.onKeydown.bind(this)} onChange={this.searchChange.bind(this)} />
                <Button  bsStyle="primary" onClick={this.onSearch.bind(this)} style={{float:'right'}}>搜索</Button>
            </div>
        );
    }
}


//添加配置组件
var count = 1;
class Configure extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            config:'',
            cpu:'',
            gpu:'',
            memory:'',
            disk:'',
            network:''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
        this.configChange = this.configChange.bind(this);
        this.cpuChange = this.cpuChange.bind(this);
        this.gpuChange = this.gpuChange.bind(this);
        this.memoryChange = this.memoryChange.bind(this);
        this.diskChange = this.diskChange.bind(this);
        this.networkChange = this.networkChange.bind(this);

    }

    //当配置改变时
    configChange(e){
        this.setState({
            config:e.target.value,
        })
    }
    //当cpu改变时
    cpuChange(e){
        this.setState({
            cpu:e.target.value,
        })
    }
    //当gpu改变时
    gpuChange(e){
        this.setState({
            gpu:e.target.value,
        })
    }
    //当内存改变时
    memoryChange(e){
        this.setState({
            memory:e.target.value,
        })
    }
    //当磁盘改变时
    diskChange(e){
        this.setState({
            disk:e.target.value,
        })
    }
    //当网络改变时
    networkChange(e){
        this.setState({
            network:e.target.value,
        })
    }
    //点击取消按钮
    cancel(){
        this.props.transfer('none');
    }
    //提交
    onSubmit(){
        this.props.transfer('none');
        var id = count++;
        var config = this.state.config;
        var cpu = this.state.cpu;
        var gpu = this.state.gpu;
        var memory = this.state.memory;
        var disk = this.state.disk;
        var network = this.state.network;

        url = 'http://controller:9090/resources';

        let formData = new FormData();
        formData.append('id',id);
        formData.append('config',config);
        formData.append('cpu',cpu);
        formData.append('gpu',gpu);
        formData.append('memory',memory);
        formData.append('disk',disk);
        formData.append('network',network);

        fetch(url,{
            method:'POST',
            body:formData,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (respone) {
            return respone.json();
        }).then(function (json) {
            console.log(json.msg);
            if(json.msg == 'OK'){
                console.log('OK');
            }
        }).catch(function (e) {
            console.log(e);
        })

    }
    // //当内存的选择框变化时,配置名称也会变化
    // onChange(e){
    //     var configName = (parseInt(e.target.value) / 128 ).toString() + 'X';
    //     this.setState({
    //         configName:configName
    //     })
    //
    // }
    render(){
        return (
            <form >
                <div className="config">
                    <div className="config-panel config-mb30 config-panel-primary">
                        <div className="config-panel-heading">
                            <i>基本配置</i>
                        </div>
                        <div className="config-panel-body">
                            <div className="config-row">
                                <div className="config-column left">
                                    <div className="font left">配置名称：</div>
                                    <input className="config-name" type="text" value="1X" onChange={this.configChange.bind(this)} />
                                </div>
                            </div>
                                <div className="config-row">
                                    <div className="config-column left">
                                        <div className="font left">CPU:</div>
                                        <select className="config-select left">
                                            <option value='1核'>1</option>
                                            <option value='2核'>2</option>
                                            <option value='4核'>4</option>
                                        </select>
                                        <div className="font left">核</div>
                                    </div>
                                </div>
                            <div className="config-row">
                                <div className="config-column left">
                                    <div className="font left">GPU:</div>
                                    <select className="config-select left">
                                        <option value='1个'>1</option>
                                        <option value='2个'>2</option>
                                    </select>
                                <div className="font left">个</div>
                                </div>
                            </div>
                            <div className="config-row">
                            <div className="config-column left">
                                <div className="font left">内存:</div>
                                <select className="config-select left" >
                                    <option value='128'>128</option>
                                    <option value='256'>256</option>
                                    <option value='512'>512</option>
                                    <option value='1024'>1024</option>
                                </select>
                                <div className="font left">MB</div>
                            </div>
                            </div>
                            <div className="config-row">
                            <div className="config-column left">
                                <div className="font left">硬盘:</div>
                                <select className="config-select left">
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='4'>4</option>
                                    <option value='8'>8</option>
                                    <option value='16'>16</option>
                                </select>
                                <div className="font left">GB</div>
                            </div>
                            </div>
                            <div className="config-row">
                            <div className="config-column left">
                                <div className="font left">网络:</div>
                                <select className="config-select left">
                                    <option value='0'>0</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="config-panel-footer">
                            <button className="bt" onClick={this.cancel.bind(this)}>取消</button>
                            <button className="bt" onClick={this.onSubmit.bind(this)}>确定</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
//定义全局的变量，存储从服务器请求的数据
var datas = [];
//定义请求的url
var url = 'http://controller:9090/resources';
//资源配置组件
class Resource extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[], //从服务器获取的数据
            isLoading:true,//判断数据加载面板是否显示
            isDisplay:'none'//判断添加配置面板是否显示
        }

        this.search = this.search.bind(this);
        this.transfer = this.transfer.bind(this);
    }

    //添加配置
    addConfig(){
        this.setState({
            isDisplay:'inline-block'
        })
    }
    //向子组件传递isDisplay参数
    transfer(isDisplay){
        this.setState({
            isDisplay:isDisplay
        })
    }
    //定义搜索按钮函数
    search(text){
        var keyWord = text;

        url = 'http://controller:9090/images?local=' + this.state.isNative +'&imagename=' + keyWord;

        console.log(url);

        fetch(url,{
            method:'GET'
        }).then(function (response) {
            return response.json();
        }).then((data) => {
            this.setState({
                data:data,
                isHide:true
            })
        }).catch((e) => {

        });
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        }).then(function (response) {
            return response.json();
        }).then((data) => {
            this.setState({
                data:data,
                isLoading:false
            })
        }).catch((e) => {

        });
    }

    render(){
        var list = [];
        datas = this.state.data;
        for(var i = 0; i < datas.length; i ++) {
            var item = datas[i];
            list.push(
                <tr key={i}>
                    <td> {item.config}</td>
                    <td> {item.cpu}</td>
                    <td> {item.gpu}</td>
                    <td> {item.memory}</td>
                    <td> {item.disk}</td>
                    <td> {item.network}</td>
                    <td><Button bsStyle="primary">删除</Button></td>
                </tr>
            )
        }
        return (
            <div className="page page-table-static clearfix">
                <div className="page-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-lined table-responsive mb30">
                                <div className="panel-body">
                                    <div className="small text-bold left mt5" >
                                        <ButtonToolbar>
                                            <Button bsStyle="primary"  onClick={this.addConfig.bind(this)} >添加配置
                                            </Button>
                                            <Button bsStyle="primary">删除配置</Button>
                                        </ButtonToolbar>
                                        <div className="add-config" style= {{'display':this.state.isDisplay}}>
                                            <Configure transfer={(isDisplay) => this.transfer(isDisplay)} />
                                        </div>
                                        {/*<Trigger/>*/}
                                    </div>
                                    <Search search={this.search.bind(this)} />
                                </div>
                                {
                                    (!this.state.isLoading)?
                                        (
                                            <div >
                                                <table className="table ">
                                                    <thead>
                                                    <tr>
                                                        <th>
                                                            资源配置
                                                        </th>
                                                        <th>
                                                            CPU
                                                        </th>
                                                        <th>
                                                            GPU
                                                        </th>
                                                        <th>
                                                            内存
                                                        </th>
                                                        <th>
                                                            硬盘
                                                        </th>
                                                        <th>
                                                            网络
                                                        </th>
                                                        <th>
                                                            操作
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {list}
                                                    </tbody>
                                                </table>
                                            </div>
                                        ) : (<Loading/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resource
