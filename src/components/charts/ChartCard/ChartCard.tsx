import React, { ReactNode } from 'react'
import './ChartCard.scss'

import createBEM from '../../../utils/createBEM'

const BEM = createBEM('ChartCard')

interface Props {
    children: ReactNode | ReactNode[];
}

const ChartCard: React.FC<Props> = ({ children }) => {
    return (
        <div className={BEM()}>
            <h2>Chart Title</h2>
            {children}
        </div>
    )
}

export default ChartCard
