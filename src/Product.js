import React,{useState,useEffect} from 'react';
import './index.css';
import axios from 'axios';


const Product = () =>{
    const [number,setNumber] = useState(1);
    const [product,setProduct] = useState([]);

    const increaceNumber = ()=>{
        setNumber( (number) => number + 1 );
    }
    const decreaseNumber = () =>{
        setNumber( (number) => number - 1);
    }

    useEffect(() => {
        axios.get("https://wawwinner.ae/dev/public/api/v1/front-end/campaign").then(res=>{
            setProduct(res.data.data);
        })
        return () => {
            console.log("cleanup")
        }
    }, [])

    const allproduct = product.map(data =>{
        return(
            <div className="combine" key={data.id}>

                <div className="row">
                    <div className="col">
                        <div className="ribbon">AED 50.00</div>
                        <div className="circle">
                            <div className="circle1">
                                <h1 className="number0">{data.quantity_sold}</h1>
                                <div className="span">
                                    <span className="span-status">{data.status}</span>
                                    <span className="bc">OUT OF</span>
                                    <span className="bc">{data.product_quantity}</span>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>

                <div className="row">
                    
                    <div className="col-lg-6" key={data.prize_id.id}>
                        <div className="explain-product" >
                            <img className="img-product" src={ data.prize_id.image } alt="default image" />
                            <h4 className="title-product-one">{data.title}</h4>
                            <span className="product">{data.prize_id.name}</span>
                            <p className="description-product">{data.prize_id.description}</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 div-tow" key={data.product_id.id}>
                        <div className="explain-product">
                            <img className="img-product" src={ data.product_id.image } alt="default image" />
                            <h4 className="title-product-tow">Get a chance to win:</h4>
                            <span className="product">{data.product_id.name}</span>
                            <p className="description-product">{data.product_id.description}</p>
                        </div> 


                        <div className="icon">
                            <div className="icon-one"><i className="fa fa-heart fa-2x" aria-hidden="true"></i></div>
                            <div className="icon-tow"><i className="fa fa-shopping-basket fa-2x" aria-hidden="true"></i></div>
                        </div>

                        <div className="add-product"></div>
                            <div className="btn-add-product">
                                <button onClick={increaceNumber}><i className="fa fa-plus"></i></button>
                                <span className="number">{number}</span>
                                <button onClick={decreaseNumber}><i className="fa fa-minus"></i></button>
                            </div>
                    </div>   

                </div>



             
            </div>

        )
    })

    return(
        <div>
            {allproduct}
        </div>
    )
}
export default Product 



 
  