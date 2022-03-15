import React from 'react';
import styles from "../../styles/components/Components.module.css";

function Menu(props) {
    let menuType = 0
    if (props.page == 'partners') menuType = 1
    else if (props.page == 'buyers') menuType = 2

    return (
        <span className={styles.menu}>
            <div className = {styles.linksSection}>
                {menuType == 0 ?
                    <>
                        <a href="#">Become a DS Partner</a>
                        <a href="#">DS Accessory equipment in stock
                            <span  class="tooltip"><img src="icons/help.svg" alt="" />
                                <span class="promt">
                                    You can trace the path of each part on the sites of our partners and representatives of DS in the section “DaSHI 
                                    Products”. Start of production is marked “In factory”, delivery time and its location – “In transit”, and stocking 
                                    in Russia is marked “In stock”.
                                </span>
                            </span>
                        </a>
                    </>
                : menuType == 1 ?
                    <a href="http://localhost:3000/buyers">DS Warehouses in Russia and other countries</a>
                : menuType == 2 ?
                    <>
                        <a href="http://localhost:3000/partners">Become a DS Partner</a>
                        <a href="http://localhost:3000/partners">"DS+" Package</a>
                        <a href="http://localhost:3000/guarantee" style={{marginTop: 20 + 'px'}}>DS Packaging</a>
                    </>
                : "" }
            </div>
            <div className = {styles.feedbackSection}>
                <div className={styles.imgLinks}>
                    <a href="#"><img src="icons/world.svg" alt="" /></a>
                    <a href="#"><img src="icons/headset.svg" alt="" /></a>
                    <a href="#"><img src="icons/phone.svg" alt="" /></a>
                    <a href="#"><img src="icons/mail.svg" alt="" /></a>
                </div>
                <a href="#" className={styles.feedbackLink}>Feedback form</a>
            </div>
        </span>
    )
}

export default Menu;