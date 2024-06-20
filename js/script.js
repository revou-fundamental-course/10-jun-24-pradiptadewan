document.addEventListener('DOMContentLoaded', function() {
    const celciusInput = document.querySelector('textarea[id="celcius"]');
    const fahrenheitInput = document.querySelector('textarea[id="fahrenheit"]');
    const konversiButton = document.querySelector('button[data-action="konversi"]');
    const resetButton = document.querySelector('button[data-action="reset"]');
    const reverseButton = document.querySelector('button[data-action="reverse"]');
    const caraKalkulasiTextarea = document.querySelector('textarea[id="cara-kalkulasi"]');

    konversiButton.addEventListener('click', function() {
        const celcius = parseFloat(celciusInput.value);
        if (!isNaN(celcius)) {
            const fahrenheit = (celcius * 9/5) + 32;
            fahrenheitInput.value = fahrenheit.toFixed(2);
            caraKalkulasiTextarea.value = `Suhu ${celcius} derajat Celcius setara dengan ${fahrenheit.toFixed(2)} derajat Fahrenheit.`;
        } else {
            alert('Masukkan suhu dalam angka yang valid!');
        }
    });

    resetButton.addEventListener('click', function() {
        celciusInput.value = '';
        fahrenheitInput.value = '';
        caraKalkulasiTextarea.value = '';
    });

    reverseButton.addEventListener('click', function() {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            const celcius = (fahrenheit - 32) * 5/9;
            celciusInput.value = celcius.toFixed(2);
            caraKalkulasiTextarea.value = `Suhu ${fahrenheit.toFixed(2)} derajat Fahrenheit (&deg;F) setara dengan ${celcius.toFixed(2)} derajat Celcius (&deg;C).`;
        } else {
            alert('Masukkan suhu dalam angka yang valid!');
        }
    });
});
