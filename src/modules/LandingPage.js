import React from 'react';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="App">
            <div className="App-back" />
            <div className="container">
                <header>
                <div className="header">
                    <span className="logo">Diabetes Class</span>
                </div>
                </header>
                <div className="main-info">
                <h1 className="main-info__heading">
                    Free Online Diabetes{" "}
                    <span className="main-info__classes">Classes</span> for everyone
                </h1>
                <p className="main-info__info">
                    Lorem ipsum dolor sit amet, consectetuvr adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan
                </p>
                <div className="main-info__button">
                    <a href='/coursePage'><span>Start here</span></a>
                    <div className="main-info__arrow"></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;