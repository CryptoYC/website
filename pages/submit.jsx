import React from "react";
import "style/submit.styl";
import MyNav from "c/nav_white";
import Head from "c/head";
import MyFoot from "c/foot";
import { Table, InputGroup, FormControl, Button } from "react-bootstrap";
import { withNamespaces } from "react-i18next";
import axios from 'axios';

class Submit extends React.Component {
  state = {
    dataSource: [],
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    axios.get('https://cryptoyc.net/survey/report').then(res => {
      this.setState({
        dataSource: res.data.list
      });
    })
  }

  render() {
    const { t } = this.props;
    const { dataSource } = this.state;

    return (
      <div className="submit">
        <Head />
        <MyNav />
        <div className="head">
          <img src="/static/images/submit/1.jpg" alt="" />
          <div className="content">
            <div className="title">Benchmark</div>
            <div className="text">区块链技术尽职调查</div>
          </div>
        </div>

        <div className="search">
          <InputGroup size="lg">
            <InputGroup.Prepend />
            <FormControl placeholder="Search" />
          </InputGroup>
        </div>

        <div className="submit-table text-center">
          <Table triped hover>
            <thead>
              <th>尽调对象</th>
              <th>评级结果</th>
              <th>项目风险</th>
            </thead>
            <tbody>
              {dataSource.map(item => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.rating}</td>
                  <td>{item.risk}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button
            className="px-4 py-1"
            style={{ background: "#8C8B8C", border: "none" }}
            size="sm"
            onClick={this.fetch}
          >
            点击加载更多
          </Button>
        </div>

        <MyFoot />
      </div>
    );
  }
}

export default withNamespaces("submit")(Submit);
