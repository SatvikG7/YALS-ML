import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://turl.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
            >
                PLEASE USE turl.vercel.app FOR CREATING NEW LINKS
            </a>
        </footer>
    );
};

export default Footer;
