const initState = {
    listData: [1,2,4]
};

const GET_LIST = "GET_LIST/list/获取列表数据";

export default function list(state = initState, payload) {
    let {
        type
    } = payload;
    console.log('payload', payload);

    switch (type) {
        case GET_LIST:
            return {
                ...state,
                listData: [2, 3, 5]
            }
        default:
            return state;
    }
}

export let getListAction = (data) => dispatch => {
    dispatch({
        type: GET_LIST,
        payload: {
            request: {
                url: '/movie/top250',
                data: { ...data}
            }
        }
    });
}


// export const listOrderAction = (data) => dispatch =>dispatch(getListOrder(data));
// const getListOrder = (data) => ({
//     type: LISTORDER,
//     payload: {
//         request: {
//             url: '/f/app/jxorder/list',
//             data:{...data}
//         }
//     }
// });

// export getListAction;