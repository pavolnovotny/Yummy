import React from 'react';
import classes from './Baguette.module.css'
import Ingredients from './Ingredients/Ingredients'

const baguette = (props) => {
    let transIngredients= Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_, i)=> {
          return  <Ingredients key={igKey + i} type={igKey}/>
          
        })
    })
    .reduce((arr, cur)=>{
        return arr.concat(cur)
    },[])
    if(transIngredients.length ===0){
        transIngredients=<p>Please add ingtedients</p>
    } 
    return ( 
        <div className={classes.Baguette}>
            <Ingredients type='bread-top'/>                     
           {transIngredients}
            <Ingredients type='bread-bottom'/>
        </div>
     );

    
}
 
export default baguette;