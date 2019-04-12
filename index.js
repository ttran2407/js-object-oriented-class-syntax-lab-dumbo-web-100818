class BroadMember {
  constructor (name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training
  }
  
  veto(){
    console.log("No, I must disagree")
  }
  
  approve(){
    console.log("You can do that!")
  }
  
  doCharity(){
    console.log("No, I must disagree")
  }
  
  releasePressStatement(){
    console.log("No, I must disagree")
  }
  
  sayHi(){
    console.log("No, I must disagree")
  }
}