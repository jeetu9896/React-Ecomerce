
import React from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const Product = () => {
    
     const [product , setProduct] = React.useState([]);
    const [formData, setFormData] = React.useState({
        title: "",
        gender: "",
        category: "",
        price : "",
        image : ""
      });


      const getProduct = () => {
       fetch("http://localhost:3001/product")
       .then((res) => res.json())
       .then((res) => {
           setProduct(res);
       })
       .catch((err) => {
            
       })
       
   }

   React.useEffect(() => {
        getProduct()
   } , [])

  
   

       const handleChange = (e) => {
             let  {name , value } = e.target;


         setFormData({ ...formData, [name]: value });
       }

       const handleSubmit =(e) => {
          e.preventDefault();


         
      
         fetch("http://localhost:3001/product" , {
              method : "POST",
              body : JSON.stringify(formData),
              headers : {
                  "content-type" : "application/json"
              }
          }).then((res) => res.json())
             .then((res) => {
               getProduct();
          })
            .catch((err) => {
               
            })
            
  
      
       }

     return (
          <>
          <ProductForm formData={formData} handleChange={handleChange} handleSubmit ={handleSubmit}  />
          <ProductList  data ={product}/>
             
          </>
     )
}

export default Product;