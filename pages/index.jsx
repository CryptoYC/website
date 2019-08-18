import React from 'react'
import 'style/index.styl'
import MyNav from 'c/nav_white'
import Head from 'c/head'
import MyFoot from 'c/foot'
import { Row, Col, Nav } from 'react-bootstrap';
import otherRouterConst from '../otherRouterConst'
import { toOther } from '../router'
import { withNamespaces } from 'react-i18next';
const GetIcon = (arr) => {
  const length = arr.length
  const spaceArr = []
  for (let i = 0; i < 5 - length; i++) {
    spaceArr.push(1)
  }
  return arr.map((e, index) => {
    return <React.Fragment><Col key={e} sm="2" className="column_center row_center icon_padding">
      <a rel="stylesheet" href={otherRouterConst[e] ? otherRouterConst[e].link : ''}>
        <div className={`back_${e}`} ></div>
      </a>
    </Col>
      {length < 5 && (index + 1 == length) && spaceArr.map(ee => {
        return <Col key={e} sm="2" style={{ background: 'none' }} className="column_center row_center icon_padding"></Col>
      })}
    </React.Fragment>
  })
}
class Animate_text extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: [] }
    this._point = 0
  }
  componentDidMount() {
    this.pushText()
  }
  pushText() {
    const { text } = this.state
    if (text.length < this.props.text[this._point].length) {
      text.push(this.props.text[this._point][text.length])
      this.setState({
        text
      }, () => {
        setTimeout(() => {
          this.pushText()
        }, 100)
      })
    } else {
      if (this._point + 1 < this.props.text.length) {
        this._point++
      } else {
        this._point = 0
      }
      setTimeout(() => {
        this.setState({
          text: []
        }, () => { this.pushText() })
      }, 2000)
    }
  }
  render() {
    const { text } = this.state
    return <div className='animate'>
      {
        text.map(e => <span className="gradually">{e}</span>)
      }
    </div>
  }
}
const Home = ({ t }) => (
  <div className="index">
    <Head></Head>
    <MyNav />
    <div className="contain_text">
      <div className="text">{t('sam_2')}</div>
      <div className="text color_red"><Animate_text text={[t('sam_3'), t('sam_4')]}></Animate_text></div>
    </div>
    <Row className="list_item margin_top">
      <Col sm="5" className="column_center">
        <div>{t('believe_1')}</div>
        <div>{t('believe_2')}</div>
      </Col>
      <Col sm={{ span: 5, offset: 2 }} className="column_center flex-right"><img className="images" src="/static/images/index/01.png"></img></Col>
    </Row>
    <Row className="list_item background_ece">
      <Col sm="5" className="column_center">
        <img className="images" src="/static/images/index/02.png"></img>
      </Col>
      <Col sm={{ span: 5, offset: 2 }} className="column_center">
        <div className="title text_right">{t('title_1')}</div>
        <div className="text">{t('text_1')}</div>
        <div className="text_right" >
          <button className="button" onClick={() => { toOther('/benchmark') }}>{t('button_1')} <span className="arrow">></span></button>
        </div>
      </Col>
    </Row>
    {/* <Row className="list_item ">
      <Col sm="5" className="column_center">
        <div className="title ">{t('title_2')}</div>
        <div className="text">{t('text_2')}</div>
        <div >
          <button className="button" onClick={() => { toOther('/community') }}>{t('button_2')}<span className="arrow">></span></button></div>
      </Col>
      <Col sm={{ span: 5, offset: 2 }} className="column_center flex-right"><img className="images" src="/static/images/index/03.png"></img></Col>
    </Row> */}
    <div className="list_item ">
      <div className="title ">{t('title_3')}</div>
      <Row className="flex_space-between">
        {GetIcon([1, 2, 3, 4, 5])}
      </Row>
      <Row className="flex_space-between margin-top_20">
        {GetIcon([6, 7, 8, 9, 10])}
      </Row>
    </div>
    <div className="list_item background_ece">
      <div className="title ">{t('title_4')}</div>
      <div>
        {t('foot1')}
      </div>
      <div>
      {t('foot2')}
      </div>
      <button className="button" onClick={() => { toOther('/contactUs') }}>{t('email')}<span className="arrow">></span></button>
    </div>
    <MyFoot></MyFoot>
  </div>
)

export default withNamespaces('index')(Home)
