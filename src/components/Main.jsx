import ModelImage from "../images/Model.svg"
function Main() {
    return (
        <section className="shop">
            <h1 className="shop__title">Ladies</h1>
            <div className="shop-container">
                <div className="shop-container-left">
                <img src={ModelImage} />
                </div>
                <div className="shop-container-right">
                <p>Floral Print Notched Neckline Dress Without Belt Notched Neckline</p>
                <span className="shop-container-right__price">17,00 &euro;</span>
                <span className="shop-container-right__size">Size</span>
                <div className="shop-container-right-size">
                    <div className="shop-container-right-size-circle">S</div>
                    <div className="shop-container-right-size-circle">M</div>
                    <div className="shop-container-right-size-circle">L</div>
                </div>
                <span className="shop-container-right__color">Color</span>
                <div className="shop-container-right-size">
                    <div className="shop-container-right-size-circle__brown"></div>
                    <div className="shop-container-right-size-circle__black"></div>
                    <div className="shop-container-right-size-circle__green"></div>
                </div>
                <span className="shop-container-right__quantity">Quantity</span>
                <div className="shop-container-right-quantity">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
                <button className="primary">ADD TO BASKET</button>
                </div>
            </div>
        </section>
    )
}

export default Main