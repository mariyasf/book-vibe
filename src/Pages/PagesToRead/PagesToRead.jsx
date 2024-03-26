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
    console.log(localData);

    return (
        <BarChart
            className='mx-auto mt-10'
            width={1200}
            height={500}
            data={localData}

        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar
                dataKey="totalPages"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: 'top' }}>
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
