let d = document;
var qrcode = document.querySelector(".qrcode");
var textInput = document.querySelector(".texto");
var qr = new QRCode(qrcode);

const generarBtn = document.querySelector('.btn_qr');
// Agregar un evento de clic al botón
generarBtn.addEventListener('click',() => {
	if(textInput.value !== ''){
        qrcode.removeAttribute('hidden')
		qr.makeCode(textInput.value.trim());
	}
});


d.addEventListener('input',(e)=>{
    if(textInput.value === ''){
        qrcode.setAttribute('hidden','true')
	}
})



