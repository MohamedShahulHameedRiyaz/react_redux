import { Routes, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/header";
import PageNotFound from "./components/common/PageNotFound";
// import CoursePage from "./components/course/CoursePage";
import UserPage from "./components/course/UserPage";
import CoursePage from "./components/course/CoursePage.func";
import { ManageCourse } from "./components/course/ManageCourse";
import { TodoPage } from "./components/todo/TodoPage";

export default function App(){

  return(
    <div className="container-fluid">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/course' element={<CoursePage />}/>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/manageCourse" element={<ManageCourse />}/>
        <Route path="/todo" element={<TodoPage />}/>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
