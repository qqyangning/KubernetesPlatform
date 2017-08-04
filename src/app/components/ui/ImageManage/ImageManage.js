/**
 * Created by yn on 13/07/17.
 */
import React from 'react'
import {Button,ButtonToolbar,Modal,DropdownButton,MenuItem} from 'react-bootstrap'
import {ModelContainer,ModelDialog} from 'react-modal-dialog'
import 'whatwg-fetch'

import './ImageManage.css'
import Loading from '../../loading/loading.js'
// import Paging from './../../paging/paging.js'


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

            <div className="form-horizontal right col-lg-4">
                <input type="text" className="input-sm" placeholder="Type keyword" onKeyDown={this.onKeydown.bind(this)} onChange={this.searchChange.bind(this)} />
                <Button  bsStyle="primary" onClick={this.onSearch.bind(this)} style={{float:'right'}}>搜索</Button>
            </div>
        );
    }
}


//从服务器获取的数据
var datas = [];
var url = 'http://controller:9090/images';//向服务器发送的请求地址
class ImageManage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isNative:true,//判断是否是本地镜像货值是远程镜像
            isHide:false,//控制loading组件是否显示
            data:[]
        };

        this.search = this.search.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.selectChange = this.selectChange.bind(this);
    }

    //search
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
    // //批量选中镜像
    // checkChange(event){
    //     if(event.target.checked == true) {
    //         this.setState({
    //             val:event.target.value,
    //         });
    //         console.log(this.state.val);
    //         var val = this.state.val;
    //         this.setState({
    //             arr:[val,...this.state.arr]
    //         });
    //
    //     }
    // }
    //删除镜像
    onDelete(index){
        this.state.arr.splice(index,1);
    }

    componentWillMount(){
    }

    componentDidMount(){
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

    componentWillUpdate(){
    }
    componentDidUpdate(){

    }
    componentWillUnmount() {

    }

    selectChange(e){
        var isNative = e.target.value;

        if(isNative === 'true') {
            url = 'http://controller:9090/images?local=true';
            this.setState({
                isNative:true
            });
        } else if(isNative === 'false') {
            url = 'http://controller:9090/images?local=false';
            this.setState({
                isNative:false
            });
        }
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

    render(){

        var list = [];
        datas = this.state.data;
        console.log(datas);
        for(var i = 0; i < datas.length; i ++) {
            var item = datas[i];
            list.push(
                <tr key={i}>
                    <td> {item.imagename}</td>
                    <td> {item.version}</td>
                    <td> {item.local ? '本地镜像' : '远程镜像'}</td>
                    <td><Button bsStyle="primary" onClick={this.onDelete.bind(this)}>删除</Button></td>
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
                                                <Button bsStyle="primary">添加镜像 </Button>
                                                <Button bsStyle="primary" onClick={this.onDelete}>删除镜像</Button>
                                                <select className="imageselect" onChange={this.selectChange.bind(this)} >
                                                    <option value="true">本地镜像</option>
                                                    <option value="false">远程镜像</option>
                                                </select>
                                            </ButtonToolbar>
                                            {/*<Trigger/>*/}
                                        </div>
                                        <Search search={this.search.bind(this)} />
                                    </div>
                                    {
                                        (this.state.isHide)?
                                            (
                                                <div >
                                                    <table className="table ">
                                                        <thead>
                                                        <tr>
                                                            <th>
                                                                镜像名称
                                                            </th>
                                                            <th>
                                                                镜像版本
                                                            </th>
                                                            <th>
                                                                镜像描述
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
        )
    }
}

export default ImageManage

