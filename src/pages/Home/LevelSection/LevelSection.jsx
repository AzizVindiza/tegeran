import React from 'react';
import "./LevelSection.scss"
import level from  "./level.svg"
import level1920 from  "./level1920.svg"
import airplane from "./airplane.svg"
import accept from "./accept.png"
import good from "./good.png"
import star from "./star.png"
import star2 from "./star2.svg"
import group from "./group.svg"
const LevelSection = () => {
    return (
        <section className="level">
            <div className="container level__container">
                <div className="level__column">
                    <img src={level} alt="level"/>
                </div>
                <div className="level__column_xl">
                    <img src={level1920} alt="level"/>
                </div>
                <div className="level__cards">
                    <div className="level__card">
                        <div className="level__icon">
                            <img src={airplane} alt="airplane"/>
                        </div>
                        <h3 className="level__h">
                            Международное сотрудничество
                        </h3>
                        <p className="level__p">
                            Представители компании находятся в разных городах и странах, и говорят на разных языках: фарси, английском, кыргызском, русском и казахском.
                        </p>
                    </div>
                    <div className="level__card">
                        <div className="level__icon">
                            <img src={accept} alt="airplane"/>
                        </div>
                        <h3 className="level__h">Полное сопровождение</h3>
                        <p className="level__p">
                            Мы полностью возьмём на себя все организационные моменты: установление договоренностей между сторонами, доставку товаров, своевременные и честные выплаты от партнёров. Мы хотим сохранить благоприятные условия для продолжительной совместной работы всех участников процесса.
                        </p>
                    </div>
                    <div className="level__card">
                        <div className="level__icon">
                            <img src={good} alt="airplane"/>
                        </div>
                        <h3 className="level__h">
                            Гибкие условия и честный подход к работе
                        </h3>
                        <p className="level__p">
                            Как компания, мы гарантируем добросовестное отношение к делу, быстрое выполнение задач и выгодную стоимость услуг.
                        </p>
                    </div>
                    <div className="level__card">
                        <div className="level__icon">
                            <img src={star2} alt="airplane"/>
                        </div>
                        <h3 className="level__h">
                            Широкая известность на рынке
                        </h3>
                        <p className="level__p">
                            За время непрерывной работы и развития мы получили статус передовой и надёжной компании, развивающей торговые отношения с Ираном. Мы дорожим мнением наших клиентов и именно поэтому продолжаем совершенствовать работу сервиса, а также развивать и укреплять деловые связи.
                        </p>
                    </div>
                    <div className="level__card">
                        <div className="level__icon">
                            <img src={star} alt="airplane"/>
                        </div>
                        <h3 className="level__h">
                            Гарантии
                        </h3>
                        <p className="level__p">
                            Мы обеспечим выполнение всех договоренностей в срок,
                            правильное заполнение документов,
                            индивидуальный подход к каждому бизнесу
                        </p>
                    </div>
                    <div className="level__card">
                        <div className="level__icon">
                            <img src={group} alt="airplane"/>
                        </div>
                        <h3 className="level__h">
                            Команда людей, знающих свое дело на 100%
                        </h3>
                        <p className="level__p">
                            Штат ITC TEHRAN состоит из талантливых и опытных сотрудников, которые с полной отдачей выполняют свои рабочие обязанности. Каждый специалист заинтересован в том, чтобы сотрудничество приносило вам только положительные впечатления.
                        </p>
                    </div>
                </div>
                <div className="level__cards_xl">
                    <div className="level__card">
                        <div className="level__icon">
                            <img src={airplane} alt="airplane"/>
                        </div>
                        <h3 className="level__h">
                            Международное сотрудничество
                        </h3>
                        <p className="level__p">
                            Представители компании находятся в разных городах и странах, и говорят на разных языках: фарси, английском, кыргызском, русском и казахском.
                        </p>
                    </div>
                    <div className="level__card">
                        <div className="level__icon">
                            <img src={good} alt="airplane"/>
                        </div>
                        <h3 className="level__h">
                            Гибкие условия и честный подход к работе
                        </h3>
                        <p className="level__p">
                            Как компания, мы гарантируем добросовестное отношение к делу, быстрое выполнение задач и выгодную стоимость услуг.
                        </p>
                    </div>
                    <div className="level__card">
                        <div className="level__icon">
                            <img src={star} alt="airplane"/>
                        </div>
                        <h3 className="level__h">
                            Гарантии
                        </h3>
                        <p className="level__p">
                            Мы обеспечим выполнение всех договоренностей в срок,
                            правильное заполнение документов,
                            индивидуальный подход к каждому бизнесу
                        </p>
                    </div>
                </div>
                <div className="level__cards_xl level__cards_xl-right">
                    <div className="level__card">
                        <div className="level__icon">
                            <img src={accept} alt="airplane"/>
                        </div>
                        <h3 className="level__h">Полное сопровождение</h3>
                        <p className="level__p">
                            Мы полностью возьмём на себя все организационные моменты: установление договоренностей между сторонами, доставку товаров, своевременные и честные выплаты от партнёров. Мы хотим сохранить благоприятные условия для продолжительной совместной работы всех участников процесса.
                        </p>
                    </div>
                    <div className="level__card">
                        <div className="level__icon">
                            <img src={star2} alt="airplane"/>
                        </div>
                        <h3 className="level__h">
                            Широкая известность на рынке
                        </h3>
                        <p className="level__p">
                            За время непрерывной работы и развития мы получили статус передовой и надёжной компании, развивающей торговые отношения с Ираном. Мы дорожим мнением наших клиентов и именно поэтому продолжаем совершенствовать работу сервиса, а также развивать и укреплять деловые связи.
                        </p>
                    </div>
                    <div className="level__card">
                        <div className="level__icon">
                            <img src={group} alt="airplane"/>
                        </div>
                        <h3 className="level__h">
                            Команда людей, знающих свое дело на 100%
                        </h3>
                        <p className="level__p">
                            Штат ITC TEHRAN состоит из талантливых и опытных сотрудников, которые с полной отдачей выполняют свои рабочие обязанности. Каждый специалист заинтересован в том, чтобы сотрудничество приносило вам только положительные впечатления.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LevelSection;