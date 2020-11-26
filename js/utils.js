function getDateFormatted(dateObj, sep) {
    return [(dateObj.getDate() < 10 ? '0' : '') + dateObj.getDate(), (dateObj.getMonth() < 9 ? '0' : '') + (dateObj.getMonth() + 1), dateObj.getFullYear()].join(sep)
}