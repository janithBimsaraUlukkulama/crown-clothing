import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";

import CategoryPreview from '../categories-preview/categories-preview.component'
import Category from "../category/category.component";

import './shop.styles.scss';
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {setCategories} from "../../store/categories/category.action";

const Shop = () => {
    const dispatch  = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoryArray));
        };
        getCategoriesMap();
    }, []);

    return (
       <Routes>
           <Route index element={<CategoryPreview/>}/>
           <Route path=':category' element={<Category/>}/>
       </Routes>
    );
};

export default Shop;
