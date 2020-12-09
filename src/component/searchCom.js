import React from 'react';
//表单输入  
class SearchCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: '',
            result: ''
        }
    }

    searchEvent =(e)=>{
        if(e.keyCode === 13){
         //当keyCode是回车的时候再执行查询 回车键keycode=13
            console.log(e.keyCode)
            console.log(e.target.value)
            if(!this.props.continentObj[e.target.value]){
                this.setState({
                    result: <h2>输入有误，请输入正确的洲名</h2>
                })
            }else{
                this.setState({
                    result: (
                    <div>
                        <div>新增人数：{this.props.continentObj[e.target.value].confirmAdd}</div>
                        <div>确诊人数：{this.props.continentObj[e.target.value].confirm}</div>
                        <div>死亡人数：{this.props.continentObj[e.target.value].dead}</div>
                        <div>治愈人数：{this.props.continentObj[e.target.value].heal}</div>
                    </div>
                    )
                })
            }
        }

    }

    changeEvent =(e)=>{
        this.setState({
            value: e.target.value   //双向绑定
        })
    }
    //注意：表单输入必须绑定 value 和 onChange 事件
    render(){
        return(
            <div>
                <input type='text' placeholder='请输入查询的洲' onKeyDown={this.searchEvent} value={this.state.value} onChange={this.changeEvent}></input>
                <div>
                    <h2>查询结果：</h2>
                    <div>
                        {this.state.result}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchCom //组件导出