/**citation**/
document.addEventListener("DOMContentLoaded", function () {
  const tooltipBox = document.getElementById("tooltip-box");

  document.querySelectorAll(".citation").forEach(function (el) {
    el.addEventListener("click", function (e) {
      if (window.innerWidth > 768) return; // 데스크톱은 무시

      e.stopPropagation();
      const text = el.getAttribute("data-tooltip");
      tooltipBox.textContent = text;

      // citation 위치 읽기
      const rect = el.getBoundingClientRect();
      tooltipBox.style.opacity = 1;
      tooltipBox.style.pointerEvents = "auto";

      // 기본 위치 (citation 위 중앙)
      let left = rect.left + rect.width / 2 - tooltipBox.offsetWidth / 2;
      let top = rect.top - tooltipBox.offsetHeight - 4;

      // 좌우 화면 잘림 방지
      const padding = 10;
      if (left < padding) left = padding;
      if (left + tooltipBox.offsetWidth > window.innerWidth - padding) {
        left = window.innerWidth - tooltipBox.offsetWidth - padding;
      }

      // 적용 (absolute는 화면 스크롤 고려 위해 pageYOffset 사용)
      tooltipBox.style.position = "absolute";
      tooltipBox.style.left = `${left + window.scrollX}px`;
      tooltipBox.style.top = `${top + window.scrollY}px`;
    });
  });

  // 화면 다른 곳 클릭 시 닫기
  document.addEventListener("click", function () {
    tooltipBox.style.opacity = 0;
    tooltipBox.style.pointerEvents = "none";
  });
});
