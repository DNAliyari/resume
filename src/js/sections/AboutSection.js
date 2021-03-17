import React, {Component} from "react";
import Fullpage from "../components/Fullpage";
import data from "../../information.json";
import '../../css/sections_css/AboutSection.css'
import {Element} from "react-scroll";

class AboutSection extends Component {


    render() {
        return (
            <div>
                <Fullpage className={this.props.backgroundColor}>
                    <h3>{data.sections[0].title}</h3>
                    <div>
                        {data.sections[0].items.map(p => {
                            return <p>{p.content}</p>;
                        })}
                    </div>

                </Fullpage>
                <Element name="skill" className="element"/>
            </div>
        );
    }
}

export default AboutSection;
