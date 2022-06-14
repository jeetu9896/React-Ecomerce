
const ProductForm = ({formData , handleChange , handleSubmit}) => {
    const {title , category , gender , price , image } = formData

      return(
          <form onSubmit = {handleSubmit} style={{margin:"auto", width:"200px" ,height:"auto",border:"1px solid gray"}}>
                  <input type = "text" placeholder = "Enter Product Name" value = {title} name = "title" onChange = {handleChange}/>
                    <br />
                    
                 <input type = "text" placeholder = "Enter Product Category" value = {category} name = "category" onChange = {handleChange}/>
                    <br />
                     <input  type = "text" placeholder = " Enter Product Price" value = {price} name = "price" onChange = {handleChange} />
                    <br />
                     <input type = "url" placeholder = "https://picsum.photos/200" name = {image} onChange = {handleChange}  />
                    <br />
                    <select name = {gender} onChange = {handleChange} value = {gender}>
                           <option  value= "Select Gender" >Select Gender</option>
                           <option value = "Male" >Male</option>
                            <option value = "Female">Female</option>
                     </select>
                    <input type="submit" value="SUBMIT" />
                  
          </form>
      )
}

export default ProductForm;