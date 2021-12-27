import React, { Component } from 'react'
// import { IgrFinancialChart } from 'igniteui-react-charts';
// import { IgrFinancialChartModule } from 'igniteui-react-charts';
// import cryptoData from '../data/market-price.json'
import { BitcoinService } from '../services/BitcoinService';
// IgrFinancialChartModule.register();
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,

} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export class Statistic extends Component {
    state = {
        cryptoData: null,
    }
    componentDidMount() {
        this.loadCryptoData()
    }

    loadCryptoData() {
        const cryptoData = BitcoinService.getMarketPrice()
        this.setState({ cryptoData })
    }

    get data1() {
        const labels = this.state.cryptoData.values.map(item => new Date(item.x * 1000).toLocaleDateString())
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Bitcoin',
                    data: this.state.cryptoData.values.map(item => item.y),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        };
        return data
    }

    options1 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Market Price',
            },
        },
    };
    render() {
        const { cryptoData } = this.state;
        if (!cryptoData) return <div>Loading...</div>
        return (
            <div className="container sample" >
                    <Line className='chart' options={this.options2} data={this.data1}></Line>
                {/* <div className="container" style={{ height: "calc(100% - 25px)" }}>

                </div> */}
            </div>
        )
    }
}
