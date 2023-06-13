// 1. alphabet war
function alphabetWar(fight)
{
  let leftsum = 0
  let rightsum = 0
  for (let i=0;i<fight.length;i++){
    if (fight[i]=='w') leftsum += 4
    else if (fight[i]=='p') leftsum += 3
    else if (fight[i]=='b') leftsum += 2
    else if (fight[i]=='s') leftsum += 1
    else if (fight[i]=='m') rightsum += 4
    else if (fight[i]=='q') rightsum += 3
    else if (fight[i]=='d') rightsum += 2
    else if (fight[i]=='z') rightsum += 1
  }
  if (leftsum > rightsum) return "Left side wins!"
  else if (leftsum < rightsum) return "Right side wins!"
   else return "Let's fight again!";
}

// 2. vowel count
function getCount(str) {
    var vowelsCount = 0;
    let vowels=`aeiouAEIOU`
    // enter your majic here
    for(let i=0;i<str.length;i++){
      if(vowels.indexOf(str[i])!==-1) vowelsCount++
      }
    return vowelsCount;
  }

  // 3. spacify
  function spacify(str) {
    // return 
    return str.split('').join(' ')
  }

  // 4. odder than the rest
  function oddOne(arr) {
    // Code here
    for(let i=0;i<arr.length;i++){
      if(Math.abs(arr[i])%2==1) return i
      }
      return -1
  }

  // 5. santa's naughty list
  function findChildren(santasList, children) {
    // Your code
    let list=[]
    for(let i=0;i<santasList.length;i++){
      for(let j=0;j<children.length;j++){
        if((santasList[i]===children[j])&&list.indexOf(santasList[i])==-1) list.push(santasList[i])
        }
        }
        return list.sort()
  }

  // 6. factorial
  function factorial(n){
    //your code here
    let fact=1
    for(let i=1;i<=n;i++){
      fact=fact*i
      }
      return fact
  }

  // 7. complementary DNA
  function DNAStrand(dna){
    //your code here
    let string=''
    for(let i=0;i<dna.length;i++){
      if (dna[i]==='A') {
      string+='T'
      }
      if (dna[i]==='T') {
      string+='A'
      }
      if (dna[i]==='C') {
      string+='G'
      }
      if (dna[i]==='G'){
      string+='C'
      }
      }
      return string
  }

  // 8. count the divisors of a number
  function getDivisorsCnt(n){
    // todo
    let count=0
    for(let i=0;i<=n;i++){
      if(n%i===0) count++
      }
      return count
}

// 9. tetris series #1 - scoring system
function getScore(arr) {
    // your code here
    
    let l = 0
    let score = 0
    for (let x of arr) {
      score += [0, 40, 100, 300, 1200][x] * (l / 10 + 1 | 0)
      l += x
    }
    return score
  }

  // 10. help Bob count letters and digits
  function countLettersAndDigits(input) {
    let string=`1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`
    let count=0
    for(let i=0;i<input.length;i++){
      if(string.indexOf(input[i])!==-1) count++
      }
      return count
  }

  // 11. odd or even?
  function oddOrEven(array) {
    //enter code here
    let sum=0
    for(let i=0;i<array.length;i++){
      sum+=array[i]
      }
      if(sum%2===0) return `even`
      else return `odd`
 }

 // 12. selective fear of numbers
 var AmIAfraid = function(day, num){
    //Help me...
    if(day=='Monday') return num==12 
    if(day=='Tuesday') return num>95
    if(day=='Wednesday') return num==34
    if(day=='Thursday') return num==0
    if(day=='Friday') return num%2==0
    if(day=='Saturday') return num==56
    if(day=='Sunday') return num==666||num==-666
  }

  // 13. testing 1-2-3
  var number=function(array){
    //your awesome code here
    let newArray=[]
    for(let i=0;i<array.length;i++){
      newArray.push(`${i+1}: ${array[i]}`)
      }
      return newArray
  }

  // 14. form the minimum
  function minValue(values){
    //your code here
    let thing=values.sort()
    let string=''
    for(let i=0;i<thing.length;i++){
      if(thing[i]!==thing[i-1]) string+=`${thing[i]}`
      }
      return parseInt(string)
  }

  // 15. no oddities here
  function noOdds( values ){
    // Return all non-odd values
    let newArray=[]
    for(let i=0;i<values.length;i++){
      if(values[i]%2===0) newArray.push(values[i])
      }
      return newArray
  }

  // 16. esreveR
  reverse = function(array) {
    // TODO: program me!
    let newArray=[]
    for(let i=array.length-1;i>=0;i--){
      newArray.push(array[i])
      }
      return newArray
  }

  // 17. basic calculator
  function calculate(num1, operation, num2) {
    //TODO: make a basic calculator. 
    if(operation==='+') return num1+num2
    if(operation==='-') return num1-num2
    if(operation==='*') return num1*num2
    if(operation==='/'){
      if(num2===0) return null
      else return num1/num2
      }
    else return null
   }

   // 18. not above the one
   function binaryCleaner(arr) {
    // 
    let minArray=[]
    let maxArray=[]
    for(let i=0;i<arr.length;i++){
      if(arr[i]<2) minArray.push(arr[i])
      else maxArray.push(i)
      }
      return [minArray,maxArray]
  }

  // 19. sum even numbers
  function sumEvenNumbers(input) {
    // [...]
    sum=0
    for(let i=0;i<input.length;i++){
      if(input[i]%2===0) sum+=input[i]
      }
      return sum
  }

  // 20. find min and max
  function getMinMax(arr){
    //..
    let min=20
    let max=0
    for(let i=0;i<arr.length;i++){
      if(min>arr[i]) min=arr[i]
      }
      for(let i=0;i<arr.length;i++){
        if(max<arr[i]) max=arr[i]
        }
        return [min,max]
  };

  // 21. halving sum
  function halvingSum(n) {
    var sum = 0;
    while(n > 0) {
      sum += n;
      n = Math.floor(n / 2);
    }
    return sum;
  }

  // 22. consecutive digits to form sum
  let consecutiveDucks = num => !Number.isInteger( Math.log2(num));

  // 23. list filtering
  function filter_list(l) {
    // Return a new array with the strings filtered out
    let newArray=[]
    for(let i=0;i<l.length;i++){
      if(typeof l[i]=='number') newArray.push(l[i])
    }
    return newArray
  }

  // 24. responsible drinking
  function hydrate(s) {
    // your code here
    
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
      if (parseInt(s[i]) > 0) {
        answer += +s[i];
      }
    }
    return answer > 1 ? `${answer} glasses of water`: '1 glass of water'
  }

  // 25. get the middle character
  function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// 26. by 3, or not by 3?
function divisibleByThree(str){
    return [...str].reduce((s,d)=>+d+s,0)%3===0;
  }

  // 27. you're a square
  var isSquare = function(n){
    return Math.sqrt(n)%1===0
  }

// 28. what's my golf score?
function golfScoreCalculator(parList, scoreList){
    sum=0
    for(let i=0;i<18;i++){
      sum+=(Number(scoreList[i])-Number(parList[i]))
    }
    return sum
    }

    // 29. growth of a population
    function nbYear(p0=1000, percent=2, aug=50, p=1200) {
        // your code
        let years=0
        while(p0<p){
        p0=p0+p0*(percent/100)+aug
        years++
        }
        return years
    }

    