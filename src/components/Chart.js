import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = () => {

  return (
    <div>
      <Line
        data={{
          labels: ['5 godzin temu', '4 godziny temu', '3 godziny temu', '2 godziny temu', 'godzina temu', '5 godzin temu', '4 godziny temu', '3 godziny temu', '2 godziny temu', 'godzina temu', ],
          datasets: [
            {
              label: 'Ilość opadów',
              data: [0.4, 0, 0.2, 0.5, 1.2, 0.4, 0, 0.2, 0.5, 1.2, ],
              backgroundColor: [
                'rgba(255, 255, 255, 1)',
              ],
              borderColor: [
                'rgba(255, 255, 255, 1)',
              ],
              borderWidth: 5,
			  tension: 0.35
            },
          ],
        }}
        height={400}
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
          legend: {
            labels: {
              fontSize: 25,
            },
          },
		  pointRadius: 0
        }}
      />
    </div>
  )
}

export default Chart
