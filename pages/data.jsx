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
      showTipsMarket:false,
      showTipsActive:false,
      showTipsDeal:false
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
              <div className="title">{t("marketSentiment")}<span className="tips" onClick={() => { this.setState({showTipsMarket:!this.state.showTipsMarket})   }}>?</span></div>
              {this.state.showTipsMarket ? (<div className="tips-box">
              <p>{t('showTipsMarket')}</p>
              <p>{t('showTipsMarket_s1')}</p>
              <p>{t('showTipsMarket_s2')}</p>
              <p>{t('showTipsMarket_s3')}</p>
              <p>{t('showTipsMarket_s4')}</p>
              <p>{t('showTipsMarket_s5')}</p>
              </div>): ""}
              <div className="chart">
                <ChartMarketMood />
              </div>
              <div className="footer">
                <span>{t("Updated")}: {updataTime("-")}</span>
                <span>{t("dataSources")}: alternative.me</span>
              </div>
            </div>
            <div className="chart-item">
              <div className="title">{t("addressNumPrice")}<span className="tips" onClick={() => { this.setState({showTipsActive:!this.state.showTipsActive})   }}>?</span></div>
              {this.state.showTipsActive ? (<div className="tips-box">
              <p>{t('showTipsActive')}</p>
              </div>): ""}
              <div className="chart">
                <ChartActive />
              </div>
              <div className="footer">
                <span>{t("Updated")}: {updataTime("-")}</span>
                <span>{t("dataSources")}: troytrade.com</span>
              </div>
            </div>
          </div>
          <div className="rank">
            <div className="title">{t("cryptocurrency")}<span className="tips" onClick={() => { this.setState({showTipsDeal:!this.state.showTipsDeal})   }}>?</span></div>
            {this.state.showTipsDeal ? (<div className="tips-box rank_tips-box">
            <p>{t('showTipsDeal')}</p>
              </div>): ""}
            <div className="content">
              <div className="item">
                <span>{t("ranking")}</span>
                <span>{t("exchange")}</span>
                <span>{t("balance")}</span>
                <span>{t("change")}</span>
                <span>{t("inFlow")}</span>
                <span>{t("largeDeposits")}</span>
                <span>{t("address")}</span>
              </div>
              {getRank(this.state.list)}
            </div>
            <div className="footer">
              <span>{t("Updated")}: {updataTime("-")}</span>
              <span>{t("dataSources")}: chain.info</span>
            </div>
          </div>
        </div>
        <MyFoot />
      </div>
    );
  }
}

export default withNamespaces("dataPage")(Chain);
