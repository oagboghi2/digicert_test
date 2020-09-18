import {
    DELETE_BOOK,
    EDIT_BOOK,
    CREATE_BOOK
} from '../actions';


const initialState = [
        {
            _id: '1',
            title: 'Harry Potter and the Sorcerer Stone',
            body: 'Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents mysterious deaths',
            CreatedAt: 1550384469279
        }, 
        {
            _id: '2',
            title: 'Fellowship of the Ring',
            body: 'The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.',
            CreatedAt: 1550384469279
        }, 
        {
            _id: '3',
            title: 'Dune',
            body: 'In the year 10191, a spice called melange is the most valuable substance known in the universe, and its only source is the desert planet Arrakis. A royal decree awards Arrakis to Duke Leto Atreides and ousts his bitter enemies, the Harkonnens. However, when the Harkonnens violently seize back their fiefdom, it is up to Paul (Kyle MacLachlan), Letos son, to lead the Fremen, the natives of Arrakis, in a battle for control of the planet and its spice. Based on Frank Herberts epic novel.',
            CreatedAt: 1550384469279
        }, 
        {
            _id: '4',
            title: 'Pushcart',
            body: 'Jean Merrills The Pushcart War is a satirical look at war through the eyes of the major participants. The war in this novel is between pushcart vendors and truck drivers who are battling over the right to use the streets of New York City.',
            CreatedAt: 1550384469279
        }
];
// current Application State, {action object}

const booksReducer = (state = initialState, action) => {
    let temp = Array.from(state);
    switch(action.type){
        case DELETE_BOOK:
            state.forEach((item, index) => {
                if(item._id === action.payload) {
                    temp.splice(index, 1);
                    return;
                }
            }); 
            return temp;
        case EDIT_BOOK:
            state.forEach((item, index) => {
                if (item._id === action.payload._id) {
                    temp.splice(index, 1);
                    return;
                }
            });
            temp.push(action.payload);
            return temp;
        case CREATE_BOOK:
            temp.push(action.payload);
            return temp;
        default:
        // return: The Next Application State.
            return state;
    }
};

export default booksReducer;