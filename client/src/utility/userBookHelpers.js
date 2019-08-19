import { post, get } from './requestHelper';

function searchBooks(query) {
    return post('/books/search', { query });
}

function fetchAllBooks(username) {
    return get(`/books/${username}`);
}

function createBookRecommendation(username, payload) {
    return post(`/books/${username}`, payload);
}

function voteOnBook(bookId, action) {
    return post(`/vote/${bookId}`, { action })
}

export {
    searchBooks,
    fetchAllBooks,
    createBookRecommendation,
    voteOnBook
};
