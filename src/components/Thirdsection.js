import React, {Component} from 'react'
import data from "../data.json"
import Fullpage from "./Fullpage"
import './thirdsection.css'
import Arrow from "../components/Arrow"
import './arrow.css'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Thirdsection extends Component{
    render(){
        return(
            <div style={{backgroundColor : this.props.bcolor}}>
            <Fullpage className="third"> 
                <h3>{data.sections[1].title}</h3>
                <div className="card-wrapper">
                {
                    data.sections[1].items.map(skill => {
                        return(
                            <div className="card" style={{"color": "black" , backgroundColor : this.props.ccolor}}>
                                <div className="img-wrapper">
                                    <img src={skill.content.image} className="img" />
                                </div>
                                <div className="skill-title-wrapper">
                                    <h4>
                                        {skill.content.title}
                                    </h4>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </Fullpage>
            <div>
                <Arrow onClick={scroll.scrollToTop} className="r180" />
            </div>
            </div>
        )
    }
}

export default Thirdsection