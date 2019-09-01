import React from "react";
import "style/investment.styl";
import MyNav from "c/nav_white";
import Head from "c/head";
import MyFoot from "c/foot";
import { Row, Col } from "react-bootstrap";
import { withNamespaces } from "react-i18next";

const URL = [
  "https://bitcoin.org", "https://ethereum.org", "https://eos.io", "https://obyte.org","https://iota.org",
  "https://filecoin.io", "http://idni.org", "https://kyber.network", "https://z.cash", "https://sia.tech",
  "https://liquid.com", "https://gate.io", "https://polkadot.network", "https://qtum.org", "https://nervos.org",
  "https://bitcoincash.org","https://tezos.com","https://chaoex.com","https://bitrabbit.com","https://sfex.net",
  "", "", "http://candaq.com", "https:// sky.io", "http://tezas.com"
];

const GetIcon = arr => {
  const length = arr.length;
  const spaceArr = [];
  for (let i = 0; i < 5 - length; i++) {
    spaceArr.push(1);
  }
  return arr.map((e, index) => {
    return (
      <React.Fragment>
        {e ? 
        (<div key={e} className="column_center row_center icon_bg">
          <a rel="stylesheet" href={URL[e]}>
            <div className={`back_investment_${e}`} />
          </a>
        </div>) : (
          <div className="column_center row_center icon_bg" style={{ visibility: 'hidden'}}>
            <div className={`back_investment_1`} />
          </div>
        )}
      </React.Fragment>
    );
  });
};
const Investment = ({ t }) => (
  <div className="investment">
    <Head />
    <MyNav />
    <div className="head">
      <img src="/static/images/community/0.png" alt="" />
      <div className="content">
        <div className="title">{t("INVESTMENTS")}</div>
        <div className="text">
          {t("text_1")} <br />
          {t("text_2")}
          <br />
          {t("text_3")}
        </div>
      </div>
    </div>
    <div className="head_text">
      <div className="text">
        <div className="slogan">{t("head_1")}</div>
        <div className="slogan_next">{t("head_2")}</div>
      </div>
    </div>
    <div className="list_item">
      <div className="title">{t("PARTNERSHIP")}</div>
      <div className="icon-box">{GetIcon([18, 19, 20, 21, 22])}</div>
      <div className="icon-box">{GetIcon([23, 24, 25, '', ''])}</div>
    </div>
    <div className="list_item" style={{paddingBottom: 120}}>
      <div className="title">{t("INVESTMENTS")}</div>
      <div className="icon-box">{GetIcon([1, 2, 3, 4, 5, 6, 7])}</div>
      <div className="icon-box">{GetIcon([8, 9, 10, 11, 12, 13, 14])}</div>
      <div className="icon-box">
        {GetIcon([15, 16, 17, '', '', '', ''])}
      </div>
    </div>

    <MyFoot />
  </div>
);

export default withNamespaces("investment")(Investment);
