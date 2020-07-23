import React from 'react';
import bagTag from '../../assets/photos/name-text-tra.png'
import classes from './Tag.module.css'

const tag = (props) => (
    <div className={classes.Tag}>
        <img  src={bagTag} alt='tag'/>
    </div>
)
 
export default tag;