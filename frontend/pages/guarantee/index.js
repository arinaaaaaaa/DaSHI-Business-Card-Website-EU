import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import styles from "../../styles/Guarantee.module.css";

function Banner() {
    return (
        <div className={styles.bannerSection}>
            <div className={styles.guarantee}>
                <p className={styles.title}><span style={{color: '#F46628'}}>DS </span>PRODUCT WARRANTY</p>
                <img src="images/guarantee.svg" alt="" />
            </div>
            <div className={styles.subTitle}>WARRANTY</div>
        </div>
    )
}

function RuleItem(props) {

    const [isOpen, setOpen] = useState(false);
    const [doContinue, setDoContinue] = useState(false);
    const [doReverse, setDoReverse] = useState(false);

    const arrowRotate = useSpring({
        cancel: !doContinue,
        from: {
            transform: 'rotate(0deg)'
        },
        to: {
            transform: 'rotate(-180deg)'
        },
        reverse: doReverse,
        config: {duration: 150},
        onStart: () => {
            setOpen(!isOpen);
        },
        onRest: () => {
            setDoContinue(false);
        }
    });

    function startAnimation() {
        if (!doContinue) {
            setDoReverse(isOpen); 
            setDoContinue(true);
        }
    }

    return (
        <div className={styles.ruleItem}>
            <div className={styles.ruleSection}>
                <p>{props.rule}</p>
                {props.description != null ? <animated.img style={arrowRotate} src="icons/showAnswer.svg" alt="" onClick={() => startAnimation()}/> : null}
            </div>
            {isOpen ?
                <div className={styles.descriptionSection} style = {props.long == "yes" ? {marginTop: 10+"px"} : null} >
                    {props.description}
                </div>
            : ""}
        </div>
    )
}

function Package(props) {
    return (
        <span className={styles.packageExample}>
            <img src="images/packageExample.svg" alt="" />
            <p>{props.description}</p>
        </span>
    )
}

function Rules() {
    return (
        <div className={styles.rulesSection}>
            <p className={styles.rules}>Certain rules must be followed when reporting a warranty or making a claim:</p>
            <div className={styles.questionList}>
                <RuleItem rule="1. Prepare the following documents to review the warranty case:" description = {
                    <div className={styles.desc1}>
                        <ul className={styles.documentList}>
                            <li>damage claim as per form:
                                <p>- <a href="#">damage claim for sprayers and control valves</a>;</p>
                                <p>- <a href="#">damage claim for Common Rail injectors and mechanical atomizers</a>;</p>
                            </li>
                            <li>bill of lading with the number and date of drawing up, as well as signature and seal.</li>
                        </ul>
                    </div>
                }/>
                <RuleItem rule="2. If necessary, promptly provide photos and videos of the products in additional request."/>
                <RuleItem rule="The product should be packaged properly when returning. If there is no factory packing, each part should be packed individually: 
                in paper for the accessory equipment, or in paper and box for the nozzles, in order to prevent any mix-up or additional damage during transportation."
                description = {
                    <div className={styles.packageSection}>
                        <Package description="Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой 
                        на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки."/>
                        <Package description="Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой 
                        на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки."/>
                        <Package description="Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой 
                        на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки."/>
                        <Package description="Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой 
                        на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки."/>
                    </div>
                }/>
            </div>
        </div>
    )
}

function FeedbackItem(props) {
    return (
        <span className={styles.feedbackItem}>
            <img src={props.icon} alt="" />
            {props.description}
        </span>
    )
}

function Feedback() {
    return (
        <div className={styles.feedbackSection}>
            <img className={styles.background} src="images/feedbackBackground.svg" alt="" />
            <p>You can send the documents and clarify additional information<br/>with the following methods:</p>
            <div className={styles.feedbackList}>
                <FeedbackItem icon="icons/note.svg" description ={
                    <p>Fill out a <a href="#">feedback form</a> marking it as “guarantee”</p>
                }/>
                <FeedbackItem icon="icons/mail.svg" description ={
                    <p>Send an email to <a href="#">ds@ds.parts.com</a></p>
                }/>
                <FeedbackItem icon="icons/shoppingBag.svg" description ={
                    <p>Contact the representative, DS partner, where the product was purchased</p>
                }/>
            </div>
        </div>
    )
}

function Guarantee() {
    return (
        <>
            <Header/>
            <Banner/>
            <div className={styles.wrapper}>
                <Rules/>
                <Feedback/>
            </div>
            <Footer/>
        </>
    )
}

export default Guarantee;