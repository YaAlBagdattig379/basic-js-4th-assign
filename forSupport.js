// this is example of support for myself
// this is example of support for myself


                    
// example ::    counting wilds in a jungle when you are travelled 
// example ::    counting wilds in a jungle when you are travelled 


function animalCounting(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if(miles <= 10){
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if(miles <= 20){
        const firstDenseAnimal = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimal = restMiles * animalDensitySecond10Miles;
        const totalAnimal = firstDenseAnimal + secondDenseAnimal;
        return totalAnimal;
    }
    else{
        const firstDenseAnimal= 10 * animalDensityFirst10Miles;
        const secondDenseAnimal= 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const restDenseAnimal = restMiles * animalDensityRestMiles;
        const totalAnimal = firstDenseAnimal + secondDenseAnimal + restDenseAnimal;
        return totalAnimal;
    }
}
let helloResults = animalCounting(21);
console.log(helloResults); 






















// Function oddNumbers(number){
//     var odd =""
//     for(let i=0; i<=number; i++){
//        if(i%2 != 0){
//        odd.push(i)   
//        }
//       }
//     }



// const allHeroies = ['heroAlom','baula','mojibor','heroAlom','voda','laltu','baula'];

// function allOfheroies(allHeroies){
//     let newList = [ ];
//     for(const element of allHeroies){
//         console.log(element);
//         if(newList.indexOf(element) == -1){
//             newList.push(element);
//         }
//     }
//     return newList;

// }
// let allNewMembers = allOfheroies(allHeroies);
// console.log(allNewMembers);

// 4rth problem solving 
//  function name will be " oddFriend" 
// const allFriendsName = ['heroAlom','baulViya','mojibor','monpakhi','poranpiya','laltu','asifAkbar'];
// function oddFriend(myClassMates){
//     let oddsFriendsList = [ ];
//     for(const element of allFriendsName ){
//         console.log(element);
//         if(element.length % 2 != 0){
//             oddsFriendsList.push(element);
//         }
//     }
//     return oddsFriendsList;  
// }
// let myOddFriend = oddFriend(allFriendsName);
// console.log(myOddFriend);