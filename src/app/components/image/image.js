/**
 * Created by yn on 07/07/17.
 */
import React from 'react'
import Echarts from 'react-echarts'

var optionDatas = {};
class Imagechart extends React.Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){

        optionDatas={
            legend:{
                orient:'vertical',
                top:'18%',
                right:'10%',
                itemGap:10,
                itemWidth:10,
                itemHeight:10,
                data:['公有','私有']
            },
            series: [{
                name: '公有镜像',
                type: 'pie',
                center:['25%','50%'],
                radius: [30,40],
                avoidLabelOverlap: false,
                startAngle: 180,
                color: ['#38b4ee', 'transparent'],
                data: [{
                    name: '私有',
                    value: 686,
                }, {
                    name: '',
                    value: 686
                }]
            }, {
                name: '私有镜像',
                type: 'pie',
                center:['25%','50%'],
                radius: [30,40],
                avoidLabelOverlap: false,
                startAngle: 0,
                clockwise: false,
                color: ['#21d191', 'transparent'],
                data: [{
                    name: '公有',
                    value: 1,

                }, {
                    name: '',
                    value: 3
                }]
            }]
        }
    }
    render(){
        return(
            <div>
                <Echarts option={optionDatas}/>
            </div>
        );
    }
}

export default Imagechart
