import './App.scss';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import LoginPage from './LoginPage/LoginPage';
import AboutPage from './AboutPage/AboutPage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Charts from './Charts/Charts';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import Chart3 from './Chart3/Chart3';

Chart.register(ArcElement, Tooltip, Legend);

const baseUrl = "http://localhost:3000/budget"

function App() {
  const [dataSource, setDataSource] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              '#00ff00',
              '#0000ff',
              '#ff0000'
        ],
      }
    ],

    labels: []
  })

const [dataSourceNew, setDataSourceNew] = useState([])

useEffect(() => {
  axios.get(`${baseUrl}`)
    .then((res) => {
      setDataSourceNew(res.data.myBudget);
      setDataSource(
        {
          datasets: [
            {
              data: res.data.myBudget.map((v) => v.budget),
              backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              '#00ff00',
              '#0000ff',
              '#ff0000'
              ],
            }
          ],
          labels: res.data.myBudget.map((v) => v.title)
        }
      )
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);
  return (  
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer"> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      </div>
      <center>
        <Charts chartData={dataSource} />
        <Chart3 dataSource={dataSourceNew} />
      </center>
    <Footer/>
    </Router>
  );
}

export default App;
