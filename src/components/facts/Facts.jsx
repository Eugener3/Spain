import React from 'react'
import styles from './Facts.module.scss'
import factsLamp from '../../assets/images/facts/light.png'


// icons
import { BsMap, BsPeople , BsPinMap } from "react-icons/bs";
import { AiOutlineCrown } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";


export const Facts = () => {
  return (
    <>
        <div className={styles.centerItems}>
    <h1 id='aboutSpain'>Интересно знать</h1>
</div>
    <div className={styles.wrapper}>
        <div className={styles.leftItems}>
            <img src={factsLamp} alt="factico" />
        </div>
        <div className={styles.rightItems}>
            <div className={styles.item}>
                <div className={styles.icon}>
                    <BsMap size='3em'/>
                </div>
                <div className={styles.text}><h3>Площадь:</h3><p>505,944 кв. км</p></div>
            </div>
            <div className={styles.item}>
                <div className={styles.icon}>
                    <BsPeople size='3em'/>
                </div>
                <div className={styles.text}><h3>Население Испании: :</h3><p>около 48 миллионов человек</p></div>
            </div>
            <div className={styles.item}>
                <div className={styles.icon}>
                    <BsPinMap size='3em'/>
                </div>
                <div className={styles.text}><h3>Столица Испании:</h3><p>Мадрид</p></div>
            </div>
            <div className={styles.item}>
                <div className={styles.icon}>
                    <AiOutlineCrown size='3em'/>
                </div>
                <div className={styles.text}><h3>Форма правления Испании:</h3><p>Конституционная Монархия</p></div>
            </div>
            <div className={styles.item}>
                <div className={styles.icon}>
                    <GrLanguage size='3em'/>
                </div>
                <div className={styles.text}><h3>Язык:</h3><p>Кастильский язык является официальным, однако население различных частей Испании говорит на различных коофициальных языках — каталанском, галисийском, баскском, окситанском, астурийском и арагонском.</p></div>
            </div>
            <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSf8KHc4v_DoHw2zf6Ph_vRz5LquMw__kjh-FS9lwO4W69ESVw/viewform' >
            <div className={styles.item}>
                <div className={styles.icon}>
                <h3 id='cities' className={styles.text}>Знаешь всё о Испании? <br/>Давай проверим!</h3>
                </div>

            </div>
            </a>
        </div>
    </div>

 


</>
  )
}
