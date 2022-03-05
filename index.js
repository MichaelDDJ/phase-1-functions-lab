//distance in blocks
function distanceFromHqInBlocks(location){
    return Math.abs(42 - location);
}

//distance in feet
function distanceFromHqInFeet(location){
    return Math.abs(42 - location)* 264;
}
 
//distance travelled in feet
function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination)* 264;
}

//calculation for fare
function calculatesFarePrice(start, destination){
    let feetTravelled = Math.abs(start - destination)* 264;
    if (feetTravelled <= 400){
        return 0;
    }
    else if (400 < feetTravelled && feetTravelled <= 2000){
        return (feetTravelled - 400) * 0.02;        
    }
    else if (2000 < feetTravelled && feetTravelled <= 2500){
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}
