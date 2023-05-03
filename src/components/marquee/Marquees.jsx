import React from 'react'
import styles from './Marquee.module.scss'
import Marquee from 'react-fast-marquee'
import img1 from '../../assets/images/slider/img1.jpg'
import img2 from '../../assets/images/slider/img2.jpg'
import img3 from '../../assets/images/slider/img3.jpg'
import img4 from '../../assets/images/slider/img4.jpg'
import img5 from '../../assets/images/slider/img5.jpg'
import img6 from '../../assets/images/slider/img6.jpg'
import img7 from '../../assets/images/slider/img7.jpg'
import img8 from '../../assets/images/slider/img8.jpg'
import img9 from '../../assets/images/slider/img9.jpg'
import img10 from '../../assets/images/slider/img10.jpg'
import img11 from '../../assets/images/slider/img11.jpg'
import img12 from '../../assets/images/slider/img12.jpg'
import img13 from '../../assets/images/slider/img13.jpg'
import img14 from '../../assets/images/slider/img14.jpg'
import img15 from '../../assets/images/slider/img15.jpg'
import img16 from '../../assets/images/slider/img16.jpg'
import img17 from '../../assets/images/slider/img17.jpg'


export const Marquees = () => {
   const items = [
    { title: 'Андалусия', image: img1 , subtitle: ''},
    {title: 'Арагон',image: img2 , subtitle: ''},
    { title: 'Астурия', image: img3 , subtitle:''},
    { title: 'Белеарские острова', image: img4 , subtitle:''},
    { title: 'Валенсия', image: img5 , subtitle:''},
    { title: 'Галисия', image: img6, subtitle:''},
    { title: 'Канарские острова', image: img7 , subtitle:''},
    { title: 'Кантабрия', image: img8 , subtitle:''},
    { title: 'Кастилья-Ла-Манча', image: img9 , subtitle:''},
    { title: 'Кастилья-Леон', image: img10 , subtitle:''},
    { title: 'Каталония', image: img11 , subtitle:''},
    { title: 'Мадрид', image: img12 , subtitle:''},
    { title: 'Мурсия', image: img13 , subtitle:''},
    { title: 'Наварра', image: img14 , subtitle:''},
    { title: 'Риоха', image: img15 , subtitle:''},
    { title: 'Страна Басков', image: img16 , subtitle:''},
    { title: 'Эстремадура', image: img17 , subtitle:''},
    
  ]
  return (
    <>
    <div className={styles.wrapper}>
    <h1 >
    Территория страны делится на 17 автономных областей
    </h1>
    </div>
    <Marquee pauseOnClick speed={120}>
      <div className={styles.wrapper}>
        {items.map(item => (
          <div className={styles.card}>
            <img src={item.image} className={styles.image} alt={item.image} />
            <p className={styles.item}>{item.title}</p>
            <p>{item.subtitle}</p>
            </div>
        ))}
      </div>
    </Marquee>
    </>
  )
}
