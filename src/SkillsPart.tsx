import { useState, useEffect, useRef } from "react";

export default function SkillsPart() {

  useEffect(() => {
    const skillsPart = document.getElementById("skills-part") as HTMLDivElement;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("Observation de skillpart");
                skillsPart.style.opacity="1";
            }
        });
    });
    observer.observe(skillsPart);
    
  },[]);

  return (
    <div id="skills-part">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="0.19rem" viewBox="0 0 618 1" fill="none">
            <path d="M0 0 H618" stroke="#2B3A5E" strokeOpacity="0.5" strokeWidth="2"  strokeLinecap="round"/>
          </svg>
      
          <div id="skills-part-content">
            
            <h3 id="skills-part-title" className="container-title"> MY SKILLS</h3>
            
            <div id="skills-line-container">

                <div id="line-1" className="skills-line">
                    <CircularBar percentage={80} title="HTML" />
                    <CircularBar percentage={75} title="CSS" />
                    <CircularBar percentage={80} title="Javascript" />
                    < CircularBar percentage={65} title="Typescript" />
                </div>
                <div id="line-2" className="skills-line">
                    <CircularBar percentage={60} title="React" />
                    <CircularBar percentage={70} title="SQL" />
                    <CircularBar percentage={70} title="Python" />
                    <CircularBar percentage={65} title="Git" />
                </div>

            </div>

          </div>
        
      

      <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="0.19rem" viewBox="0 0 618 1" fill="none">
          <path d="M0 1 L618 1" stroke="#2B3A5E" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"/>
      </svg>

    </div>
  );
}

function CircularBar({ percentage, title }: { percentage: number; title: string }) {
  const [progressValue, setProgressValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement | null>(null);

  // // Obvservateur
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(isVisible === false){
            setIsVisible(entry.isIntersecting); // Met à jour l'état.
        }
      });
    });

    if ( skillRef.current) {
      observer.observe(skillRef.current);  // On observe l'élément.
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current); // On arrête l'observation.
        
      }
    };
  }, [isVisible]);

  // Animation du pourcentage quand le cercle est visible
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgressValue((current) => {
          if (current < percentage) {
            return current + 1;
          } else {
            clearInterval(interval);
            return current;
          }
        });
      }, 20);
      
      return () => clearInterval(interval);
    }
  }, [isVisible, percentage]);

  // Animation de la barre quand le cercle est visible
  useEffect(() => {
    console.log("Effet")
    if (isVisible && skillRef.current) {
      const over_circle = skillRef.current.querySelector("#over_circle") as SVGCircleElement;
      const skill_title = skillRef.current.querySelector(".circularbar-title"); // possiblement enlever

      if (over_circle && skill_title && skill_title.textContent === title) {
        const finalStrokeDashOffset = 250 - (250 * (percentage / 100));

        over_circle.animate(
          [
            { strokeDashoffset: '250' },
            { strokeDashoffset: `${finalStrokeDashOffset}` }
          ],
          {
            duration: 1000,
            easing: "linear",
            fill: 'forwards'
          }
        );
      }
      
    }
  }, [isVisible, percentage, title]);

  

  return (
    <div className="skill" ref={skillRef}>
      <div className="skill-circle-container">
        <p id="percentage">{`${progressValue}%`}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
          <circle id="under_circle" cx="46" cy="46" r="40.1" fill="black" />
          <circle id="over_circle" cx="46" cy="46" r="40.1" fill="black" />
        </svg>
      </div>
      <p className="circularbar-title">{title}</p>
    </div>
  );
}



