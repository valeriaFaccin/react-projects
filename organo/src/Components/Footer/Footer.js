import "./Footer.css";
import logo from "../../img/logo.png";
import twitter from "../../img/tw.png";
import facebook from "../../img/fb.png";
import instagram from "../../img/ig.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons">
                <a href={"https://www.google.com.br/"} ><img src={facebook} alt={"Facebook Icon"} /></a>
                <a href={"https://www.google.com.br/"} ><img src={twitter} alt={"Twitter Icon"} /></a>
                <a href={"https://www.google.com.br/"} ><img src={instagram} alt={"Instagram Icon"} /></a>
            </div>
            <img src={logo} alt={"Logo Organo"} />
            <p>Desenvolvido por Alura.</p>
        </footer>
    );
}

export default Footer;
