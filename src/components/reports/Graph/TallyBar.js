import React from 'react';
import SingleBarChart from './SingleBarGraph';

const TallyBar = ({ data }) => {


    const occurrenceDict = {};

    data.forEach((tuple) => {
        // console.log(tuple["TransactionStatus"])
        const occurrenceKey = tuple["TransactionStatus"];
        if (occurrenceKey !== undefined) {
            if (!occurrenceDict[occurrenceKey]) {
                occurrenceDict[occurrenceKey] = 1;
            } else {
                occurrenceDict[occurrenceKey]++;
            }
        }
    })

    console.log(occurrenceDict)

    return (
        <div>
            <h1>
                <SingleBarChart occurence={occurrenceDict} flag1={1} />
            </h1>
        </div>
    );
};

export default TallyBar;
