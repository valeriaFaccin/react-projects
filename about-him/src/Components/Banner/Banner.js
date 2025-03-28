import styles from "./banner.module.css";
import circle from "../../assets/circle.png";
import photo from "../../assets/his_profile_picture.jpeg";
//Expect step-by-step guides on world domination, tips for dealing with nuisance platypuses and some life rants.
const Banner = () => {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.title}>Welcome to Doofenshmirtz Evil Blog Incorporated!</h1>
                <p className={styles.paragraph}>Ah, greetings, internet strangers! It is I, Dr. Heinz Doofenshmirtz, the greatest evil scientist of our time! You have stumbled upon my official website, where I shall share my brilliant evil plans. So prepare to witness pure diabolical genius!</p>
                <p className={styles.small_warning}>(Unless, of course, you’re that pesky Perry the Platypus… in which case, <strong style={{color: "#1875E8"}}>LEAVE AT ONCE!</strong>)</p>
            </div>
            <div className={styles.images}>
                <img className={styles.background_circle} src={circle} alt={"Pastel colored circle"} />
                <img className={styles.his_photo} src={photo} alt={"The light captured by a lens refracting him"} />
            </div>
        </div>
    );
}

export default Banner;
