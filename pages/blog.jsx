import React from 'react'
import 'style/blog.styl'
import MyNav from 'c/nav_white'
import Head from 'c/head'
import MyFoot from 'c/foot'
import { Row, Col ,Modal} from 'react-bootstrap';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';

const blogList={cosmos_cn:26,cosmos_en:11,stellar_en:13,stellar_cn:9}
class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state={
            blogShow:false,
            blogList:[],
        }
    }
    showBlog=(id)=>{
        const key = `${id}_${i18n.language}`
        const path=`/static/images/blog/${key}`
        const arr =new Array(...Array(blogList[key])).map((_,index)=>`${path}/${index+1}.png`)
        this.setState({
            blogShow:true,
            blogList:arr
        })
    }
    handleClose=()=>{
        this.setState({
            blogShow:false,
        })
    }
    render() {
        const {blogList,blogShow}=this.state
        const {t}=this.props
        return <div className="blog">
            <Head></Head>
            <MyNav></MyNav>
            <div className="head" >
                <img src="/static/images/blog/0.png" alt="" />
                <div className="content" style={{top: '0%'}}>
                    <div className="title">{t('title')}</div>
                    <div className="text">{t('text')}
                  </div>
                </div>
            </div>
           <Row className="contain">
           <Col sm="3" onClick={()=>{this.showBlog('cosmos')}} >
               <img src={i18n.language=='en'?"/static/images/blog/cosmos_en.png" :"/static/images/blog/cosmos_cn.png" }alt="" />
               </Col>
           <Col sm={{span:3,offset:1}}  onClick={()=>{this.showBlog('stellar')}}>
           <img src={i18n.language=='en'?"/static/images/blog/stellar_en.png" :"/static/images/blog/stellar_cn.png" }alt="" />
               </Col>
           </Row>
            <MyFoot></MyFoot>
            <Modal show={blogShow} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {blogList.map(e=>{
                      return <img key={e} src={e} alt=""/>
                  })}
              </Modal.Body>
              
            </Modal>
        </div>
    }
} 
export default withNamespaces('blog')(Blog)