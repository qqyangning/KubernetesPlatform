import React from 'react'
import Sidebar from '../../components/sidebar/sidebar.controller.jsx'
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo.jsx'
// import AppDisplay from '../../components/AppDisplay/AppDisplay.jsx'
// import DataVolume from '../../components/DataVolume/DataVolume.jsx'
import HealthState from '../../components/HealthState/HealthState.jsx'

import Cookies from 'universal-cookie'
import {browserHistory} from 'react-router'


const cookies = new Cookies();

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = ({
            'Username':''
        })
    }
    componentWillMount() {
        // console.log('will mount')
        this.state.Username = cookies.get('Username')
        if(!this.username) {
            browserHistory.push('/login')
        }
    }
    render(){
        const username = this.state.Username
        const mainTable = (
            <div id="table-container">
               <table>
                  <tbody>
                    <tr>
                      <td><PersonalInfo/></td>
                      <td><HealthState/></td>
                    </tr>
                  </tbody>
               </table>
            </div>
        )

        return(
            <div>
                    {mainTable}
            </div>
        )
    }
}

export default Main
