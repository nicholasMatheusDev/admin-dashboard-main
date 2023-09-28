const list = document.querySelectorAll('.navigation li');
function activeLink() {
    list.forEach(element => {
        element.classList.remove('hovered');
        this.classList.add('hovered');
    });
}

list.forEach(element => {
    element.addEventListener('mouseover', activeLink);
});

const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');

toggle.addEventListener('click', function() {
    navigation.classList.toggle('active');
    main.classList.toggle('active');

});
