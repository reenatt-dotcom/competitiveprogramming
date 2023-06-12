// 1. two sum (#1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr=[]
    for (let i = 0; i < nums.length;i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i]+nums[j]===target && i!==j) {
                console.log(i)
                console.log(j)
                arr.push(i)
                arr.push(j)
            }
        }
    }
    let arr2=arr.slice(0, 2)
    return arr2
};

// 2. palindrome number (#9)
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   
    let x2=x.toString()
    // if (x2[0]==="-") x2=x2.substring(1)
    console.log(x2)
    console.log(x2.split("").reverse().join(""))
    if (x2.split("").join("")===x2.split("").reverse().join("")) return true
    else return false
};

// 3. roman to integer (#13)
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum=0
    if (s.includes("IV")){
        sum+=4
        s=s.replace("IV", "")
    }
    if (s.includes("IX")) {
        sum+=9
        s=s.replace("IX", "")
    }
    if (s.includes("XL")){
        sum+=40
        s=s.replace("XL", "")
    }
    if (s.includes("XC")) {
        sum+=90
        s=s.replace("XC", "")
    }
    if (s.includes("CD")) {
        sum+=400
        s=s.replace("CD", "")
    }
    if (s.includes("CM")){
        sum+=900
        s=s.replace("CM", "")
    }
    console.log(s)
    for (let i = 0; i < s.length; i++) {
       
        if (s[i]==="I") sum+=1
        if (s[i]==="V") sum+=5
        if (s[i]==="X") sum+=10
        if (s[i]==="L") sum+=50
        if (s[i]==="C") sum+=100
        if (s[i]==="D") sum+=500
        if (s[i]==="M") sum+=1000
    }
    return sum
};

// 4. reverse string (#344)
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse()
};

// 5. valid perfect square (#367)
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for (let i=0;i<=num;i++){
        
        if (i*i===num) return true
        
    }
    return false
};

// 6. fizz buzz (#412)
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr=[]
    for (let i=1;i<=n;i++){
        console.log(i%3===0 && i%5===0)
        if (i%3===0&&i%5===0) arr.push("FizzBuzz")
        else if (i%3===0) arr.push("Fizz")
        else if (i%5===0) arr.push("Buzz")
        else arr.push(i.toString())
    }
    return arr
};

// 7. max consecutive ones (#485)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    nums=nums.join("").split("0")
    let max=nums[0].length
    for (let i=1;i<nums.length;i++){
        if (nums[i].length>max) max=nums[i].length
    }
    return max
};

// 8. perfect number (#507)
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let divisors=[]
    let sum=0
    for (let i=1;i<num;i++){
        if (num%i===0) divisors.push(i)
    }
    for (let i=0;i<divisors.length;i++){
        sum+=divisors[i]
    }
    console.log(sum)
    if (sum===num) return true
    else return false
};

// 9. to lower case (#709)
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.toLowerCase()
};

// 10. largest number at least twice of others (#747)
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max=0
    for (let i=0;i<nums.length;i++){
        if (nums[i]>max) max=nums[i]
    }
    for (let i=0;i<nums.length;i++){
        if (nums[i]*2>max&&nums[i]!==max) return -1
        
    }
    return nums.indexOf(max)
};

// 11. jewels and stones (#771)
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count=0
    for (let i=0;i<stones.length;i++){
        if (jewels.includes(stones[i])) count++
    }
    return count
};

// 12. sort array by parity (#905)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arr=[]
    for (let i=0;i<nums.length;i++){
        if (nums[i]%2===0){
            arr.push(nums[i])
        }
    }
    for (let j=0;j<nums.length;j++){
        if (nums[j]%2===1){
            arr.push(nums[j])
        }
    }
    return arr
};

// 13. defanging an IP address (#1108)
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split(".").join("[.]")
};

// 14. subtract the product and sum of digits of an integer (#1281)
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum=0
    let product=1
    n2=n.toString()
    for (let i=0;i<n2.length;i++){
        sum+=parseInt(n2[i])
        product*=parseInt(n2[i])
    }
    return product-sum
};

// 15. find numbers with even number of digits (#1295)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count=0
    for (let i=0;i<nums.length;i++){
        if (nums[i].toString().length%2===0) count++
    }
    return count
};

// 16. find N unique integers sum up to zero (#1304)
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr=[]
    for (let i=-n+1;i<n;i+=2){
        arr.push(i)
    }
    return arr
};

// 17. maximum 69 number (#1323)
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    num=num.toString()
    return num.replace("6", "9")
};

// 18. number of steps to reduce a number to zero (#1342)
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps=0
    while (num>0){
        if (num%2===0){
        num=num/2
    } else {
        num=num-1
    }
        steps++
    }
    return steps
};

// 19. how many numbers are smaller than the current number (#1365)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let arr=[]
    for (let i=0;i<nums.length;i++){
        let count=0
        for (let j=0;j<nums.length;j++){
            if (nums[i]>nums[j]) count++
        }
        arr.push(count)
    }
    return arr
};

// 20. generate a string with characters that have odd counts (#1374)
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let str=""
    if (n%2===0){
        for (let i=0;i<n-1;i++){
            str+="a"
        }
        str+="b"
    } else {
        for (let i=0;i<n;i++){
            str+="a"
        }
    }
    return str
};

