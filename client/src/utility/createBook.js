function createBook(googleBook) {
    return {
        googleId: googleBook.id,
        title: googleBook.volumeInfo.title,
        description: googleBook.volumeInfo.description,
        genres: googleBook.volumeInfo.categories,
        authors: googleBook.volumeInfo.authors,
        publisher: googleBook.volumeInfo.publisher,
        publishedDate: googleBook.volumeInfo.publishedDate,
        smallThumbnail: googleBook.volumeInfo.imageLinks.smallThumbnail,
        thumbnail: googleBook.volumeInfo.imageLinks.thumbnail,
    }
}

export default createBook;
