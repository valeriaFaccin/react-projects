import styles from "./notFound.module.css";
import dog_img from "../../assets/perry.jpeg";
import Button from "../../Components/Button/Button";
import {useNavigate} from "react-router";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.content_container}>
                <span className={styles.text_404}>404</span>
                <h1 className={styles.title}>Oops! You’ve Stumbled Into a 404 – The Evilest of Errors!</h1>

                <p className={styles.paragraph}>Ah, well this is awkward. You were probably expecting something brilliant and diabolical, but instead, you got… nothing. Just an empty, meaningless void of cyberspace. Much like my childhood, really.</p>

                <p className={styles.paragraph}>Are you sure this is what you were looking for? Maybe you misspelled something? Maybe Perry the Platypus hacked my site? <strong style={{color: "#1875E8"}}>CURSE YOU, PERRY THE PLATYPUS!</strong> </p>

                <div className={styles.btn_container} onClick={() => navigate(-1)} >
                    <Button size={"lg"}>Go back</Button>
                </div>
                <img className={styles.dog_img} src={dog_img} alt={"Its a dog with glasses"}/>
            </div>
            <div className={styles.blank_space}></div>
        </>
    );
}

export default NotFound;
