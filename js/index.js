// Delete
const deletePassword = (website) => {
    let data = localStorage.getItem("passwords");
    let arr = JSON.parse(data);
    arrUpdate = arr.filter((e) => {
        return e.website != website
    });
    localStorage.setItem("passwords", JSON.stringify(arrUpdate));
    showPass();
}

// Copy
const copyText = (txt, element) => {
    navigator.clipboard.writeText(txt).then(
        () => {
            // Change the image source for the clicked element
            element.src = "./tick.png";

            setTimeout(() => {
                // Change the image source back to the original after a delay
                element.src = "./copy.png";
            }, 1000);
        },
        () => {
            /* clipboard write failed */
            alert("Clipboard copying failed");
        },
    );
};


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
                <td>${element.website}<img onclick="copyText('${element.website}', this)" src="./copy.png" alt="copy" class="cpy"></td>
                <td>${element.username}<img onclick="copyText('${element.username}', this)" src="./copy.png" alt="copy" class="cpy"></td>
                <td>${element.password}<img onclick="copyText('${element.password}', this)" src="./copy.png" alt="copy" class="cpy"></td>
                <td><button class="btnd" onclick="deletePassword('${element.website}')">Delete</button></td>
                </tr >`;
        }
        tb.innerHTML = tb.innerHTML + str;
    }
    website.value = "";
    username.value = "";
    password.value = "";
};
showPass();

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
        localStorage.setItem("passwords", JSON.stringify(json));
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({ website: website.value, username: username.value, password: password.value });
        localStorage.setItem("passwords", JSON.stringify(json));
    }
    showPass();
});