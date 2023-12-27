import React from 'react';
import NumberAbbreviation from '../Utils/numberAbbreviation';

const AchievementsCard = ({ stat }) => {
    return (
        <div className="card">
            {stat.image && (
                <img src={stat.image} className="card-img-top" alt="Card" />
            )}
            <div className="card-body">
                <h5 className="card-title">{stat.key}</h5>
                <div>
                    <h4>
                        {stat.currency ? (
                            <>{stat.currency} <NumberAbbreviation value={stat.value} /></>
                        ) : (
                            <NumberAbbreviation value={stat.value} />
                        )}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default AchievementsCard;
