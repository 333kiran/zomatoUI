import React from 'react';
import { payWithPaytm } from '../../services/api';
import { post } from '../../utils/paytm';



const Action = ({restaurantData}) => {

    const buyNow = async () => {
        let response = await payWithPaytm({ amount:500, email: 'nagrakiran969@gmail.com'})
        let information = {
         action:'https://securegw-stage.paytm.in/order/process',
         params: response
        }
        post(information);
     }

  return (
    <>
     <button 
     onClick={() => buyNow()}
     style={{width:160,height:'2rem',background:'maroon',borderRadius:'10px',color:'white',border:'none'}}
     >Place Order</button>
    </>
  )
}

export default Action;