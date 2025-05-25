# 🎯 Tutorial: Ventanas Modales con HTML, CSS y JavaScript

## 📚 Universidad Metropolitana - Desarrollo Web Frontend

Este proyecto es un tutorial educativo diseñado para estudiantes que están aprendiendo los fundamentos del desarrollo web frontend. Aprenderás a crear ventanas modales interactivas utilizando las tecnologías base del desarrollo web.

## 🎓 Objetivos de Aprendizaje

Al completar este tutorial, los estudiantes serán capaces de:

- ✅ Estructurar elementos HTML semánticamente
- ✅ Aplicar estilos CSS avanzados (flexbox, posicionamiento, transformaciones)
- ✅ Manipular el DOM con JavaScript vanilla
- ✅ Gestionar eventos del usuario (clicks, teclado)
- ✅ Implementar funcionalidades interactivas sin frameworks

## 🚀 ¿Qué es una Ventana Modal?

Una **ventana modal** es un elemento de interfaz que aparece sobre el contenido principal de una página web, requiriendo la atención del usuario antes de poder continuar. Es ampliamente utilizada para:

- Mostrar información importante
- Formularios de registro/login
- Confirmaciones de acciones
- Galerías de imágenes
- Alertas y notificaciones

## 📁 Estructura del Proyecto

```
github-ages-test/
├── index.html      # Estructura HTML principal
├── style.css       # Estilos y diseño visual
├── script.js       # Lógica e interactividad
├── 1283921.jpg     # Imagen de fondo (opcional)
└── README.md       # Este archivo
```

## 🔧 Tecnologías Utilizadas

### HTML5

- Estructura semántica del documento
- Elementos de botones y contenedores
- Meta tags para responsividad

### CSS3

- **Flexbox** para centrado y alineación
- **Posicionamiento absoluto** para el modal
- **Transformaciones CSS** para centrado perfecto
- **Gradientes lineales** para fondos atractivos
- **Box-shadow** y **border-radius** para efectos visuales
- **Backdrop-filter** para efecto de desenfoque

### JavaScript (ES6+)

- **Selección de elementos DOM** con `querySelector` y `querySelectorAll`
- **Event Listeners** para interactividad
- **Manipulación de clases CSS** con `classList`
- **Funciones flecha** y sintaxis moderna
- **Eventos de teclado** para accesibilidad

## 🎨 Características Implementadas

### 1. **Múltiples Botones de Activación**

```html
<button class="show-modal">Show modal 1</button>
<button class="show-modal">Show modal 2</button>
<button class="show-modal">Show modal 3</button>
```

### 2. **Modal Centrado y Responsivo**

```css
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
}
```

### 3. **Overlay con Efecto de Desenfoque**

```css
.overlay {
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.6);
}
```

### 4. **Interactividad Completa**

- ✨ Abrir modal con cualquier botón
- ❌ Cerrar con botón X
- ⌨️ Cerrar con tecla Escape
- 🖱️ Cerrar haciendo click en el overlay

## 🛠️ Cómo Ejecutar el Proyecto

### Opción 1: Abrir Directamente

1. Descarga todos los archivos
2. Abre `index.html` en tu navegador web
3. ¡Listo! Interactúa con los botones

### Opción 2: Servidor Local (Recomendado)

```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js instalado
npx serve .

# Si tienes PHP instalado
php -S localhost:8000
```

Luego visita: `http://localhost:8000`

## 📖 Conceptos Clave Explicados

### 1. **Manipulación del DOM**

```javascript
// Seleccionar elementos
const modal = document.querySelector(".modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Agregar/quitar clases
modal.classList.remove("hidden");
modal.classList.add("hidden");
```

### 2. **Event Listeners**

```javascript
// Evento de click
btn.addEventListener("click", (e) => {
  console.log(`Button clicked ${e.target.textContent}`);
});

// Evento de teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hiddenModal();
  }
});
```

### 3. **Funciones Reutilizables**

```javascript
const hiddenModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
```

## 🎯 Ejercicios Propuestos

### Nivel Básico

1. Cambia el texto del modal
2. Modifica los colores del gradiente de fondo
3. Ajusta el tamaño del modal

### Nivel Intermedio

4. Agrega animaciones CSS para la aparición del modal
5. Implementa diferentes contenidos para cada botón
6. Añade más formas de cerrar el modal

### Nivel Avanzado

7. Crea múltiples modales independientes
8. Implementa un sistema de confirmación
9. Agrega validación de formularios dentro del modal

## 🔍 Puntos de Mejora Identificados

En el código actual hay algunas oportunidades de mejora que pueden servir como ejercicios:

1. **Línea 22 en script.js**: Se llama `hiddenModal()` dos veces
2. **Accesibilidad**: Falta manejo del foco para usuarios con discapacidades
3. **Responsive**: El modal podría optimizarse mejor para móviles

## 📚 Recursos Adicionales

- [MDN Web Docs - Modal Dialog](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [CSS Tricks - Centering in CSS](https://css-tricks.com/centering-css-complete-guide/)
- [JavaScript Event Handling](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## 👥 Contribuciones

Este es un proyecto educativo. Los estudiantes pueden:

- Reportar bugs encontrados
- Sugerir mejoras en el código
- Compartir sus implementaciones personalizadas
- Crear variaciones del proyecto

## 📄 Licencia

Proyecto educativo para la Universidad Metropolitana. Libre uso para fines académicos.

---

**¡Feliz aprendizaje! 🚀**

_Desarrollado con ❤️ para estudiantes de desarrollo web_
