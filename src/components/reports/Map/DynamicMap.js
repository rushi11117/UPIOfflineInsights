import React, { useState } from 'react';
import DatamapsIndia from 'react-datamaps-india';
import stringProcessing from '../../Utils/stringProcessing';

const DynamicMap = ({ data,name }) => {
    if (data && data.length >= 3) {
        const tuple = data[2];
        console.log(tuple["State"]);
    }

    const titleFinal = `Transactions in ${stringProcessing(name)}` 

    const processData = () => {
        const regionData = {};

        // Iterate through the data array
        data.forEach((tuple) => {
            const state = tuple.State;
            // Check if the state exists in regionData, if not, initialize it with a count of 1
            if (!regionData[state]) {
                regionData[state] = { value: 1 };
            } else {
                // If the state already exists, increment its count
                regionData[state].value++;
            }
        });

        return regionData;
    };

    return (
        <div
            className='d-flex justify-content-start-end'
            style={{ position: 'relative', height: '500px', width: '500px' }}
        >
            <div className="">
                <div className="">
                    <DatamapsIndia
                        style={{

                        }}
                        regionData={processData()}
                        hoverComponent={({ value }) => {
                            return (
                                <div>
                                    <div>
                                        {value.name} : {value.value?value.value:0}
                                    </div>
                                </div>
                            );
                        }}
                        mapLayout={{
                            title: titleFinal,
                            legendTitle: "Transaction Count",
                            startColor: "#b3d1ff",
                            endColor: "#005ce6",
                            noDataColor: "#f5f5f5",
                            borderColor: "#8D8D8D",
                            hoverColor: "b3d1ff",
                            hoverBorderColor: "b3d1ff"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default DynamicMap;
