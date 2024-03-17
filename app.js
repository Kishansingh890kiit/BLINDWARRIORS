// const apikey = "https://kodessphere-api.vercel.app";
const apikey = "https://kodessphere-api.vercel.app/devices/x9dRhz5";

const bulbOnButton = document.getElementById('bulb-on');
const bulbOffButton = document.getElementById('bulb-off');
const AcOnButton = document.getElementById('ac-on');
const AcOffButton = document.getElementById('ac-off');
document.getElementById('ac-on').style.textAlign = "center";
document.getElementById('ac-off').style.textAlign = "center";

const lightSlider = document.getElementById('light-slider');
const statusMessage = document.getElementById('status-message');
const lightSliderAC = document.getElementById('light-slider-ac');

function updateDeviceStatus(message, isSuccess) {
    statusMessage.textContent = message;
    statusMessage.style.color = isSuccess ? 'green' : 'red';
}

bulbOnButton.addEventListener('click', function() {
    setTimeout(() => {
        updateDeviceStatus('Bulb turned on successfully', true);
    }, 500);
});

bulbOffButton.addEventListener('click', function() {
    setTimeout(() => {
        updateDeviceStatus('Bulb turned off successfully', true);
    }, 500);
});
AcOnButton.addEventListener('click', function() {
    setTimeout(() => {
        updateDeviceStatus('Ac turned on successfully', true);
    }, 500);
});

AcOffButton.addEventListener('click', function() {
    setTimeout(() => {
        updateDeviceStatus('Ac turned off successfully', true);
    }, 500);
});
lightSlider.addEventListener('input', function() {
    updateDeviceStatus(Speed of fan set to ${lightSlider.value}, true);
});
lightSliderAC.addEventListener('input', function() {
    updateDeviceStatus(Temperature of AC set to ${lightSliderAC.value}, true);
});
