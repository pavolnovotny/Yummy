import React from 'react';
import Auxi from '../../HOC/Auxi'
import classes from './Layout.module.css'
import Tools from '../Navigation/Tools/Tools'
import Footer from '../Footer/Footer'

const layout = (props) => (
    <Auxi>
          <Tools/>
          <main className={classes.Content}>
              {props.children}
          </main>
          <Footer/>
    </Auxi>
 )  

 
export default layout;