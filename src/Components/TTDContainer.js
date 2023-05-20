import '../App.css';
import MyCard from "./MyCard";
import Card from "./Card";
import play from '../images/icon-play.svg'
import work from '../images/icon-work.svg'
import study from '../images/icon-study.svg'
import social from '../images/icon-social.svg'
import workout from '../images/icon-exercise.svg'
import selfcare from '../images/icon-self-care.svg'
import database from '../Database/data.json'
import {useState} from "react";

const colors = ['hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)', 'hsl(348, 100%, 68%)', 'hsl(145, 58%, 55%)', 'hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)']
const images = [work, play, study, workout, social, selfcare];

function TTDContainer() {
    const [dateType, setDateType] = useState('weekly')

    return (
        <div className={"container"} >
            <MyCard setDateType={setDateType} dateType={dateType} />
            {
                database.map((data, idx) =>(
                    <div key={idx}>
                        <Card dateType={dateType} bgcolor={colors[idx]} data={data} img={images[idx]} id={idx}/>
                    </div>
                ))
            }
        </div>
    );
}

export default TTDContainer;
