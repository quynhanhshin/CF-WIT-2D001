import "../../css/Product.css"
import ProductItem from "./ProductItem";
import { ProductList } from "../../data";
export default function Product() {
  return (
    <div className="product-list">
    {/* <ProductItem name="Áo Vest NAZAFU Màu Xám Da Bò AV1138" price="675,000 ₫" image="https://4menshop.com/cache/image/300x400/images/thumbs/2019/08/ao-vest-nazafu-xam-chuot-dam-1113_2_small-10927.JPG"></ProductItem>
    <ProductItem name="Set Phụ Kiện Xanh Đậm Sọc Và" price="299,000 ₫" image="https://4menshop.com/cache/image/300x400/images/thumbs/2019/08/ao-vest-nazafu-mau-da-bo-1138-10928.JPG"></ProductItem>
    <ProductItem name="Set Phụ Kiện Hoa Nâu " price="299,000 ₫" image="https://4menshop.com/cache/image/300x400/images/thumbs/2019/08/ao-vest-nazafu-mau-xanh-den-1138_2_small-10930.JPG"></ProductItem>
    <ProductItem name="Set Phụ Kiện Đen Trơn TGCB08" price="299,000 ₫" image="https://4menshop.com/cache/image/300x400/images/thumbs/2019/08/ao-vest-nazafu-mau-da-bo-1139_2_small-10931.JPG"></ProductItem> */}
    {ProductList.map((item, index) => {
        return <ProductItem key={index} name={item.name || "Name"} price={item.price || "default price"} image={item.image} /> // || là hoặc, key là giá trị duy nhất để phân biệt sản phẩm
    })}
    </div>    
  );
}

