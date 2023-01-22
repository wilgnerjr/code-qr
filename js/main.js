const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');


generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue){
        alert('Insira uma URL ou um texto para gerar o codigo QR')
        return;
    }
    generateBtn.innerHTML = 'Gerando um QR code';
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=%24${qrValue}`;
    qrImg.addEventListener('load', () => {
        generateBtn.innerHTML = 'Gerar Qr Code';
        container.classList.add('active');
    });
});
qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active');
    };
});