import React from 'react'
import styles from './Places.module.scss'

const Places = () => {

    const items = [
    {
        title: 'Национальный музей Прадо',
        city:  'Мадрид',
        desc: 'Здание музея — памятник позднего классицизма. Входит в первую двадцатку самых посещаемых художественных музеев мира. В коллекции музея хранятся одни из наиболее полных собраний Босха, Веласкеса, Гойи, Мурильо, Сурбарана и Эль Греко. Музей Прадо вместе с Музеем Тиссена-Борнемисы и Центром искусств королевы Софии образуют Золотой треугольник искусств Мадрида, который в 2021 году был внесен в список Всемирного наследия ЮНЕСКО.',
        link: 'https://ru.wikipedia.org/wiki/Прадо'
    },
    {
        title: 'Монастырь Эскориал',
        city:  'Мадрид',
        desc: 'Стены дворца украшены коврами, вытканными по эскизам Рубенса и Гойи. На территории внутренних дворов установлены более 200 статуй. В сокровищнице можно увидеть коллекцию серебряных и золотых изделий с драгоценными камнями. Самым выдающимся экспонатом является уникальное Евангелие со страницами из чистого золота. Примечательной является роспись потолка, символизирующая семь наук, и торцевых стен, посвященных теологии и философии.',
        link: 'https://ru.wikipedia.org/wiki/Эскориал'
    },
    {
        title: 'Храм Святого Семейства',
        city:  'Барселона',
        desc: 'Саграда Фамилия-церковь в районе Эшампле, строящаяся с 1882 года. Является одним самых известных архитектурных чудес мира и главной достопримечательностью Барселоны. Строительство этой церкви началось более 100 лет назад, но до сих пор она не завершена. Саграда Фамилия отличается необычной архитектурой и уникальным дизайном. Она была создана в стиле модерн и готической архитектуры.',
        link: 'https://ru.wikipedia.org/wiki/Саграда_Фамилия'
    },
    {
        title: 'Алькасар Христианских королей',
        city:  'Кордоба',
        desc: 'Этот замок был построен в 3 веке и использовался как крепость. Алькасар представляет собой гранитную крепость, соединенную с замком, находящимся на скале над рекой. Согласно принципам арабской архитектуры, дворец имеет форму почти правильного квадрата. Символизируя победу христианской религии над мусульманской, дворец имеет признаки европейской готики. Благодаря великолепным садам, неприступной цитадели, старинной архитектуре в стиле мудехар и богатой истории, он является второй в мире монархической резиденцией, после севильской.',
        link: 'https://ru.wikipedia.org/wiki/Алькасар_христианских_королей'
    },
    {
        title: 'Мескита',
        city:  'Кордоба',
        desc: 'Это главная достопримечательность Кордобы и прекрасный образец архитектуры мусульманского потока. Мескита была построена в 784 году и до настоящего времени остается главным символом Кордобы. Собор состоит из двух частей: мечети и церкви. Примечательно то, что в самом сердце мечети, изобилующей элементами изящной арабской вязи, располагается христианский Кафедральный собор. ',
        link: 'https://ru.wikipedia.org/wiki/Мескита'
    },
    {
        title: 'Альгамбра',
        city:  'Гранада',
        desc: 'Дворцовый комплекс Альгамбра, древнее сооружение правителей Гранадского эмирата, бесценный памятник мавританского зодчества. В окружении гор, посреди ландшафтных садов, этот комплекс начал строиться ещё в середине 13 века. Главным входом в него являются Ворота Справедливости в виде мощной сводчатой арки. Один из дворов замка, Миртовый двор, по сей день сохранил свой торжественный вид. Внутри стен Альгамбары произрастают великолепные сады, а вокруг стен раскинулся живописный парк, называемый лес Альгамбры.',
        link: 'https://ru.wikipedia.org/wiki/Альгамбра'
    },
]

const fun = [
    {
        title: 'Парк Гуэля',
        city: 'Барселона',
        desc: 'Парк Гуэля – это не просто скопление зеленых насаждений. На этом участке гармонично сочетаются сады и жилые зоны – аналог модной в начале XX в. концепции «город-сад». Это чудесное место создано из сказки, окруженное цветными мозаичными стенами, колоннами и площадками. Здесь можно наслаждаться красивыми видами на Медитерранское море, а также посетить дом-музей самого Антонио Гауди, архитектора данного парка.',
        link: 'https://ru.wikipedia.org/wiki/Парк_Гуэль'
    },
    {
        title: 'Аквариум Barselona',
        city: 'Барселона',
        desc: 'Крупнейший в Европе аквариум. Один из важнейших мировых центров по изучению и сохранению подводной фауны Средиземного моря. Он предлагает туристам увидеть разнообразную морскую жизнь, включая китов и крокодилов, а также пройти подземный туннель и почувствовать себя под водой, проникнув в мир подводных существ.',
        link: 'https://ru.wikipedia.org/wiki/Аквариум_Барселоны'
    },
    {
        title: 'Футбольный стадион Сантьяго Бернабеу',
        city: 'Мадрид',
        desc: 'Является домашней ареной футбольного клуба «Реал Мадрид», иногда на нём проводит матчи и сборная Испании. Стадион построен в 1947 году, позже он был назван в честь президента «Реала» Сантьяго Бернабеу, в годы правления которого клуб выиграл шесть Кубков европейских чемпионов и множество внутренних трофеев. Здесь каждый турист может попробовать на себе чувство атмосферы мировых футбольных состязаний и увидеть лучших испанских игроков.',
        link: 'https://ru.wikipedia.org/wiki/Сантьяго_Бернабеу_(стадион)'
    },
    {
        title: 'Путь Святого Иакова',
        city: 'El Camino de Santiago',
        desc: 'Паломническая дорога (путешествие верующих к географическим местностям и реликвиям, имеющим сакральное значение в данной религии) к предполагаемой могиле апостола Иакова в испанском городе Сантьяго-де-Компостела, главная часть которой пролегает в Северной Испании. Максимальное время в Пути — 40–50 дней — это Серебряный или Северный маршруты. В среднем путешественники проходят маршруты за 10–20 дней. ',
        link: 'https://ru.wikipedia.org/wiki/Путь_Святого_Иакова'
    },
    {
        title: 'Пляж Ла-Конча',
        city: 'Доностия-Сан-Себастьян',
        desc: 'Он протянулся вдоль побережья одноимённого залива примерно на 1,5 километра. Очертания пляжа по форме напоминают гигантскую ракушку, и из любой его точки открываются прекрасные виды на красивые места его противоположной части. Мельчайший белый песок и очень пологий вход в море создают идеальные условия для отдыха под теплым испанским солнцем. Помимо купания, здесь можно заняться разными видами спорта, включая пляжный футбол, сёрфинг и виндсёрфинг.',
        link: 'https://ru.wikipedia.org/wiki/Ла-Конча_(пляж)'
    },
    {
        title: 'Порт Авентура',
        city: 'Таррагона',
        desc: 'Комплекс парков развлечений и европейский курорт в Испании. Территория, занимающая 119 га – настоящий город развлечений с аквапарком, аттракционами для взрослых, малышей и прочими удовольствиями для семейного отдыха. Порт Авентура разделен на шесть тематических зон: Средиземноморье, Дикий запад, Мексику, Китай, Полинезию и открывшуюся в 2011 году Улицу Сезам.',
        link: 'https://ru.wikipedia.org/wiki/ПортАвентура_Мир'
    },
]



  return (
  <>
    <div id='historyPlaces' className={styles.wrapper}>
      <h1>Исторические достопримечательности</h1>
      <div className={styles.cards}>
        {items.map(item => (
            <a target='_blank' href={item.link}>
            <div className={styles.card}>
            <div className={styles.headers}>
                <h3>{item.title}</h3>
                <p>{item.city}</p>
            </div>
            <div className={styles.line}>.</div>
            <p className={styles.description}>
                {item.desc}
            </p>
        </div>
        </a>
        ))}
      </div>
    </div>
    <div id='funPlaces' className={styles.wrapper} style={{marginTop: '50px'}}>
      <h1>Развлекательные достопримечательности</h1>
      <div className={styles.cards}>
        {fun.map(funa => (
               <a target='_blank' href={funa.link}>
            <div className={styles.card}>
            <div className={styles.headers}>
                <h3>{funa.title}</h3>
                <p>{funa.city}</p>
            </div>
            <div className={styles.line}>.</div>
            <p className={styles.description}>
                {funa.desc}
            </p>
        </div>
        </a>
        ))}
      </div>
    </div>
    </>
  )
}

export default Places
