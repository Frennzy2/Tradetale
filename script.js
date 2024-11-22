// Radar Chart: Zella Score
const ctxRadar = document.getElementById('zellaScoreChart').getContext('2d');
new Chart(ctxRadar, {
  type: 'radar',
  data: {
    labels: ['Win %', 'Avg win/loss', 'Profit Factor'],
    datasets: [{
      label: 'Zella Score',
      data: [81, 75, 88],
      backgroundColor: 'rgba(66, 135, 245, 0.2)',
      borderColor: '#4287f5',
      borderWidth: 2,
    }]
  },
  options: { responsive: true }
});

// Calendar
document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('trade-calendar');
  new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      { title: '$2.97k', start: '2022-07-07', color: 'green' },
      { title: '-$1.3k', start: '2022-07-15', color: 'red' }
    ]
  }).render();
});
