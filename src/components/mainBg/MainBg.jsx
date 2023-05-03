import React from "react"
import imageBg from "../../assets/images/mainBg.jpg"
import styles from "./MainBg.module.scss"

export const MainBg = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={imageBg} alt='imgBg' className={styles.imageBg} />
      </div>
      <div className={styles.wrappertext}>
        <div className={styles.mainTitle}>
          <h1>Испания</h1>
          <h3>
            страна, которая расположена на Юго-западе Европейского континента,
            имеющая часть территорий в Африке(города Суета и Мелилья).{" "}
          </h3>
        </div>
      </div>
    </>
  )
}
