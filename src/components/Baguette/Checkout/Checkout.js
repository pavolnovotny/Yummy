import React from 'react';
import Auxi from '../../../HOC/Auxi'
import Buttons from '../../UI/Buttons/Buttons'
import classes from './Checkout.module.css'
const checkout = (props) => {
    const summary= Object.keys(props.ingredients).map(item=>{
    return <li key={item}>
        <span style={{textTransform: 'capitalize'}}>{item}</span>
    : {props.ingredients[item]}
    </li>
    }) 
    return ( 
        <Auxi>
           <h3>Your order</h3> 
           <p>A baguette with the following ingredients:</p> 
            <ul className={classes.Checkout}>
                {summary}
            </ul>
            <h4>Total Price: {props.price.toFixed(2)} €</h4>
            <p>Countinue to Checkout ?</p>
            <Buttons btnType="Danger" clicked={props.cancelHandler}>CANCEL</Buttons>
            <Buttons btnType="Success"clicked={props.continueHandler}>PURCHASE</Buttons>
        </Auxi>
     );
}
 
export default checkout;