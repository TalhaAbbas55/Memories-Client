const initial_state = [];

export default (posts = initial_state, action) => {
    switch (action.type) {
        case 'FETCH_ALL':

            return action.payload;
        case 'CREATE':
            return posts;

        default:
            return posts;
    }
}