import "./scss/style.scss"

import {
    createRoutesFromElements,
    createBrowserRouter,
    Route, RouterProvider
} from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
           <Route path="*" element={<NotFound/>}/>
           <Route path="services" element={<NotFound/>}/>

        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
