import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='container'>
                <p className={styles.text}>&copy;2023 nitinswiggy.com All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer