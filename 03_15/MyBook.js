class MyBook {
    constructor(
        title,
        author,
        ISBN,
        pubDate,
        totalPages,
        currentPage,
        publisher,
        readStatus
    ){
        this.title = title,
        this.author = author,
        this.ISBN = ISBN,
        this.pubDate = pubDate,
        this.totalPages = totalPages,
        this.currentPages = currentPage,
        this.publisher = publisher,
        this.readStatus = readStatus 
    }
    getAuthor(){
        return this.author;
    }
    getTitle(){
        return this.title;
    }
    getISBN(){
        return this.ISBN;
    }
    getPubYear(){
        return this.pubYear;
    }
    getPublisher(){
        return this.publisher;
    }
    getHowMuchLeft(){
        return this.totalPages - this.currentPages;
    }
    getStatus(){
        return this.readStatus;
    }
};

export default MyBook;