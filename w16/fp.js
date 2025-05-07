class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, waterDish, waterWash) {
      this.first = first;
      this.last = last;
      this.houseMembers = houseMembers;
      this.houseSize = houseSize;
      this.foodChoice = foodChoice;
      this.foodSource = foodSource;
    //   this.waterConsumPoints = waterConsum;
      this.waterDish = waterDish;
      this.waterWash = waterWash;
      this.calhouseHoldPoints();
      this.calhouseSizePoints();
      this.calfoodChoicePoints();
      this.calfoodSourcePoints();
      // this.calWaterConsumPoints();
      this.calwaterDishPoints();
      this.calwaterWashPoints();
      this.caltotal();
    }
    calhouseHoldPoints() {
      if (this.houseMembers === 1) {
        this.houseHoldPoints = 14;
      } else if (this.houseMembers === 2) {
        this.houseHoldPoints = 12;
      } else if (this.houseMembers === 3) {
        this.houseHoldPoints = 10;
      } else if (this.houseMembers === 4) {
        this.houseHoldPoints = 8;
      } else if (this.houseMembers === 5) {
        this.houseHoldPoints = 6;
      } else if (this.houseMembers === 6) {
        this.houseHoldPoints = 4;
      } else if (this.houseMembers > 6) {
        this.houseHoldPoints = 2;
      }
    }
    calhouseSizePoints() {
      if (this.houseSize === "large") {
        this.houseSizePoints = 10;
      } else if (this.houseSize === "medium") {
        this.houseSizePoints = 7;
      } else if (this.houseSize === "small") {
        this.houseSizePoints = 4;
      } else if (this.houseSize === "apt") {
        this.houseSizePoints = 2;
      }
    }
    calfoodChoicePoints() {
      if (this.foodChoice === "meatDaily") {
        this.foodChoicePoints = 10;
      } else if (this.foodChoice === "meatWeekly") {
        this.foodChoicePoints = 8;
      } else if (this.foodChoice === "vegetarian") {
        this.foodChoicePoints = 4;
      } else if (this.foodChoice === "veganOrWild") {
        this.foodChoicePoints = 2;
      }
    }
  
    calfoodSourcePoints() {
      if (this.foodSource === "packed") {
        this.foodSourcePoints = 12;
      }
      if (this.foodSource === "balance") {
        this.foodSourcePoints = 6;
      }
      if (this.foodSource === "local") {
        this.foodSourcePoints = 2;
      }
    }
  
    calwaterDishPoints() {
      if (this.waterDish === "overNine")
        this.waterDishPoints = 3
      if (this.waterDish === "fourtoNine")
        this.waterDishPoints = 2
      if (this.waterDish === "oneToThree")
        this.waterDishPoints = 1
      if (this.waterDish === "none")
        this.waterDishPoints = 0
    }
  
    calwaterWashPoints() {
      if (this.waterWash === "overNine")
        this.waterWashPoints = 3
      if (this.waterWash === "fourtoNine")
        this.waterWashPoints = 2
      if (this.waterWash === "oneToThree")
        this.waterWashPoints = 1
      if (this.waterDish === "none")
        this.waterWashPoints = 0
    }
  
      
    
    
  
    caltotal() {
      this.total =
        this.houseHoldPoints +
        this.houseSizePoints +
        this.foodChoicePoints +
        this.foodSourcePoints +
        // this.waterConsumPoints
        this.waterDishPoints +
        this.waterWashPoints
    }
  }
  
  //I only started with the syntax. That, i knew where to start with the method. To know where to reference everything, I didn't know what to do to move forward.
  export { FP };
  