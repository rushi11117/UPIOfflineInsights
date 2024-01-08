import React, { useState } from 'react';
import DatamapsIndia from 'react-datamaps-india';

const DynamicMap = () => {
    return (
        <div
            className="border m-3 offset-md-10 col-md-8" style={{ position: 'relative', height: '500px', width: '500px' }}
        >
            <div className="">
                <div className="">
                    <DatamapsIndia
                        style={{

                        }}
                        regionData={{
                            Maharashtra: {
                                value: 40000
                            }
                        }}
                        hoverComponent={({ value }) => {
                            return (
                                <div>
                                    <div>
                                        {value.name} : {value.value} 
                                    </div>
                                </div>
                            );
                        }}
                        mapLayout={{
                            title: "Transactions this month",
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
