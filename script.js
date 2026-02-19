const input = document.getElementById("markdownInput");
const preview = document.getElementById("preview");

input.addEventListener("input", updatePreview);

function updatePreview(){
    preview.innerHTML = marked.parse(input.value);
}

function clearEditor(){
    input.value = "";
    updatePreview();
}

function downloadMarkdown(){
    const blob = new Blob([input.value], {type: "text/markdown"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.md";
    link.click();
}

updatePreview();
