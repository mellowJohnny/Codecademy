class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }

    // Accessor methods
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    // Class methods
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  
    // Static methods
    static generatePassword(){
        const tempPassword = Math.floor(Math.random()*10000);
        return tempPassword;
    }
  
  } // end HospitalEmployee superclass
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
        } 
    
    // Accessor methods 
    get certifications() {
      return this._certifications;
    }
    
    // Class methods
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  } // end Nurse subclass

  class Doctor extends HospitalEmployee {
    constructor(name,insurance){
        super(name);
        this._insurance = insurance;
    }

    // Accessor methods
    get insurance(){
        return this._insurance;
    }

  } // end Doctor subclass
  

  // ----------------- Test & Run
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);

  // Call static generatePassword() method on HospitalEmployee
  console.log(`Your temp password is: ${HospitalEmployee.generatePassword()}`);

  // New Doctor instance
  const drDavis = new Doctor('Davis',true);
  console.log(drDavis.name,drDavis.insurance,drDavis.remainingVacationDays);