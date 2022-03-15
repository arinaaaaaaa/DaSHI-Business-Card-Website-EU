import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import styles from "../../styles/About.module.css";
import { AnswerList } from "../../components/universal/Answer.js";

function AboutDaSHI() {
    return (
        <div className={styles.aboutSection}>
            <p className={styles.title}>ABOUT DaSHI</p>
            <p className={styles.definition}><span style={{color: '#F46628'}}>DaSHI</span> is a manufacturing enterprise with extensive experience in the market of fuel nozzles. We started from reselling products of famous brands such as Weichai, YuChai, Weifu, and etc., and with time we came to our own production of nozzles and accessory equipment. All of our products are certified and laboratory tested.</p>
            <div className={styles.textSection1}>
                <img src="images/about2.png" alt="" />
                <span>
                    <p className={styles.topic}>We are constantly growing. At the moment, our manufacturing facilities are located in China. We are planning to launch a factory in Russia in the nearest future.</p>
                    <p className={styles.topic}>We are interested in a long-term partnership and mutually beneficial cooperation, and invite you to join our team. We guarantee you high quality of the goods, 
                    flexibility and quick resolution of any issue at every stage of cooperation.</p>
                </span>
            </div>
            <div className={styles.textSection2}>
                <span>
                    <p className={styles.title}>WHO WE ARE, AND WHY IS IT <span style={{color: '#F46628'}}>EASY AND COMFORTABLE</span> WITH US?</p>
                    <p className={styles.topic}>We are ordinary people, and each member of our team leads an active life in addition to their work. We have different hobbies, but we are all similar in our love 
                    of sports and travel. Our team includes marathon runners, triathletes, travelers, and hikers. We are actively involved with sports communities and participate in events across the country 
                    and beyond. We love animals, we love good food, and we just love life in all its fullness. We know how to enjoy every moment and are happy to share the most exciting and memorable events with you.
                    Join us on our website and on social media! It is going to be fun and heartfelt! Information about our life outside of work can be found on the websites of our representatives and partners in the 
                    “Or Life” section.</p>
                </span>
                <img src="images/about1.png" alt="" />
            </div>
        </div>
    )
}

function Mission() {
    return (
        <div className={styles.missionSection}>
            <div className={styles.mission}>
                <p className={styles.title}>OUR <span style={{color: '#F46628'}}>GOALS</span></p>
                <span className={styles.topic}>
                    <span className={styles.topicColumn} style={{marginRight: 13 + "px"}}>
                        <p style={{marginBottom: 10 + "px"}}>Our key goal is to contribute to our community, to enable development and growth, and to foster prosperity. Everything we do, we do in order to achieve this goal, and we do it for you.</p>
                        <p style={{marginBottom: 10 + "px"}}>We believe that constant growth and self-improvement can guarantee the high quality of any goods or services. That is why we base all of our work on these qualities.</p>
                        <p>Emotional connection is very important to us. We encourage passion for the work we do and transparency in our team. Only those who love their work are willing to give it their all.</p>
                    </span>
                    <span className={styles.topicColumn} style={{marginLeft: 13 + "px"}}>
                        <p>We cooperate with those who adhere to the same principles. We join forces with those who work for the long term and strike for continuous improvement. This approach pays off. We have gathered people holding the 
                        same views around us over these years. These people are united by one dream: to make the world a better place.</p>
                    </span>
                </span>
            </div>
            <img src="images/about3.jpg" alt="" />
        </div>
    )
}

function ValueItem(props) {
    return (
        <span className={styles.value}>
            <p className={styles.valueTitle}>{props.title}</p>
            <p className={styles.valueTopic}>{props.topic}</p>
        </span>
    )
}

function Values() {
    return (
        <div className={styles.valuesSection}>
            <p className={styles.title}><span style={{color: '#F46628'}}>DaSHI</span> VALUES</p>
            <div className={styles.valuesList}>
                <ValueItem 
                    title="Continuous Improvement"
                    topic="We are constantly learning in order to solve new problems efficiently. We pay attention to professional growth, but we don’t forget about personal development. The balance between these principles helps us 
                    achieve harmonious development, improve our brand and be valuable to our consumers."/>
                <ValueItem
                    title="Team"
                    topic="We create a favorable atmosphere for achieving stability and well-being of each employee continuously improving our brand. It contributes to career growth and prosperity of the brand as a whole."/>
                <ValueItem
                    title="Long-term outlook" 
                    topic="We are focused on a long-term cooperation, so we prioritize transparency, honesty and quality. Our team has an active social life, covering not only work processes, but also other activities, 
                    like sports, charity, etc. We continuously improve our existing products and expand our range of goods. Together we make dreams come true and build a bright future."/>
            </div>
        </div>
    )
}

