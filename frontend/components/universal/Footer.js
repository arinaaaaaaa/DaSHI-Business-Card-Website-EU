import React from 'react';
import styles from "../../styles/components/Footer.module.css";

function CompanyInfo() {
    return (
        <span>
            <a href="/" className={styles.logo}><img src="icons/LogoIcon.svg" alt="Logo" /></a>
            <p className={styles.companyInfo}>© 2004—2021 ООО «Da Shi».<br/>Products are certified.<br/>Copying of products is prohibited.</p>
        </span>
    )
}

function Navigation() {
    return (
        <span>
            <div className = {styles.linksSection}>
                <a href="/contacts">CONTACTS</a>
                <a href="/products">DaSHI PRODUCTS</a>
                <a href="/partners">PARTNERS</a>
                <a href="/contacts#feedback">FEEDBACK</a>
                <a href="/buyers">CUSTOMERS</a>
                <a href="/about">ABOUT DaSHI</a>
            </div>
            <div className = {styles.productsDS}>
                <p className = {styles.partnersNote}><span style={{color: '#F46628'}}>DS PRODUCTS</span> PRESENTED<br/>PARTNERS ON</p>
                <span className = {styles.partnersLogo}>
                    <img src="/icons/ozonLogo.svg" alt="ozon" />
                    <img src="/icons/wbLogo.svg" alt="wildberries" />
                </span>
            </div>
        </span>
    )
}

function Footer() {
    return (
        <footer className={styles.footerSection}>
            <CompanyInfo/>
            <Navigation/>
        </footer>
    )
}

export default Footer;