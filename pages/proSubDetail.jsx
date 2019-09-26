import { Component } from 'react'
import MyNav from 'c/nav_white'
import Head from 'c/head'
import MyFoot from 'c/foot'
import { withNamespaces } from 'react-i18next'
import axios from 'axios'
import 'style/proSubDetail.styl'

 class ProSubDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
          detail: {},
          content: "<div style='text-align: center; margin-top: 20px;'>暂无详情，请稍候重试！</div>"
        }
    }

    componentDidMount(){
      console.log('url: ', window.location.search)
      const id = window.location.search.split('=')[1]
      this.fetch(id)
    }

    fetch(id){
      const that = this
      axios.get(`https://cryptoyc.net/survey/report/${id}`).then(res => {
        const { code, data, message } = res.data
        if(code == 200){
          console.log('getDetail: ', data)
          that.setState({
            detail: data || {name: ''},
            content: data.content
          })
        } else {
          that.setState({
            content: "<div style='text-align: center; margin-top: 20px;'>暂无详情，请稍候重试！</div>"
          })
          console.log('error: ', message)
        }
      })
    }

    render() {
        const {t}=this.props
        const { detail, content } = this.state
        return <div className="proSubDetail">
            <Head></Head>
            <MyNav></MyNav>
            <div>
              <div className='header'>
                <div className='layout'>
                  <div className='benchmark'>Benchmark</div>
                  <div className='diaocha'>区块链技术尽职调查</div>
                </div>
              </div>
              <div className='detail'>
                {/* <div className='title'>{detail.name}</div> */}
                <div dangerouslySetInnerHTML={{__html: content}}></div>
              </div>
            </div>
            <MyFoot></MyFoot>
        </div>

    }
}
export default withNamespaces('proSubDetail')(ProSubDetail)