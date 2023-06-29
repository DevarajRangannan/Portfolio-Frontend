const SideNavBar = (state=false, action)=>{
    switch(action.type){
        case "SIDE_NAV_BAR":
            return !state
        default:
            return state            
    }
}
export default SideNavBar
