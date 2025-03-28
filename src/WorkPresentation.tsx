import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
type workInfos = {

    title:string,
    subtitle:string,
    visualizer_src:string,
    description:ReactElement,
    timeline:string, 
    organization:string,
    role:string,
    responsibilities: string[],
    tools: string[],
    teamate:{[key: string]: { full_name:string, link:string, role:string }; }
}


export default function WorkPresentation (props:workInfos) {
    return (
        <div className="work-presentation pages">
            <div className="preview-part">
                <p className="preview-part-title">{props.title}</p>
                <p className="preview-part-subtitle">{props.subtitle}</p>
                <div className="preview-part-visualizer-wrapper">
                    <img className ="preview-part-visualizer"src={props.visualizer_src} alt="" />
                </div>
            </div>

            <div className="infos-part">
                
                <div className="details">
                    <p className="part-title">Details</p>

                    <div className="details-sections-container">
                        <div className="first-row">
                            <section>
                                <p className="section-title">Timeline</p>
                                <div className="section-content-container">
                                    <p>{props.timeline}</p>
                                </div>
                            </section>
                            <section>
                                <p className="section-title">Organization</p>
                                <div className="section-content-container">
                                    <p>{props.organization}</p>
                                </div>
                            </section>
                            <section>
                                <p className="section-title">Role</p>
                                <div className="section-content-container">
                                     <p>{props.role}</p>
                                </div>
                            </section>
                            <section>
                                <p className="section-title">Responsabilities</p>
                                <div className="section-content-container">
                                    {props.responsibilities.map((responsability) => <p>{responsability}</p>)}
                                </div>
                            </section>
                            <section>
                                <p className="section-title">Tools</p>
                                <div className="section-content-container">
                                    {props.tools.map((tool)=> <p>{tool}</p>)}
                                </div>
                            </section>
                        </div>

                        <div className="second-row">
                            <section>
                                <p className="section-title">Team</p>
                                <div className="section-content-container">
                                    {Object.keys(props.teamate).map((key)=> <Link to={props.teamate[key].link} target='_blank'>{props.teamate[key].full_name + ` (${props.teamate[key].role})`} </Link>)}
                                </div>
                            </section>
                        </div>

                    </div>

                </div>

                <div className="summary">
                    <p className="part-title">Summary</p>
                    {props.description}
                </div>
            </div>
        </div>
    )
}