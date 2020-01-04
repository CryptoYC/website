import React from 'react'
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts'
import {market_moon} from 'root/request'

class chartMarketMood extends React.Component {
  state = {
    option: {}
  }
  componentDidMount(){
    this.getOption();
  }
  getOption() {
    market_moon({}).then(res => {
      console.log('获取情绪指数',res)
      let value = res.data.GreedIndex
      let status = value < 25 ? '极度恐惧' : value < 50 ? '恐惧' : value < 75 ? '贪婪' : '极度贪婪'
      let bgColor = value < 25 ? '#C84048' : value < 50 ? '#A25545' : value < 75 ? '#48522D' : '#3A4328'
  
      let option = {
        series: [
          {
            name: '市场情绪指数',
            type: 'gauge',
            data: [
              {value: value}
            ],
            radius: '100%',
            splitNumber: 4,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              lineStyle: {
                color: [
                  [0.25, new echarts.graphic.LinearGradient(0, 1, 0, 0, [{offset: 0, color: '#C84048'}, {offset: 1, color: '#A95043'}])],
                  [0.5, new echarts.graphic.LinearGradient(0, 1, 0, 0, [{offset: 0, color: '#A25545'}, {offset: 1, color: '#686E42'}])],
                  [0.75, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#617144'}, {offset: 1, color: '#48522D'}])],
                  [1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#43512D'}, {offset: 1, color: '#3A4328'}])]
                ],
                width: 15
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              distance: 5,
              color: '#A1A1A1',
              fontSize: 14,
              formatter: function (value) {
                return value % 50 === 0 ? value : '';
              }
            },
            splitLine: {
              length: 15
            },
            pointer: {
              length: '65%',
              width: 8
            },
            itemStyle: {
              color: '#A1A1A1'
            },
            detail: {
              formatter: [
                '{a|当前}',
                `{b|${status}}`
              ].join(''),
              rich: {
                a: {
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 15,
                  padding: [5, 10, 5, 10]
                },
                b: {
                  backgroundColor: bgColor,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#fff',
                  padding: [5, 10, 5, 10]
                }
              }
            },
            markPoint: {
              data: [
                {
                  x: '50%',
                  y: '51%',
                  symbol: 'circle',
                  itemStyle: {
                    color: '#fff',
                    borderWidth: 0.5,
                    borderColor: '#ccc'
                  },
                  symbolSize: 30,
                }
              ],
              animation: false
            }
          }
        ]
      }

      this.setState({
        'option': option
      })
    })

}
  render() {
    return (
      <ReactEcharts
        option={this.state.option}
        style={{width: '100%', height: '100%'}}
        className='chart-market-mood' />
    )
  }
}

export default chartMarketMood