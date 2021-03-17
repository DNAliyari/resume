import React, {Component} from "react";
import Fullpage from "../components/Fullpage";
import data from "../../information.json";
import SkillCard from '../components/SkillCard';

import "../../css/sections_css/SkillSection.css";

class AboutSection extends Component {


    render() {
        return (
            <Fullpage className={this.props.backgroundColor}>
                <h3>{data.sections[1].title}</h3>
                <div className="cards-wrapper">
                    {data.sections[1].items.map(eachSkill => {
                        return (
                            <SkillCard skill={eachSkill}/>
                        );
                    })}
                </div>
            </Fullpage>
        );
    }
}

export default AboutSection;
