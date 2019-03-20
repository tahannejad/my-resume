import React, {Component} from 'react'
import './navigation.css'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Navigation extends Component{
    render(){
        return(
            <div class="navbar">
                <Link activeClass="active" style={{"float": "right"}} to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    <a href="#home">About</a>
                </Link>
                <Link activeClass="active" style={{"float": "right"}} to="skills" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    <a href="#news">Skills</a>
                </Link>
                {/* <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}> */}
                    <a href="#Theme" onClick = {this.props.onClick}>
                        <img src = "images/brush.png" width="40px"></img>
                    </a>
                {/* </Link> */}
            </div>
        )
    }
}

export default Navigation