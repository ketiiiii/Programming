const newsletterSection = document.querySelector('.newsletter-section')
const newsForm = document.getElementById('news-form')
const closeButton = document.querySelector ('.close-button')

window.addEventListener('load', () => {
    setTimeout(() => {
        newsletterSection.style.display ='block';
    },3000 );
})

newsletterSection.addEventListener('click', (e) => {
    if (e.target == newsletterSection ) {
    newsletterSection.style.display = 'none';
    }
} )

newsForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    newsletterSection.style.display = 'none';
});

closeButton.onclick = function(){
    newsletterSection.style.display = 'none';
};