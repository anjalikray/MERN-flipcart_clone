import { Box } from "@mui/material";


import { BrowserRouter , Routes ,Route } from "react-router-dom";

//components
import Headers from "./components/header/Headers";
import Home from "./components/home/Home";
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/Cart";

import DataProvider from "./context/DataProviders";

function App() {
    return (
        <DataProvider>
            <BrowserRouter>
                <Headers />
                <Box style={{ marginTop: 55 }}>
                    <Routes>
                      <Route path="/" element= {<Home />} />
                      <Route path="/product/:id" element= {<DetailView />} />
                      <Route path='/cart' element={<Cart/>}/>
                    </Routes>
                </Box>
            </BrowserRouter>
        </DataProvider>
    );
}

export default App;
