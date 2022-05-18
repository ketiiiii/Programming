const newsletterSection = document.querySelector('.newsletter-section')
const newsForm = document.getElementById('news-form')
const newsLetterDiv = document.querySelector('.newsletter-center')
const closeButton = document.querySelector ('.close-button')

window.addEventListener('load', () => {
    setTimeout(() => {
        newsletterSection.style.display ='block';
    },3000 );
})

newsLetterDiv.addEventListener('click', (e) => {
    if (e.target == newsLetterDiv ) {
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