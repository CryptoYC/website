import React from 'react'
import 'style/investment.styl'
import MyNav from 'c/nav_white'
import Head from 'c/head'
import MyFoot from 'c/foot'
import { Row, Col, Nav } from 'react-bootstrap';

import otherRouterConst from '../otherRouterConst'
import { withNamespaces } from 'react-i18next';
const GetIcon = (arr) => {
    const length = arr.length
    const spaceArr = []
    for (let i = 0; i < 5 - length; i++) {
        spaceArr.push(1)
    }
    return arr.map((e, index) => {
        return <React.Fragment>
            <Col key={e} sm="2" className="column_center row_center icon_padding">
                {otherRouterConst[e] && otherRouterConst[e].link ?  <a rel="stylesheet" href={otherRouterConst[e].link}><div className={`back_${e}`} ></div></a> : <div className={`back_${e}`} ></div>}
            </Col>
            {length < 5 && (index + 1 == length) && spaceArr.map(ee => {
                return <Col key={`${index}_${ee}`} sm="2" style={{ background: 'none' }} className="column_center row_center icon_padding"></Col>
            })}
        </React.Fragment>
    })
}
const Investment = ({t}) => (
    <div className="investment">
        <Head></Head>
        <MyNav />
        <div className="head">
            <img src="/static/images/community/0.png" alt="" />
            <div className="content">
                <div className="title">{t('INVESTMENTS')}</div>
                <div className="text">{t('text_1')} <br/>
                {t('text_2')}<br/>
                {t('text_3')}</div>
            </div>
        </div>
        <div className="head_text">
            <div className="text">{t('head_1')} <br/>
            {t('head_2')} <br/>
            {t('head_3')}</div>
        </div>
        <div className="list_item">
            <div className="title">{t('PARTNERSHIP')}</div>
            <Row className="flex_space-between">
                {GetIcon([13, 14, 15, 16, 17])}
            </Row>
            <Row className="flex_space-between">
                {GetIcon([18])}
            </Row>
        </div>
        <div className="list_item">
            <div className="title">{t('INVESTMENTS')}</div>
            <Row className="flex_space-between">
                {GetIcon([1, 2, 3, 4, 5])}
            </Row>
            <Row className="flex_space-between">
                {GetIcon([6, 7, 8, 9, 19])}
            </Row>
            <Row className="flex_space-between">
                {GetIcon([11, 12])}
            </Row>
        </div>

        <MyFoot></MyFoot>
    </div>
)

export default withNamespaces('investment')(Investment)
