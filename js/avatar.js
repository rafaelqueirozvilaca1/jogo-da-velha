let photo = document.querySelector('.foto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', () => {
    if (file.files.length <= 0) {
        return;
    }

    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
});

let botaoAnteriorEl = document.querySelector('#botao-anterior'),
    botaoProximoEl = document.querySelector('#botao-proximo'),
    arrAvatarEl = document.querySelectorAll('.avatar');

let arrAvatares = [
    'imagens/avatar1.png',
    'imagens/avatar2.png',
    'imagens/avatar3.png',
    'imagens/avatar4.png',
    'imagens/avatar5.png',
    'imagens/avatar6.png',
    'imagens/avatar7.png',
    'imagens/avatar8.png',
    'imagens/avatar9.png',
    'imagens/avatar10.png',
    'imagens/avatar11.png',
    'imagens/avatar12.png',
    'imagens/avatar13.png',
    'imagens/avatar14.png',
    'imagens/avatar15.png',
];

let indiceDoAvatarAteAgora = 3;

function alternarAvatares(incrementarIndice) {
    indiceDoAvatarAteAgora += incrementarIndice;

    if (indiceDoAvatarAteAgora >= arrAvatares.length) {
        indiceDoAvatarAteAgora = 0;
    }

    if (indiceDoAvatarAteAgora < 0) {
        indiceDoAvatarAteAgora = arrAvatares.length - 3;
    }

    arrAvatarEl[0].src = arrAvatares[indiceDoAvatarAteAgora];
    arrAvatarEl[1].src = arrAvatares[indiceDoAvatarAteAgora + 1];
    arrAvatarEl[2].src = arrAvatares[indiceDoAvatarAteAgora + 2];
}

botaoProximoEl.addEventListener('click', () => {
    alternarAvatares(3);
});

botaoAnteriorEl.addEventListener('click', () => {
    alternarAvatares(-3);
});

for (let avatarEl of arrAvatarEl) {
    avatarEl.addEventListener('click', (e) => {
        let avatarRecuperado = e.currentTarget;
        photo.src = avatarRecuperado.src;
    });
}