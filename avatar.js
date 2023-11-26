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

let avatarButtons = document.querySelectorAll('.avatar');

avatarButtons.forEach((avatarButton) => {
    avatarButton.addEventListener('click', () => {
        photo.src = avatarButton.src;
    });
});
