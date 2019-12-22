const headerName = document.getElementById('headerName');
const modelCont = document.getElementById('modelCont');

const animateName = () => {
    setTimeout(() => {
        headerName.innerHTML = 'to';
    }, 1000);

    setTimeout(() => {
        headerName.innerHTML = 'fashion';
    }, 2000);

    setTimeout(() => {
        headerName.style.position = 'unset';
    }, 3000);
}

const animateModelCont = () => {
    setTimeout(() => {
        modelCont.style.transform = 'rotate(360deg)';
    }, 1000);

    setTimeout(() => {
        modelCont.style.borderRadius = '100%';
    }, 2000);

    setTimeout(() => {
        modelCont.style.borderRadius = '0%';
        modelCont.style.width = '85%';
    }, 3000);
}

const animateHeader = () => {
    animateName();
    animateModelCont();
}


window.onload = () => {
    animateHeader();
}