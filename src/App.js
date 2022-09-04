import {Routes, Route} from "react-router";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {createUserDocumentFromAuth, onAuthStateChangeListener} from "./utils/firebase/firebase.utils";
import {setCurrentUser} from "./store/user/user.action";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication-component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        return onAuthStateChangeListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='/shop/*' element={<Shop/>}/>
                <Route path='/auth' element={<Authentication/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
            </Route>
        </Routes>
    );
}

export default App;
