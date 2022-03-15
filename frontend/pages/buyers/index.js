import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import Question from "../../components/universal/Question.js";
import Menu from "../../components/universal/LeftMenu.js";
import Answer from "../../components/universal/Answer.js";
import styles from "../../styles/Buyers.module.css";
import { AnswerList } from "../../components/universal/Answer.js";

function QuestionList() {
    return (
        <>
            <Answer question = "DaSHI. DS warehouses and sales outlets in Russia and other countries" answer = {
                <>
                    <p className={styles.answerTopic}>You can trace the path of each part on the sites of our partners and representatives of DS in the section “DaSHI Products”. Start of production is marked “In factory”, delivery time and its location – “In transit”, and stocking in Russia is marked “In stock”.</p>
                    <span className={styles.iconsSection}>
                        <img src="icons/buyersAnswer1.svg" alt="" />
                        <img src="icons/buyersAnswer2.svg" alt="" />
                        <img src="icons/buyersAnswer3.svg" alt="" />
                    </span>
                    <p className={styles.titleBuyers}>Nowadays, the main sales outlet is located in Blagoveshchensk, Amur Region. For more information, go to <a href="http://dsparts-dv.com" style={{color: '#F46628'}}>www.dsparts-dv.com</a></p>
                </>
            }/>
            <Answer id="quelityControl" question="DS Quality Control" answer = {
                <p className={styles.answerTopic}>
                    All DaSHI products are certified in Russia. Each batch is subjected to full customs clearance procedure in Russia.
                    You can check the authenticity of DS Products on the website of official representatives in the section “DS 
                    Authentication / DS Quality Control”. You should enter a code (11-digit identification numerical or alphanumerical code) 
                    assigned to a part or scan a QR-code in the special form on the website. You can also send a request 
                    to <a href="#">Customer Support</a>.
                </p>
            }/>
            <Answer question="DS Product Warranty" answer = {
                <>
                    <p className={styles.answerTopic} style={{marginBottom: 20 + "px"}}>
                        Certain rules must be followed when reporting a warranty or making a claim.
                    </p>
                    <a href="/guarantee" className={styles.titleBuyers} style={{color: '#F46628'}}>Learn more</a>
                </>
            }/>
            <Answer question="DS Service. Express Delivery" answer = {
                <>
                    <p className={styles.answerTopic}>
                        You may request express delivery by contacting us via <a href="#">the provided contact form</a> or request 
                        to <a href="#">Customer Support</a>     in case of emergency or if parts are required urgently. We will check 
                        the availability of the parts for your place and organize express delivery from the nearest warehouse with DaSHI products.

                    </p>
                </>
            }/>
            <Answer question="DS Service. Express Diagnostics" answer = {
                <>
                    <p className={styles.answerTopic}>
                        The enterprise offers you an express diagnostics of parts on DS equipment with up to 50% discount in case of DS nozzles’ malfunction.
                    </p>
                    <p className={styles.answerTopic} style={{marginBottom: 10 + "px", marginTop: 10 + "px"}}>
                        Contact us via the <a href="#">feedback form</a> or <a href="#">Customer Support</a>, and we will clarify this possibility for your 
                        location and give you the location of the nearest DS booth service.
                    </p>
                    <p className={styles.answerTopic}>
                        We guarantee the high quality of all sold products. Each nozzle is tested on the diagnostic stand before shipping it to the customer. 
                        Such approach allows us to avoid selling low-quality products. 
                    </p>
                </>
            }/>
            <Answer long = "yes" question="DS Service. Replacement of used and defective DS Euro 2 Nozzles for new ones with up to 30% discount." answer = {
                <>
                    <p className={styles.answerTopic}>
                        We offer you the opportunity to replace a defective DS Euro 2 nozzle with a new DS nozzle of the same number with a significant discount.
                    </p>
                    <a href="http://localhost:3000/news" className={styles.titleBuyers} style={{color: '#F46628'}}>Learn more</a>
                </>
            }/>
        </>
    )
}

function BuyersInfo() {
    return (
        <div className={styles.buyersInfo}>
            <div className={styles.mainInfo}>
                <AnswerList list={[
                    "Do you want to find out the price and terms of delivery of the goods you are interested in?",
                    "Do you want to find your nearest DS self-pickup warehouse or DS sales outlet?",
                    "Do you want to order a courier delivery or express shipping in case the necessary equipment is out of stock in your place?",
                    "Do you want to know about DS partners, dealers and representatives?"
                ]}/>
                <p className={styles.titleBuyers}>You can get answers to these and other questions by filling out a <a href="#">feedback form</a> or by contacting our <a href="#">Customer Support</a>.</p>
            </div>
            <QuestionList/>
        </div>
    )
}

function Buyers() {
    return (
        <>
            <Header/>
            <Question/>
            <div className="contentSection">
                <div className="content">
                    <Menu page='buyers'/>
                    <span>
                        <BuyersInfo/>
                        <img src="images/buyersImage.png" alt="" />
                    </span>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Buyers;