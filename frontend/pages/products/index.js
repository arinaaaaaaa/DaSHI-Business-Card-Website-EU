import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import Question from "../../components/universal/Question.js";
import Menu from "../../components/universal/LeftMenu.js";
import styles from "../../styles/Products.module.css";

function ProductItem(props) {
    return (
        <span className={styles.productItem}>
            <span>
                <img src={props.imgSrc} alt="" className={styles.productImg}/>
                <p className={styles.itemTitle}>{props.title}</p>
            </span>
            <span  class="tooltip">
                <img src="icons/help-light.svg" alt="help"/>
                <span class="promt">
                    {props.promt}
                </span>
            </span>
        </span>
    )
}

function ProductsSection() {
    return (
        <div className={styles.productsSection}>
            <div className={styles.linksSection}>
                <a href="#"><span style={{color: '#F46628'}}>DS</span> PACKAGING</a>
                <span className={`${styles.linkSection} ${"tooltip"}`}><span style={{color: '#F46628'}}>DS&nbsp;</span>QUALITY CONTROL<img src="icons/help.svg" alt="" />
                    <span class="promt">
                        All DaSHI products are certified in Russia. Each batch is subjected to full customs clearance procedure in Russia. <a href="http://localhost:3000/buyers">Learn more</a>
                    </span>
                </span>
            </div>
            <div className={styles.productsGrid}>
                <ProductItem
                    imgSrc="images/products1.svg"
                    title="DS Fuel Nozzles"
                    promt="DS (DaSHI) Euro 2, 3, 4, 5 Fuel Nozzles are high quality original nozzles created for efficient fuel consumption. 
                    DaSHI nozzles are analogous to such brands as Bosch, Denso, Delphi, Weichai, Yuchai and etc. We sell nozzles for gasoline 
                    and diesel engines for Common Rail System (CR). To confirm the price, availability and terms of delivery of the goods you 
                    are interested in, you can specify an article (specify DS number or analogue) leaving the request via feedback form or contact 
                    with Customer Support."                    
                />
                <ProductItem
                    imgSrc="images/products2.svg"
                    title="Accessory equipment for DS nozzles"
                    promt = "Accessory equipment for DS nozzles – a wide range of components for different types of DS nozzles: sprayers, fittings, 
                    valves, solenoids, nuts, balls, rings, repair kits."
                />
                <ProductItem
                    imgSrc="images/products3.svg"
                    title="DS Kits for remodeling Euro 3 / 4 engines to Euro 2"
                    promt="The product is not available at the moment."
                />
                <ProductItem
                    imgSrc="images/products1.svg"
                    title="DS spare parts"
                    promt="DS Plunger and Barrel assembly, cylinder-piston group, filters, glow plugs, pumps, high pressure fuel pumps.
                    The product is not available at the moment."
                />
            </div>
        </div>
    )
}

function Banners() {
    return (
        <>
            <Header/>
            <Question/>
            <div className="contentSection">
                <div className="content">
                    <Menu page='products'/>
                    <ProductsSection/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Banners;