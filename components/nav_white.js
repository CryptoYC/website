import React from 'react'
import Link from 'next/link'
import { NavDropdown, Nav, Container, Row, Col } from 'react-bootstrap';
import 'style/components/nav.styl'
import { withNamespaces } from 'react-i18next';
import i18n from '../i18n';
const navArr = [
  { type: 'string', text: 'home', link: '/' },
  { type: 'string', text: 'benchmark', link: '/proSubDetail' },
  // { type: 'string', text: 'community', link: '/community' },
  { type: 'string', text: 'investment', link: '/investment' },
  { type: 'string', text: 'blog', link: 'https://cryptoyc.github.io/' },
  {
    type: 'array', text: 'about', child: [
      { type: 'string', text: 'aboutUs', link: '/aboutUs' },
      { type: 'string', text: 'group', link: '/group' },
      { type: 'string', text: 'joinUs', link: '/joinUs' },
    ]
  },
]
const GetEle = ({arr,t}) => {
  return arr.map(e => {
    if (e.type == 'string') {
      return <Col className="row_center" key={e.text} >
        <Link href={{ pathname: e.link }}>
          <a className="item">{t(e.text)}</a>
        </Link></Col>
    } else {
      return <Col className="row_center" key={e.text}><NavDropdown title={t(e.text)} className="item select" id="basic-nav-dropdown">{
        e.child.map(ee => {
          return <NavDropdown.Item key={ee.text} as='div'>
            <Link href={{ pathname: ee.link }}>
              <a className="item">{t(ee.text)}</a>
            </Link>
          </NavDropdown.Item>
        })
      }</NavDropdown></Col>
    }
  })
}
const myNav = ({t}) => {
  // console.log(i18n)
    const changeI18=()=>{
      
      const i18Arr=['en','cn']
      const type =i18Arr.filter(e=>e!=i18n.language)[0]
      // console.log(type)
      i18n.changeLanguage(type)
    }
    return  <Container fluid="true">
    <Row className="nav white">
      <Col sm="4" className="logo">
        <Link href={{ pathname: '/' }} style={{display: 'flex',alignItems: 'center'}}>
          <a>
            <img className="images" src="/static/images/index/17.png"></img>
          </a>
        </Link>
      </Col>
      <Col sm="8" className="list float-right">
        <Row className="mobile_colum">
            < GetEle arr={navArr} t={t}></GetEle>
          <Col className="i18">
            <button style={{color: '#fff', width: '100%'}} onClick={changeI18}>中文 EN</button>
          </Col>
        </Row>

      </Col>
    </Row>
  </Container>
  }

export default withNamespaces('nav')(myNav)
