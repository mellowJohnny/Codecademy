/** 
 * School
 * Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
 * Getters: all properties have getters
 * Setters: the numberOfStudents property has a setter
 * Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
 * 
 * Primary
 * Includes everything in the School class, plus one additional property
 * Properties: pickupPolicy (string)
 * 
 * Middle
 * Does not include any additional properties or methods
 * 
 * High
 * Includes everything in the School class, plus one additional property
 * Properties: sportsTeams (array of strings)
 * 
*/

class School {
    constructor(name,level,numberOfStudents){
        this._name = name;
        this._level = level;
        this._numOfStudents = numberOfStudents;
    }

    // Accessors
    get name(){
        return this._name;
    }

    get level(){
        return this._level;
    }

    get numOfStudents(){
        return this._numOfStudents;
    }
    // Before setting the value, make sure the value passed in is a "typeof" number...
    set numOfStudents(num){
        if (typeof num === 'number') {
            this._numOfStudents = num;
        }
        else {
            const errorMsg = "Must be a number..."
            return errorMsg;
        }
    }

    // class methods
    quickFacts(){
        const msg = `${this.name} educates ${this.numOfStudents} students at the ${this.level} school level.`;
        return msg;
    }

    static pickSubstituteTeacher(subTeachers){
        const randomTeach = Math.floor(Math.random() * subTeachers.length) ;
        return subTeachers[randomTeach];
    }

} // end School superclass

class PrimarySchool extends School {
    constructor(name,level,numberOfStudents,pickUpPolicy){
        super(name,level,numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }

// Accessors
    get pickUpPolicy(){
        return this._pickUpPolicy;
    }
 
} // end Primary

class MiddleSchool extends School{
    constructor(name,level,numberOfStudents){
        super(name,level,numberOfStudents);
    }
} // end Middle subclass

class HighSchool extends School {
    constructor(name,level,numberOfStudents,sportsTeams){
        super(name,level,numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

// Accessor methods
get sportsTeams(){
    const teamList = this._sportsTeams.toString();
    return teamList;
}

} // end High subclass

const mySchool = new PrimarySchool('Coutrland Park','elementary', 350, 'Before 4:00 pm');
console.log(mySchool.name, mySchool.level, mySchool.numOfStudents, );
console.log(mySchool.quickFacts());
console.log(`${mySchool.name}'s pickup policy is: ${mySchool.pickUpPolicy}`);
console.log(`Your substitute today is: ${School.pickSubstituteTeacher(['Ms. McNabb','Mme. Morin','Ms. Petrenko'])}`);

const myHighSchool = new HighSchool('St. Thomas High School','high school', 1350, ['Football', 'Soccer', 'Hockey', 'Rugby']);
console.log(myHighSchool.quickFacts());
console.log(`Sports Teams at ${myHighSchool.name} include: ${myHighSchool.sportsTeams}`);

// Test to see what kind of 'class' we have...
if (myHighSchool instanceof HighSchool){
    console.log(`${myHighSchool.name} is a High School`);
}
