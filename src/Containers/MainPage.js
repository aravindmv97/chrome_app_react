import React, { Component } from 'react';

import Clock from 'react-live-clock';

import Img1 from '../images/0.jpg';
import Img2 from '../images/1.jpg';
import Img3 from '../images/2.jpg';
import Img4 from '../images/3.jpg';
import Img5 from '../images/4.jpg';
import Img6 from '../images/5.jpg';


import './css/MainPage.css';

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            images: [Img1, Img2, Img3, Img4, Img5, Img6],
            current: 0,
            bgImg: ''
        }
    }

    componentDidMount = () => {
        this.setState({ bgImg: this.state.images[0] })
        setInterval(() => {
            this.changeBg();
        }, 50000)
    }

    changeBg = () => {
        let state = this.state;
        let index = state.current + 1;
        if (index >= 6) {
            index = 0
        }
        this.setState({ bgImg: state.images[index], current: index });
    }


    render() {

        return (
            <div onClick={this.changeBg}>
                <div style={{ backgroundImage: `url(${this.state.bgImg})` }} className="mainContainer">
                    <div className="clockContainer">
                        <div>
                            <Clock className="clock" ticking={true} format={'HH:mm'} timezone={'Asia/Kolkata'} />
                        </div>
                        <div>
                            <Clock className="date" format={'dddd, MMMM Do YYYY'} ticking={true} timezone={'Asia/Kolkata'} />
                        </div>
                    </div>
                    <div className="content">
                        <span>Welcome, Aravind Manoharan</span>
                    </div>
                    <div className="quote">
                        <span>"How can i do it?"</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;