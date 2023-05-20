import React from 'react';
import '../App.css';
import profilepic from '../images/image-jeremy.png'

function MyCard({setDateType, dateType}) {
    return (
        <div className={'profile'}>
            <div className={'profile-card-top'}>
                <img src={profilepic} alt={'profile'}/>
                <div className={'profile-text'}>
                    <label>Report for</label>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className={'profile-card-bottom'}>
                <button style={{color: dateType === 'daily' && 'white'}} onClick={() => setDateType('daily')} className={'fs-button'}>Daily</button>
                <button style={{color: dateType === 'weekly' && 'white' }} onClick={() => setDateType('weekly')}>Weekly</button>
                <button style={{color: dateType === 'monthly' && 'white'}} onClick={() => setDateType('monthly')}>Monthly</button>
            </div>
        </div>
    );
}

export default MyCard;