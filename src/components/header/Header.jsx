import React from "react"
import styles from "./Header.module.scss"
import logo from "../../assets/images/favicon.svg"

export const Header = () => {
  const items = [
    { title: "О Испании", link: "#aboutSpain" },
    { title: "Города", link: "#cities" },
  ]
  return (
    <div className={styles.bg}>
      <div className={styles.wrapper}>
        <div className={styles.logotype}>
          <a href="#">
            <img src={logo} alt='logo' />
          </a>
        </div>
        <div className={styles.navBar}>
          {items.map(item => (
            <a href={item.link} key={item.title} className={styles.item}>
              {item.title}
            </a>
          ))}
          <div className={styles.dropdown}>
            <span>Туризм</span>
            <div className={styles.dropdownContent}>
              <div className={styles.aContent}>
                <a href='#historyPlaces'>
                  <div className={styles.dropdownItem}>
                    Истроические достопримечательности
                  </div>
                </a>
                <a href='#funPlaces'>
                  <div className={styles.dropdownItem}>
                    Развлекательные достопримечательности
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
