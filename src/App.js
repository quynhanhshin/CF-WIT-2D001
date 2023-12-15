import Product from "./components/product/Product"
import Counter from "./components/counter/Counter";
function App() {
  return (<Counter>
    <h1>Sản phẩm mới</h1>
    <Product />
  </Counter>);
}

export default App;
