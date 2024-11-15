import {useContext} from "react"
import ShopContext from "../components/Context/ShopContext"
import {useParams} from "react-router-dom"
import ProductHd from "../components/ProductHd"; 


const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e) => e.id ===Number(productid));
  if(!product){
     return <div>Product not found!</div>
  }
  return (
     <section className="max_padd_container py-28">
       <div>
         <ProductHd product={product}/>
         <ProductDisplay  product={product}/>
         <ProductDescription />
       </div>
     </section>
  )

}
export default Product 