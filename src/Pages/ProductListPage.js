import React from 'react'
import SingleProductDesign from '../Common/SingleProductDesign'
import Rice from "../assets/images/rice.jpg"
import HairOil from "../assets/images/hairoil.webp"

const ProductListPage = () => {
// const [products,setProducts] = useState([])
const productData = [
    {
        name:'Hair Oil',
        price:'$12',
        tag:"Hair Solution",
        stock:false,
        imagesrc:HairOil
    },
    {
      name:'Rice',
      price:'$230',
      tag:"Food",
      stock:true,
      imagesrc:Rice
  }
] 
  return (
    <div className='product_wrapper'>
      <SingleProductDesign products={productData}/>
    </div>
  )
}

export default ProductListPage