// 21. kids with the greatest number of candies (#1431)
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let greatest=0
    let arr=[]
    for (let i=0; i<candies.length;i++){
        if (candies[i]>greatest) greatest=candies[i]
    }
    console.log(greatest)
    for (let j=0;j<candies.length;j++){
        console.log(candies[j]+extraCandies)
        if (candies[j]+extraCandies>=greatest) arr.push(true)
        else arr.push(false)
    }
    return arr
};

// 22. shuffle the array (#1470)
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr=[]
    nums1=nums.slice(0, nums.length/2)
    let nums2=nums.slice(nums.length/2)
    console.log(nums1)
    console.log(nums2)
    for (let i=0; i<nums.length/2;i++){
        arr.push(nums1[i])
        arr.push(nums2[i])
    }
    return arr
};

// 23. running sum of 1d array (#1480)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr=[]
    let sum=0
    for (let i=0; i<nums.length;i++){
        sum+=nums[i]
        arr.push(sum)
    }
    return arr
};

// 24. number of good pairs (#1512)
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let sum=0
    for (let i=0; i<nums.length;i++){
        for (let j=0;j<nums.length;j++){
            if (nums[i]===nums[j] && i<j){
                sum+=1
            }
        }
    }
    return sum
};

// 25. count odd numbers in an interval range (#1523)
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count=0
    for (let i=low;i<=high;i++){
        if (i%2===1) count++
    }
    return count
};

// 26. three consecutive odds (#1550)
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for (let i=0;i<arr.length;i++){
        if (arr[i]%2===1&&arr[i+1]%2===1&&arr[i+2]%2===1) return true
    }
    return false
};

// 27. check if two string arrays are equivalent (#1662)
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    if (word1.join("")===word2.join("")) return true
    else return false
};

// 28. goal parser interpretation (#1678)
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    return command.split("()").join("o").split("(").join("").split(")").join("")
};

// 29. determine if string halves are alike (#1704)
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels1=0
    let vowels2=0
    let half1=s.slice(0, s.length/2)
    let half2=s.slice(s.length/2)
    for (let i=0;i<half1.length;i++){
        if ("aeiouAEIOU".includes(half1[i])) vowels1++
    }
    for (let i=0;i<half2.length;i++){
        if ("aeiouAEIOU".includes(half2[i])) vowels2++
    }
    return (vowels1===vowels2)
};

// 30. determine color of a chessboard square (#1812)
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    if (coordinates[0]==="a") {
        if (coordinates[1]%2===0) {
            return true
        }
        return false
    }
    if (coordinates[0]==="b") {
        if (coordinates[1]%2===0) {
            return false
        }
        return true
    }
    if (coordinates[0]==="c") {
        if (coordinates[1]%2===0) {
            return true
        }
        return false
    }
    if (coordinates[0]==="d") {
        if (coordinates[1]%2===0) {
            return false
        }
        return true
    }
    if (coordinates[0]==="e") {
        if (coordinates[1]%2===0) {
            return true
        }
        return false
    }
    if (coordinates[0]==="f") {
        if (coordinates[1]%2===0) {
            return false
        }
        return true
    }
    if (coordinates[0]==="g") {
        if (coordinates[1]%2===0) {
            return true
        }
        return false
    }
    if (coordinates[0]==="h") {
        if (coordinates[1]%2===0) {
            return false
        }
        return true
    }
};

// 31. truncate sentence (#1816)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let str=""
    s=s.split(" ")
    console.log(s)
    for (let i=0;i<k;i++){
        str+=s[i]
        str+=" "
    }
    return str.slice(0, str.length-1)
};

// 32. check if the sentence is pangram (#1832)
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let letters="abcdefghijklmnopqrstuvwxyz"
    for (let i=0;i<letters.length;i++){
        if (!sentence.includes(letters[i])) return false
    }
    return true
};

// 33. largest odd number in string (#1903)
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    
    if (parseInt(num)%2===1) {
        return num
    }else{
        for (let i=num.length;i>=0;i--){
            if (num[i]%2===1){
                return num.slice(0, i+1)
            }
        }
    }
    return ""
};

// 34. concatenation of array (#1929)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return nums.concat(nums)
};

// 35. three divisors (#1952)
/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count=0
    for (let i=1;i<=n;i++){
        if (n%i===0){
            count++
        } 
    }
    console.log(count)
    if (count===3) return true
    else return false
};

// 36. final value of variable after performing operations (#2011)
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X=0
    for (let i=0; i<operations.length;i++){
        if (operations[i]==="++X" || operations[i]==="X++") {
            X+=1
        } else if (operations[i]==="--X" || operations[i]==="X--") {
            X-=1
        }
    }
    return X
};

// 37. maximum number of words found in sentences (#2114)
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=0
    
    for (let i=0; i < sentences.length;i++){
        sentence=sentences[i].split(" ")
        if (sentence.length>max) {
            max=sentence.length
        }
    }
    return max
};

// 38. check if all As appear before all Bs (#2124)
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    for (let i=0;i<s.length;i++){
        if (s[i]==="b") {
            for (let j=i;j<s.length;j++){
                if (s[j]==="a") return false
            }
        }
    }
    return true
};

// 39. capitalize the title (#2129)
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    title=title.toLowerCase().split(" ")
    for (let i=0;i<title.length;i++){
        if (title[i].length>2){
            title[i]=title[i].replace(title[i][0], title[i][0].toUpperCase())
        }
    }
    return title.join(" ")
};

// 40. keep multiplying found values by two (#2154)
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    while (nums.includes(original)){
        original=original*2
    }
    return original
};

// 41. add two integers (#2235)
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function(num1, num2) {
    return num1+num2
};