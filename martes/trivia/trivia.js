function trivia(event){

    event.preventDefault();

    $.get(`https://opentdb.com/api.php?amount=10&type=multiple`, display)




    function display(data) {
        console.log(data.category);
        document.querySelector('.trivia').innerHTML =`
        <h1>${data.question}</h1>
        <button>${data.correct_answer}</button>
        <button>${data.incorrect_answers}</button>
        `;
        
    }

}

$( '.trivia' ).on( 'submit', trivia );