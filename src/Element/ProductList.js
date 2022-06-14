import ProductItem from './ProductItem'
const ProductList = ({data}) => {
    console.log(data);
    return (
          <div style={{display:"grid", gridTemplateRow:"repeat(3, 1fr)",gap:"20px"}}>
            {
              data.map((item) => {
                   return (
                         <ProductItem item={item} />
                   )
              })     
            }
          </div>
    )
}
     

export default ProductList;