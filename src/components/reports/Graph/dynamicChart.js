// import React, { useEffect, useState } from 'react'
// import stringProcessing from '../../Utils/stringProcessing';

import { Line, LineChart, ResponsiveContainer } from "recharts";


const DynamicChart = ({ data }) => {

    console.log(data)

    return (
        <div
        // className='d-flex  justify-content-start-end'
        // style={{ position: 'relative', height: '500px', width: '500px' }}
        >
            <ResponsiveContainer>
                <LineChart data={data}>
                    <Line />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
export default DynamicChart;