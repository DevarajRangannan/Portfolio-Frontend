import {combineReducers} from "redux"
import SideNavBar from "./side_nav"
import { current_section } from "./current_section";

const store = combineReducers(
    {
        sideNavBar:SideNavBar,
        section:current_section
    }
)

export default store;