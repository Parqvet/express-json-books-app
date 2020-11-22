let books = [];

const renderIndex = (req, res) => {
    res.render('index.ejs', {books});
}

const renderNewBook = (req, res) => {
    res.render('new-book.ejs');
}

const createNewBook = (req, res) => {
    const { title, author, image, description } = req.body;

    if (!title || !author || !image || !description) {
        res.status(400).send("Escribe todos los campos");
    }

    let newBook = {
        title,
        author,
        image,
        description
    }

    books.push(newBook);
    console.log(newBook);

    res.redirect('/');
}

module.exports = {
    renderIndex,
    renderNewBook,
    createNewBook
}