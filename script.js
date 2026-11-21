let usersBody = document.querySelector("#usersBody")
let getDataBtn = document.querySelector("#get_data")
let usersCount = document.querySelector("#users_count")

getDataBtn.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            usersBody.innerHTML = ""
            let usersCountSumm = 0
            data.forEach(user => {
                let usersBodyItem = document.createElement("li")
                usersBodyItem.innerHTML = `<span>Full name:</span> ${user.name}
                    <span>Username:</span> ${user.username}
                    <span>Email:</span> ${user.email}
                    <span>Phone number:</span> ${user.phone}
                `
                usersCountSumm++
                usersCount.textContent = usersCountSumm
                usersBody.appendChild(usersBodyItem)
                console.log(user)
            })
        })
})


