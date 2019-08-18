import App, {Container} from 'next/app'
import React from 'react'
import '../i18n';

 class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {pageProps}
  }
  constructor(props){
    super(props)
    this.state={isShow:true}
  }
  componentDidMount(){
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
      this.setState({isShow:false})
    }
  }
  render () {
    const {Component, pageProps} = this.props
    const {isShow}=this.state
    if(!isShow){
      return <div className="errorMobile">sorry,lose page</div>
    }else{
      return   <Container>
      <Component {...pageProps}/>
    </Container>
    }
  }
}
export default MyApp