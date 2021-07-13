import React from 'react'
import Icon from '@material-ui/core/Icon'

const HeadBar = () => {
    return (
        <div id="header">
            <div id="left-side">
                <button><Icon>apps</Icon></button>
                <button><Icon>home</Icon></button>
                <button className="bigbutton"><Icon>dashboard</Icon>   Boards</button>
                <div id="top-in"><input  type="text"></input><button><Icon>search</Icon></button></div>
            </div>
            <h3 id="title">Trello</h3>
            <div id="right-side">
                <button><Icon>add</Icon></button>
                <button><Icon>info</Icon></button>
                <button><Icon>notifications</Icon></button>
            </div>
        </div>
    )
}

export default HeadBar
