import {combineReducers} from "redux"
import SideNavBar from "./side_nav"
import { current_section } from "./current_section";
import { skills_section_dynamic_height } from "./skills_section_height"

const store = combineReducers(
    {
        sideNavBar:SideNavBar,
        section:current_section,
        skills_section_dynamic_height:skills_section_dynamic_height
    }
)

export default store;