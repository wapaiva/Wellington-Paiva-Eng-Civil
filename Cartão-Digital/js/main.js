(function () {
  var PHONE = "5515997497023";
  var MSG = "Olá, Wellington! Vi seu cartão digital e gostaria de solicitar um orçamento.";

  document.getElementById("btn-quote").href =
    "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(MSG);
  document.getElementById("ano").textContent = new Date().getFullYear();

  var shareBtn = document.getElementById("btn-share");
  var label = shareBtn.lastChild;
  shareBtn.addEventListener("click", async function () {
    var data = { title: "Wellington Paiva | Engenheiro Civil", text: "Cartão digital de Wellington Paiva, Engenheiro Civil.", url: location.href };
    try {
      if (navigator.share) { await navigator.share(data); return; }
      await navigator.clipboard.writeText(location.href);
      label.textContent = "Link copiado";
    } catch (e) {
      if (e && e.name === "AbortError") return;
      window.prompt("Copie o link do cartão:", location.href);
      return;
    }
    setTimeout(function () { label.textContent = "Compartilhar"; }, 2200);
  });
})();
