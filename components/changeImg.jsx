import {Component} from 'react'
export class ChangeImg extends Component{
    constructor(){
        super()
        
        this.state={
            url:''
        }
    }
    change(){

    }
    render(){
        const {index}=this.props
        return <img
        onmouseover={()=>{this.change('light',index)}}
        onmouseout={()=>{
          this.change('dark',index)
        }}
        className="images" src={`/static/images/index/logo/${e}.png`}></img>
    }
}