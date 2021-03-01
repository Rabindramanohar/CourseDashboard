import React from 'react'
import AboutPage from './about/AboutPage'
import HomePage from './home/HomePage';
import {Route, Switch} from 'react-router-dom';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import CoursesPage from './courses/CoursesPage';
import ManageCoursePage from './courses/ManageCoursePage';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
    return (
        <div className = "container-fluid">
            <Header />
            <Switch>
                <Route exact path = '/' component = {HomePage} />
                <Route path = '/about' component = {AboutPage} />
                <Route path = '/courses' component = {CoursesPage} />
                <Route path = '/course/:slug' component = {ManageCoursePage} />
                <Route path = '/course' component = {ManageCoursePage} />
                <Route component = {PageNotFound} />
            </Switch>
            <ToastContainer autoClose = {3000} hideProgressBar />
        </div>
    )
}
