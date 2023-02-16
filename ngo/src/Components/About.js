import dividerTop from "../images/divider-top.png"
import dividerBottom from "../images/divider-bottom.png"
import warn from "../images/warn.jpg"
import aid from "../images/aid.png"

export default function About() {
  return (  
    <section className="about-section" id='about'>
        <h1>About our mission</h1>
        <img src={dividerTop} alt="section divider" aria-hidden="true" />
            <div className="content">
                <div className="section-1">
                    <img src={warn} alt="warning sign" />
                    <p><span>Mine action makes it possible for peacekeepers to carry out patrols, for humanitarian agencies to deliver assistance and for ordinary citizens.</span><br/>
                    Mine action entails more than removing landmines from the ground. It includes high impact efforts aimed at protecting people from danger, helping victims become self-sufficient and active members of their communities and providing opportunities for stability and sustainable development.</p>
                </div>

                <div className="section-2">
                    <div>
                        <p><span>Landmines and explosive remnants of war kill or injure thousands of individuals every year. In addition to the human toll they:</span></p>
                        <ul>
                            <li>Close roads, prevent children from going to school, stop farmers from working the land</li>
                            <li>Hamper economic and social development</li>
                            <li>Rob people of their livelihoods</li>
                            <li>Hinder reconstruction after war</li>
                            <li>Block safe deployment of peacekeepers and the delivery of humanitarian relief</li>
                        </ul>
                    </div>
                <img src={aid} alt="man carrying aid" />
                </div>

            </div>
        <img src={dividerBottom} alt="section divider" aria-hidden="true" />
    </section>
  )
}
