import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} ${styles.row}`}>
                <div className={styles.footerCol}>
                    <h4>company</h4>
                    <ul className={styles.unorderedList}>
                        <li><a>about us</a></li>
                        <li><a>our services</a></li>
                        <li><a>privacy policy</a></li>
                        <li><a>visit website</a></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <h4>get help</h4>
                    <ul className={styles.unorderedList}>
                        <li><a>FAQ</a></li>
                        <li><a>shipping</a></li>
                        <li><a>returns</a></li>
                        <li><a>order status</a></li>
                        <li><a>payment options</a></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <h4>online shop</h4>
                    <ul className={styles.unorderedList}>
                        <li><a>download</a></li>
                        <li><a>changelog</a></li>
                        <li><a>github</a></li>
                        <li><a>all version</a></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <h4>follow us</h4>
                    <div className="social-links">
                        <a><i className="fa-brands fa-facebook-f"></i></a>
                        <a><i className="fa-brands fa-x-twitter"></i></a>
                        <a><i className="fa-brands fa-instagram"></i></a>
                        <a><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}