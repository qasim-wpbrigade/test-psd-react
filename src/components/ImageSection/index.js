import React from "react";
import image from '../../assets/images/snippgympa.jpg';

const ImageSection = () => {
    return (
        <div className="imageSection">
            <div className="overlay">
                <img src={image} alt="snippgympa" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <div className="content">
                            <h2>Snippgympa homofaktig</h2>
                            <p>
                                Lörem ipsum antipöskapet treheten fastän res
                                infraren till preplakeling innan pare innan rera,
                                sassa anapren. Vaktig treskade rer till e-demokrati
                                euroganar i böbel år. Faktig denera inte revis:
                                innan spegt hosat bioligen. Valiga matisam dinygt,
                                medan gåsade i plalig hjärtslagslag om vuvuzela i
                                terar regen suprakemi. Sanat nin pögisk tävis när
                                rasifierad semitilogi om än metatyp heteros kutybel
                                och heteroitet med telegam.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSection;
