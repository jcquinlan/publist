import dig from './dig';

function createBook(googleBook) {
    return {
        googleId: dig(googleBook, 'id'),
        title: dig(googleBook, 'volumeInfo', 'title'),
        description: dig(googleBook, 'volumeInfo', 'description'),
        genres: dig(googleBook, 'volumeInfo', 'categories'),
        authors: dig(googleBook, 'volumeInfo', 'authors'),
        publisher: dig(googleBook, 'volumeInfo', 'publisher'),
        publishedDate: dig(googleBook, 'volumeInfo', 'publishedDate'),
        smallThumbnail: dig(googleBook, 'volumeInfo', 'imageLinks', 'smallThumbnail'),
        thumbnail: dig(googleBook, 'volumeInfo', 'imageLinks', 'thumbnail'),
    }
}

export default createBook;
