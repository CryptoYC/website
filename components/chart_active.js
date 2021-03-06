import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { activePrice } from 'root/request'
import { withNamespaces } from "react-i18next";


class chartActive extends React.Component {
  state = {
    option: {}
  }
  componentDidMount() {
    this.getOption()
  }

  componentWillUpdate(){
    const { t } = this.props;
    if(this.state.option.tooltip){
      this.state.option.yAxis[0].name=t("addressNum")
      this.state.option.yAxis[1].name=t("price")
    }
    
    this.echarts_react.getEchartsInstance().setOption(this.state.option);
  }
  getOption() {
    const { t } = this.props;
    activePrice().then(res => {
      var btc, eth, btc_price, eth_price, time = [];
      btc = res.data.data.btc
      eth = res.data.data.eth
      btc_price = res.data.data.btc_price
      eth_price = res.data.data.eth_price
      time = res.data.data.time

      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          },
          formatter: function (params) {
            return params.map((item) => {
              let name = item.seriesName == 'BTC ' ? 'BTC_PRICE' : item.seriesName == 'ETH ' ? 'ETH_PRICE' : item.seriesName
              return name + ': ' + item.value
            }).join('<br>')
          }
        },
        legend: {
          right: '20%',
          itemHeight: 5,
          itemWidth: 40,
          data: ['BTC ', 'ETH ', 'BTC', 'ETH']
        },
        xAxis: {
          type: 'category',
          data: time,
          axisPointer: {
            type: 'shadow'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 30,
            color: '#A1A1A1'
          }
        },
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 100
        }, {
          start: 0,
          end: 100,
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
          }
        }],
        yAxis: [
          {
          name: t("addressNum"),
          type: 'value',
          nameTextStyle: {
            color: '#9E9F9F',
            fontSize: 14,
            align: 'right',
            padding: [4, -10, 4, 4]
          },
          axisLabel: {
            formatter: '{value}'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#A1A1A1'
          }
        },
        {
          name: t("price"),
          nameTextStyle: {
            color: '#9E9F9F',
            fontSize: 14,
            padding: [4, -50, 4, 4]
          },
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#A1A1A1'
          }
        }
        ],
        series: [{
          name: 'BTC ',
          type: 'line',
          yAxisIndex: 1,
          data: btc_price,
          itemStyle: {
            color: '#D77F0B'
          },
          showSymbol: false
        },
        {
          name: 'ETH ',
          type: 'line',
          yAxisIndex: 1,
          data: eth_price,
          itemStyle: {
            color: '#FBDEAE'
          },
          showSymbol: false
        },
        {
          name: 'BTC',
          type: 'bar',
          data: btc,
          itemStyle: {
            color: '#D52937'
          },
          barGap: 0
        },
        {
          name: 'ETH',
          type: 'bar',
          data: eth,
          itemStyle: {
            color: '#607142'
          },
          barGap: 0
        }
        ]
      };


      this.setState({
        'option': option
      })

    })


  }

  render() {

    return (
      <ReactEcharts
       ref={(e) => { this.echarts_react = e;}}
        option={this.state.option}
        style={
          {
            width: '100%',
            height: '100%'
          }
        }
        className='chart-market-mood' />
    )
  }
}
export default withNamespaces("index")(chartActive);