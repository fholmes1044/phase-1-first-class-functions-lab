
 
const returnFirstTwoDrivers = function (names) {
let first = names[0]
let second = names [1]
let array = [first, second]
return array
};

const returnLastTwoDrivers = function (names) {
let last1 = names [2];
let last2 = names [3];
let array = [last1, last2]
return array
};


let selectingDrivers =[
    returnFirstTwoDrivers, returnLastTwoDrivers
];

function createFareMultiplier (a){
  return  function (fare) {
return a * fare
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driverreturn)
{
return driverreturn(drivers)
}
