// 1st problem solving 
//  function name will be " anaToVori"  

function anaToVori(ana){
    const ekVori = 16;
    // calculation for division
    const totalVori = ana / ekVori; 
    return totalVori;    
}
const anaQuantity = 100;
const totolAna = anaToVori(anaQuantity);
console.log(totolAna);










// 2nd problem solving 
//  function name will be " pandaCost" 

let perPieceSingara = 7;
let perPieceChomsa = 10;
let perPieceJilapi = 15;

function pandaCost(singaraQuantity,chomchaQuantity,jilapiQuantity){
    // multiplication
    const  fourPiecesSingaraCost = singaraQuantity * perPieceSingara;
    const twopiecesChomsaCost = chomchaQuantity * perPieceChomsa;
    const sixPiecesJilapiCost = jilapiQuantity * perPieceJilapi;
    const totalShoppingCost = fourPiecesSingaraCost + twopiecesChomsaCost + sixPiecesJilapiCost;
    return totalShoppingCost;
}
const shoppingPandasProducts = pandaCost(4,2,6);
console.log(shoppingPandasProducts);












// 3rd problem solving 
//  function name will be " picnicBudget" 


function picnicBudget(students){
    // initial variable 
    const perStudentCost1To100 = 5000;  
    const perStudentCost101To200 = 4000;
    const perStudentCost201uptoUnlimited = 3000;
    // first condition 
    if(students <= 100){
        const totalCost = students * perStudentCost1To100;
        return totalCost;
    }
    // second condition 
    else if(students <= 200){
        const first1To1ooStudentsCost = 100 * perStudentCost1To100;
        const restStudentsCost = students - 100;
        const second101To200StudentsCost = restStudentsCost * perStudentCost101To200;
        const totalCost = first1To1ooStudentsCost + second101To200StudentsCost;
        return totalCost;
    }
    else{
        const first1To1ooStudentsCost = 100 * perStudentCost1To100;
        const second101To200StudentsCost= 100 * perStudentCost101To200;
        const restStudents = students - 200;
        const restStudentsCost = restStudents * perStudentCost201uptoUnlimited;
        const totalCost = first1To1ooStudentsCost + second101To200StudentsCost + restStudentsCost;
        return totalCost;
    }
}

let wholeClassStudents = picnicBudget(13);
console.log(wholeClassStudents); 











// 4rth problem solving 
//  function name will be " oddFriend" 

const allFriendsName = ['heroAlom','baulViya','mojibor','monpakhi','poranpiya','laltu','asifAkbar'];
function oddFriend(myClassMates){
    let oddsFriendsList = [ ];
    // for loop
    for(const element of allFriendsName ){
        console.log(element);
        if(element.length % 2 != 0){
            oddsFriendsList.push(element);
        }
    }
    // return  
    return oddsFriendsList;  
}
let myOddFriend = oddFriend(allFriendsName);
console.log(myOddFriend);