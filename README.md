# Botón Ir Arriba

Una extensión de navegador simple y útil que agrega un botón flotante para volver rápidamente al inicio de la página.

## 📋 Características

- **Botón flotante**: Aparece automáticamente cuando te desplazas hacia abajo en la página
- **Scroll suave**: Animación suave al volver al inicio
- **Configurable**: Permite configurar en qué sitios web se activa la extensión
- **Ligero**: Código minimalista y eficiente
- **Compatible**: Funciona con Firefox y navegadores basados en Chromium

## 🚀 Instalación

### Firefox

1. Descarga el archivo `.zip` de la extensión o clona este repositorio
2. Abre Firefox y navega a `about:debugging`
3. Haz clic en "Este Firefox"
4. Haz clic en "Cargar complemento temporal..."
5. Selecciona el archivo `manifest.json` del proyecto

### Chrome/Edge/Brave

1. Descarga el archivo `.zip` de la extensión o clona este repositorio
2. Abre el navegador y navega a `chrome://extensions/` (o `edge://extensions/`)
3. Activa el "Modo de desarrollador"
4. Haz clic en "Cargar extensión sin empaquetar"
5. Selecciona la carpeta del proyecto

## ⚙️ Configuración

1. Haz clic en el icono de la extensión en la barra de herramientas
2. Haz clic en "Configuración"
3. Agrega los sitios web donde quieres que aparezca el botón (uno por línea)
4. Los cambios se guardan automáticamente

Por defecto, la extensión está configurada para funcionar en `mercadolibre.com.ar`, pero puedes agregar cualquier sitio web que desees.

## 🛠️ Desarrollo

### Estructura del proyecto

```
scrollup-extension/
├── manifest.json          # Configuración de la extensión
├── content-script.js      # Script que se inyecta en las páginas
├── popup.html            # Interfaz del popup
├── popup.js              # Lógica del popup
├── options.html          # Página de configuración
├── options.js            # Lógica de configuración
├── style.css             # Estilos del botón
├── icon48.png              # Icono de la extensión
└── icon96.png              # Icono de la extensión

```

### Permisos requeridos

- `storage`: Para guardar la configuración de sitios permitidos
- `activeTab`: Para interactuar con la pestaña activa

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes alguna sugerencia, no dudes en abrir un issue o enviar un pull request.

## 📧 Contacto

- GitHub: [@aleluis79](https://github.com/aleluis79)
- Repositorio: [scrollup-extension](https://github.com/aleluis79/scrollup-extension)
