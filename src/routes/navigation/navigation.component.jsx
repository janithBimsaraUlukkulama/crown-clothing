import {Outlet} from "react-router";
import {Fragment, useContext} from "react";
import {useSelector} from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {signOutUser} from "../../utils/firebase/firebase.utils";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg";
import {CartContext} from "../../context/cart.context";
import {selectCurrentUser} from "../../store/user/user.selector";

import {NavigationContainer,LogoContainer, NavLinks, NavLink} from './navigation.styles';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const {isCartOpen} = useContext(CartContext)

    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className='logo'>Logo</CrownLogo>
                </LogoContainer>
                <NavLinks>
                    <NavLink className='nav-link' to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' className='nav-link' onClick={signOutHandler}>
                                SIGN OUT
                            </NavLink>
                        ) : (
                            <NavLink className='nav-link' to='/auth'>
                                SIGN IN
                            </NavLink>)
                    }
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>
                }
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;
