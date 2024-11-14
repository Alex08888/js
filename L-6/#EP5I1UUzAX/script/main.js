const suits = ['spade', 'diamond', 'heart', 'club']
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

const cards = []
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            cards.color = 'red';
        } else {
            cards.color = 'black';
        }
        cards.push(card);
    }
}


const groupedCards = cards.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'heart' :
            acc.hearts.push(card);
            break;
        case 'spade' :
            acc.spades.push(card);
            break;
        case 'club' :
            acc.clubs.push(card);
            break;
        case 'diamond' :
            acc.diamonds.push(card);
            break;
    }
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(groupedCards)