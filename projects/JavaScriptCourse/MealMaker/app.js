const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      deserts: [],
    },
    get appetizers(){ 
       // return this.appetizers;
      },
  
    set appetizers(appetizerIn){
          
      },
  
    get mains(){
          
      },
  
    set mains(mainsIn){
          
      },
  
    get deserts(){
          
      },
  
    set deserts(desertIn){
          
        }, 
  
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        deserts: this.deserts,
            }
        },

  
    addDishToCourse(courseName,dishName,dishPrice){
          const myDish =  {
            course: courseName,
            name: dishName,
            price: dishPrice,
          }
          // Push the current Dish into the matching courseName Array...
          if (courseName === 'appetizer'){
            this._courses.appetizers.push(myDish);
          }
          if (courseName === 'main'){
            this._courses.mains.push(myDish);
          }
          if (courseName === 'desert'){
            this._courses.deserts.push(myDish);
          }
            
        },
        
    // Need to use the function keyword to define an Object's methods, otherwise they are treated like accessors
    getRandomDishFromCourse: function(courseName){
            let dishes = this._courses[courseName];
            let randomIndex = Math.floor(Math.random() * dishes.length);

        if (courseName === 'appetizers'){
            dishes = this._courses.appetizers;
            return dishes[randomIndex];
         }
        if (courseName === 'mains'){
            dishes = this._courses.mains;
            return dishes[randomIndex];
        }
        if (courseName === 'deserts'){
            dishes = this._courses.deserts;
            return dishes[randomIndex];
        }
    },
  
    // Need to use the function keyword to define an Object's methods, otherwise they become accessor methods
    generateRandomMeal: function(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const desert = this.getRandomDishFromCourse('deserts');
        const totalPrice = appetizer.price + main.price + desert.price;
        const totalRoundedPrice = Math.round(totalPrice);
        return `Your Appetizer is ${appetizer.name}, followed by ${main.name}, and a lovely ${desert.name} to finish. The price is $${totalRoundedPrice}.`;
    },

}; // end Menu

// ------------------ Test the programme... -----------------------------
// Populate the Menu
menu.addDishToCourse('appetizer','Yummy Yummie',2.99);
menu.addDishToCourse('main','Fraische',12.99);
menu.addDishToCourse('desert','Snoflake',6.99);
menu.addDishToCourse('appetizer','Steamed Steam',7.99);
menu.addDishToCourse('main','Roast Beast',99.99);
menu.addDishToCourse('desert','Hang Ten',3.99);
menu.addDishToCourse('appetizer','Blon Blon Sur Feu',129.99);
menu.addDishToCourse('main','Del Gato avec Fleur',32.99);
menu.addDishToCourse('desert','Chef',2.99);

// Generate a random meal
randomMeal = menu.generateRandomMeal();
console.log(randomMeal);
menu.appetizers;
  
  