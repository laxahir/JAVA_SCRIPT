const user_arr = [];

class User {
  constructor(name, age, gender, email) {
    this.UserName = name;
    this.Useremail = email;
    this.Userage = age;
    this.Usergender = gender;
  }
}

const form = document.getElementById("userForm");

form.addEventListener("submit", (value) => {
  value.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const email = document.getElementById("email").value;

  user_arr.push(new User(name, age, gender, email));
  console.log(user_arr);

  const dataList = document.getElementById("listData");
  dataList.innerHTML = user_arr
    .map(
      (User) =>
        `<h3>Name : ${User.UserName} , Age : ${User.Userage}, Email : ${User.Useremail} , Gender : ${User.Usergender} </h3>`
    )
    .join("");
});
