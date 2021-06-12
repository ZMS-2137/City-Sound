import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = () => {

  return (
    <div>
      <Line
        data={{
          color: '#fff',
          // defaults: {
          //   color: '#fff'
          // },
          labels: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ],
          datasets: [
            {
              label: 'Humidity',
              data: [1, 0.3, 0.8, 0.6, 1, 0.4, 0.5, 0.6, 0.7, 0.3, ],
              backgroundColor: [
                'rgba(255, 255, 255, 1)',
              ],
              borderColor: [
                'rgba(255, 255, 255, 1)',
              ],
              color: ['rgba(255,255,255,1)'],
              borderWidth: 5,
			  tension: 0.35
            },
          ],
        }}
        height={200}
        width={300}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          plugins: {
            legend: {
              // display: false
              color: 'white'
            }
          },
		      pointRadius: 0
        }}
      />
    </div>
  )
}

export default Chart
