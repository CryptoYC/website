import React from "react";
import ReactEcharts from 'echarts-for-react';
import "style/index.styl";
import MyNav from "c/nav_white";
import Head from "c/head";
import MyFoot from "c/foot";
import ChartMarketMood from "c/chart_marketmood"
import { Row, Col, Nav } from "react-bootstrap";
import otherRouterConst from "../otherRouterConst";
import { toOther } from "../router";
import { withNamespaces } from "react-i18next";
const GetIcon = arr => {
  const length = arr.length;
  const spaceArr = [];
  for (let i = 0; i < 5 - length; i++) {
    spaceArr.push(1);
  }
  return arr.map((e, index) => {
    return (
      <React.Fragment key={index}>
        <div className="column_center row_center icon_bg">
          <a
            rel="stylesheet"
            href={otherRouterConst[e] ? otherRouterConst[e].link : ""}
          >
            <div className={`back_${e}`} />
          </a>
        </div>
        {length < 5 &&
          index + 1 == length &&
          spaceArr.map(e => {
            return (
              <Col
                key={e}
                sm="2"
                style={{ background: "none" }}
                className="column_center row_center icon_bg"
              />
            );
          })}
      </React.Fragment>
    );
  });
};

const updataTime = (separator = '') =>{
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}
class Animate_text extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: [] };
    this._point = 0;
  }
  componentDidMount() {
    this.pushText();
  }
  pushText() {
    const { text } = this.state;
    if (text.length < this.props.text[this._point].length) {
      text.push(this.props.text[this._point][text.length]);
      this.setState(
        {
          text
        },
        () => {
          setTimeout(() => {
            this.pushText();
          }, 100);
        }
      );
    } else {
      if (this._point + 1 < this.props.text.length) {
        this._point++;
      } else {
        this._point = 0;
      }
      setTimeout(() => {
        this.setState(
          {
            text: []
          },
          () => {
            this.pushText();
          }
        );
      }, 2000);
    }
  }
  render() {
    const { text } = this.state;
    var reactid = 0;
    return (
      <div className="animate">
        {text.map(e => (
          <span className="gradually" key={reactid++}>{e} </span>
        ))}
      </div>
    );
  }
}

const GetMarketMood = (t) => {
  return (
    <div className="list_item list-item-data">
      <div className="item-left">
        <div>
          <span>{t("marketSentiment")}</span>
          <span>{t("sentimentAnalysis")}</span>
        </div>
        <a className="more-button" href="/data">{t("moreData")}></a>
      </div>
      <div className="item-right">
        <span>{t("Updated")}: {updataTime("-")}</span>
        <ChartMarketMood></ChartMarketMood>
        <span>{t("dataSources")}: alternative.me</span>
      </div>
    </div>
  )
}

const Home = ({ t }) => (
  <div className="index">
    <Head />
    <MyNav />
    <div className="contain_text">
      <div className="text">{t("sam_1")}</div>
      <div className="text">{t("sam_2")}</div>
      <div className="text color_red">
        <Animate_text text={[t("sam_3"), t("sam_4")]} />
      </div>
    </div>
    {GetMarketMood(t)}
    <Row
      className="list_item"
      style={{ paddingTop: 104, paddingLeft: 303, paddingBottom: 60 }}
    > 
      <Col sm="3" className="column_center">
        <img className="images" src="/static/images/index/02.png" style={{marginTop: 120}} />
      </Col>
      <Col sm="1" />
      <Col sm={{ span: 8 }} className="column_center">
        <div className="title text-left believe">{t("title_1")}</div>
        <div className="text">{t("text_1")}</div>
        <div className="text_right text-right">
          <button
            className="button"
            onClick={() => {
              toOther("/benchmark");
            }}
          >
            {t("button_1")} <span className="arrow">></span>
          </button>
        </div>
      </Col>
    </Row>
    <div className="list_item " style={{ paddingTop: 135, paddingBottom: 186 }}>
      <div className="title believe" style={{ marginBottom: 63 }}>
        {t("title_3")}
      </div>
      <div className="icon-box">{GetIcon([1, 2, 3, 4, 5, 6, 7])}</div>
      <div className="margin-top_20 icon-box">
        {GetIcon([8, 9, 10, 11, 12, 13, 14])}
      </div>
    </div>
    <div
      className="list_item background_ece"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <div className="title ">{t("title_4")}</div>
      <div>{t("foot1")}</div>
      <div>{t("foot2")}</div>
      <button
        style={{ marginTop: 30 }}
        className="button"
        onClick={() => {
          toOther("/contactUs");
        }}
      >
        {t("email")}
        <span className="arrow">></span>
      </button>
    </div>
    <MyFoot />
  </div>
);
export default withNamespaces("index")(Home);
