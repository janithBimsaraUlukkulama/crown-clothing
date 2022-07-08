import {Outlet} from "react-router";
import {Fragment} from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div>Logo</div>
                </Link>
                <div className='nav-link-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <h1>Navigation Bar</h1>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;