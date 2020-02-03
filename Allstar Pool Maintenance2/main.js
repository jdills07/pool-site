const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-links').classList.add('active');
    selectElement('.home-info').classList.add('hide');
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-links').classList.remove('active');
    selectElement('.home-info').classList.remove('hide');
});

selectElement('.link-home').addEventListener('click', () => {
    selectElement('.nav-links').classList.remove('active');
    selectElement('.home-info').classList.remove('hide');
});

selectElement('.link-about').addEventListener('click', () => {
    selectElement('.nav-links').classList.remove('active');
    selectElement('.home-info').classList.remove('hide');
});

selectElement('.link-services').addEventListener('click', () => {
    selectElement('.nav-links').classList.remove('active');
    selectElement('.home-info').classList.remove('hide');
});

selectElement('.link-contact').addEventListener('click', () => {
    selectElement('.nav-links').classList.remove('active');
    selectElement('.home-info').classList.remove('hide');
});

