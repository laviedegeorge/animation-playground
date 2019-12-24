const headerName = document.getElementById('headerName');
const modelCont = document.getElementById('modelCont');
const headerCont = document.getElementById('headerCont');

const animateHeight = () => {
    headerCont.style.animation = 'animateHeight 1s ease-in-out';
}

const animateName = () => {

    setTimeout(() => {
        headerName.innerHTML = 'to';
        headerName.style.transition = '.5s ease-out';
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
        modelCont.style.animation = 'rotate 1s ease-in-out';
        modelCont.style.transform = 'rotate(0deg)'
    }, 1000);

    setTimeout(() => {
        modelCont.style.animation = 'circle 1s ease-in-out';
        modelCont.style.borderRadius = '100%';
    }, 2000);

    setTimeout(() => {
        modelCont.style.borderRadius = '0%';
        modelCont.style.animation = 'maxWidth 1s ease-in-out';
        /* modelCont.style.width = '85%'; */
    }, 3000);

    setTimeout(() => {
        modelCont.style.animation = 'disappear 1s ease-in-out';
        modelCont.style.display = 'none'
    }, 4000);

    setTimeout(() => {
        animateHeight();
        headerCont.style.height ='auto'
    }, 4000);
}

const animateHeader = () => {
    animateName();
    animateModelCont();
}


window.onload = () => {
    animateHeader();
}