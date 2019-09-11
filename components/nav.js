import React from 'react'
import Link from 'next/link'
import { NavDropdown, Nav, Container, Row, Col } from 'react-bootstrap';
import 'style/components/nav.styl'
const navArr = [
  { type: 'string', text: '主页', link: '/' },
  { type: 'string', text: '尽调', link: '/proSubDetail' },
  { type: 'string', text: '社区', link: '/community' },
  { type: 'string', text: '投资', link: '/investment' },
  { type: 'string', text: '博客', },
  {
    type: 'array', text: '关于', child: [
      { type: 'string', text: '关于我们', link: '/aboutUs' },
      { type: 'string', text: '团队', link: '/group' },
      { type: 'string', text: '加入我们', link: '/joinUs' },
    ]

  },
]
const getEle = (arr) => {
  return arr.map(e => {
    if (e.type == 'string') {
      return <Col className="row_center" key={e.text}><Link className="item" href={{ pathname: e.link }}><a>{e.text}</a></Link></Col>
    } else {
      return <Col className="row_center" key={e.text}><NavDropdown title={e.text} className="item" className="select">{
        e.child.map(ee => {
          return <NavDropdown.Item ><Link href={{ pathname: ee.link }} className="item"><a>{ee.text}</a></Link></NavDropdown.Item>
        })
      }</NavDropdown></Col>
    }
  })
}
const myNav = () => (
  <Container fluid="true">
    <Row className="nav">
      <Col sm="5" >
        <Link href={{ pathname: '/' }}>
        <a>
        <img className="images" src="/static/images/index/1.png" />
        </a>
        </Link>
        </Col>
      <Col sm="7" className="list">
        <Row>
          {
            getEle(navArr)
          }
          <Col sm={{ span: 2, offset: 1 }} className="i18">
            <div title="中文 EN" className="select">
              {/* <NavDropdown.Item>中文</NavDropdown.Item>
              <NavDropdown.Item >EN</NavDropdown.Item> */}
            </div>
          </Col>
        </Row>

      </Col>
    </Row>
  </Container>
)

export default myNav
