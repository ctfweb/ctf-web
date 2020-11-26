function createElement(tag, className, text) {
    var e = document.createElement(tag);
    e.className = className;
    e.innerHTML = text;
    return e;
}

function createLabItem(date, time, name) {
    var card = document.createElement('div');
    card.className = "card";
    var cardBody = document.createElement('div');
    cardBody.className = "card-body p-2";
    var hDate = document.createElement('h6');
    hDate.className = "card-title m-0";
    hDate.textContent = date;
    var hTime = document.createElement('h7');
    hTime.className = "card-subtitle mb-2 text-muted";
    hTime.textContent = time;
    var hName = document.createElement('h3');
    hName.className = "card-text p-0"
    hName.textContent = name;
    cardBody.appendChild(hDate);
    cardBody.appendChild(hTime);
    cardBody.appendChild(hName);
    card.appendChild(cardBody);
    return card;
}

function createScheduleItem(time, department, topic, instructor) {
    var card = document.createElement('div');
    card.className = "card";
    var cardBody = document.createElement('div');
    cardBody.className = "card-body py-1";
    let pTime = createElement('p', "card-title text-dark font-size: small font-weight-normal my-0", time);
    let pDepartment = createElement('p', "card-subtitle my-0 font-size: small font-weight-light", department);
    let hTopic = createElement('h6',"card-text my-0", topic);
    let pInstructor = createElement('p',"m-0 font-size: small", instructor);
    
    cardBody.appendChild(pTime);
    cardBody.appendChild(pDepartment);
    cardBody.appendChild(hTopic);
    cardBody.appendChild(pInstructor);
    card.appendChild(cardBody);
    return card;
}


function createFoodItem(meal, menuList) {
    var card = createElement('div', 'card', '');
    var cardBody = createElement('div', 'card-body py-1', '');
    let pMeal = createElement('p', "card-title text-dark font-size: small font-weight-normal my-0", meal);
    let hMenu = createElement('h6', "card-text my-0", menuList.join('</br>'));    
    cardBody.appendChild(pMeal);
    cardBody.appendChild(hMenu);
    card.appendChild(cardBody);
    return card;
}

function createCourseInfoItem(code, credit, start, end, midterms, final, makeup) {
    var card = createElement('div', 'card', '');
    var cardBody = createElement('div', 'card-body py-1', '');
    let pCode = createElement('p', "card-title text-dark font-weight-normal my-0", code);
    let pCredit = createElement('p', "ccard-title text-dark font-size: small font-weight-normal my-0", '<b>Kredi:</b> ' + credit);
    let pStart = createElement('p', "ccard-title text-dark font-size: small font-weight-normal my-0", '<b>Başlangıç:</b> ' + start);
    let pEnd = createElement('p', "ccard-title text-dark font-size: small font-weight-normal my-0", '<b>Bitiş:</b> ' + end);
    let midtermText = midterms.length > 1 ? "<br>-" + midterms.join("<br>-") : midterms[0]
    let pMidterm = createElement('p', "ccard-title text-dark font-size: small font-weight-normal my-0", 
    '<b>Ara Sınav:</b> ' + midtermText);
    let pFinal = createElement('p', "ccard-title text-dark font-size: small font-weight-normal my-0", '<b>Bitiş:</b> ' + final);
    let pMakeup = createElement('p', "ccard-title text-dark font-size: small font-weight-normal my-0", '<b>Bitiş:</b> ' + makeup);
    cardBody.appendChild(pCode);
    cardBody.appendChild(pCredit);
    cardBody.appendChild(pStart);
    cardBody.appendChild(pEnd);
    cardBody.appendChild(pMidterm);
    cardBody.appendChild(pFinal);
    cardBody.appendChild(pMakeup);
    card.appendChild(cardBody);
    return card;   
}