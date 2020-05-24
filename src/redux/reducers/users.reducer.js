import { userConstants } from '../../constants/user.constants';
const initialState = {
    monedas:[],
    transacciones:[]
};
export default function (state = initialState, action) {
    switch (action.type) {
        case userConstants.MONEDAS:
            return {
                ...state,
                monedas:action.payload
        };
        default:
            return state
    }
}