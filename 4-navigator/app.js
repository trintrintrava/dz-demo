function incrementDecrementOperations(addressLat, addressLong, positionLat, positionLong) {
    
    let distance = 0;

    distance = Math.sqrt(Math.abs(((addressLat - positionLat)**2 - (addressLong - positionLong)**2)));
    
    return distance;
};