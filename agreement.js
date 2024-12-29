document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".agreement-checkbox");
  const acceptBtn = document.getElementById("accept-btn");

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      // Проверяем, что все чекбоксы отмечены
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      acceptBtn.disabled = !allChecked; // Активируем кнопку только если все галочки стоят
    });
  });

  // Добавляем обработчик для кнопки "Принять"
  acceptBtn.addEventListener("click", () => {
    // Перенаправляем на страницу Introduction
    window.location.href = "introduction.html";
  });
});
