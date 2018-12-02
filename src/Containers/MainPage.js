import React, { Component } from 'react';

import Clock from '../Components/Clock';

import Img1 from '../images/0.jpg';
import Img2 from '../images/1.jpg';
import Img3 from '../images/2.jpg';
import Img4 from '../images/3.jpg';
import Img5 from '../images/4.jpg';
import Img6 from '../images/5.jpg';
import Img7 from '../images/6.jpg';
import Img8 from '../images/7.jpg';
import Img9 from '../images/8.jpg';
import Img10 from '../images/9.jpg';

import './css/MainPage.css';

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            images: [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10],
            current: 0,
            bgImg: ''
        }
    }

    componentDidMount = () => {
        this.setState({ bgImg: this.state.images[0] })
    }

    changeBg = () => {
        let state = this.state;
        let index = state.current + 1;
        if (index >= 4) {
            index = 0
        }
        this.setState({ bgImg: state.images[index], current: index });
        console.log(index)
    }


    render() {

        return (
            <div onClick={this.changeBg}>
                <div style={{ backgroundImage: `url(${this.state.bgImg})` }} className="mainContainer">
                    <div className="clockContainer">
                        <Clock />
                    </div>
                    <div className="content">
                        <span>Welcome, Aravind Manoharan</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;