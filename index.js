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
    console.log("I like to help people.")
  }
  
  releasePressStatement(){
    console.log("You will see great things from Scuber.")
  }
  
  sayHi(){
    console.log(`Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}.`)
  }
}

class Ceo extends BroadMember{
  
  hireEmployee(){
    console.log("Welcome abroad!")
  }
}