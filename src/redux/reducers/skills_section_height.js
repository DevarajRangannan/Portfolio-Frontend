export const skills_section_default_height = (state=0, action)=>{
    
    switch(action.type){
        case "SKILL_SECTION_DEFAULT_HEIGHT":
            return action.data;
        
        default:
            return state
    }
}

export const skills_section_dynamic_height = (state=0, action)=>{
    
    switch(action.type){
        case "SKILL_SECTION_DYNAMIC_HEIGHT":
            return action.data;
        
        default:
            return state
    }
}