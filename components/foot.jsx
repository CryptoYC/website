import React from "react";
import "style/components/foot.styl";
import { Row, Col, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import Link from "next/link";
import { withNamespaces } from "react-i18next";
import i18n from "../i18n";
const imageObj = {
  github: "https://github.com/CryptoYC",
  telegram: "https://t.me/CryptoYC",
  jianshu: "https://www.jianshu.com/u/e8ebe6e329c0",
  weibo: "https://www.weibo.com/CryptoYC",
  facebook: "https://www.facebook.com/CryptoYC",
  twitter: "https://twitter.com/CryptoYC",
  medium: "https://medium.com/@CryptoYC",
  reddit: "https://www.reddit.com/user/CryptoYC"
};
const iconArr = [
  "github",
  "medium",
  "telegram",
  "twitter",
  "weibo"
];

class Home extends React.Component {
  render() {
    // console.log('foot', this)

    const { t } = this.props;
    const changeI18 = () => {
      const i18Arr = ["en", "cn"];
      const type = i18Arr.filter(e => e != i18n.language)[0];
      // console.log(type)
      i18n.changeLanguage(type);
    };
    return (
      <div>
        <div className="foot">
          {/* {t('Welcome to React')} */}
          <Row>
            <Col sm="4">
              <div className="img-title text-left">
                <Link href={{ pathname: "/" }}>
                  <a>
                    <img src="/static/images/index/17.png" alt="" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <div className="item nav-link">Redefine Tomorrow</div>
                <div className="item nav-link"> </div>
                <Nav.Link className="item">{t("privacy")}</Nav.Link>
                <Nav.Link className="item" style={{marginTop: 20}}>FAQ</Nav.Link>
              </div>
            </Col>
            <Col sm="2"/>
            <Col sm="2">
              <div className="title">{t("contain")}</div>
              <div className="content">
                <Link href="/benchmark">
                  <a className="item"> {t("benchmark")}</a>
                </Link>
                {/* <Link href='/community'><a className='item'> {t('community')}</a></Link> */}
                <Link href="/investment">
                  <a className="item"> {t("investment")}</a>
                </Link>
                <Link href="https://cryptoyc.github.io/">
                  <a className="item"> {t("blog")}</a>
                </Link>
              </div>
            </Col>
            <Col sm="2">
              <div className="title ">{t("about")}</div>
              <div className="content">
                <Link href="/aboutUs">
                  <a className="item">{t("aboutUs")}</a>
                </Link>
                <Link href="/group">
                  <a className="item"> {t("group")}</a>
                </Link>
                <Link href="/joinUs">
                  <a className="item"> {t("joinUs")}</a>
                </Link>
                {/* <Link href='/aboutUs'><a className='item'> {t('aboutUs')}</a></Link> */}
              </div>
            </Col>
            <Col sm="2">
              <div className="title ">{t("payAttention")}</div>
              <Row className="icon_list ">
                <Col sm="3" className="icon_item">
                  <OverlayTrigger
                    key="1"
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-${1}`}>
                        <img src="/static/images/foot/qrcode.png" alt="" />
                      </Tooltip>
                    }
                  >
                    <img src="/static/images/foot/weixin.png" alt="" />
                  </OverlayTrigger>
                </Col>
                {iconArr.map((key,index) => {
                  return (
                    <Col sm="3" className="icon_item" key={index}>
                      <a href={imageObj[key]}>
                        <img src={`/static/images/foot/${key}.png`} alt="" />
                      </a>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
          <Row className="logo justify-content-between">
            <Col className='pl-0' style={{marginTop: 23}} sm={{ span: 9 }}>@2019 CryptoYC.ALL RIGHTS Reserved</Col>
            <Col className='text-right pr-0' style={{marginTop: 13}} sm={{ span: 3 }}>
              <button onClick={changeI18}>中文 EN </button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withNamespaces("foot")(Home);
