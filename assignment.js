// Problem - 1 
/* 
    Here we did a simple covertion from Kilometer to meter.
    1 kilometer = 1000 meter.
    We declared a function and gave a parameter and to convert we are multiplyting the parameter with 1000...
    and storing the value in a variable. Afterthat, we returing the variable.  
*/
function kilometerToMeter(meter){
    var kilometer = meter*1000;
    return kilometer;
}
//console.log(kilometerToMeter(5));

// Problem - 2
/*
    Here we did a budget calcualtion.
    decalred a function with 3 parameters then gave proper logic to find the budget.

*/
function budgetCalculator(watch, phone, laptop){
    var watchPrice = 50 * watch;
    var phonePrice = 100 * phone;
    var laptopPrice = 500 * laptop;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
//console.log(budgetCalculator(3,2,1));

// Problem - 3
/*
    We had to find the hotel renting cost.  
*/
function hotelCost(days){
    //Calculating rent the time-span of 10 days
    var tenDaysRent = days * 100;
    var twentyDaysRent = days * 80;
    var moreThanTwentydaysRent = days * 50;

    // Calculating this rent previously if a customer stays more than 10 and 20 days.
    var firstTenDaysCost = 100 * 10;
    var secondTendaysCost = 80 * 10;

    //counting days to fix to know in which time span a customer stayed how many days.
    var restDays1 = days - 10;
    var restDays2 = restDays1 - 10;

    if(days <= 10){
        var totalCost = tenDaysRent;
    }
    else if(days > 10 && days <= 20){      
        totalCost = restDays1 * 80 + firstTenDaysCost;
    }
    else if(days > 20){
        totalCost = (restDays2 * 50) + firstTenDaysCost + secondTendaysCost;
    }
    return totalCost;
}
//console.log(hotelCost(25));

// Problem - 4
/*
    here we had find the biggest name of our friend
    Decalred a function with parameter.
    then initilized the array to store our friend count.
    then in if()-condition we compared and stored the biggest name.
 */
function megaFriend(friends){
    var friendName = friends[0].length;
    for(var i = 0; i < friends.length; i++){
        var names = friends[i].length;
        if(names > friendName){
           var biggestName = friends[i];
            friendName = names;
        }
    }
    return biggestName;
}
//console.log(megaFriend(["Fahad", "Anik", "Junayed"]));