console.log("this is day52 of js")

var a = 5; 
// number 
var b = 6;
var c = "rohit"
// string : collection of characters. it's written in double quote.
console.log(a + b  );

console.log(typeof a, typeof b, typeof c);

// typeof a : gives datatype of variable, it's a typeof operator

// var 55a = "rohit";
 // NOT ALLOWED : because you can't start variable name using digits. you can use dolller sign($), letters, underscore(_) only.




const a1 = 6;
// this is constant value, now you can't change the value of a1.
// like you can't write it as 
// a1 = a1 + 1;
// NOT ALLOWED


// difference between VAR and LET.

// VAR  is globally scoped but LET is blocked scope.

let y = 6;

{
    let y = 67;    
    //  let y = 6 : this is blocked scope;
    console.log(y);
}
console.log(y);

// output is 67  6

var z = 6;

{
    var z = 67;
    //  var z = 6 : this is globally scope;
    console.log(z);
}
console.log(z);

// output is 67  67

                             // datatypes in javascript(7)


// 1.NULL : means nothing
//  2.NUMBER : any number like 6, 5.555, 660 etc
//   3.STRING : set of characters written inside the double quotes("rohit")
//   4.BOOLEAN : it has two values, true or false.
//   5. SYMBOL : 
//    6. UNDEFINED : you declare any variable which doesn't have any value then it will be called undefined.
//      7.BIGINT : large integer value.

let x = "harry bhai";
let p = 44;
let k = 5.4;
const l = true;
let q = undefined;
let r = null;
console.log(typeof x, typeof p, typeof k, typeof b, typeof q, typeof r)
// OUTPUT : string number number number undefined object


//                            OBJECTS in javascript

//  combination of keys and values pairs is called object.

        //    const item = 
        //    {
        //        name : "led bulb",
        //        price : "159",
               
        //    }

        // here, name & price is Key and "led bulb" "159" is values pair.
        // you can add keys or values like 

                        //  item   ["quantity"] : "100",

                        let t = {
                            "name": "aryan",
                            "job_position": "sde1"
                          };
                          console.log(t);
                          
                          t["job location"] = "bangalore"; // Corrected assignment using square brackets
                          console.log(t);
                          

                        //   create a varible of type string and try to add number to it

                        let s = "aman";
                        let num = 2;
                        console.log(s + num)
                        // output is aman2

                        // use typeof operator to find datatype of string 
                        let g = "ravi";
                        console.log(typeof g)
                        // output is string

                    //   write a javascript program to create a word meaning dictionary of 5 words.

                    let dictionary = 
                    {
                        "a" : "affirmation",
                        "c" : "consistency",
                        "d" : "determinatin",
                        "e" : "efficiency",
                        "h" : "hardwork"
                    }
                    console.log(dictionary)