if (!document.cookie.includes("notice-shown")) {
  const sensor = document.getElementById("ad-sensor");

  if (sensor && sensor.offsetParent !== null) {
    const modal = document.getElementById("ad-note-modal");
    modal.style.display = "flex";

    function close() {
      modal.style.display = "none";
      document.cookie = "notice-shown=true;path=/;max-age=" + 60 * 60 * 24 * 30;
    }

    function getBlockerLink() {
      const ua = navigator.userAgent;
      if (ua.includes("Firefox") || ua.includes("Edg/")) {
        // Firefox, Edge → uBlock Origin (Manifest V2, 정식 버전)
        return "https://github.com/gorhill/uBlock#ublock-origin";
      } else {
        // Chrome, Safari 등 (Manifest V3 강제 적용 브라우저) → Lite 버전
        return "https://github.com/uBlockOrigin/uBOL-home";
      }
    }

    document.getElementById("ad-note-ok").onclick = close;
    document.getElementById("ad-note-install").onclick = function () {
      window.open(getBlockerLink(), "_blank");
      close();
    };
  }
}
