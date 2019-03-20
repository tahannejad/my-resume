import React, {Component} from 'react'
import data from "../data.json"
import Fullpage from "./Fullpage"
import './secondsection.css'
import Arrow from "../components/Arrow"
import './arrow.css'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Secondsection extends Component{
    render(){
        return(
            <div style={{backgroundColor : this.props.bcolor}}>
            <Fullpage className="second">
                <h3>{data.sections[0].title}</h3>
                <div className="paragraphs">
                {
                    data.sections[0].items.map(p => {
                        return <p>{p.content}</p>;
                    })
                }    
                </div>
            </Fullpage>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                <Arrow></Arrow>
            </Link>
            <Element name="skills" className="element apelement">
            </Element>
            </div>
        )
    }
}

export default Secondsection