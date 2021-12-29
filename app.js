const closedMonke = document.querySelector('.closed')
const openMonke = document.querySelector('.open')

// event listener 
closedMonke.addEventListener('click', () => {
    if(openMonke.classList.contains('open')) {
        openMonke.classList.add('active');
        closedMonke.classList.remove('active');
  }
});

openMonke.addEventListener('click', () => {
    if(closedMonke.classList.contains('closed')) {
        closedMonke.classList.add('active');
        openMonke.classList.remove('active');
    }
})

// no comment