import React from 'react'
import {
    PieChart, Pie, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

import './SimplePie.scss'
import ChartCard from '../ChartCard/ChartCard';

interface PieProps {
    data: {
        name: string;
        value: number;
    }[];
    width: number;
    height: number;
}

const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow']

const SimplePie: React.FC<PieProps> = ({ data }) => {
    return (
        <ChartCard>
            <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                    <Pie dataKey='value' data={data} fill="#82ca9d" label>
                        {
                            data.map((entry, index) => (
                                <Cell key={`${entry.name}`} fill={colors[index]} />
                            ))
                        }
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </ChartCard >
    )
}

export default SimplePie
