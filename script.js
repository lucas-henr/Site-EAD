function markAsCompleted(button) {
    button.style.backgroundColor = '#28a745';
    button.innerHTML = '<i class="fas fa-check"></i> Concluída';
}

function likeButton(button) {
    button.classList.toggle('liked');
}