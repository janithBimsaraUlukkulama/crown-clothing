import {Routes, Route, Outlet} from "react-router";

import Home from "./routes/home/home.component";

const Navigation = () => {
    return (<div>
        <h1>Navigation Bar</h1>
        <Outlet/>
    </div>)
}

const Shop = () => {
    return <h1> Shop Page </h1>
}

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='/shop' element={<Shop/>}/>
            </Route>
        </Routes>
    );
}

export default App;
