// Logic for table data
const showPass = () => {
    let tb = document.querySelector("table");
    let data = localStorage.getItem("passwords");

    if (data == null) {
        tb.innerHTML = "No data to show"
    } else {
        tb.innerHTML = `<tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
                </tr>`
        let arr = JSON.parse(data);
        let str = "";
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            str += `<tr>
        <td>${element.website}</td>
        <td>${element.username}</td>
        <td>${element.password}</td>
        <td>${"<button class='btnd' type='delete'>Delete</button>"}</td>
                </tr >`;
        }
        tb.innerHTML = tb.innerHTML + str;
    }
};
showPass();

// Delete data
const deletePassword = (website) => {
    da
}

// Submission
document.querySelector(".btns").addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Clicked......");
    console.log(website.value, username.value, password.value);

    let passwords = localStorage.getItem("passwords")
    console.log(passwords)

    if (passwords == null) {
        let json = [];
        json.push({ website: website.value, username: username.value, password: password.value });
        alert("Saved");
        localStorage.setItem("passwords", JSON.stringify(json));
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({ website: website.value, username: username.value, password: password.value });
        alert("Saved");
        localStorage.setItem("passwords", JSON.stringify(json));
    }
    showPass();
});