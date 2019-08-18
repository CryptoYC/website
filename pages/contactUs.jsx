import React from 'react'
import 'style/contactUs.styl'
import MyNav from 'c/nav_white'
import Head from 'c/head'
import MyFoot from 'c/foot'
import { Formik } from 'formik'
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { string, object } from 'yup'
import { withNamespaces } from 'react-i18next';
import {about_contact} from 'root/request'
 class ProjectSubmitted extends React.Component {
    constructor() {
        super()
        this.state = {
            isSubmitShow: false,
            form: object({
                 //projectName: string().required(),
                // website: string().url().required(),
                // whitePaper: string().url().required(),
                // github: string().url().required(),
                // projectContact: string().required(),
                // submitPeople: string().required(),
                 name:string().required(),
                 mail: string().email().required(),
                 content: string(),
            })
        }
    }
    onSubmit(e){
        about_contact(e)
    }
    render() {
        const { form } = this.state
        const{t}=this.props
        return <div className="contactUs">
            <Head></Head>
            <MyNav></MyNav>
            <div className="head">
                <img src="/static/images/contactUs/0.png" alt="" />
                <div className="content">
                    <div className="title">{t('contactUs')}</div>
                </div>
            </div>
            <div className="contain">
                <Formik
                    validationSchema={form}
                    onSubmit={this.onSubmit}>
                    {({ handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors }) => {
                        return <Form onSubmit={handleSubmit} >
                            <Form.Group controlId="validationFormikName">
                                <Form.Control onChange={handleChange}
                                    isInvalid={touched.name && !!errors.name}
                                    name="name"
                                    value={values.name}
                                    className="form_item"
                                    type="text"
                                    placeholder={t('name')} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationFormikEmail">
                                <Form.Control onChange={handleChange}
                                    isInvalid={touched.mail && !!errors.mail}
                                    name="mail"
                                    value={values.mail}
                                    className="form_item"
                                    type="text"
                                    placeholder={t('email')} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.mail}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationFormikOther">
                                <Form.Control onChange={handleChange}
                                    isInvalid={touched.content && !!errors.content}
                                    name="content"
                                    as="textarea"
                                    value={values.content}
                                    className="form_item"
                                    type="text"
                                    placeholder={t('other')}
                                    style={{ minHeight: '200px' }} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.content}
                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* <Form.Group controlId="validationFormikVerification">
                                <Form.Label>{t('verification')}<span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Row style={{ width: '300px' }}>
                                    <Col><img src="/static/images/aboutUs/0.png" alt="" /></Col>
                                    <Col className="column_center">
                                        <Form.Control onChange={handleChange}
                                            isInvalid={touched.verification && !!errors.verification}
                                            name="verification"
                                            value={values.other}
                                            className="form_item"
                                            type="text"
                                             /></Col>
                                </Form.Row>
                            </Form.Group> */}
                            <div className="row_center"> <Button className="button" type="submit">{t('submit')}</Button></div>

                        </Form>
                    }}
                </Formik>

            </div>
            <MyFoot></MyFoot>
        </div>
    }
}
export default withNamespaces('contactUs')(ProjectSubmitted)