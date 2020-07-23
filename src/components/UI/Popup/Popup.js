import React from 'react';
import classes from './Popup.module.css'
import Auxi from '../../../HOC/Auxi'
import Background from '../Background/Background'

const popup = (props) => {
    return ( 
        <Auxi>
            <Background showPopup={props.showPopup} clicked={props.popupClosed} /> 
             <div className={classes.Popup}
        style={{transform: props.showPopup ? 'translateY(0)' :'translateY(-100vh)',
        opacity: props.showPopup ? '1': '0'
        }}
        >
            {props.children}
        </div>
        </Auxi>
       
     );
}
 
export default popup;