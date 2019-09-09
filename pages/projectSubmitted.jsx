import { Component } from "react";
import MyNav from "c/nav_white";
import Head from "c/head";
import MyFoot from "c/foot";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import "style/projectSubmitted.styl";
import { Formik } from "formik";
import { string, object } from "yup";
import { survey_project } from "root/request/index.js";
import { withNamespaces } from "react-i18next";
class ProjectSubmitted extends Component {
  constructor() {
    super();
    this.state = {
      isSubmitShow: false,
      form: object({
        name: string().required(),
        website: string()
          .url()
          .required(),
        doc_addr: string().url(),
        github: string().url(),
        contact: string().required(),
        // submitter: string().required(),
        mail: string()
          .email()
          .required(),
        remarks: string()
      })
    };
  }
  onSubmit = e => {
    const file = this.fileInput.files[0];
    var formData = new FormData();
    formData.append("attachment", file);
    // const obj ={
    //     name:123,
    //     website:1,
    //     doc_addr:1,
    //     submitter:1,
    //     contact:1,
    //     github:1,
    //     mail:1,
    //     remarks:1,
    // }

    for (let i in e) {
      formData.append(i, e[i]);
    }
    survey_project(formData).then(e => {
      this.setState({ isSubmitShow: true });
    });
  };
  closeModal = () => {
    this.setState({ isSubmitShow: false });
  };
  componentDidMount() {}
  render() {
    const { form, isSubmitShow } = this.state;
    const { t } = this.props;
    return (
      <div className="projectSubmitted">
        <Head />
        <MyNav />
        <div className="head"  style={{height: 'auto'}}>
          {" "}
          <img src="/static/images/benchmark/12.gif" alt="" />
        </div>
        <div className="contain">
          <div className="text">{t("head")}</div>
          <div className="form_title">{t("info")}</div>
          <Formik validationSchema={form} onSubmit={this.onSubmit}>
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors
            }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="validationFormikProjectName">
                    <Form.Control
                      onChange={handleChange}
                      isInvalid={touched.name && !!errors.name}
                      name="name"
                      value={values.name}
                      className="form_item"
                      type="text"
                      placeholder={t("project")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormikWebsite">
                    <Form.Control
                      onChange={handleChange}
                      isInvalid={touched.website && !!errors.website}
                      name="website"
                      value={values.website}
                      className="form_item"
                      type="text"
                      placeholder={t("website")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.website}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormikProjectName">
                    <Form.Control
                      onChange={handleChange}
                      isInvalid={touched.doc_addr && !!errors.doc_addr}
                      name="doc_addr"
                      value={values.doc_addr}
                      className="form_item"
                      type="text"
                      placeholder={t("whitepaper")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.doc_addr}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormikGithub">
                    <Form.Control
                      onChange={handleChange}
                      isInvalid={touched.github && !!errors.github}
                      name="github"
                      value={values.github}
                      className="form_item"
                      type="text"
                      placeholder={t("github")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.github}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormikProjectContact">
                    <Form.Control
                      onChange={handleChange}
                      isInvalid={touched.contact && !!errors.contact}
                      name="contact"
                      value={values.contact}
                      className="form_item"
                      type="text"
                      placeholder={t("contact")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.contact}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* <Form.Group controlId="validationFormikSubmitPeople">
                                <Form.Control onChange={handleChange}
                                    isInvalid={touched.submitter && !!errors.submitter}
                                    name="submitter"
                                    value={values.submitter}
                                    className="form_item"
                                    type="text"
                                    placeholder={t('contact')} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.submitter}
                                </Form.Control.Feedback>
                            </Form.Group> */}
                  <Form.Group controlId="validationFormikEmail">
                    <Form.Control
                      onChange={handleChange}
                      isInvalid={touched.mail && !!errors.mail}
                      name="mail"
                      value={values.mail}
                      className="form_item"
                      type="text"
                      placeholder={t("email")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.mail}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormikOther">
                    <Form.Control
                      onChange={handleChange}
                      isInvalid={touched.remarks && !!errors.remarks}
                      name="remarks"
                      value={values.remarks}
                      className="form_item"
                      type="text"
                      placeholder={t("remarks")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.remarks}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormiFile">
                    <div>{t("attachments")}</div>
                    <Form.Control
                      onChange={handleChange}
                      isInvalid={touched.file && !!errors.file}
                      name="file"
                      style={{ width: "200px" }}
                      ref={ref => {
                        this.fileInput = ref;
                      }}
                      value={values.file}
                      className="form_item"
                      type="file"
                      placeholder="update"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.file}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit">{t("submit")}</Button>
                </Form>
              );
            }}
          </Formik>
        </div>
        <Modal show={isSubmitShow} onHide={this.closeModal}>
          <Modal.Header closeButton />
          <Modal.Body>
            <div className="model">
              <div style={{ textAlign: "center" }}>
                <img src="/static/images/benchmark/15.png" alt="" />
              </div>
              <div className="title">资料提交成功</div>
              <div className="text">
                CryptoYC将会在三个工作日内联系您商讨尽调事宜
              </div>
              <div onClick={this.closeModal} className="backHome">
                返回首页
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <MyFoot />
      </div>
    );
  }
}
export default withNamespaces("projectSubmitted")(ProjectSubmitted);
