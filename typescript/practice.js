// # 1 -- a basic function to take in items and run it in a interface to check the object and run it in the funcation afterwards
// interface Info{
//   id:number,
//   name:string,
//   mail_id?:string,
// }
// let testArray: number[] = [1,2,3,4,5]
// function disp_details(info: Info, arr) {
//   console.log("ID:", info.id);
//   console.log("Name",info.name);
//   if(info.mail_id != undefined)
//   console.log("Email Id",info.mail_id);
//   for (let i in arr) {
//     console.log('this is a array', arr[i])
//   }
// }
// disp_details({id:123, name:"John"}, testArray);
// disp_details({id:111, name: "mary",mail_id:"mary@xyz.com"}, testArray);
// # 2 --- this is a new example of a class with a subclass and inporting an string array and a object.
// class Car {
//   //field
//   engine:string;
//   lapTime:number;
//   //constructor
//   constructor(engine:string, time:number) {
//      this.engine = engine,
//      this.lapTime = time
//   }
//   //function
//   disp():void {
//      console.log("Engine is: "+this.engine)
//      console.log("Lap time is: "+this.lapTime +' secs')
//   }
// }
// interface RaceInfo{
//   [index:number]:string
// }
// class Race extends Car {
//   races: string[]
//   constructor(data) {
//     super("V12 powerhose", 4.54);
//     this.races = data
//   }
//   dispRaces():void {
//     for (let i in this.races) {
//       console.log('these are the races ' +this.races[i]+ ' in this time ' + this.lapTime + ' with a eng of ' + this.engine)
//   }
//  }
// }
// var myNames: RaceInfo;
// myNames = ['bigbear', 'cali', 'washington'];
// var obj = new Car("V12 powerhose", 4.54)
// var objCar = new Race(myNames)
// obj.disp();
// objCar.dispRaces()
// #3 -- new  functions running 2 arrays
// interface numArray{
//   [index:number]:number
// }
// interface strArray{
//   [index:number]:string
// }
// function doubleLoop(arr, arr1) {
//   for (let i in arr) {
//     console.log('Hello, My name is ' + arr1[i] + ' and i am ' + arr[i])
//   }
// }
// let age: numArray;
// let newName: strArray;
// newName = ['tim', 'seth', 'dayna'];
// age = [10,55,83];
// doubleLoop(age, newName);
function reverseNumber(arr, count) {
    if (count === void 0) { count = 1; }
    console.log('inside', arr);
    var reversed = parseInt(arr.toString().split('').reverse().join(''));
    console.log('reversed', reversed);
    var newTotal = arr + reversed;
    console.log('newTotal', newTotal);
    var check = newTotal.toString().split('');
    var end = check.length - 1;
    for (var i = 0; i < check.length; i++) {
        if (i >= end) {
            console.log('total count', count);
            console.log('number is', newTotal);
            console.log(true);
            return true;
        }
        if (check[i] === check[end]) {
            end--;
        }
        else {
            count++;
            console.log(false);
            reverseNumber(newTotal, count);
            return false;
        }
    }
}
reverseNumber(1779);
// reverseNumber(1353);
