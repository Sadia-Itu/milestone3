//first
function feetToMile(feet){
    if(feet<0){
        mile='Invalid';
    }
    else{
    var mile=feet/5280;
    mile=mile.toFixed(9);
    
    }
    return mile;
}

var convertvalue=feetToMile(-2);

console.log(convertvalue);
//second

function woodCalculator(chair,table,bed){
    var woodforchair=chair*1;
    var woodfortable=table*3;
    var woodforbed=bed*5;
     var numOfwood=woodforchair+woodfortable+woodforbed;
     return numOfwood;
}
var total=woodCalculator(9,5,2);
console.log(total);
//third
function brickCalculator(floor){
    if(floor<=10){
        brick=floor*15*1000;
    }
    else if(floor<=20){
        remain=floor-10;
        feet=(10*15)+(remain*12);
        brick=feet*1000;
    }
    else{
        remain=floor-20;
        feet=(10*15)+(10*12)+(remain*10)
        brick=feet*1000;
    }
    return brick;

}

var total=brickCalculator(40);
console.log(total);
//forth

function tinyFriend(friends){
    var tiny=friends[0];
    for(var i=0;i<friends.length;i++){
        var currentfriends=friends[i];
        if(currentfriends.length < tiny.length){
            tiny=currentfriends;
        }
    }
    return tiny;
}
var tinyfriend=tinyFriend(['nabil','ayesha','sara','tui','itu']);
console.log(tinyfriend);