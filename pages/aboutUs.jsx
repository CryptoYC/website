import React from "react";
import "style/aboutUs.styl";
import MyNav from "c/nav_white";
import Head from "c/head";
import MyFoot from "c/foot";
import { Row, Col } from "react-bootstrap";
import { toOther } from "../router";
import Link from "next/link";
import { withNamespaces } from "react-i18next";
import i18n from "../i18n";
const AboutUs = ({ t }) => {
  return (
    <div className="about_us">
      <Head />
      <MyNav />
      <div className="head">
        <img src="/static/images/aboutUs/0.png" alt=""/>
        <div className="content">
          <div className="title">{t("Whatwedo")}</div>
          <div className="text">
            {t("do")}<br/>
            {t("do_2")}<br/>
            {t("do_3")}
            {/* CryptoYC team has been active in the Blockchain industry since 2014, with remarkable investment performance records.  CryptoYC has an in-depth understanding in the distribution system, computer security.  Moreover, we have established strong relationship and cooperation with several European renown Blockchain research institutions. */}
          </div>
        </div>
      </div>
      <div className="contain_body text-center mx-auto" style={{ width: '90%'}}>
        <img
          src={
            i18n.language == "en"
              ? "/static/images/aboutUs/1_en.png"
              : "/static/images/aboutUs/1.png"
          }
          alt=""
        />
        <Row>
          <Col sm={{ span: 12 }} className="border-bottom flex_space p-0">
            <Link href="/contactUs">
              <a>
                <Row>
                  <Col className="column_center label">{t("button_1")}</Col>
                  <img src="/static/images/aboutUs/2.png" alt="" />
                </Row>
              </a>
            </Link>
          </Col>
        </Row>
        <div className="bottom-text">{t("label_1")}</div>
      </div>
      <MyFoot />
    </div>
  );
};
export default withNamespaces("aboutUs")(AboutUs);
