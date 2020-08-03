import React from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import SimplePie from '../../components/charts/SimplePie/SimplePie'

interface Props {

}


const Console = (props: Props) => {
    const { width } = useWindowDimensions();

    const data = [
        { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
        { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
        { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 }
    ]

    let chartWidth = 400;
    if (width < 400) chartWidth = width;

    return (
        <div>
            <h2>Options</h2>
            <SimplePie data={data} width={chartWidth} height={chartWidth} />
        </div>
    )
}

export default Console
