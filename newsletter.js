//DECLARATING THE REFERENCE TO THE VALUES IN HTML
const newsletterSection = document.querySelector('.newsletter-section')
const newsForm = document.getElementById('news-form')
const newsLetterDiv = document.querySelector('.newsletter-center')
const closeButton = document.querySelector ('.close-button')

const textPop = document.querySelector('.text-pop')

//SETS DELAY TIMEOUT LOAD OF THE POPUP NEWSLETTER
window.addEventListener('load', () => {
    setTimeout(() => {
        newsletterSection.style.display ='block';
    },3000 );
})

//ON CLICK OF THE BACKGROUND POPUP IS CLOSED
newsLetterDiv.addEventListener('click', (e) => {
    if (e.target == newsLetterDiv ) {
    newsletterSection.style.display = 'none';
    }
} )

//WHEN FORM IS SUBMITTED THE POPUP IS CLOSED AND ALERT IS SHOWN
newsForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    newsletterSection.style.display = 'none';
    alert("You have successfully singed up!")
});

//WHEN CLOSE BUTTON CLICKED POPUP IS CLOSED
closeButton.onclick = function(){
    newsletterSection.style.display = 'none';
};

//DECLARATING THE REFERENCE TO THE VALUES IN HTML
const pageNewsForm = document.getElementById('page-submit')

//WHEN FORM IS SUBBMITED TEXT IS SHOWN AND FORMS INPUT IS CLEARD
pageNewsForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    textPop.style.display = 'block';
    pageNewsForm.reset()
});