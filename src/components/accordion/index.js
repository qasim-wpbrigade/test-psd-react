import React,{useEffect,useRef} from "react";
import { slideToggle } from '../slideToggle';

const Accordion = ({ data }) => {
    const accordion = useRef(null);
    const toggleAccordion = (e) => {
        const target = e.currentTarget.nextSibling;
        if (target) {
            if (e.currentTarget.classList.contains('active')) {
                e.currentTarget.classList.remove('active');
            }else{
                e.currentTarget.classList.add('active');
            }
            slideToggle(target);
        }
    }

    useEffect(() => {
        const firstItem = accordion.current.firstChild;
        if (firstItem) {
            firstItem.classList.add('active');
            slideToggle(firstItem.querySelector('.accordion-content'));
        }
    },[])
    return (
        <div className="accordion" ref={accordion}>
            {data.map((item, index) => {
                return (
                    <div key={index} className="accordion-item">
                        <div onClick={toggleAccordion} className={`accordion-title ${index === 0 ? 'active' : ''}`}>
                            <h6>{item.title}</h6>
                        </div>
                        <div className="accordion-content">
                            <p>{item.content}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;
