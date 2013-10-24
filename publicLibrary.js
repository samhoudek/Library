function publicLibrary(){}

function book (title, shelf, enshelf, unshelf){
        this.title= title;
        this.shelf=shelfNumber;
        this.enshelf= function(shelf){
		shelf.book.push(this);}
		this.unshelf=function(shelf){
		shelf.book.pop(this);
  }
		
function shelf (shelfNumber){
		this.shelfNumber = shelfNumber;
		this.containsBook = function (book){this.book.indexOf(book) !=-1){return true;
}
		else { return false}}}

function Library (){
this.shelves=[];
this.addShelf = function (shelf){
this.shelves.append(shelf);};
this.totalBook = books.length

var bookInventory = 
var book1 = new book ("Cat in the Hat", "shelf1", true, false);
var book2 = new book ("Green Eggs and Ham","shelf2", true, false);

var books = [book1, book2]; 

var shelf1 = new shelf (1);
var shelf2 = new shelf (2);

var publicLibraryInventory = function(){
        for (i=0, i<totalBook.length;i++)

var enshelf = function(book,shelf){
        shelf.push(book);count++;
        count:0}
        

var unshelf = function(book,shelf){
        shelf.push(book);count --;
        count:0}
		
var publicLibrary = new Library ();
        publicLibrary.addShelf(shelf1, shelf2);
        


	
