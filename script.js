    // Fecha del evento: 15 de agosto de 2025 a las 18:00 hrs
    const eventDate = new Date("2025-12-13T14:00:00").getTime();

    const countdownElement = document.getElementById("countdown");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "¡El evento ha comenzado!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m <span style="color:red;">${seconds}s</span>`;
    }, 1000);