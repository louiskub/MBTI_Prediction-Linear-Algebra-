import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface MBTIChartProps {
    MBTI: [number, string][];
}

const MBTIChart: React.FC<MBTIChartProps> = ({ MBTI }) => {
    const data = {
        labels: MBTI.map(item => item[1]), // MBTI types
        datasets: [
            {
                label: 'Pearson Similarity',
                data: MBTI.map(item => item[0]), // Similarity scores
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                fill: true,
                tension: 0.1, // For curved lines
            },
        ],
    };

    // Define the chart options
    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top', // Ensure the position is one of the allowed values
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.dataset.label}: ${context.raw}`,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'MBTI Types',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Pearson Similarity',
                },
            },
        },
    };

    return (
        <div className="chart-container mx-auto mb-8 w-10/12">
            <Line data={data} options={options} />
        </div>
    );
};

export default MBTIChart;
