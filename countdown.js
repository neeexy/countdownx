<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown</title>
    <link href="https://fonts.googleapis.com/css2?family=Teko:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Teko', sans-serif;
            background-color: #eae6da;
            text-align: center;
            padding: 50px;
        }
        .countdown {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            background-color: #7b6d5b;
            padding: 20px;
            border-radius: 10px;
            color: #d3c6b1;
            font-size: 3em;
            font-weight: 700;
        }
        .time-block {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .label {
            font-size: 0.5em;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <div class="countdown">
        <div class="time-block">
            <span id="days">000</span>
            <span class="label">Tage</span>
        </div>
        <span>:</span>
        <div class="time-block">
            <span id="hours">00</span>
            <span class="label">Stunden</span>
        </div>
        <span>:</span>
        <div class="time-block">
            <span id="minutes">00</span>
            <span class="label">Minuten</span>
        </div>
        <span>:</span>
        <div class="time-block">
            <span id="seconds">00</span>
            <span class="label">Sekunden</span>
        </div>
    </div>

    <script>
        function updateCountdown() {
            const targetDate = new Date('2025-09-13T15:00:00Z').getTime(); // UTC-Zeit für Stabilität
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                document.getElementById('days').innerText = "000";
                document.getElementById('hours').innerText = "00";
                document.getElementById('minutes').innerText = "00";
                document.getElementById('seconds').innerText = "00";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').innerText = days.toString().padStart(3, '0');
            document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
            document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    </script>
</body>
</html>