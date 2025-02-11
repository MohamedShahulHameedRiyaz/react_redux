import { NavLink } from "react-router-dom"

const Header = () => (
    <nav>
        <NavLink to ='/'>Home</NavLink>{" | "}
        <NavLink to ='/about'>About</NavLink>{" | "}
        <NavLink to ='/course'>Course</NavLink>{" | "}
        <NavLink to ='/manageCourse'>Manage Course</NavLink>{" | "}
        <NavLink to ='/todo'>Todo</NavLink>
    </nav>
)

export default Header