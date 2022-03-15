import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import Question from "../../components/universal/Question.js";
import Menu from "../../components/universal/LeftMenu.js";
import Answer from "../../components/universal/Answer.js";
import styles from "../../styles/Partners.module.css";
import { AnswerList, FileList } from "../../components/universal/Answer.js";

function PartnersInfo() {
    return (
        <div className={styles.partnersSection}>
            <div className={styles.partnersHeader}>
                <p className={styles.sectionTitle}>BECOME A <span style={{color: '#F46628'}}>DS</span> PARTNER</p>
                <span className={styles.partnerTypes}>
                    <button>DS +</button>
                    <span className="tooltip">
                        <button style={{margin: 0}} disabled>DS Ultra</button>
                        <span className="promt">It is not available at the moment</span>
                    </span>
                </span>
            </div>
            <p className={styles.title}>We invite you to join our <span style={{color: '#F46628'}}>DS Team</span>!</p>
            <div className="questionList">
                <Answer question="What will our cooperation lead to?" answer = {
                    <>
                        <p className="answerTitle">A new DS sales outlet will be found in your city, town. As a result together we will achieve:</p>
                        <div className="list">
                            <AnswerList list={[
                                "Availability of necessary spare parts",
                                "Uninterrupted operation of your equipment, supply department, and sales department",
                                "Shorten delivery time",
                                "Delivery of the necessary spare parts by any convenient way within 1-2 days",
                                "High quality and accessible service",
                                "We offer to our representatives the installation of diagnostic equipment including mobile ones, for quick detection and elimination of inaccuracies and other problems"
                            ]}/>
                        </div>
                    </>
                }/>
                <Answer question="Where to start?" answer = {
                    <>
                        <p className="answerTitle">It is very easy to do. Download and fill out the documents:</p>
                        <FileList list={[
                            ["#", "Region Market Analysis Questionnaire"],
                            ["#", "About Products Form"],
                            ["#", "Questionnaire for the Partner with indication of the desired form of cooperation*"]
                        ]}/>
                        <p className="answerTitle" style={{marginBottom: 0, marginTop: 29 + "px"}}>Filled in documents can be sent through the <a href="#" style={{color: '#F46628'}}>feedback form</a> or by<a href="#" style={{color: '#F46628'}}> e-mail</a>.</p>
                    </>
                }/>
                <Answer question="Forms of cooperation:" answer = {
                    <>
                        <p className={styles.discription}><b>1. DS Customer</b> – we work under the purchase and sale agreement. Your organization or you individually buy the necessary goods for resale or storage and further sale. We work with VAT and without VAT.</p>
                        <p className="answerTitle" style={{marginBottom: 11 +"px"}}>From us:</p>
                        <AnswerList list={[
                            "Fulfillment of all our obligations spelled out in the agreement",
                            "Informing about the status of goods, their location and cost, and if they are unavailable – the terms of delivery",
                            "Prompt delivery and shipment to your address",
                            "After-sales service",
                            "Informing about the arrival of goods to the warehouse"
                        ]}/>
                        <p className="answerTitle" style={{marginBottom: 11 +"px", marginTop: 24 + "px"}}>From you:</p>
                        <AnswerList list={[
                            "Fulfillment of all accepted obligations spelled out in the agreement",
                            "Provision of the current information for the order: product number, quantity, recipient data",
                            "The timely fulfillment of financial obligations"
                        ]}/>
                        <p className={styles.discription} style={{marginTop: 56 + "px", marginBottom: 31 + "px"}}><b>2. DS Representative – dealer.</b> We work under the purchase and sale agreement and conclude an additional agreement on cooperation.</p>
                        <p className="answerTitle">Advantages of this type of cooperation:</p>
                        <AnswerList list={[
                            "You get the right to use a certificate for importing goods. Your company can import goods into the Russian Federation on its own",
                            "Information about your company is added to our website in the section “Partners”"
                        ]}/>
                        <p className="answerTitle" style={{marginBottom: 11 +"px", marginTop: 24 + "px"}}>From us</p>
                        <AnswerList list={[
                            "Provision of a number of corporate identity elements in electronic form, presentation and advertising products",
                            "Fulfillment of all accepted obligations spelled out in the agreement",
                            "Informing about the status of goods, their location and cost, and if they are unavailable – the terms of delivery",
                            "Prompt delivery and shipment to your address",
                            "After-sales service",
                            "Informing about the arrival of goods to the warehouse"
                        ]}/>
                        <p className="answerTitle" style={{marginBottom: 11 +"px", marginTop: 24 + "px"}}>From you:</p>
                        <AnswerList list={[
                            "Fulfillment of all accepted obligations spelled out in the agreement, the procurement minimum is determined",
                            "The frequency of purchase is approved in advance: monthly, quarterly, semi-annually",
                            "Procurement volume is determined by the location and capabilities of your enterprise",
                            "Preliminary informing about procurement plans – product number, quantity, recipient data",
                            "The timely fulfillment of financial obligations",
                            "The timely information about the market situation at your sales outlet"
                        ]}/>
                        <p className={styles.ps}>*** Guaranteed procurement minimum per month:</p>
                        <ul className={styles.pps}>
                            <li>Nozzles – from *** pcs,</li>
                            <li>Accessory equipment – not set.</li>
                        </ul>
                        <p className={styles.discription} style={{marginTop: 56 + "px"}}><b>3. DS+ Package – regional distributor.</b> We work under the purchase and sale agreement and conclude an agreement to represent the brand in the assigned territory.</p>
                        <p className="answerTitle" style ={{marginBottom: 11 + "px", marginTop: 31 + "xp"}}>Advantages of DS+ Package:</p>
                        <AnswerList list={[
                            "Assignment of a certain territory to your organization with subsequent exclusive right to represent DS products in this territory (town, district, city, region)",
                            "You get the right to use a certificate for importing goods. Your company can import goods into the Russian Federation on its own",
                            "Provision of a number of corporate identity elements in electronic form: guidebooks corporate colors, fonts, patterns, and corporate identity media and souvenirs",
                            "Provision of source files for site design, site concept and basic tools (in source)",
                            "Information about your company is added to our website in the section “Partners”"
                        ]}/>
                        <p className="answerTitle" style={{marginBottom: 11 +"px", marginTop: 24 + "px"}}>From you:</p>
                        <AnswerList list={[
                            "Promotion and sale of DS products in the assigned territory, including the use of promotional materials provided",
                            "Increase in the number of sales outlets and warehouses in the assigned territory",
                            "The timely information about the market situation at your sales outlet (analysis, reporting, planning)",
                            "Fulfillment of all accepted obligations spelled out in the agreement, the procurement minimum is determined",
                            "The frequency of purchase is approved in advance: monthly, quarterly, semi-annually",
                            "Procurement volume is determined by the location and capabilities of your enterprise",
                            "The timely fulfillment of financial obligations"
                        ]}/>
                        <p className={styles.ps}>*** Guaranteed procurement minimum per month:</p>
                        <ul className={styles.pps}>
                            <li>Nozzles – from *** pcs,</li>
                            <li>Accessory equipment – from *** pcs.</li>
                        </ul>
                    </>
                }/>
            </div>
        </div>
    )
}

function Partners() {
    return (
        <>
            <Header/>
            <Question/>
            <div className="contentSection">
                <div className="content">
                    <Menu page='partners'/>
                    <span>
                        <PartnersInfo/>
                        <img src="images/partnersImage.png" alt="" />
                    </span>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Partners;