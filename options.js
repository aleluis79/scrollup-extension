// Guardar opciones
function saveOptions() {
    const sites = document.getElementById('allowed-sites').value;
    chrome.storage.sync.set({
        allowedSites: sites
    }, () => {
        // Mostrar mensaje de guardado
        const status = document.getElementById('status');
        status.style.opacity = '1';
        setTimeout(() => {
            status.style.opacity = '0';
        }, 2000);
    });
}

// Restaurar opciones
function restoreOptions() {
    chrome.storage.sync.get({
        allowedSites: 'mercadolibre.com.ar' // Valor por defecto
    }, (items) => {
        document.getElementById('allowed-sites').value = items.allowedSites;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
