fetch('https://raw.githubusercontent.com/learn-co-curriculum/dsa-whiteboarding-challenges/main/completionists.json')
.then(res => res.json())
.then(obj => {
  let main = document.querySelector('main')
  for(let n = 0; n < obj.length; n++) {
    let li = document.createElement('li')
    li.textContent = obj[n]
    main.appendChild(li)
  }
console.log(obj)
})
