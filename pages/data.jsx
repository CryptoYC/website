import React from "react";
import "style/data.styl";
import MyNav from "c/nav_white";
import Head from "c/head";
import MyFoot from "c/foot";
import ChartMarketMood from "c/chart_marketmood"
import ChartActive from "c/chart_active"
import { withNamespaces } from "react-i18next";
import { chainInfo } from 'root/request'


const getRank = (data) => {
  return data.map((item, index) => {
    return (
      <div className="item" key={index} onClick={() => { window.open(item.url) }}>
        <span>{item.rank}</span>
        <span>
          <img src={item.iconUrl} />
          <span className="name">{item.name}</span>
        </span>
        <span>{item.balance}</span>
        <span>{item.percentBalance}%</span>
        <span>{item.netIncome}</span>
        <span>{item.bigTotalNum}</span>
        <span>{item.addressCount}</span>
      </div>
    )
  })
}

const updataTime = (separator = '') =>{
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

class Chain extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      list: [],
      showTips:false
    };
  }
  componentDidMount(){
    chainInfo().then(res => {
      this.setState({
        list: res.data.data.entityList
      })
    })
  }
  render() {
    const { t } = this.props;

    return (
      <div className="data-page">
        <Head />
        <MyNav />
        <div className="head">
          <img src="/static/images/dataPage/1.jpg" alt="" />
          <div className="content">
            <div className="title">{t("data")}</div>
          </div>
        </div>

        <div className="body-container">
          <div className="charts">
            <div className="chart-item">
              <div className="title">市场情绪指数<span className="tips" onClick={() => { this.setState({showTips:!this.state.showTips})   }}>?</span></div>
              {this.state.showTips ? (<div className="tips-box">
              <p>We are gathering data from the five following sources. Each data point is valued the same as the day before in order to visualize a meaningful progress in sentiment change of the crypto market.First of all, the current index is for bitcoin only (we offer separate indices for large alt coins soon), because a big part of it is the volatility of the coin price.</p>
              <p>But let’s list all the different factors we’re including in the current index:</p>
              <p>Volatility (25 %)</p>
              <p>Market Momentum/Volume (25%)</p>
              <p>Social Media (15%)</p>
              <p>Surveys (15%)</p>
              <p>Dominance (10%)</p>
              </div>): ""}
              <div className="chart">
                <ChartMarketMood />
              </div>
              <div className="footer">
                <span>更新时间: {updataTime("-")}</span>
                <span>数据来源: alternative.me</span>
              </div>
            </div>
            <div className="chart-item">
              <div className="title">活跃地址/价格</div>
              <div className="chart">
                <ChartActive />
              </div>
              <div className="footer">
                <span>更新时间: {updataTime("-")}</span>
                <span>数据来源: troytrade.com</span>
              </div>
            </div>
          </div>
          <div className="rank">
            <div className="title">交易所排行</div>
            <div className="content">
              <div className="item">
                <span>排行</span>
                <span>交易所</span>
                <span>链上余额(BTC)</span>
                <span>24h涨跌幅</span>
                <span>24h净流入(BTC)</span>
                <span>24h大额充提笔数</span>
                <span>地址数</span>
              </div>
              {getRank(this.state.list)}
            </div>
            <div className="footer">
              <span>更新时间: {updataTime("-")}</span>
              <span>数据来源: chain.info</span>
            </div>
          </div>
        </div>
        <MyFoot />
      </div>
    );
  }
}

export default withNamespaces("dataPage")(Chain);
