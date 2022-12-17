import "./Home.css"
import ItemListContainer from "../../ItemListContainer/ItemListContainer";

const Home = () => {
    return(
            <div className="home">
                 <div className="greeting_banner">
                    <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    </div>
                    

                    <div className="greeting-info">
                    
                     <h1 className="greeting">Find your favourite coffee any time of the day</h1>

                       <p>with coffeu you will find the coffee that suits you best </p>

                    </div>

                 <img className="greeting-img" src="https://res.cloudinary.com/dx719oxg1/image/upload/v1671285562/coffeu_img-removebg-preview_ipo4ho.png"></img>

                </div>
                
                <div className="products">
                   <h2 className="products-title">Our Products</h2>
                   
                </div>


                {/* <div className="personal-info">
                    <h2>About Our Mission</h2>
                    <p>Coffee is a motivating factor for many people. Whether it’s a shot of espresso to wake them up in the middle of the day or a steaming mug in the early morning hours, coffee everywhere is in high demand. The ones who are true coffee aficionados know the difference between a premium, freshly brewed coffee and a generic cup of coffee, and sometimes, that premium coffee is hard to find. We’re here to make it easy for you.</p>
          
                </div> */}
            </div> 
    )
}
        
export default Home;