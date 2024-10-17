import img1 from '../assets/ipad.jpg';
import img2 from '../assets/jbl.jpg';
import img3 from '../assets/rolex.jpg';
import Footer from './Footer';
import React,{useState,useEffect} from "react";
import axios from 'axios';

// function Home() {

const Home=()=>{
  const [product,setProduct]=useState([])
  const [add,setAdd]=useState(false)
  const [currentProduct,setCurrentProduct]=useState(null)
  useEffect(()=>{
    axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
      .then(response=>setProduct(response.data))
      .catch(error => console.log(error))
  },[]);
  
  const view_p=(products)=>{
    setAdd(true);
    setCurrentProduct(products);
  };

  return(

    <>
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>
      
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
          <div className="carousel-caption">
            <h3>Los Angeles</h3>
            <p>We had such a great time in LA!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} alt="Chicago" className="d-block" style={{ width: '100%' }} />
          <div className="carousel-caption">
            <h3>Chicago</h3>
            <p>Thank you, Chicago!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} alt="New York" className="d-block" style={{ width: '100%' }} />
          <div className="carousel-caption">
            <h3>New York</h3>
            <p>We love the Big Apple!</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>



    <div className="container mt-3">
      <div className="row" id="al">
      {product.map(pro=> (
        <div className="col-lg-3 col-md-3 c0l-sm-6" key={pro.id}>
          <div className="card" onClick={()=>view_p(pro)}>
            <img childrenlassNmae="card-img-top img-fluid" src={pro.image} alt="product image" />
            <div className="card-body">
              <h4 className="card-little">{pro.p_name}</h4>
              <h6 className="card-text">{pro.price}</h6>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home






// function Home() {
//   return (
//     <>
//       <div id="demo" className="carousel slide" data-bs-ride="carousel">
        
//         <div className="carousel-indicators">
//           <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
//           <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
//           <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
//         </div>
        
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src={img1} alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
//             <div className="carousel-caption">
//               <h3>Los Angeles</h3>
//               <p>We had such a great time in LA!</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src={img2} alt="Chicago" className="d-block" style={{ width: '100%' }} />
//             <div className="carousel-caption">
//               <h3>Chicago</h3>
//               <p>Thank you, Chicago!</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src={img3} alt="New York" className="d-block" style={{ width: '100%' }} />
//             <div className="carousel-caption">
//               <h3>New York</h3>
//               <p>We love the Big Apple!</p>
//             </div>
//           </div>
//         </div>

//         <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon"></span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
//           <span className="carousel-control-next-icon"></span>
//         </button>
//       </div>


//       <Footer/>
//     </>
//   );
// }

// export default Home;
