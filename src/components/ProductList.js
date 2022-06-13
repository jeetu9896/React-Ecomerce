const ProductList = ({data}) => {
  console.log(data);
  return (
        <div>
          {
            data.map((item) => {
                 return (
                       <div>
                              <img src = {item.image}></img>
                              <p>{item.title}</p>
                              <p>{item.price}</p>
                              <p>{item.category}</p>
                       </div>
                 )
            })     
          }
        </div>
  )
}
export default ProductList;