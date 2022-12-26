const list = document.querySelectorAll('.list');
const activeTab = document.querySelector('.active-tab');

const colors = [
    "#3b3b98", "#25ccf7", "#eb4d4b", "#0be881", "#ffa801"
]

let activeIndex;

list.forEach((ele) => ele.addEventListener('click', addActiveClass))


function addActiveClass() {
    list.forEach(link => link.className = 'list');
    this.className = 'list active';
    activeIndex = this.dataset.active;
    moveActiveTab();
}

function moveActiveTab() {
    let position = activeIndex * 70 + 25;
    activeTab.style.left = `${position}px`;
    activeTab.style.background = `${colors[activeIndex]}`;
}

window.onload = () => {
    list[0].className = 'list active';
    activeTab.style.left = `25px`;
    activeTab.style.background = `${colors[0]}`;

}