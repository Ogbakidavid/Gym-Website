import React from 'react'
import styles from './Navbar.module.css';
import { useState } from 'react';
// import  getImageUrl  from '../../utils';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            <nav className={styles.navbarContainer}>
                <a href="/" className={styles.navbarLogo}>L<span>U</span>X</a>
                <div className={styles.menu}>
                    <img 
                    className={styles.menuBtn} 
                    src={ 
                        isOpen
                        ? ("/assets/images/close-icon.png") 
                        : ("/assets/images/menu-icon.png")
                    } 
                    alt="menu-button" 
                    onClick={() => setIsOpen(!isOpen)}
                    />

                    <ul
                    className={`${styles.menuItems} ${isOpen && styles.isOpen}`}
                    onClick={() => setIsOpen(false)}
                    >
                        <li><a href="#home">home</a></li>
                        <li><a href="#features">feature</a></li>
                        <li><a href="#membership">membership</a></li>
                        <li><a href="#trainers">trainers</a></li>
                    </ul>

                    {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