function Principles() {
    return (
        <div className={styles.principlesSection}>
            <span className={styles.leftPart}>
                <span>
                    <p className={styles.title}>OUR BASIC PRINCIPLES OF CARRYING ON BUSINESS</p>
                    <p className={styles.ps}>We are guided by the following principles in our work:</p>
                </span>
                <img src="icons/principes.svg" alt="" />
            </span>
            <span className={styles.rightPart}>
                <AnswerList list={[
                    "We only use reliable and proven technologies",
                    "We promote the development of leadership skills in employees: the most valuable asset of the company is leaders who know their business inside out, practice the brand philosophy, and can teach it to others",
                    "We respect our partners and suppliers, and help them become better together with us",
                    "We make informed decisions",
                    "We are continuously improving",
                    "We make decisions with a long-term outlook, even when it hurts short-term financial goals",
                    "We organize a continuous process to help identify problem",
                    "We avoid overproduction, at the same time, we are taking consumer demands into consideration",
                    "We level our workloads in order to maintain proper cost-conscious production and high-quality service",
                    "We use constant visual inspection that helps us find all the arising problems",
                    "We are able to stop our production in order to achieve high quality of the goods",
                    "We set tasks and delegate authority to employees for continuous improvement"
                ]}/>
            </span>
        </div>
    )
}

function Product(props) {
    return (
        <div className={styles.product}>
            <div className={styles.header}>
                <img src={props.icon} alt="" />
                <p>{props.name}</p>
            </div>
            <div className={styles.productDescription}>
                {props.description}
            </div>
        </div>
    )
}

function AboutProducts() {
    return (
        <div className={styles.productsSection}>
            <div className={styles.title}>ABOUT <span style={{color: '#F46628'}}>DaSHI</span> PRODUCTS</div>
            <Product icon="icons/nozzelsAbout.svg" name="Nozzles" description = {
                <>
                    <p>DaSHI Nozzles are high-quality and certified analogue of Bosch, Denso, Delphi and other well-known brands. We have fuel nozzles for diesel and gasoline engines 
                    of Common Rail system, CR, CRI, CRIN, PIEZO, and etc. Each nozzle is put on a diagnostic stand before shipment in order to avoid manufacturing defects and low-quality products.</p>
                    <p>We have our own production, which allows us to control the quality of used parts and make the price of goods more affordable.</p>
                    <p>DaSHI nozzles are used in the operation and repair of cars, road construction, agricultural and other machinery brands Howo, Kamaz, John Deere, Iveco, Man, SDLG, XCMG, etc., 
                    as well as engines Weichai, Cumminz, Kamaz, Yamz, etc.</p>
                </>
            }/>
            <Product icon="icons/gearAbout.svg" name="Accessory Equipment" description = {
                <p>In addition to nozzles, DaSHI also supplies spare parts (accessory equipment) for them: sprayers, fittings, valves, solenoids, nuts, balls, rings, repair kits, etc. Moreover, we also supply glow plugs, filters and other products.</p>
            }/>
        </div>
    )
}

function Benefits() {
    return (
        <div className={styles.benefitsSection}>
            <span className={styles.leftPart}>
                <span>
                    <p className={styles.title}><span style={{color: '#F46628'}}>ADVANTAGES</span> OF WORKING WITH US</p>
                    <p className={styles.ps}>Cooperation with DaSHI is a reliable partnership with a growing company. Our advantages:</p>
                </span>
            </span>
            <span className={styles.rightPart}>
                <AnswerList styleClass='about' list={[
                    "Strict quality control system",
                    "Certificate for importing goods into Russia",
                    "High-quality components and assembly. In addition to our own parts, we use components of brands Weichai, Yuchai, and etc., when assembling our goods",
                    "Direct delivery of goods without any intermediarie",
                    "Competitive prices for the whole range of goods",
                    "Stable availability of goods, possibility of placing orders in advance",
                    "Fast delivery",
                    "Tracking orders",
                    "Full range of services for diagnostics and customer care",
                    "Official warranty on all products"
                ]}/>
            </span>
        </div>
    )
}

function Partners() {
    return (
        <div className={styles.partnersSection}>
            <span className={styles.leftPart}>
                <div className={styles.title}>PARTNERS</div>
                <div className={styles.partnersText}>
                    <p>One of our key values is long-term cooperation. We build mutually beneficial, kind and comfortable relationships with all of our partners. 
                        We value and thank everyone: our suppliers for stable cooperation based on mutual respect; our customers for their trust. Today we have 
                        successful partnerships with dozens of our clients: from private car owners to large enterprises, service centers, construction sites, 
                        transport companies and agricultural enterprises.</p>
                    <p>We do not just buy and sell. We enjoy what we do, especially when you contact us again and choose us as your partners. We strive to simplify 
                        the chain of communication as much as possible for your comfort. We ensure fast delivery in order to get your equipment up and running in the 
                        shortest possible time.</p>
                    <p>We are open for cooperation. We invite dealers and official representatives looking for a reliable strategic partner. As a bonus, we offer 
                        already developed corporate identity (including presentations, sites and logo), as well as the provision of diagnostic equipment.</p>
                    <p>We base our cooperation on three main principles: <span style={{color: "#F46628"}}>Mutual Respect, Mutual Benefit, Mutual trust and comfort.</span> We are looking forward to seeing you in our team!</p>
                </div>
                <span className={styles.slogan}>
                    <p>Details matter.</p>
                    <p>People matter.</p>
                    <p>Everything matters!</p>
                </span>
            </span>
            <img src="images/about4.jpg" alt="" />
        </div>
    )
}

function About() {
    return (
        <>
            <Header/>
            <div className={styles.wrapper}>
                <AboutDaSHI/>
                <Mission/>
                <Values/>
                <Principles/>
                <AboutProducts/>
                <Benefits/>
                <Partners/>
            </div>
            <Footer/>
        </>
    )
}

export default About;