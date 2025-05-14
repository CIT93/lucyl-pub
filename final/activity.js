class activities{
    constructor(energyLvl, p1, p2, location){
    this.energyLvl = energyLvl
    this.p1 = p1
    this.p2 = p2
    this.budget = this.p1 + this.p2
    this.location = location

    if (this.location === "indoor") {
        this.dataDescription = this.getIndoorActivity();
      } else if (this.location === "outdoor") {
        this.dataDescription = this.getOutdoorActivity();
      } else {
        this.dataDescription = {
          name: "No matching activity found.",
          description: "Try again with different inputs."
        };
      }
}



getIndoorActivity() {
    if (this.energyLvl === "low" && this.budget >= 10 && this.budget <= 20) {
        return {
          name: "Candlelight Dinner",
          description: "A cozy romantic dinner.",
        };
      } else if (this.energyLvl === "low" && this.budget < 10) {
        return {
          name: "Board Games",
          description: "Enjoy board games for a relaxed evening.",
        };
      } else if (this.energyLvl === "med" && this.budget >= 15 && this.budget <= 25) {
        return {
          name: "Visit a Museum",
          description: "Explore art, history, or science.",
        };
      } else if (this.energyLvl === "med" && this.budget >= 15 && this.budget <= 40) {
        return {
          name: "Sing your heart out",
          description: "Rock to some music and karaoke.",
        };
      } 
      else if (this.energyLvl === "high" && this.budget === 40) {
        return {
          name: "Dance Class",
          description: "Take a fun dance class together.",
        }; 
      } else if (this.energyLvl === "high" && this.budget >= 100) {
        return {
          name: "Learn to cook",
          description: "Take a cooking class.",
        }; 
      }
      else {
        return {
          name: "Indoor Relaxation",
          description:
            "Enjoy some indoor relaxation time, such as watching movies or reading.",
        };
      }
}
getOutdoorActivity() {
    if (this.energyLvl === "low" && this.budget < 10) {
        return {
          name: "Stargazing",
          description: "Relax and enjoy the night sky.",
        };
      } else if (this.energyLvl === "med" && this.budget >= 10 && this.budget <= 20) {
        return {
          name: "Picnic in the Park",
          description: "Have a peaceful picnic in nature.",
        };
      } else if (this.energyLvl === "high" && this.budget >= 10 && this.budget <= 30) {
        return { name: "Hiking", description: "Take a scenic nature hike." };
      } else if (this.energyLvl === "high" && this.budget > 30) {
        return {
          name: "Go-Karting",
          description: "Race against each other at a local go-kart track.",
        };
      } else if (this.energyLvl === "med" && this.budget >= 20 && this.budget <= 40) {
        return {
          name: "Cycling",
          description: "Go on a fun cycling trip in a scenic area.",
        };
      } else if (this.energyLvl === "med" && this.budget >= 100) {
        return {
          name: "Take flight somewhere",
          description: "Go for a helicopter ride.",
        }; 
      }
      else {
        return {
          name: "Outdoor Relaxation",
          description: "Relax outdoors in a peaceful park or beach.",
        };
      }  
}
}

export {activities}