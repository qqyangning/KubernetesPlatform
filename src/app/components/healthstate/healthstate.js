/**
 * Created by yn on 06/07/17.
 */
import React from 'react'

import '../../../static/styles/family.css'
/**Icon*/
import '../../../static/styles/font-awesome.min.css'
/*bootstrap style*/
import '../../../static/styles/bootstrap.css'
import './healthstate.css'

class Healthstate extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <table className="table table-striped">
                <thead>
                </thead>
                <tbody>
                <tr>
                    <td><i className=" fa fa-area-chart"></i> Engine</td>
                    <td><i className="fa fa-circle-o"></i> 正常</td>
                </tr>
                <tr>
                    <td><i className="fa fa-area-chart"></i>DNS</td>
                    <td><i className="fa fa-circle-o"></i>正常</td>
                </tr>
                <tr>
                    <td><i className="fa fa-area-chart"></i>Logging</td>
                    <td><i className="fa fa-circle-o"></i>正常</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Healthstate
