# JM Tech Solutions - Landing Page

Este proyecto es una Landing Page moderna y futurista desarrollada con React, TailwindCSS, Framer Motion y React Three Fiber.

## 🚀 Instalación y Ejecución

1.  **Instalar dependencias:**
    ```bash
    npm install
    # Asegúrate de instalar las librerías necesarias:
    npm install react react-dom framer-motion @react-three/fiber @react-three/drei three lucide-react
    ```

2.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## 🖼️ Personalización

### 1. Foto de Perfil
Para que tu foto aparezca en la sección Hero:
1.  Toma una foto tuya en formato vertical o rectangular.
2.  Renómbrala a `profile.jpg`.
3.  Colócala en la carpeta `/public` del proyecto.
    *   Ruta final: `/public/profile.jpg`

### 2. Contacto (WhatsApp)
Abre los archivos `components/Hero.tsx` y `components/Contact.tsx`.
Busca el enlace `https://wa.me/51999999999` y cambia el número `51999999999` por tu número real de WhatsApp.

### 3. Textos
Todos los textos están organizados dentro de cada componente en la carpeta `components/`. Puedes editarlos directamente.

## 🛠 Tecnologías

*   **React 18+**: Lógica de interfaz.
*   **TailwindCSS**: Estilos utilitarios.
*   **Framer Motion**: Animaciones de scroll y UI.
*   **React Three Fiber (R3F)**: Elemento 3D en el Hero.
*   **Lucide React**: Iconografía.

## 📱 Notas de Rendimiento
*   El componente 3D (`Scene3D`) se carga de forma perezosa (`lazy loading`) para no bloquear el renderizado inicial en móviles.
*   Las partículas del fondo están hechas en un Canvas nativo optimizado.

---
Desarrollado para JM Tech Solutions.