import {configureStore} from 'redux';
import { invoiceReducer } from './reducer';
const store = configureStore(invoiceReducer)
export default store;
