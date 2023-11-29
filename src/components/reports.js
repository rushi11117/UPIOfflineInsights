import React from 'react'

export default function reports() {
    const data = [
        { title: 'Card 1', description: 'Description 1' },
        { title: 'Card 2', description: 'Description 2' },
        // Add more data as needed
    ];
    return (
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="card-table">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        {/* Render card content based on 'item' */}
                        {/* Example: */}
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
