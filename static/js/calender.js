    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysContainer = document.querySelector('.calendar-days');
    const monthPicker = document.getElementById('month-picker');
    const yearPicker = document.getElementById('year');
    const preYear = document.getElementById('pre-year');
    const nextYear = document.getElementById('next-year');
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let today = currentDate.getDate();

    function updateCalendar() {
        monthPicker.textContent = monthNames[currentMonth];
        yearPicker.textContent = currentYear;

        // Clear previous days
        daysContainer.innerHTML = '';

        // Get the first day of the month
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Add empty divs to align first day
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            daysContainer.appendChild(emptyDiv);
        }

        // Add the days of the current month
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;

            // Highlight today's date
            if (i === today && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
                dayDiv.classList.add('today');
            }

            daysContainer.appendChild(dayDiv);
        }
    }

    // Event listeners for year change
    preYear.addEventListener('click', () => {
        currentYear--;
        updateCalendar();
    });

    nextYear.addEventListener('click', () => {
        currentYear++;
        updateCalendar();
    });

    // Initialize the calendar
    updateCalendar();

    // Real-time clock
    function updateTime() {
        const timeFormat = document.querySelector('.time-formate');
        const dateFormat = document.querySelector('.date-formate');
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        const formattedDate = `${now.getDate()} - ${monthNames[now.getMonth()]} - ${now.getFullYear()}`;

        timeFormat.textContent = formattedTime;
        dateFormat.textContent = formattedDate;
    }

    // Update time every second
    setInterval(updateTime, 1000);
