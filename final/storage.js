//save to local storage

function saveLS(activityHistory) {
    const serialArr = JSON.stringify(activityHistory)
    localStorage.setItem("activity", serialArr)
}


//get from local storage
function getLS() {
    const retreiveArr = localStorage.getItem("activity")
    if(retreiveArr !== null) {
        return JSON.parse(retreiveArr)
    } else {
        return [];
    }
}

export {saveLS, getLS}