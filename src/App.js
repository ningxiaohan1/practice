import React from 'react';
import './assets/css/style.css';
import ZjCom from './component/ZjCom';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      navList:['疫情地图','最新进展','广州疫情','直击现场'],
      tabIndex: 0,
      barStyle:{
        left: '22px'
      },
      contentStyle:{
        transform:'translate(0,0)'
      }
    }
  }
tabClickEvent =(index)=>{
  console.log(index);
  this.setState({
    barStyle:{
      left: (index*88+22)+'px'
    },
    contentStyle:{
      transform:`translate(-${index*375}px,0)`
    },
    tabIndex: index
  })
}

  render(){
    return(
      <div className='App'>
        <div className='nav'>
          {
            this.state.navList.map((item,index) =>{
              if(index === this.state.tabIndex){
              return(
                <div key={index} onClick={(event)=> {this.tabClickEvent(index)}} className='navItem active'>{item}</div>
              )}else{
              return(
                <div key={index} onClick={(event)=> {this.tabClickEvent(index)}} className='navItem'>{item}</div>
              )
            }
          })
          }
          <div className='bar' style={this.state.barStyle}></div>
        </div>
        <div className='content' style={this.state.contentStyle}>
          <MapCom />
          <ZxCom />
          <GzCom />
          <ZjCom />
        </div>  
      </div>
    )
  }
}

function MapCom(props){
  return(
    <div className='contentItem'>
      <h1>这是地图组件</h1>
    </div>
  )
}

function ZxCom(props){
  return(
    <div className='contentItem'>
      <h1>这是最新进展组件</h1>
    </div>
  )
}

function GzCom(props){
  return(
    <div className='contentItem'>
      <h1>这是广州疫情组件</h1>
    </div>
  )
}

export default App;
