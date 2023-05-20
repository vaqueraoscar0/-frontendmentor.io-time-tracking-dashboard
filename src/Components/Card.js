import React from 'react';
import bttn from '../images/icon-ellipsis.svg'

function Card({dateType, bgcolor, data ,img, id}) {
    return (
        <div className={'grid-card'+id}>
            <div className={'card-top'} style={{backgroundColor: bgcolor}}>
                <img src={img} alt={data.title}/>
            </div>
            <div className={'card-bottom'}>
                <div className={'card-body'}>
                    <div className={'card-button-line'}>
                        <h2>{data.title}</h2>
                        <button><img src={bttn} alt={'button'}/></button>
                    </div>
                    <div className={'card-hour-body'}>
                        <div className={'hour-text'}>
                            {dateType === 'weekly'
                                ? data.timeframes.weekly.current
                                : dateType === 'daily'
                                    ? data.timeframes.daily.current
                                    : data.timeframes.monthly.current
                            }hrs
                        </div>
                        <div className={'date-type'}>
                            {dateType === 'weekly'
                                ? "Last Week - " + data.timeframes.weekly.previous
                                : dateType === 'daily'
                                    ? "Yesterday - " + data.timeframes.daily.previous
                                    : "Last Month - " + data.timeframes.monthly.previous
                            }hrs
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card;