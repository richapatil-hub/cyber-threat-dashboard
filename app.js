// ── Chart.js — Timeline chart ─────────────────────────────────────────────
const timelineCtx = document.getElementById('timelineChart');
if (timelineCtx) {
  new Chart(timelineCtx, {
    type: 'line',
    data: {
      labels: ['12am','2','4','6','8','10','12pm','2','4','6','8','10'],
      datasets: [
        { label: 'Malware',     data: [120,80,70,110,340,580,610,490,420,380,310,200], borderColor: '#f85149', backgroundColor: 'rgba(248,81,73,0.07)', borderWidth: 2, tension: 0.4, fill: true, pointRadius: 2 },
        { label: 'Phishing',    data: [60,40,35,70,260,440,470,380,310,260,200,140],  borderColor: '#d29922', backgroundColor: 'rgba(210,153,34,0.05)', borderWidth: 2, tension: 0.4, fill: true, pointRadius: 2 },
        { label: 'DDoS',        data: [30,20,15,40,120,200,210,160,140,120,90,60],    borderColor: '#58a6ff', backgroundColor: 'rgba(88,166,255,0.04)', borderWidth: 2, tension: 0.4, fill: true, pointRadius: 2 },
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#8b949e', font: { size: 11 } } } },
      scales: {
        x: { ticks: { color: '#8b949e', font: { size: 10 } }, grid: { color: '#21262d' } },
        y: { ticks: { color: '#8b949e', font: { size: 10 } }, grid: { color: '#21262d' } }
      }
    }
  });
}

// ── Chart.js — Donut chart ────────────────────────────────────────────────
const donutCtx = document.getElementById('donutChart');
if (donutCtx) {
  new Chart(donutCtx, {
    type: 'doughnut',
    data: {
      labels: ['Malware', 'Phishing', 'Ransomware', 'DDoS', 'Other'],
      datasets: [{
        data: [33, 25, 19, 8, 15],
        backgroundColor: ['#f85149','#d29922','#bc8cff','#58a6ff','#3fb950'],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      cutout: '65%',
      plugins: {
        legend: { position: 'bottom', labels: { color: '#8b949e', font: { size: 11 }, padding: 12 } }
      }
    }
  });
}
