import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Slider.scss"

import madrid from '../../assets/images/cities/madrid.jpg'
import barselona from '../../assets/images/cities/barselona.jpg'
import valensia from '../../assets/images/cities/valensia.jpg'
import sevilya from '../../assets/images/cities/sevylia.jpg'
import toledo from '../../assets/images/cities/toledo.jpg'
import pamplona from '../../assets/images/cities/pamplona.jpg'
import mursija from '../../assets/images/cities/mursija.jpg'
import valyadolid from '../../assets/images/cities/valyadolid.jpg'

export default () => (
<>
    <h1 className="title">Города</h1>
    <Carousel autoPlay  showThumbs={false} infiniteLoop={true} showStatus={false}>
        <div className="wrapper">
            <div className='card'>
                <img src={madrid} className="image" alt="image" />
                <h2>Мадрид</h2>
                <p>Столица Испании. Крупнейший экономический, политический и культурный центр страны.По древнему преданию,был основан античным героем Окнием, сыном Тиберина (бога реки Тибр) и пророчицы Манто. На берегу реки Мансанарес была основана крепость Мантуя Карпетанская.
    </p>
            </div>
            <div className='card'>
                <img src={barselona} className="image" alt="image" />
                <h2>Барселона</h2>
                <p>Cтолица автономной области Католония.Является вторым городом по численности населения ,важнейшим туристическим центром и имеет самый крупный порт Средиземноморья.
    </p>
            </div>
        </div>
        <div className="wrapper">
            <div className='card'>
                <img src={valensia} className="image" alt="image" />
                <h2>Валенсия</h2>
                <p>Cтолица одноименного автономного общества Валенсия. Валенсия знаменита своим мартовским Фестивалем «Fallas de Valencia” и как город, где впервые была приготовлена паэлья.
    </p>
            </div>
            <div className='card'>
                <img src={sevilya} className="image" alt="image" />
                <h2>Севилья</h2>
                <p>Город на юге Испании.Является столицей автономной области Андалусия.Славится своей элегантной архитектурой, и на ее территории находятся сразу 3 объекта Всемирного наследия ЮНЕСКО.
    </p>
            </div>
        </div>
        <div  className="wrapper">
            <div className='card'>
                <img src={toledo} className="image" alt="image" />
                <h2>Толедо</h2>
                <p>Cтолица автономного сообщества Кастилья-Ла-Манча. Одно из самых посещаемых мест страны, известное своими традиционными ремеслами, дамасской сталью и вкуснейшими марципанами.
    </p>
            </div>
            <div className='card'>
                <img src={pamplona} className="image" alt="image" />
                <h2>Памплона</h2>
                <p>Cтолица автономной области Наварра.Является одним из древнейших городов страны.Приобрела свою туристическую известность благодаря июльскому празднику “San Fermin” и “Encierro”-бег по улицам города от быков.
    </p>
            </div>
        </div>
        <div className="wrapper">
            <div className='card'>
                <img src={mursija} className="image" alt="image" />
                <h2>Мурсия</h2>
                <p>Город на юго-востоке Испании ,является центром одноименной автономной области. Это одна из крупнейших сельскохозяйственных провинций страны, овощи и фрукты которой экспортируют в другие государства Европы.
    </p>
            </div>
            <div className='card'>
                <img src={valyadolid} className="image" alt="image" />
                <h2>Вальядолид</h2>
                <p>Город на северо западе Испании, является столицей автономной области Кастилья и Леон. Известен, как город где воспитывались короли, там умер Колумб, а Сервантес закончил своего «Дон Кихота»
    </p>
            </div>
        </div>
    </Carousel>
</>
);
