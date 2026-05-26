// Q6 - Remover mensagem quando arquivo é selecionado
const fileInput = document.getElementById('p6');
const fileName = document.querySelector('.file-name');
const fileLabel = document.querySelector('label[for="p6"]');

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        fileName.style.display = 'none';
        fileLabel.textContent = fileInput.files[0].name;
    } else {
        fileName.style.display = 'inline';
        fileLabel.textContent = 'Selecionar arquivo';
    }
});
