import "./Home.css"
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = ({list}) => {
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

                    <div className="dots2">
                    <div className="dot2"></div>
                    <div className="dot2"></div>
                    <div className="dot2"></div>
                    </div>
                    

                    <div className="greeting-info">
                    
                     <h1 className="greeting">Find your favourite coffee any time of the day</h1>

                       <p>with coffeu you will find the coffee that suits you best </p>

                    </div>

                 <img className="greeting-img" src="https://res.cloudinary.com/dx719oxg1/image/upload/v1671715467/coffeu_img__2_-removebg-preview_qa8jgm.png" alt="CoffeU imagen"></img>

                </div>

                <div className="support-area mb-5 mt-5">
                    <div className="container">
                        <div className="row">
                         <div className="col-lg-3 col-sm-6">
                            <div className="support-wrap mb-30">
                                <div className="support-icon">
                                   <img src="" alt="" />
                                </div>
                                        <div className="support-content">
                                            <h5>Simple and safe purchase</h5>
                                            <p>Your order is always safe</p>
                                        </div>
                                </div>
                         </div>
                         <div className="col-lg-3 col-sm-6">
                            <div className="support-wrap mb-30">
                                <div className="support-icon">
                                   <img src="" alt="" />
                                </div>
                                        <div className="support-content">
                                            <h5>Support 24/7</h5>
                                            <p>You will be attended to as soon as possible</p>
                                        </div>
                                </div>
                         </div>
                         <div className="col-lg-3 col-sm-6">
                            <div className="support-wrap mb-30">
                                <div className="support-icon">
                                   <img src="" alt="" />
                                </div>
                                        <div className="support-content">
                                            <h5>Quick Delivery</h5>
                                            <p>We will make sure your order arrives quickly</p>
                                        </div>
                                </div>
                         </div>
                         <div className="col-lg-3 col-sm-6">
                            <div className="support-wrap mb-30">
                                <div className="support-icon">
                                   <img src="" alt="" />
                                </div>
                                        <div className="support-content">
                                            <h5>Order Discount</h5>
                                            <p>Get incredible discounts</p>
                                        </div>
                                </div>
                         </div>
                        </div>
                    </div>
                </div>
                
                <div className="products">
                   <h2 className="products-title">Our Products</h2>
                   <ItemListContainer list={list} className="ItemListContainer"/>
                </div>



                {/* <div className="personal-info">
                    <h2>About Our Mission</h2>
                    <p>Coffee is a motivating factor for many people. Whether it’s a shot of espresso to wake them up in the middle of the day or a steaming mug in the early morning hours, coffee everywhere is in high demand. The ones who are true coffee aficionados know the difference between a premium, freshly brewed coffee and a generic cup of coffee, and sometimes, that premium coffee is hard to find. We’re here to make it easy for you.</p>
          
                </div> */}
            </div> 

    )
}
        
export default Home;