/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 import React from 'react';
 import ReactDOM from 'react-dom';
 import { BrowserRouter, Route ,Routes} from "react-router-dom";
 import Example from "./pages/Example";
import Home from './pages/Home';
import PostEdit from './pages/PostEdit'; //追記
const App = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/example" element={<Example/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/post/edit/:id" element={<PostEdit/>}/>
            </Routes>
        </BrowserRouter>
    );
};
if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
    }