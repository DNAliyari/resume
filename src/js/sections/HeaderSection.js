import React, {Component} from "react";
import "../../css/sections_css/HeaderSection.css";
import {Link} from "react-scroll";
import ChangeColor from "../components/ChangeColor";

class TitlesSection extends Component {

    changeColor = () => {
        this.props.changeColor()
    }


    render() {
        return (
            <div>
                <div className="navigation">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        delay={0}
                    >
                        <span className="right">About</span>

                    </Link>


                    <Link
                        activeClass="active"
                        to="skill"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        delay={0}
                    >
                        <span className="right">Skills</span>
                    </Link>

                    <ChangeColor changeColor={this.changeColor}/>

                </div>
            </div>
        );
    }
}

export default TitlesSection;
