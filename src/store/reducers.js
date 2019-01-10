// import { routerReducer } from 'react-router-redux';
import {
    combineReducers
} from 'redux';

// import {shopReducer as shop} from 'route/Shop';
// import {goodsDetailReducer as goodsDetail} from 'route/GoodsDetail';
<<<<<<< HEAD
// import {cartViewReducer as cart} from 'route/Cart';
import {
    counter
} from './../views/counter/container/CounterViewRedux'

=======
function counter() {
    return 30;
}
>>>>>>> d198f8eab1505101581140f8b519e8f75ff93172
export default combineReducers({
    // router: routerReducer,
    // shop,
    // goodsDetail,
    // cart
    counter
});