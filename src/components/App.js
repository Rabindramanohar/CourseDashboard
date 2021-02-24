import React from 'react'
import AboutPage from './about/AboutPage'
import HomePage from './home/HomePage';
import {Route, Switch} from 'react-router-dom';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import CoursesPage from './courses/CoursesPage';
import ManageCoursePage from './courses/ManageCoursePage';


export default function App() {
    return (
        <div className = "container-fluid">
            <Header />
            <Switch>
                <Route exact path = '/' component = {HomePage} />
                <Route path = '/courses' component = {CoursesPage} />
                <Route path = '/courses:slug' component = {ManageCoursePage} />
                <Route path = '/course' component = {ManageCoursePage} />
                <Route path = '/about' component = {AboutPage} />
                <Route component = {PageNotFound} />
            </Switch>
        </div>
    )
}
