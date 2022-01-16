function distanceFromHqInBlocks(block)   {
    if (block > 42) {
        return block - 42;
} else  {
    return 42 - block;
}
}


function distanceFromHqInFeet(pickupLocation)   {
    let streetLengthInFeet = distanceFromHqInBlocks(pickupLocation) * 264
    return streetLengthInFeet;
}
function distanceTravelledInFeet(loc1, loc2)  {
    let streetLength1 = distanceFromHqInBlocks(loc1) * 264;
    let streetLength2 = distanceFromHqInBlocks(loc2) * 264;
    return (streetLength2 - streetLength1);
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end); 
        if (distance < 400) {
            return 0
        }else if (distance > 400 && distance < 2000){
            return (distance - 400) * .02
        }else if (distance > 2000 && distance < 2500){
            return 25
        }else{
            return 'cannot travel that far'
        }
}