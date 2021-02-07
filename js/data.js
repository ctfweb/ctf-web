function filterJsonData(json, filterKey, filterValue) {
    var indices = [];
    json[filterKey].forEach(function filter(value, index, array) {
        if (value == filterValue) {
            indices.push(index);
        }
    })
    return indices
}

function selectJsonData(json, selectedIndices, selectedKeys) {
    var result = []
    selectedIndices.forEach(function(i) {
        var item = [];
        selectedKeys.forEach(function(k) {
            item.push(json[k][i]);
        })
        result.push(item);
    })
    return result
}

function getResourceUrl(itemType) {
    if (itemType == 'schedule') {
        return "res/grade" + getCookie("grade") + "/" + itemType + getCookie("class") +'.json'
    } else if (itemType == 'labInfo') {
        return "res/grade" + getCookie("grade") + "/" + itemType + getCookie("group").replace("TR", "TR" + getCookie("grade")) + getCookie("subGroup") + '.json'
    } else if (itemType == 'courseInfo') {
        return "res/grade" + getCookie("grade") + "/" + itemType + '.json'
    }
}

function populateCardList(itemArgsList, creator) {
    var listGroup = document.getElementById('content-list-group');
    listGroup.textContent = ''
    itemArgsList.forEach(function(itemArgs) {
        listGroup.appendChild(creator(...itemArgs));
    });
}

function scrollToCard(index) {
    let cards = document.getElementById('content-list-group').getElementsByClassName('card');
    if (cards.length > index) {
        cards[index].scrollIntoView();
    }
}

function highlightCard(index) {
    let cards = document.getElementById('content-list-group').getElementsByClassName('card');
    if (cards.length > index) {
        cards[index].className += ' highlighted';
    }
}


function updateScheduleForDate(data) {
    date = $("#datepicker").attr("value");
    selectedIndices = filterJsonData(data, 'date', date);
    selectedVals = selectJsonData(data, selectedIndices, ['time', 'department','topic', 'instructor']);
    populateCardList(selectedVals, createScheduleItem);
}

function updateLabInfoForDate(data) {
    date = $("#datepicker").attr("value");
    selectedIndices = [...Array(data['date'].length).keys()];
    selectedVals = selectJsonData(data, selectedIndices, ['date', 'time','name']);
    scrollIndex = 0;
    while (scrollIndex < selectedVals.length && compareDateStrings(selectedVals[scrollIndex][0], date)) {
        scrollIndex += 1;
    }
    populateCardList(selectedVals, createLabItem);
    scrollToCard(scrollIndex);
    highlightCard(scrollIndex);
}

function updateCourseInfo(data) {
    selectedIndices = [...Array(data['start'].length).keys()];
    selectedVals = selectJsonData(data, selectedIndices, ['code', 'credit', 'start', 'end', 'midterms', 'final', 'makeup']);
    populateCardList(selectedVals, createCourseInfoItem);
}

function updateUI(data, itemType) {
    switch (itemType) {
        case 'schedule': 
            updateScheduleForDate(data);
            break;
        case 'labInfo': 
            updateLabInfoForDate(data);
            break;
        case 'courseInfo': 
            updateCourseInfo(data);
            break;
    }
    var listGroup = document.getElementById('content-list-group')
    let emptyString = "Bu tarihte bu sınıf/grup için gösterilecek veri bulunamadı.\
    Sınıf/grup  ayarı için lütfen yan çekmeceyi kullanın.\n\
    \nSınıf : " + getCookie("grade") + 
    "\nAmfi : " + getCookie("class") + 
    "\nGrup : " + getCookie("group") + getCookie("subGroup");

    if (listGroup.textContent.trim() == '' ) {
        console.log("List is empty, showing empty string");
        listGroup.innerText = emptyString;
    } else if (itemType == 'empty') {
        console.log("Empty view is requested, showing empty string");
        listGroup.innerText = emptyString;
    }
}
