//1. Write a JavaScript function that reverse a number. 

function reverse_number(n){
    var digit, result = 0

    while( n ){
        digit = n % 10  
        result = (result * 10) + digit  
        n = n/10|0 
    }  
  
    return result
}

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
 function check_palindrome(str) {
     let j = str.length - 1;
     for(let i = 0; i < j/2; i++) {
         let x = str[i];
         let y = str[j-i];
         if(x!=y) {
             return false;
         }
     }
     return true;
    
 }

 function is_panlindrome(str) {
     let ans = check_palindrome(str);
     if(ans == true) {
         console.log("passed string is palindrome");
     }
     else {
         console.log("passed string is not palindrome");
     }
 }

 let test = "nurse";
 is_panlindrome(test);

//3. Write a JavaScript function that generates all combinations of a string. 

 let possibleCombinations = (str) => {
     let combinations = [];
     for(let i=0; i<str.length;i++) {
         for(let j=i+1; j<str.length+1;j++) {
             combinations.push(str.slice(i,j));
         }
     }
     return combinations;
 }

 console.log(possibleCombinations('Dog'));

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
 function alphabetOrder(str) {
     var arr = str.split("");
     res = arr.sort().join("");
     return res;
 }
 console.log(alphabetOrder("webmaster"));

//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
 function capitalizeFletter(str) {
     var arr = str.split(' ');
     var new_arr = [];
     for(var i=0;i<arr.length;i++) {
         new_arr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
     }
     return new_arr.join(' ');
 }
 console.log(capitalizeFletter('the quick brown fox'));

//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
 function findLongest(str) {
     str = str.split(" ");
     return str.sort((a,b) => b.length - a.length)[0];
 }

 console.log(findLongest("Web Development Tutorial"));

//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
 function countVowel(str) {
     var letter = str.match(/[aeiou]/gi);
     return letter ===null ? 0: letter.length;
 }
 console.log(countVowel('The quick brown fox' ));

//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
 function isPrime(n) {
     if (n ==1) {
         console.log("1 is neither price nor composite number");
     }
     else if (n === 2) {
         return true;
     }
     else {
         for(var i=2; i<n;i++) {
             if(n%i === 0)
             {
                 return false;
             }
         }
         return true;
     }
 }

 console.log(isPrime(47));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
 function detectType(arg) {
     return typeof(arg);
 }

 console.log(typeof(9));
 console.log(typeof(true));
 console.log(typeof([1,2]));
 console.log(typeof(function(){}));

//10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
 function create_matrix(n) {
     for(let i=0;i<n;i++) {
         for(let j=0;j<n;j++) {
             if(i===j) {
                 console.log(' 1 ');
             }

             else {
                 console.log(' 0 ');
             }
            
         }
         console.log('----------');

     }
 }
 create_matrix(4);

//11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second 

//12. Write a JavaScript function which says whether a number is perfect. 
 function isPerfect(n) {
     sum = 1;
     for(let i=2;i*i<=n;i++) {
         if(n%i==0) {
             if(i*i!=n) {
                 sum = sum + i + n/i;
             }
             else
             sum = sum + i;
         }
     }
     if (sum == n && n!= 1)
         return true;
     return false;
 }
 console.log(isPerfect(28));

//13. Write a JavaScript function to compute the factors of a positive integer. 
 function compute_Factors(n) {
     res = [];
     for(let i=1;i<=n;i++) {
         if(n%i == 0) {
             res.push(i);
         }
     }
     return res;
 }

 console.log(compute_Factors(15));
 console.log(compute_Factors(17));

//14. Write a JavaScript function to convert an amount to coins. 
 function amountTocoins(amount, coins) {
     if (amount ===0) {
         return [];
     }
     else {
         if (amount >= coins[0]) {
             left = (amount - coins[0]);
         return [coins[0]].concat( amountTocoins(left, coins) );
         } 
       else
         {
          coins.shift();
          return amountTocoins(amount, coins);
         }
     }
 } 
 console.log(amountTocoins(46, [25, 10, 5, 2,1]));

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
//Accept b and n from the user and display the result. 
 function exp(b,n) {
     var ans = 1;
     for(var i = 1; i<=n; i++) {
         ans = b*ans;
     }
     return ans;
 }
 console.log(exp(2,3));

