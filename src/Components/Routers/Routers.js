import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home";
import Main from "../../Layout/Main";
import Blogs from "../Blogs/Blogs";
import SeeProjectDetails1 from '../SeeProjectDetails/SeeProjectDetails1';
import SeeProjectDetails2 from '../SeeProjectDetails/SeeProjectDetails2';
import SeeProjectDetails3 from '../SeeProjectDetails/SeeProjectDetails3';


export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/seeprojectdetailsone',
                element: <SeeProjectDetails1></SeeProjectDetails1>
            },
            {
                path: '/seeprojectdetailstwo',
                element: <SeeProjectDetails2></SeeProjectDetails2>
            },
            {
                path: '/seeprojectdetailsthree',
                element: <SeeProjectDetails3></SeeProjectDetails3>
            }
        ]
    }
])