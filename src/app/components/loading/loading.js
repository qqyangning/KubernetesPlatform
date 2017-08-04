/**
 * Created by yn on 27/07/17.
 */
import React from 'react'
import './loading.css'

class Loading extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            load:true
        }
    }

    componentWillUnmount(){
        if(typeof this.props.onHide === 'function'){
            setTimeout(this.props.onHide,20);
        }
    }

    render(){
        return(
            <div className="ui-loading ui-dialog-cnt ui-loading-bright">
            </div>
        );
    }
}

export default Loading