//16. Write a JavaScript function to extract unique characters from a string. 
 function unique_char(str) {
     var new_str = str;
     var unique = "";
     for(var i = 0; i<str.length;i++) {
         if(unique.indexOf(new_str.charAt(i))==-1) {
             unique += new_str[i];
         }
     }
     return unique;

 }

 console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
function count_Occurrence(string) {
    return string.split("").reduce((a, letter) => {
        a[letter] = (a[letter] || 0) + 1;
        return a;
    }, {});
}
console.log(count_Occurrence("thequickbrownfoxjumpsoverthelazydog"));

// https://stackoverflow.com/questions/49035837/write-a-javascript-function-to-get-the-number-of-occurrences-of-each-letter-in-s

// 18. Write a function for searching JavaScript arrays with a binary search. 

 function binarySearch(arr,val) {
     let start = 0;
     let end = arr.length - 1;
     while(start<=end) {
         let mid = Math.floor((start+end)/2);

         if(arr[mid] === val) {
             return mid;
         }

         if(val<arr[mid]) {
             end = mid - 1;
         }
         else {
             start = mid + 1;
         }
     }
     return -1;
 }

 console.log(binarySearch([2,3,1,5,4,6,8], 8));

//19. Write a JavaScript function that returns array elements larger than a number.
 function findLarger(arr, elem) {
     return arr.filter((item) => {
       return item > elem
     })
   }
  
console.log(findLarger([10, 67, 16, 12, 24], 12))

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(length) {
    for (var s=''; s.length < length; s += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.charAt(Math.random()*62|0));
    return s;
 }

console.log(makeid(20));

function subset(arr) {
    let sub = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sub.push([arr[j], arr[i]]);
        }
    }
    return sub;
}

console.log(subset([1, 2, 3]));


    



//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
 function letterCounter(s,letter){
     var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
     return result[letter]
 }

 console.log(letterCounter( 'microsoft.com', 'o'));

//23. Write a JavaScript function to find the first not repeated character.
 function firstNonRepeatedCharacter(string) {
     for (let i = 0; i < string.length; i++) {
         let c = string.charAt(i);
         if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
             return c;
         }
     }
     return null;
 }
console.log(firstNonRepeatedCharacter('abacddbec'));

//24. Write a JavaScript function to apply Bubble Sort algorithm.
function BubbleSort(arr) {
    let n = arr.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j + 1] > arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
    }
    return arr
 }

console.log(BubbleSort( [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(arr) {
    let max = arr[0].length;

    arr.map(function(el) {
        max = Math.max(max, el.length);
        return max;
    });

    return arr.filter(el => max === el.length)[0];   
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

//26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function sort(names){
    string="";
    ss="";
    newstring=names.split("");

    for(j=0;j<newstring.length;j++) {
        for(i=j;i<newstring.length;i++) {
            if(string.includes(newstring[i])) 
                break;
            else
            string+=newstring[i];
        }
        if(ss.length<string.length)
        ss=string;
        string="";
    }
    return ss;
}
console.log(sort("google.com"));

//27. Write a JavaScript function that returns the longest palindrome in a given string.
 function isPalindorme(str) {
     let arr =str.split('');
     let res=true;
     len = Math.floor(arr.length/2),len2 = arr.length-1;
     for (var i = 0; i <= len; i++) {
         if (arr[i] !== arr[len2]) {
             res=false;
             break;
         }
         len2--;
     }
         return res;
     }
 console.log(isPalindorme('1234321'))

//28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

 function passfunc(value){
     return "Hi "+value;
 }

 function func(a, foo){
     console.log(foo(a));
 }

test
 func('Ben!',passfunc);

//29. Write a JavaScript function to get the function name.

function getName(){
     console.log( arguments.callee.name );
}

test 
getName()
