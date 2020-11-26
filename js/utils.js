function getDateFormatted(dateObj, sep) {
    // Convert Date object to string joined by `sep`. For example, if `sep='.'` string will be dd.mm.yyyy
    return [(dateObj.getDate() < 10 ? '0' : '') + dateObj.getDate(), (dateObj.getMonth() < 9 ? '0' : '') + (dateObj.getMonth() + 1), dateObj.getFullYear()].join(sep)
}

function stringToDateArray(dateString) {
    // Parse dateString in dd.mm.yyyy format to array of [year, month, day]
    return dateString.split('.').reverse().map(x=>+x);
} 

function compareDateStrings(dateString1, dateString2) {
    // Return dateString1 < dateString2, assuming date format is dd.mm.yyyy
    let dateArray1 = stringToDateArray(dateString1);
    let dateArray2 = stringToDateArray(dateString2);
    for (var i = 0; i < 3; i++) {
        if (i < 2 && dateArray1[i] == dateArray2[i]) {
            continue;
        } 
        return dateArray1[i] < dateArray2[i];
    }
}