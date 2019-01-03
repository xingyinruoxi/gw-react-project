// import { routerReducer } from 'react-router-redux';
import {
    combineReducers
} from 'redux';

// import {shopReducer as shop} from 'route/Shop';
// import {goodsDetailReducer as goodsDetail} from 'route/GoodsDetail';
function counter() {
    return 30;
}
export default combineReducers({
    // router: routerReducer,
    // shop,
    // goodsDetail,
    // cart
    counter
});