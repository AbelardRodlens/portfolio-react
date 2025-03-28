import { Link, useLocation } from 'react-router-dom';

const works = [
    {title:"Edupilot", path:"/edupilot"},
    {title:"PerformVision", path:"/perform-vision"},
    {title:"Avimonitoring", path:"/avimonitoring"},
    {title:"GameVerse", path:"/gameverse"}
] 

export default function Footer() {
    const location = useLocation();
    return (
        <footer>
            <p id="message">Nice to see you here !</p>
            <div id="sections-container">

                <section>
                    <p className="section-title">Contact</p>
                    <div className="footer-section-link-container">
                        <a href="mailto:abelard.rodlens@gmail.com">abelard.rodlens@gmail.com</a>
                        <a href="tel:+330667400318">+330667400318</a>
                    </div>
                </section>

                <section>
                    <p className="section-title">Network</p>
                    <div className="footer-section-link-container">
                        <Link to="https://www.linkedin.com/in/rodlens-abelard/" target="_blank">Linkedin</Link>
                        <Link to="https://github.com/AbelardRodlens" target="_blank">Github</Link>
                    </div>
                </section>

                <section>
                    <p className="section-title">Work</p>
                    <div className="footer-section-link-container" >
                        {works.map((work) => {
                            if (location.pathname !== work.path) {
                                return <Link to={work.path}>{work.title}</Link>
                            }
                        })}
                    </div>
                </section>

                <section>
                    <p className="section-title">Resume</p>
                    <div className="footer-section-link-container" >
                    <Link to="" target="_blank">Link</Link>
                    </div>
                </section>

            </div>
            <p id="credits">© 2024 Abelard Rodlens</p>
        </footer>
    )
}