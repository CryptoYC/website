import { Component } from 'react'
import MyNav from 'c/nav_white'
import Head from 'c/head'
import MyFoot from 'c/foot'
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import 'style/joinUs.styl'
import { withNamespaces } from 'react-i18next';
class Arrow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrow: false
        }
    }
    changeArrow = () => {
        const { arrow } = this.state
        this.setState({ arrow: !arrow })
        // console.log(123, this.state)
    }
    render() {
        const { arrow } = this.state
        return <div className="arrow" onClick={this.changeArrow}>{this.props.children}
            <img className={arrow ? 'active' : ''} src="/static/images/joinUs/9.png" alt="" />
        </div>
    }
}
class JoinUs extends Component {
    constructor() {
        super()

        this.state = {
            url: ''
        }
    }
    change() {

    }
    render() {
        const { t } = this.props
        return <div className="joinUs">
            <Head></Head>
            <MyNav></MyNav>
            <div className="welcome column_center row_center">
                <div className="title margin-bottom">{t('title')}</div>
                <div className="text margin-bottom">{t('text')}</div>
                <a href="#job"> <div className="jobs margin-bottom">{t('JobVacancy')}</div></a>
            </div>
            <div>
                <div className="how_join">{t('joinCryptoYC')}</div>
                <div className="step_list">
                    <div className="row_center head">{t('Adventurous')}</div>
                    <Row className="list_item">
                        <Col sm={{ span: 5, }} className="flex-right">
                            <img className="img_item" src="/static/images/joinUs/3.png" alt="" />
                        </Col>
                        <Col sm={{ span: 6, offset: 1 }} className="column_center">
                            <div className="title">{t('label_1')}</div>
                            <div>{t('text_1_1')}</div>
                            <div>{t('text_1_2')}</div>
                        </Col>
                    </Row>
                    <div className="row_center"><img className="next" src="/static/images/joinUs/4.png" alt="" /></div>
                    <Row className="list_item">
                        <Col sm={{ span: 5, }} className="flex-right">
                            <img className="img_item" src="/static/images/joinUs/5.png" alt="" />
                        </Col>
                        <Col sm={{ span: 6, offset: 1 }} className="column_center">
                            <div className="title">{t('label_2')}</div>
                            <div>{t('text_2_1')}</div>
                            <div>{t('text_2_2')}</div>
                        </Col>
                    </Row>


                    <div className="row_center"><img className="next" src="/static/images/joinUs/4.png" alt="" /></div>
                    <Row className="list_item">
                        <Col sm={{ span: 5, }} className="flex-right">
                            <img className="img_item" src="/static/images/joinUs/6.png" alt="" />
                        </Col>
                        <Col sm={{ span: 6, offset: 1 }} className="column_center">
                            <div className="title">{t('label_3')}</div>
                            <div>{t('text_3_1')}</div>
                            <div>{t('text_3_2')}</div>
                        </Col>
                    </Row>
                    <div className="row_center"><img className="next" src="/static/images/joinUs/4.png" alt="" /></div>
                    <Row className="list_item">
                        <Col sm={{ span: 5, }} className="flex-right">
                            <img className="img_item" src="/static/images/joinUs/7.png" alt="" />
                        </Col>
                        <Col sm={{ span: 6, offset: 1 }} className="column_center">
                            <div className="title">{t('label_4')}</div>
                            <div>{t('text_4_1')}</div>
                            <div>{t('text_4_2')}</div>
                        </Col>
                    </Row>
                </div>
                <div className="job_vacancies">
                    <div className="head" id="job">{t('JobVacancy')}</div>
                        <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as='div' eventKey="0"><Arrow>{t('job_1')}</Arrow></Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <img src={t('job_1_i')} alt="" />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as='div' eventKey="0"><Arrow>{t('job_2')}</Arrow></Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <img src={t('job_2_i')} alt="" />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="job_vacancies_foot">
                        <div className="head">投递简历</div>
                        <div style={{ textAlign: 'center' }}>zeno@cryptoyc.com</div>
                    </div>
                </div>
            </div>
            <MyFoot></MyFoot>
        </div>

    }
}
export default withNamespaces('joinUs')(JoinUs)