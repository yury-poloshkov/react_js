import React from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <div>
                <h1>Product Catalog</h1>
                <AddProduct />
                <ProductList />
            </div>
        </Provider>
    );
}

export default App;
