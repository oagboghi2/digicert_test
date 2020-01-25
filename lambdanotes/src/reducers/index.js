import {
    DELETE_NOTE,
    EDIT_NOTE,
    CREATE_NOTE
} from '../actions';


const initialState = [
                        {
                            _id: '1',
                            title: 'First Note',
                            body: 'Integer sit amet tortor eu ex varius bibendum a malesuada risus. Sed facilisis orci ac bibendum imperdiet. Integer non lectus tincidunt eros elementum consectetur vel quis nibh. Cras a dapibus lectus. Integer id pulvinar quam, vitae sollicitudin lorem. Nulla et elementum risus. Aliquam molestie, justo a sodales dictum, ligula ante fermentum quam, id vulputate ligula leo id mi. Mauris pretium metus in nunc ornare, vitae rutrum massa tincidunt.Cras mollis commodo sapien, id gravida neque condimentum dictum.Proin non magna ultricies, rhoncus elit molestie, maximus tellus.Proin ac rutrum ligula.Etiam consectetur mi sed ante finibus, eu consequat purus imperdiet.Maecenas imperdiet interdum ante vitae sodales.Praesent id tristique mauris.Aenean mollis porttitor faucibus.Morbi vitae scelerisque ex.Aenean eget placerat augue.Nam facilisis vel magna quis condimentum.Maecenas faucibus pulvinar magna, ut euismod lacus suscipit sit amet.',
                            CreatedAt: 1550384469279
                        }, 
                        {
                            _id: '2',
                            title: 'Second Note',
                            body: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,',
                            CreatedAt: 1550384469279
                        }, 
                        {
                            _id: '3',
                            title: 'Third Note',
                            body: ' consectetur adipiscing',
                            CreatedAt: 1550384469279
                        }, 
                        {
                            _id: '4',
                            title: 'Fourth Note',
                            body: ' consectetur adipiscing',
                            CreatedAt: 1550384469279
                        }
];
//                  current Application State, {action object}

const notesReducer = (state = initialState, action) => {
    let temp = Array.from(state);
    switch(action.type){
        case DELETE_NOTE:
            state.forEach((item, index) => {
                if(item._id === action.payload) {
                    temp.splice(index, 1);
                    return;
                }
            }); 
            return temp;
        case EDIT_NOTE:
            state.forEach((item, index) => {
                if (item._id === action.payload._id) {
                    temp.splice(index, 1);
                    return;
                }
            });
            temp.push(action.payload);
            return temp;
        case CREATE_NOTE:
            temp.push(action.payload);
            return temp;
        default:
        // return: The Next Application State.
            return state;
    }
};

export default notesReducer;