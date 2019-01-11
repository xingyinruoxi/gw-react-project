const ADD = 'add';
const SUB = 'sub';
//reducer
export function counter(state=19, action) {
    switch(action.type){
        case ADD:
            return state+7 ;
        case SUB:
            return state-1 ;
        default:
            return state;
    }
}
//action creator
export function addFun() {
    return {type:ADD}
}
export function subFun() {
    return {type:SUB}
}