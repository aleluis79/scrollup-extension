document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-site');
    const statusDiv = document.getElementById('status');

    // Obtener la pestaña activa
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        if (!currentTab || !currentTab.url) {
            statusDiv.textContent = "No se pudo obtener la URL.";
            statusDiv.classList.add('error');
            addButton.disabled = true;
            return;
        }

        try {
            const url = new URL(currentTab.url);
            const hostname = url.hostname;

            // Actualizar texto del botón
            addButton.textContent = `Agregar ${hostname}`;

            addButton.addEventListener('click', () => {
                chrome.storage.sync.get({
                    allowedSites: 'mercadolibre.com.ar'
                }, (items) => {
                    let sites = items.allowedSites.split('\n').map(s => s.trim()).filter(s => s);

                    if (sites.includes(hostname)) {
                        statusDiv.textContent = "El sitio ya está en la lista.";
                        return;
                    }

                    sites.push(hostname);

                    chrome.storage.sync.set({
                        allowedSites: sites.join('\n')
                    }, () => {
                        statusDiv.textContent = "Sitio agregado correctamente.";
                        addButton.disabled = true;
                        setTimeout(() => {
                            window.close();
                        }, 1500);
                    });
                });
            });

        } catch (e) {
            statusDiv.textContent = "URL inválida.";
            statusDiv.classList.add('error');
            addButton.disabled = true;
        }
    });
});
