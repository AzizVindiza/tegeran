import React, {useState} from 'react';
import "./Contacts.scss"
import PageTitle from "../../components/PageTitle/PageTitle";
import PagePath from "../../components/PagePath/PagePath";
import coordinates from "../../utils/coordinates";

const Contacts = () => {
    const [map, setMap] = useState("https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3240.2079502716065!2d51.3809444!3d35.6965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQxJzQ3LjQiTiA1McKwMjInNTEuNCJF!5e0!3m2!1sru!2skg!4v1680496409578!5m2!1sru!2skg")
    return (
        <div className="contacts">
            <PageTitle text={"Контакты"}/>
            <PagePath name={"Контакты"}/>
            <div className="contacts__container container">
                <div className="contacts__tabs">
                    {coordinates.map((el, idx) => {
                        return <div className={`contacts__tab ${map === el.one ? "contacts__tab_active" : ""} `} key={idx} onClick={() => setMap(el.one)}>
                            <img className="contacts__img" src={el.img} alt={el.name}/>
                            <h3 className="contacts__h3">{el.name}</h3>
                            <p className="contacts__p">{el.address}</p>
                            <div className="contacts__tel">
                                <svg width="40" height="40" viewBox="0 0 198 198" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="198" height="198" rx="99" fill="#EDEDED"/>
                                    <path
                                        d="M159.321 133.906C158.561 130.283 156.18 127.04 152.76 125.014C146.426 121.29 139.865 117.692 133.532 114.222L129.2 111.84C123.677 108.826 119.903 109.383 117.699 110.396C115.596 111.359 112.835 113.664 111.644 119.212C111.618 119.288 111.593 119.39 111.593 119.491C111.213 120.935 110.149 121.518 109.541 121.746C108.148 122.227 106.501 121.898 105.133 120.834C94.5692 112.524 85.4239 103.404 77.1652 92.9923C76.1013 91.6749 75.7719 90.0535 76.2785 88.6602C76.5065 88.0269 77.1399 86.8869 78.9132 86.5069C78.9891 86.4816 79.0906 86.4816 79.1665 86.4562C84.7906 85.2149 87.0199 82.3269 87.9319 80.1229C88.9199 77.6403 89.2491 73.3843 85.1705 67.2535C82.1052 62.6682 79.5466 57.6522 77.0638 52.7883C75.9239 50.5843 74.8092 48.3803 73.6438 46.2015C71.3132 41.8948 68.1971 39.2095 64.6505 38.4242C61.4332 37.7403 58.0386 38.6522 54.8212 41.0843C51.6292 43.5162 48.2598 46.2015 45.0679 49.2923C38.2025 55.9803 36.6319 64.4416 40.5332 73.7388C57.0759 113.335 85.5759 141.632 125.273 157.871C128.364 159.163 131.404 159.796 134.292 159.796C139.511 159.796 144.299 157.719 148.453 153.615C151.822 150.296 154.787 146.471 157.32 143.102C159.27 140.442 159.98 137.174 159.321 133.906Z"
                                        fill="#119344"/>
                                </svg>
                                <div>
                                    <h4>{el.two}</h4>
                                    <h4>{el.three}</h4>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

            </div>
            <iframe title="map"
                    height="500"
                    src={map}
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Contacts;