import React from "react";
import "style/benchmark.styl";
import MyNav from "c/nav_white";
import Head from "c/head";
import MyFoot from "c/foot";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import otherRouterConst from "../otherRouterConst";
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
        <Col sm="2" key={e} className="icon_padding">
          <a
            className="d-block icon_image"
            rel="stylesheet"
            href={otherRouterConst[e] ? otherRouterConst[e].link : ""}
          >
            <div className={`back_${e}`} />
          </a>
        </Col>
        {/* {length < 6 &&
          index + 1 == length &&
          spaceArr.map(ee => {
            return (
              <Col
                key={e}
                sm="2"
                style={{ background: "none" }}
                className="column_center row_center icon_padding"
              />
            );
          })} */}
      </React.Fragment>
    );
  });
};
const Benchmark = ({ t }) => {
  return (
    <div className="benchmark">
      <Head />
      <MyNav />
      <div className="head">
        <img src="/static/images/benchmark/0.png" alt="" />
        <div className="content">
          <div className="title">{t("big_title")}</div>
          <div className="text">{t("title")}</div>
        </div>
      </div>
      <Row className="card_content">
        <Col sm={{ span: 5 }}>
          <div className="d-flex align-items-baseline text-left">
            <div>
              <img
                className="d-block img"
                src="/static/images/benchmark/2.png"
                alt=""
              />
            </div>
            <div>
              <div className="card-title">{t("title_1")}</div>
            </div>
          </div>
          <div className="text">{t("text_1")}</div>
        </Col>
        <Col sm={{ span: 5, offset: 2 }}>
          <div className="d-flex align-items-baseline text-left">
            <div>
              <img
                className="d-block img"
                src="/static/images/benchmark/3.png"
                alt=""
              />
            </div>
            <div>
              <div className="card-title">{t("title_2")}</div>
            </div>
          </div>
          <div className="text">{t("text_2")}</div>
        </Col>
      </Row>
      <Row className="card_content">
        <Col sm={{ span: 5 }}>
          <div className="d-flex align-items-baseline text-left">
            <div>
              <img
                className="d-block img"
                src="/static/images/benchmark/4.png"
                alt=""
              />
            </div>
            <div>
              <div className="card-title">{t("title_3")}</div>
            </div>
          </div>
          <div className="text">{t("text_3")}</div>
        </Col>
        <Col sm={{ span: 5, offset: 2 }}>
          <div className="d-flex align-items-baseline text-left">
            <div>
              <img
                className="d-block img"
                src="/static/images/benchmark/5.png"
                alt=""
              />
            </div>
            <div>
              <div className="card-title">{t("title_4")}</div>
            </div>
          </div>
          <div className="text">{t("text_4")}</div>
        </Col>
      </Row>
      <div className="list_item">
        <div className="title">{t("example")}</div>
        <Row className="flex_space-between" style={{marginTop: 40, marginBottom: 40}}>
          {GetIcon([18, 19, 20, 21, 22, 23])}
        </Row>
      </div>
      <div className="go">  
        <div className="title">{t("solve")}</div>
        <Row>
          <Col style={{ marginRight: "180px" }} className="botder_bottom">
            <Link href="/contactUs">
              <a>
                <div className="label">
                  {t("contact")}{" "}
                  <img src="/static/images/benchmark/11.png" alt="" />
                </div>
              </a>
            </Link>
          </Col>
          <Col className="botder_bottom">
            <Link href="/projectSubmitted">
              <a>
                <div className="label">
                  {t("submit")}
                  <img src="/static/images/benchmark/11.png" alt="" />
                </div>
              </a>
            </Link>
          </Col>
        </Row>
      </div>
      <MyFoot />
    </div>
  );
};
export default withNamespaces("benchmark")(Benchmark);
