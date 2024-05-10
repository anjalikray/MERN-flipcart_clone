import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/actions/productAction.js";

//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide.jsx";
import MidSlide from './MidSlide.jsx';
import MidSection from "./MidSection.jsx";

const Component = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`;

const Home = () => {
    const { products } = useSelector((state) => state.getProducts); //here getProducts is an object that contains all data from database inside store
    // console.log(products)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts()); //here getProducts is a function which is used to call api to backend made inside redux/actions
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection />
                <Slide products={products} title="Discounts for You" timer={false} />
                <Slide products={products} title="Suggested Items" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <Slide products={products} title="Recommended Items" timer={false} />
                <Slide products={products} title="Trending Offers" timer={false} />
                <Slide products={products} title="Season's Top Pick" timer={false} />
                <Slide products={products} title="Top Deals on Accessories" timer={false} />
            </Component>
        </>
    );
};

export default Home;
