const newOtn = document.querySelector('js-quote-text');
addEventListener('click', getQuote); 

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion'; 

function getQuote() {
    console.log('Test'); 
}

    try {


    }
    catch(err) { 
        console.log(err); 
        alert['Failed to fetch the quote']; 
    }
