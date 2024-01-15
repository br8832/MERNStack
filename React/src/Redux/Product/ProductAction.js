import * as ActionTypes from "../actionTypes"
export const ProductUpdate = (product)=>{
   return {type: ActionTypes.ProductUpdate, payload:product}
}