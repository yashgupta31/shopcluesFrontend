import { json } from "react-router-dom";
import { FETCH_CART_ITEMS, CLEAR_CART_ITEMS, REMOVE_CART_ITEM, UPDATE_CART_ITEM_QUANTITY, ADD_TO_CART } from "../actionTypes/cartActionTypes";
import axios from "axios";

// const allCart=(items)=>{(
//     type: ALL_CART_ITEMS,
//     payload: items
// )}

export const setCartItems = (items) => ({
    type: FETCH_CART_ITEMS,
    payload: items
})

export const clearCartItems = () => ({
    type: CLEAR_CART_ITEMS
})

export const fetchCartItems = () => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('shopcluestoken'));

    try {
        const response = await axios.get('http://localhost:3000/cart/getcart', {
            headers: {
                Token: `Bearer ${token}` // Use a more standard header name
            }
        })
        dispatch(setCartItems(response.data))
    } catch (error) {
        console.error('Error fetching cart items:', error);
    }
}

// export const addToCart=(productId, cartProducts)=> async(dispatch)=>{
//     const token= JSON.parse(localStorage.getItem('shopcluestoken'));
//     if(!token){
//         return alert('Please Login/ Register')
//     }
//     try {
//         // const existingCartItem= cartProducts.find(item=> item.productId._id=== productId)
//         const response = await axios.post(
//             'http://localhost:3000/cart/addtocart',
//             {productId},
//             {
//                 headers: {
//                     Token: `Bearer ${token}`,
//                     'Content-Type': 'application/json',
//                 }
//             }
//         );
        
//         if(response.data.alreadyInCart){
//             alert('Item already in cart')
//         }else{
//             dispatch({
//                 type: ADD_TO_CART,
//                 payload: { productId, quantity: 1 }
//             });
//         }

        
//         // if(existingCartItem){
//         //     // const updateQuantity= existingCartItem.quantity+ 1;
//         //     // dispatch({
//         //     //     type: UPDATE_CART_ITEM_QUANTITY,
//         //     //     payload: {productId, quantity: updateQuantity}
//         //     // })
//         //     alert('item already in cart')
//         // }else{
//         //     const response = await axios.post(
//         //         'http://localhost:3000/cart/addtocart',
//         //         { productId, quantity: 1 },
//         //         {
//         //             headers: {
//         //                 Token: `Bearer ${token}`,
//         //                 'Content-Type': 'application/json',
//         //             }
//         //         }
//         //     );

//         //     dispatch({
//         //         type: ADD_TO_CART,
//         //         payload: { productId, quantity: 1 }
//         //     });
//         // }


//     } catch (error) {
//         console.log('Internal server error')
//     }
// }

export const removeCartItem = (productId) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('shopcluestoken'));

    try {
        const response = await axios.delete(`http://localhost:3000/cart/removeItem/${productId}`,
            {
                headers: {
                    Token: `Bearer ${token}`
                }
            }
        )
        dispatch({
            type: REMOVE_CART_ITEM,
            payload: productId

        })
        dispatch(fetchCartItems())
    } catch (error) {
        console.log(error)
    }
}

export const updateCartQuantity = (productId, quantity) => async (dispatch) => {
    // const token= localStorage.getItem('shopcluestoken')
    const token = JSON.parse(localStorage.getItem('shopcluestoken'));
    try {  
        const response = await axios.patch('http://localhost:3000/cart/updateQuantity',
            { productId: productId, quantity: quantity},
            {
                headers: {
                    Token: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            }
        )
        dispatch({
            type: UPDATE_CART_ITEM_QUANTITY,
            payload: {productId, quantity}
        })
    } catch (error) {
        console.log(error)
    }
}