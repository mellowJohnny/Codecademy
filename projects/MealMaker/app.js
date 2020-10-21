const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      deserts: [],
    },
    get appetizers(){
          
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
      }
  
  
    }; // end courses property Object
  
    addDishToCourse(courseName,dishName,dishPrice){
          const myDish =  {
            course: courseName,
            name: dishName,
            price: dishPrice,
          }
          // Push the current Dish into the matching courseName Array...
          if (courseName === 'appetizer'){
            this._courses.appetizers.
            console.log(`Inside if addDish...dish is ${myDish.courseName}`);
          }
          
            
         // Debug: Print the Dish we just added...
          console.log(`Inside addDish...dish is ${myDish}`); 
        }
  
  getRandomDishFromCourse(courseName){
    const dishes = [];
    const randomINdex = 0;
    if (courseName === appetizer){
      dishes = this._courses.appetizers;
      randomIndex = Math.floor(Math.random(dishes.length));
      return dishes[randomIndex];
    }
    if (courseName === main){
      dishes = this._courses.mains;
      randomIndex = Math.floor(Math.random(dishes.length));
      return dishes[randomIndex];
    }
    if (courseName === desert){
      dishes = this._courses.deserts;
      randomIndex = Math.floor(Math.random(dishes.length));
      return dishes[randomIndex];
    }
    },
  
  generateRandomMeal(){
    const appetizer = menu.getRandomDishFromCourse(appetizers);
    const main = menu.getRandomDishFromCourse(main);
    const desert = menu.getRandomDishFromCourse(desert);
    return `Your meal is ready: ${appetizer} ${main} ${desert}`;
  }
  
  }; // end Menu object
  
  menu.addDishToCourse('appetizer','YummyYummie','2.95');
  
  // debug:
  //console.log(menu.courses.appetizers);
  //console.log(menu.courses.mains);
  //console.log(menu.courses.deserts);