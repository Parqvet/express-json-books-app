
const renderIndex = (req, res) => {
    res.render('index.ejs');
}

const renderNewBook = (req, res) => {
    res.render('new-book.ejs');
}

const createNewBook = (req, res) => {
    
}

module.exports = {
    renderIndex,
    renderNewBook,
    createNewBook
}