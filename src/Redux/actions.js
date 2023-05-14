import { ADD_INVOICE } from "./actionTypes"
import {EDIT_INVOICE} from "./actionTypes"
import {DELETE_INVOICE} from "./actionTypes"

export const addInvoice = (invoice) => {
    return {
        type: ADD_INVOICE,
        payload: invoice
    }
}

export const editInvoice = (invoice) => {
    return {
        type: EDIT_INVOICE,
        payload: invoice
    }
}

export const deleteInvoice = (invoice) => {
    return {
        type: DELETE_INVOICE,
        payload: invoice
    }
}