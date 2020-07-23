import React, { Component } from 'react';
import Auxi from '../../HOC/Auxi'
import Baguette from '../../components/Baguette/Baguette'
import Controls from '../../components/Baguette/Controls/Controls'
import Popup from '../../components/UI/Popup/Popup'
import Checkout from '../../components/Baguette/Checkout/Checkout'

const PRICES = {
            beef:1,
            chicken:0.8,
            tomatoes:0.3,
            cucumbers:0.2,
            cheese:0.5,
            ham:0.6,
            salad:0.3,
            pepperoni:0.4
}

class Maker extends Component {
    state = {
        ingredients:{
            beef:0,
            chicken:0,
            tomatoes:0,
            cucumbers:0,
            cheese:0,
            ham:0,
            salad:0,            
        }, totalPrice: 1,
        purchaseable: false,
        ordering: false
      }

      popupCloseHandler=()=>{
        this.setState({ordering:false})
      }

      popupContinueHandler=()=>{
          alert('You Continue !')
      }

      orderHandler=()=>{
          this.setState({ordering:true})
      }


      checkPurchase(ingredients){
          
          const sum= Object.keys(ingredients)
          .map(item=>{
              return ingredients[item]
          })
          .reduce((sum,el)=>{
           return sum + el
          },0)
          this.setState({purchaseable: sum>0})
      } 

      addIngHandler= (type)=>{
          const oldCount= this.state.ingredients[type]
          const updCount= oldCount+1
          const updIng={
              ...this.state.ingredients
          }
          updIng[type]=updCount
          const priceAddition = PRICES[type]
          const oldPrice= this.state.totalPrice
          const newPrice= oldPrice+priceAddition
          this.setState({totalPrice: newPrice, ingredients:updIng })
          this.checkPurchase(updIng)
         
      }

      deleteIngHandler= (type)=>{
        const oldCount= this.state.ingredients[type]
        if(oldCount<=0){
            return
        }
        const updCount= oldCount - 1
        const updIng={
            ...this.state.ingredients
        }
        updIng[type]=updCount
        const priceDecreasing = PRICES[type]
        const oldPrice= this.state.totalPrice
        const newPrice= oldPrice - priceDecreasing
        this.setState({totalPrice: newPrice, ingredients:updIng })
        this.checkPurchase(updIng)
      }
    render() { 
        const hideButton={
            ...this.state.ingredients
        }
        for(let item in hideButton){
            hideButton[item] = hideButton[item] <=0
        }

        return ( 
            <Auxi>
                <Popup 
                popupClosed={this.popupCloseHandler}
                showPopup={this.state.ordering}>
                    <Checkout
                     ingredients={this.state.ingredients}
                     cancelHandler={this.popupCloseHandler} 
                     continueHandler={this.popupContinueHandler} 
                     price={this.state.totalPrice}

                    />
                </Popup>
                <Controls 
                ingredientAdded={this.addIngHandler}
                ingredientRemoved={this.deleteIngHandler}
                disabled={hideButton}
                price={this.state.totalPrice}
                callOrder={this.orderHandler}
                purchaseable={this.state.purchaseable}
                />
                <Baguette ingredients={this.state.ingredients}/>
                
            </Auxi>
         );
    }
}
 
export default Maker;