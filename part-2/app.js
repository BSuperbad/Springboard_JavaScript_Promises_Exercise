// Part 2
// 1.

let url = 'https://deckofcardsapi.com/api/deck'
$.getJSON(`${url}/new/draw/`).then(data => {
    console.log(`${data.cards[0].value.toLowerCase()} of ${data.cards[0].suit.toLowerCase()}`);
})

// 2. 

$.getJSON(`${url}/new/draw/`)
    .then(data => {
        let firstCard = data.cards[0];
        let deckId = data.deck_id;
        $.getJSON(`${url}/${deckId}/draw/`)
            .then(data => {
                let secondCard = data.cards[0];
                [firstCard, secondCard].forEach(function (card) {
                    console.log(
                        `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
                    );
                });
            })
    })



// 3. 

$(document).ready(function () {
    const deckButton = $('#deck-button');
    const cardDiv = $('#card-container');
    let deckId;

    deckButton.click(function () {
        if (!deckId) {
            $.getJSON(`${url}/new/draw/`).then(data => {
                deckId = data.deck_id;
                drawCard(deckId);
            });
        } else {
            drawCard(deckId);
        }
    });

    function drawCard(deckId) {
        $.getJSON(`${url}/${deckId}/draw/`).then(data => {
            if (data.remaining === 0) {
                cardDiv.html('Deck is Empty!');
                deckId = null;
            } else {
                const cardImage = `<img src="${data.cards[0].image}" alt="${data.cards[0].value.toLowerCase()} of ${data.cards[0].suit.toLowerCase()}">`;
                cardDiv.append(cardImage);
            }
        });
    }
});