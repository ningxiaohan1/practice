import React,{Component} from 'react';
import bannerImg from '../assets/img/banner.jpg';
import '../assets/css/ZjCom.css';

class ZjCom extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className='contentItem new'>
                <div className='banner'>
                    <img alt='banner' src={bannerImg} />
                    <h1>疫情追踪</h1>
                </div>

                <div className='newContent'>
                    <div className='line'></div>
                    <div className='newsList'>

                    </div>
                </div>

            </div>
        )
    }
}

export default ZjCom;