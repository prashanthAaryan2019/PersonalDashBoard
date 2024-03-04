import { FETCH_WEATHER_SUCCESS,
         FETCH_WEATHER_FAILURE,
         FETCH_WEATHER_REQUEST } from "./weatherActions";

const initialState ={
    loading:false,
    weather:null,
    error: null,
}

const weatherReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_WEATHER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                loading:false,
                weather:action.payload,
                error:null
            }
        case FETCH_WEATHER_FAILURE:
            
        return {
            ...state,
            loading:false,
            weather:null,
            error:action.payload,
        };
        default :
        return state
    }
}

export default weatherReducer