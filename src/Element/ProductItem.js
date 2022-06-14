const ProductItem = ({item}) => {
    return <div style={{margin:"auto", border:"1px solid black" , width:"400px" } }>
    <img src = {item.image}></img>
    <h1>Name:{item.title}</h1>
    <h3> Price:{item.price}</h3>
    <p> Category: {item.category}</p>
</div>
}
export default ProductItem