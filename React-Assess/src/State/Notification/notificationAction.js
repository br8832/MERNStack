import * as ActionTypes from "../actionTypes"
export const AddNotification = (toggle) =>{
    return{type: ActionTypes.AddNotification, payload:toggle}
}
export const DeleteNotification = () =>
{
    return{type: ActionTypes.DeleteNotification}
}