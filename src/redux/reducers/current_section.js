export const current_section = (state=0, action)=>{
    switch(action.type){
        case "CURREN_SECTION":
            state = action.data;
            return state;
        default:

            return state;
    }
}