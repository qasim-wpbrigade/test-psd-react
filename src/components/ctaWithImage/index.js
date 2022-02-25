import React,{useState} from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/tiposk.png";
import img1 from "../../assets/images/deresm.png";
import thumbImage from '../../assets/images/video-thumbnail.jpg';
import VideoPopup from "./videoPopup";

const CtaWithImage = () => {
    const [showPopup, setshowPopup] = useState(false);
    return (
        <>
            <div className="ctaWithImage bg-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={img} alt="tiposk" />
                        </div>
                        <div className="col-6">
                            <div className="content">
                                <h3>Tiposk ir i anade</h3>
                                <p>
                                    Lörem ipsum nira tetrakroren oliga
                                    mytonetik: gäri, misyst social turism
                                    realigen. Eutybel alkobom. Ode eurovis,
                                    visukal, venynade tibången sedan voligt
                                    reagang och jypönera pock i astronde såsom
                                    nirat. Proligt presm nire teratropi
                                    kvasimuk, refetirade, ett dygnis i gigase i
                                    krojåkarar dohyl kovis. Ulig pod gigar de
                                    kontras gesper viktiga. Krologi van plasat.
                                    Tikesamma dedat spengen smartboard jag
                                    hexakrol gar om res men premönade såväl som
                                    alkobom abåssade och sur. Vir vasa,
                                    intrarengen, i fens digital-tv mebelt. Resm
                                    trende, eck då tempoform och lätthelg
                                    intraledes. Ganiv övis. Nöröbel ter poktigt
                                    far. Kemusamma kabivis i ben och terapeutisk
                                    kloning plus polyck
                                </p>
                                <Link className="arrow-btn watch-btn" to="/">
                                    Watch Video
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ctaWithImage reverse">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={img1} alt="tiposk" />
                        </div>
                        <div className="col-6">
                            <div className="content">
                                <h3>Deresm snubbelsten.</h3>
                                <p>
                                    Lörem ipsum visamma bröllopsklänning hexalig
                                    terav i stenohet faligen. Fal ambidiktisk i
                                    astrongen. Kodejyktig antesm kvasisam
                                    etnoplastisk nyde. Exoheten atent till
                                    apfälla kosade och speledes nydade än
                                    budgetstup, trer plagen, yren funa.
                                    Nyfriskjobb monos onade sos, av mase.
                                    Exopongen ultrafasade. Intrass håligt eller
                                    laskapet bunde, huruvida dende jögt.
                                    Kåresade spetrest dins hästlasagne
                                    rit-avdrag: inte ödleplåster. Kåna ossade
                                    diling laddstolpe ånar har gil kad, omumåns,
                                    förutom bikros cyberhygien såsom diaska.
                                    Famåligt nende sölig fude i televis fastän
                                    yv uning mirade makrovis. Bivare os lav
                                    diliga, dekafurat i prere heska, göra en
                                    labrador. Igt måfuktig. Misade epigisade,
                                    kronera: astrogisk. Kroment trirade äling i
                                    pseudoskap sed.
                                </p>
                                <Link className="arrow-btn watch-btn" to="#" onClick={() => setshowPopup(true)}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopup src='https://www.youtube.com/embed/xrubDIuBqaM' show={showPopup} hide={setshowPopup} thumb={thumbImage} />
        </>
    );
};

export default CtaWithImage;
