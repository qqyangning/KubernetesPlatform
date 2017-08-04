/**
 * Created by yn on 04/07/17.
 */
import React from 'react'
import Echarts from 'react-echarts'
// import ChartistGraph from 'react-chartist'

// class Chart extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         var data = {
//             label: ['W1', 'W2', 'W3'],
//             series: [
//                 [2,5,3]
//             ]
//         };
//         var options = {
//             width:50,
//             height:50,
//             chartPadding:5,
//             className:{
//                 chartPie:'ct-chart-pit',
//                 chartDonut:'ct-chart-donut',
//                 series:'ct-chart-series',
//                 slicePie:'ct-chart-pie',
//                 sliceDonut:'ct-slice-donut',
//                 sliceDonutSolid:'ct-slice-donut-solid',
//                 label:'ct-label'
//             },
//             startA
//         };
//         var type = 'Pie';
//         return (
//             <div>
//                 <ChartistGraph data={data} options={options} type={type}/>
//             </div>
//         )
//
//     }
// }
var optionDatas = {};
class Chart extends React.Component{
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // optionDatas = {
        //     title: {
        //         text: 'ECharts 入门示例'
        //     },
        //     tooltip: {},
        //     legend: {
        //         data:['销量']
        //     },
        //     xAxis: {
        //         data: ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
        //     },
        //     yAxis: {},
        //     series: [{
        //         name: '销量',
        //         type: 'bar',
        //         data: this.props.data
        //     }]
        // };
        optionDatas = {
            tooltip:{
                trigger:'item',
                formatter:'{b}: {c} ({d}%)'
            },
            legend:{
                orient:'vertical',
                top:'18%',
                right:'10%',
                itemGap:10,
                itemWidth:10,
                itemHeight:10,
                data:['运行中','已停止','操作中']
            },
            series: [{
                type: 'pie',
                center:['25%','50%'],
                radius: [30,40],
                avoidLabelOverlap: false,
                color:['#21d191','#c7f6ff','#38b4ee'],
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{d}%'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '15',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '运行中'},
                    {value: 310, name: '已停止'},
                    {value: 234, name: '操作中'}
                ]
            }]
        };
    }

    render(){
        return (
            <div>
                <Echarts option={optionDatas}/>
            </div>
        );
    }
}

export default Chart
