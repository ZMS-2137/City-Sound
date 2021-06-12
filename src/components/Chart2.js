import React from 'react'
import { Line, defaults } from 'react-chartjs-2'

const Chart = () => {

  return (
    <div>
      <Line
        data={{
          labels: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ],
          datasets: [
            {
              label: 'Air Preassure',
              data: [0.4, 0.6, 0.2, 0, 1, 0.4, 0.5, 0.2, 0.5, 1, ],
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
            }
          },
		      pointRadius: 0
        }}
      />
    </div>
  )
}

export default Chart
