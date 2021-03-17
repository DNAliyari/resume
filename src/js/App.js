import React, {Component} from "react";
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import SnowStorm from 'react-snowstorm';
import HeaderSection from "./sections/HeaderSection";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'color-1'
        };
    }


    changeColor = () => {
        let backs = [
            'color-1',
            'color-2',
            'color-3',
            'color-4',
            'color-5',
            'color-6',
            'color-7',
        ];

        this.setState({
            backgroundColor: backs[Math.floor(Math.random() * backs.length)]
        });
    }


    render() {
        return (
            <div className="App">

                <HeaderSection changeColor={this.changeColor}/>
                <SnowStorm/>
                <TitlesSection backgroundColor={"title-"+this.state.backgroundColor}/>
                <AboutSection backgroundColor={"about-"+this.state.backgroundColor}/>
                <SkillSection backgroundColor={"skill-"+this.state.backgroundColor}/>
            </div>
        );
    }

}

export default App;
