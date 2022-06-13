import React from 'react'
import ProductForm from './ProductForm';
import ProductList from './ProductList'
const Product = () => {
  const [loading , setLoading] = React.useState(false);
  
   const [product , setProduct] = React.useState([]);
  const [formData, setFormData] = React.useState({
      title: "",
      gender: "",
      category: "",
      price : "",
      image : ""
    });


    const getProduct = () => {
      setLoading(true);
     fetch(" http://localhost:3001/product")
     .then((res) => res.json())
     .then((res) => {
         setProduct(res);
         //  setLoading(false);
     })
     .catch((err) => {
          
          setProduct([]);
         //   setLoading(false);
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

        setLoading(true);
       
    
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
             
             setProduct([]);
          })
          .finally(() => {
               setLoading(false);
          })

    
     }

     return <>
    <ProductForm />
    <ProductList />
     </>
  
}
export default Product