/*Filtering*/
let arr = [1,2,3,4,3,2]
let remove = arr.filter((a,b)=>{
   return arr.indexOf(a)===b
})
console.log(remove)

/*Using Spread Operator*/
console.log(...new Set(arr))

/*Using Foreach*/
let uniq=[]
arr.forEach((a,b)=>{
  if(!uniq.includes(a)){
  uniq.push(a)
  }
})
console.log(uniq)

