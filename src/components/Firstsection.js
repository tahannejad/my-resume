import React, {Component} from 'react'
import { SocialIcon } from 'react-social-icons';
import data from "../data.json"
import Fullpage from "./Fullpage"
import './firstsection.css'
import Arrow from "../components/Arrow"
import './arrow.css'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Firstsection extends Component{
    render(){
        return(
            <div style={{backgroundColor : this.props.bcolor}}>
            <Fullpage className = "first">
                <h1>{data.title}</h1>
                <div>
                    <h2>{data.subtitle}</h2>
                </div>
                <div className = "icon-wrapper">
                    {
                        Object.keys(data.links).map(key => {
                            return(
                                <div className = "icon">
                                    <SocialIcon url = {data.links[key]} />
                                </div>
                            );
                        })
                    }
                </div>
            </Fullpage>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                <Arrow></Arrow>
            </Link>
            <Element name="about" className="element apelement">
            </Element>
            </div>
        )
    }
}

export default Firstsection