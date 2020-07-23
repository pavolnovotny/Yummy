import React from 'react';
import classes from './Controls.module.css' 
import Control from './Control/Control'


const ingredients=[
    {label: 'Beef', type: 'beef'},
    {label: 'Chicken', type: 'chicken'},
    {label: 'Tomatoes', type: 'tomatoes'},
    {label: 'Cucumbers', type: 'cucumbers'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Ham', type: 'ham'},
    {label: 'Salad', type: 'salad'}
        
]

const controls = (props) => {
    return ( 
      
        <div className={classes.Controls}>
            <div className={classes.Buttons}>
            {ingredients.map(ing=>(
                <Control
                added={()=> props.ingredientAdded(ing.type)}
                removed={()=> props.ingredientRemoved(ing.type)}
                key={ing.label} 
                label={ing.label}
                disabled={props.disabled[ing.type]}
                />
                ))}
            </div>
           
        <h3 className={classes.Price}>Price: {props.price.toFixed(2)} €</h3>
        <button disabled={!props.purchaseable}
        onClick={props.callOrder}
         className={classes.OrderButton}>CHECKOUT</button>
        </div>
     );
}
 
export default controls;