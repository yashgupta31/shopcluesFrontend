import { FETCH_CART_ITEMS, CLEAR_CART_ITEMS, REMOVE_CART_ITEM, UPDATE_CART_ITEM_QUANTITY, ADD_TO_CART } from '../actionTypes/cartActionTypes'

const initialState={
    item:[]
}

const cartReducer=(state= initialState, action)=>{
    switch(action.type){
        case FETCH_CART_ITEMS:
            return{
                ...state,
                item: action.payload
            }
        // case ADD_TO_CART:
        //     return{
        //         ...state,
        //         item: [...state.item, action.payload]
        //     }
        case REMOVE_CART_ITEM:
            return{
                ...state,
                item: state.item.filter((elem)=> elem.productId !== action.payload)
            }
        // case UPDATE_CART_ITEM_QUANTITY:
        //     return{
        //         ...state,
        //         item: state.item.map(elem=>
        //             elem.productId._id == action.payload.productId ?
        //             {...elem, quantity: action.payload.quantity}: elem
        //         )
        //     }
        case UPDATE_CART_ITEM_QUANTITY:
            return {
                ...state,
                item: state.item.map(elem =>
                    elem.productId._id == action.payload.productId?
                        { ...elem, quantity: action.payload.quantity }
                        : elem
                )
            }
        // case CLEAR_CART_ITEMS:
        //     return{
        //         ...state,
        //         items: []
        //     }
        default:
            return state;
    }
}

export default cartReducer;