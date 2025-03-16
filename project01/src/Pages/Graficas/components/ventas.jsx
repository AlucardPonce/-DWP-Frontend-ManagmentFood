import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SalesChart = () => {
    const options = {
        title: {
            text: 'Ventas diarias'
        },
        xAxis: {
            categories: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
        },
        yAxis: {
            title: {
                text: 'Ventas ($)'
            }
        },
        series: [{
            name: 'Ventas',
            data: [150, 200, 180, 220, 300, 400, 250] // Aquí pondrás tus datos reales
        }]
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SalesChart;
