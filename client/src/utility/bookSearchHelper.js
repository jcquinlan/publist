import { post } from './requestHelper';

function searchBooks(query) {
    return post('/books/search', { query });
}

export { searchBooks };
