import React from "react";
import "style/group.styl";
import MyNav from "c/nav_white";
import Head from "c/head";
import MyFoot from "c/foot";
import { Row, Col, Nav } from "react-bootstrap";
import { withNamespaces } from "react-i18next";
class C extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      show: false
    };
  }
  onMouseEnter = () => {
    const { show } = this.state;
    if (!show) {
      this.setState({
        show: true
      });
    }
  };
  onMouseLeave = () => {
    const { show } = this.state;
    if (show) {
      this.setState({
        show: false
      });
    }
  };
  render() {
    const { show } = this.state;
    const { t } = this.props;
    return (
      <div
        className="active"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {show && this.props.children}
      </div>
    );
  }
}
const GetIcon = ({ arr, t }) => {
  const length = arr.length;
  const spaceArr = [];
  for (let i = 0; i < 5 - length; i++) {
    spaceArr.push(1);
  }

  return arr.map((e, index) => {
    return (
      <React.Fragment key={index}>
        <Col key={e} sm="2" className="column_center row_center icon_padding">
          <img src={`/static/images/group/${e}.png`} alt="" />
          <C t={t}>
            <div className="people">
              <div className="msk" />
              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html: t(e)
                }}
              />
            </div>
          </C>
        </Col>
      </React.Fragment>
    );
  });
};
class Group extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="group">
        <Head />
        <MyNav />
        <div className="head">
          <img src="/static/images/group/1.png" alt="" />
          <div className="content">
            <div className="title">{t("title")}</div>
            <div className="text">{t("text")} </div>
          </div>
        </div>
        <div className="list_item">
          <div className="title">{t("groupPeople")}</div>
          <Row className="flex_space-between">
            <GetIcon arr={[3, 25,  6,7,9]} t={t} />
          </Row>
          <Row className="flex_space-between">
            <GetIcon arr={[11, 12, 14]} t={t} />
          </Row>
        </div>
        <div className="list_item">
          <div className="title">{t("consultantPeople")}</div>
          <Row className="flex_space-between">
            <GetIcon arr={[15, 16, 17, 21, 22]} t={t} />
          </Row>
        </div>
        <MyFoot />
      </div>
    );
  }
}

export default withNamespaces("group")(Group);
