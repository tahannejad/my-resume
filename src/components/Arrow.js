import React, {Component} from 'react'
import './arrow.css'

class Arrow extends Component{
    render(){
        return(
            <div className={`arrowflex ${this.props.className || ``}`} onClick={this.props.onClick}>
                <div class="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}

export default Arrow