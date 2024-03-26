import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import useLocalStorage from '../../Hooks/useLocalStorage'; // Import your hook to fetch read data

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ReadBarChart = () => {
    const { localData } = useLocalStorage({ dataFormat: "ReadList" }); // Fetch read data using your hook
    const [chartWidth, setChartWidth] = useState(1200);
    const [chartHeight, setChartHeight] = useState(500);

    const handleChartSize = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setChartWidth(1200);
            setChartHeight(500);
        } else if (width >= 768) {
            setChartWidth(800);
            setChartHeight(400);
        } else {
            setChartWidth(600);
            setChartHeight(300);
        }
    };

    useEffect(() => {

        handleChartSize();

        window.addEventListener('resize', handleChartSize);
        return () => window.removeEventListener('resize', handleChartSize);
    }, []);

    if (!localData || localData.length === 0) {
        return (
            <div className='w-full mx-auto flex justify-center items-center'>
                <img className='h-[450px]' src="https://www.anychart.com/_core/img/features/anystock/no-data-label.svg" alt="" />
            </div>


        );
    }

    return (
        <BarChart
            className='mx-auto mt-10'
            width={chartWidth}
            height={chartHeight}
            data={localData}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Tooltip />
            <Bar
                dataKey="totalPages"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: 'top' }}
            >
                {
                    localData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={colors[index % 20]} />
                    ))
                }
            </Bar>
        </BarChart>
    );
}

export default ReadBarChart;
