const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

editor.addEventListener("input", updatePreview);

function updatePreview() {
    const markdownText = editor.value;
    preview.innerHTML = marked(markdownText);
}

// Cargar un ejemplo de Markdown por defecto
const defaultMarkdown = `# Título principal
## Título secundario
Esto es un [enlace](https://www.ejemplo.com)
\`Código en línea\`
\`\`\`
Código en bloque
\`\`\`
- Elemento de lista 1
- Elemento de lista 2

> Esto es una cita en bloque

![Texto alternativo de una imagen](https://via.placeholder.com/150)
**Texto en negrita**`;

editor.value = defaultMarkdown;
updatePreview();
