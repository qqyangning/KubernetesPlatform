/**
 * Created by yn on 07/07/17.
 */
import React from 'react'
import Echarts from 'react-echarts'
import liquidFill from 'echarts-liquidfill'

var optionDatas = {};
class Liquidfill extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        optionDatas={
            series: [{
                type: 'liquidFill',
                center:['25%','50%'],
                outline:{
                    show:true,
                    borderDistance:0
                },
                radius: '75%',
                data: [0.1],
                label:{
                    normal:{
                        textStyle:{
                            color:'black',
                            insideColor:'yellow',
                            fontSize:10
                        }
                    }
                }
            }],
            label:{
                normal:{
                    position:'outside'
                }

            },
            data:[
                {value: 335, name: '可用'},
                {value: 310, name: '不可用'},
            ]

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

export default Liquidfill
