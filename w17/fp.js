class FP {
  constructor(
    first,
    last,
    houseMembers,
    houseSize,
    foodChoice,
    foodSource,
    waterDish,
    waterWash,
    purchase,
    waste,
    recycle,
    personal,
    publicTransport,
    flights
  ) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    //   this.waterConsumPoints = waterConsum;
    this.waterDish = waterDish;
    this.waterWash = waterWash;
    this.purchase = purchase;
    this.waste = waste;
    this.recycle = recycle;
    this.personal = personal;
    this.publicTransport = publicTransport;
    this.flights = flights;
    this.calhouseHoldPoints();
    this.calhouseSizePoints();
    this.calfoodChoicePoints();
    this.calfoodSourcePoints();
    // this.calWaterConsumPoints();
    this.calwaterDishPoints();
    this.calwaterWashPoints();
    this.calpurchasePoints();
    this.calwastePoints();
    this.calpersonalPoints();
    this.calpublicTransportPoints();
    this.calflightsPoints();
      // this.calrecyclePoints();
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
    if (this.waterDish === "overNine") {this.waterDishPoints = 3;}
    if (this.waterDish === "fourtoNine") {this.waterDishPoints = 2;}
    if (this.waterDish === "oneToThree") {this.waterDishPoints = 1;}
    if (this.waterDish === "none") {this.waterDishPoints = 0;}
  }

  calwaterWashPoints() {
    if (this.waterWash === "overNine") {this.waterWashPoints = 3;}
    if (this.waterWash === "fourtoNine") {this.waterWashPoints = 2;}
    if (this.waterWash === "oneToThree") {this.waterWashPoints = 1;}
    if (this.waterWash === "none") {this.waterWashPoints = 0;}
  }

  calpurchasePoints() {
    if (this.purchase === "MoreThanSeven") {this.purchasePoints = 10;}
    if (this.purchase === "fiveToSeven") {this.purchasePoints = 8;}
    if (this.purchase === "threeToFive") {this.purchasePoints = 6;}
    if (this.purchase === "lessThanThree") {this.purchasePoints = 4;}
    if (this.purchase === "nothing") {this.purchasePoints = 2;}
  }
  calwastePoints() {
    if (this.waste === "fourCans") {this.wastePoints = 50;}
    if (this.waste === "threeCans") {this.wastePoints = 40;}
    if (this.waste === "twoCans") {this.wastePoints = 30;}
    if (this.waste === "oneCans") {this.wastePoints = 20;}
    if (this.waste === "lessThanOne") {this.wastePoints = 5;}
  }

  calpersonalPoints() {
    if ((this.personal === "overFifteen")) {this.personalPoints = 12;}
      if ((this.personal === "tenToFifteen")) {this.personalPoints = 10;}
    if ((this.personal === "OneThoutoTenThou")) {this.personalPoints = 6;}
    if ((this.personal === "lessThanOneTHou")) {this.personalPoints = 4;}
    if ((this.personal === "none")) {this.personalPoints = 0;}
  }

  calpublicTransportPoints() {
    if ((this.publicTransport === "overTwenty")) {this.publicPoints = 12;}
    if ((this.publicTransport === "fifteenToTwenty")) {this.publicPoints = 10;}
    if ((this.publicTransport === "tenToFifteen")) {this.publicPoints = 6;}
    if ((this.publicTransport === "OneThouToTenThou")) {this.publicPoints = 4;}
    if ((this.publicTransport === "lessThanOne")) {this.publicPoints = 2;}
    if ((this.publicTransport === "none")) {this.publicPoints = 0;}
  }

  calflightsPoints() {
    if ((this.flights === "short")) {this.flightsPoints = 2;}
    else if ((this.flights === "within")) {this.flightsPoints = 6;}
    else if ((this.flights === "out")) {this.flightsPoints = 20;}
    else if ((this.flights === "none")) {this.flightsPoints = 0;}
  }
    //   calrecyclePoints() {
    //   const basePoints = 24;
    //   if (!this.recycle || this.recycle.length === 0) {
    //     this.recyclePoints = basePoints;
    //   } else {
    //     const deduction = 4 * this.recycle.length;
    //     this.recyclePoints = Math.max(basePoints - deduction, 0);
    //   }
    // }

  caltotal() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodChoicePoints +
      this.foodSourcePoints +
      // this.waterConsumPoints
      this.waterDishPoints +
      this.waterWashPoints +
      this.purchasePoints +
      this.wastePoints +
      this.personalPoints +
      this.publicPoints +
      this.flightsPoints +
    this.recycle.recyclePoints;
  }
}

export { FP };
