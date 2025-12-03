(function () {
    chrome.storage.sync.get({
        allowedSites: 'mercadolibre.com.ar'
    }, (items) => {
        const allowedSites = items.allowedSites.split('\n').map(s => s.trim()).filter(s => s);
        const currentHost = window.location.hostname;
        const currentUrl = window.location.href;

        const isAllowed = allowedSites.some(site => {
            return currentHost.includes(site) || currentUrl.includes(site);
        });

        if (isAllowed) {
            initScrollButton();
        }
    });

    function initScrollButton() {
        // Crear botón
        const btn = document.createElement("button");
        btn.id = "ir-arriba-btn";
        btn.textContent = "↑";

        // Al hacer click -> scroll arriba
        btn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        document.body.appendChild(btn);

        // Mostrar el botón sólo cuando se scrollea
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                btn.classList.add("visible");
            } else {
                btn.classList.remove("visible");
            }
        });
    }
})();
