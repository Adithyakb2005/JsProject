
// function Home(){
//     return(
//         <>
//         <h2>Home</h2>
        
//         </>
//     )
// }
// export default  Home
import React,{useState,useEffect} from "react";
import axios from 'axios'
 function Home(){{
  const [product,setProduct]=useState([])
  const [add,setAdd]=useState(false)
  const [CurrentProduct,setCurrentProduct]=useState(null)
  useEffect(()=>{
    axios.get('')
    .then(response=>setProduct(response.data))
    .catch(error=> console.log(error))
  },[])
  const view_p=(products)=>{
    setAdd(true);
    setCurrentProduct(products);
  }
  return(
    <div className="container mt-3">
      <div className="row" id="a1">
        {product.map(pro=>(
          <div className="col-lg-3 col-md-3 col-sm-6" key={pro.id}>
            <div className="card" onClick={()=>view_p(pro)}>
              <img className="card-img-top img-fluid" src={pro.image} alt="product image"/>
              <div className="card-body">
                <h4 className="card-title">{pro.p_name}</h4>
                <h6 className="card-text">${pro.pro.price}</h6>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}