/**
 * INSTRUCTIONS: Build a Library
 * The library carries three different types of media: books, CDs, and movies. 
 * In this project you will create a parent class named Media with three subclasses: 
 * Book, Movie, and CD. These three subclasses have the following properties and methods:
 * 
 * Book
 * Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), 
 * and ratings (array, initially empty).
 * Getters: all properties have a getter
 * Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
 * 
 * Movie
 * Properties: director (string), title (string), runTime (number), 
 * isCheckedOut (boolean, initially false), and ratings (array, initially empty)
 * Getters: all properties have a getter
 * Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
 * 
 * CD
 * Properties: artist (string), title (string), isCheckedOut (boolean, initially false), 
 * and ratings (array, initially empty), songs (array of strings)
 * Getters: all properties have a getter
 * Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
 * 
 * EXTRAS:
 * Add more properties to each class (movieCast, songTitles, etc.)
 * Create a CD class that extends Media.
 * In .addRating(), make sure input is between 1 and 5.
 * Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
 * Create class called Catalog that holds all of the Media items in our library.
 * 
 */

 // Media Superclass
 // Superclass declares the common 'title', 'isCheckedOut' and 'ratings' properties

 class Media {
    constructor(title,isCheckedOut,ratings){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = ratings;
    }

    // ------------------ Getters & Setters
    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }

    set isCheckedOut(status){
        this._isCheckedOut = status;
    }

    // -------------------- Superclass methods

    // Get the ratings Array property, loop over it, adding up all the ratings.  Divide by ratings.length
    getAverageRating(){
        let ratings = this.ratings;
        let numRatings = ratings.length;
        let totalRating = 0;
        for (let i=0; i<ratings.length; i++){
            totalRating = totalRating + ratings[i];
        }
        // Use the .toFixed method of the Number library to format our result:
        return (totalRating / numRatings).toFixed(1);
    }
    
    // If isCheckedOut = true, set it to false - i.e. check the book in.  Otherwise check it out
    toggleCheckOutStatus(){
        if (this.isCheckedOut){ // Calls the isCheckedOut() getter
            this.isCheckedOut = false; // Calls the isCheckedOut() setter
        }
        else{
            this.isCheckedOut = true; // Calls the isCheckedOut() setter
        }
    }
    
    // Methos to add a new rating 
    addRating(newRating){
        this.ratings.push(newRating);
    }

 } // end Media superclass

 class Book extends Media {
     constructor (title, isCheckedOut, ratings, author, pages){
         super(title,isCheckedOut,ratings);
         this._author = author;
         this._pages = pages;
        }

     // Getters
     get author(){
         return this._author;
        }

     get pages(){
        return this._pages;
        }
 } // end Book subclass

 class Movie extends Media {
    constructor(title, isCheckedOut, ratings, director, runtime){
         super(title,isCheckedOut,ratings);
         this._director = director;
         this._runtime = runtime;
    }
    // Getters
    get director(){
        return this._director;
       }

    get runtime(){
       return this._runtime;
       }
 } // End Movie subclass



 // ------------- Run & Test -------------------

 const myBook = new Book('The Book of Souls',true,[9,8,9.5,10,5,7],'Bruce Dickenson',345);
 console.log(myBook.title,myBook.isCheckedOut,myBook.author,myBook.pages);
 myBook.toggleCheckOutStatus();
 
 console.log(`The ${myBook.title}'s average rating is ${myBook.getAverageRating()}`);
 console.log(myBook.title,myBook.isCheckedOut,myBook.author,myBook.pages);
 myBook.addRating(7);
 myBook.addRating(9);
 myBook.addRating(6);
 console.log(`The ${myBook.title}'s average rating is ${myBook.getAverageRating()}`);

 myMovie = new Movie('Star Wars',true,[9,9,8.5,8.75,8],'George Lucas','1 hour: 23 mins');
 console.log(myMovie.title,myMovie.isCheckedOut,myMovie.ratings,myMovie.director,myMovie.runtime);
 console.log(`The ${myMovie.title}'s average rating is ${myMovie.getAverageRating()}`);
 myMovie.toggleCheckOutStatus();
 myMovie.addRating(7);
 myMovie.addRating(9);
 myMovie.addRating(6);
 console.log(myMovie.title,myMovie.isCheckedOut,myMovie.ratings,myMovie.director,myMovie.runtime);
 console.log(`The ${myMovie.title}'s average rating is ${myMovie.getAverageRating()}`);