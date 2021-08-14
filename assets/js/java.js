window.addEventListener('load', () => {
    let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '90%',
        '70%',
        '80%',
        '95%',
        '96%',

    ];
    progressBars.forEach((progress, index) => {
        progress.style.width = values[index];
    });
});