import React from 'react'
import 'style/community.styl'
import MyNav from 'c/nav_white'
import Head from 'c/head'
import MyFoot from 'c/foot'
import { Row, Col, Nav } from 'react-bootstrap';
import { withNamespaces } from 'react-i18next';
const Community = ({t}) => (
    <div className="community">
        <Head></Head>
        <MyNav />
        <div className="head">
            <img src="/static/images/community/0.png" alt="" />
            <div className="content">
                <div className="title">Bingo Community</div>
                <div className="text">· {t('head_1')} </div>
                <div className="text">· {t('head_2')} </div>
                <div className="text">· {t('head_3')}</div>
            </div>
        </div>
        <Row className="card_content">
            <Col sm={{ span: 5 }}>
                <img className="img" src="/static/images/community/1.png" alt="" />
                <div className='title'>{t('title_1')}</div>
                <div className='text'>
                {t('text_1')}
                </div>
            </Col>
            <Col sm={{ span: 5, offset: 2 }}>
                <img className="img" src="/static/images/community/2.png" alt="" />
                <div className='title'>{t('title_2')}</div>
                <div className='text'>
                {t('text_2')}
                </div>
            </Col>
        </Row>
        <Row className="card_content">
            <Col sm={{ span: 5 }}>
                <img className="img" src="/static/images/community/3.png" alt="" />
                <div className='title'>{t('title_3')}</div>
                <div className='text'>
                {t('text_3')}
                </div>
            </Col>
            <Col sm={{ span: 5, offset: 2 }}>
                <img className="img" src="/static/images/community/4.png" alt="" />
                <div className='title'>{t('title_4')}</div>
                <div className='text'>
                {t('text_4')}
                </div>
            </Col>
        </Row>
        <MyFoot></MyFoot>
    </div>
)

export default withNamespaces('community')(Community)
