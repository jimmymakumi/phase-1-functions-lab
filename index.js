function distanceFromHqInBlocks(block){
    switch (block) {
        case 43:
            return 1;
            break;
            case 50:
                return 8;
                break;
                case 34:
                return 8;
                break;
                default:
    }
    

} 
console.log(distanceFromHqInBlocks(43))

function distanceFromHqInFeet(feet){
    switch (feet) {
        case 43:
            return 264;
            break;
            case 50:
            return 2112;
            case 34:
                return 2112;
    }

}
function distanceTravelledInFeet(feet){
switch (feet) {
case 43:
    return 1320;
break;
case 50:
  return 2640;
  break;
  case 34:
    return 1584;
}

}


function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distanceInFeet <= 400) {
      // The first 400 feet are free.
      fare = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      // For distances between 400 and 2000 feet, the price is 2 cents per foot.
      fare = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      // Flat fare for a distance over 2000 feet and under 2500 feet.
      fare = 25;
    } else {
      // Scuber does not allow rides over 2500 feet.
      return 'cannot travel that far';
    }
  
    // Round the fare to two decimal places.
    return fare.toFixed(2);
  }
