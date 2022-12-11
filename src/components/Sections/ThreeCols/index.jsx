import React from 'react';

const ThreeCols = ({threecols}) =>{

    const showThreeCols = threecols.map((data, index)=>
        <section key={index}>

        </section>
    )

    return (
        <>{showThreeCols}</>
    )
}

export default ThreeCols;