fetch('https://raw.githubusercontent.com/learn-co-curriculum/dsa-whiteboarding-challenges/main/completionists.json')
.then(res => res.json()
.then(obj => {
  let main = document.querySelector('main')
console.log(obj)
})
