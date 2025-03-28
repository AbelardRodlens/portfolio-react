import { useEffect } from "react";

type LongCardProps = { // Défini un type alis pour les cartes.

    img_src: string;
    title: string;
    period: string;
    text: string | JSX.Element;

}

export function LongCard (props:LongCardProps ) {
    
    useEffect(() => {
        const longCards = document.querySelectorAll(".long-cards") as NodeListOf<HTMLDivElement>;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    (entry.target as HTMLElement).style.opacity="1";
                }
            })
        });

        longCards.forEach((card:HTMLDivElement) => {
            const cardChildrenElements =  Array.from(card.children) as HTMLElement[];
            cardChildrenElements.forEach((child:HTMLElement) => {observer.observe(child);})
            observer.observe(card);
        })
    
    },[])
    return (
        <div className="long-cards">

            <div className="long-cards-header">
                <img className="pictures" src={props.img_src} alt="" />
                <div className="long-cards-title-and-period-container">
                    <p className="long-cards-title">{props.title}</p>
                    <p className="long-cards-period">{props.period}</p>
                </div>
            </div>

            <p className="long-cards-text">{props.text}</p>


        </div>
    )
}
