// 1. multiplication table for number
function multiTable(number) {
  // good luck
  let sum=""
  for (let i=1;i<10;i++){
    sum += `${i} * ${number} = ${i*number}\n`
    
  }
  sum += `10 * ${number} = ${10*number}`
  return sum
}

//2. get planet name by id
function getPlanetName(id){
    var name='';
    switch(id){
      case 1:
        name = 'Mercury'
        break
      case 2:
        name = 'Venus'
        break
      case 3:
        name = 'Earth'
        break
      case 4:
        name = 'Mars'
        break
      case 5:
        name = 'Jupiter'
        break
      case 6:
        name = 'Saturn'
        break
      case 7:
        name = 'Uranus'
        break
      case 8:
        name = 'Neptune'
    }
    
    return name;
  }

  // 3. abbreviate a two word name
  function abbrevName(name){

    // code away
    let array=name.split(' ')
    return `${array[0][0].toUpperCase()}.${array[1][0].toUpperCase()}`

}

// 4. even or odd
function even_or_odd(number) {
    // ...
    if(number%2===0) return "Even"
    else return "Odd"
  }