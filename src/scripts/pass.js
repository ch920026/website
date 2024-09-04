import { md5 } from "js-md5";
var authList = { circularity: true };
console.log("hi");
function prepare() {
  const input = document.getElementById("password");
  const passwordSection = document.getElementById("Auth");
  const btn = document.getElementById("password-btn");
  const wrap = document.getElementById("hide");
  const article = document.getElementById("pass");
  const arr = window.location.href.split("/");
  var href;
  if (arr[arr.length - 1] == "") href = arr[arr.length - 2];
  else href = arr[arr.length - 1];

  console.log(href);

  if (authList[href]) {
    article.remove();
    passwordSection.style.display = "Flex";
  } else {
    passwordSection.remove();
  }

  input?.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      // Trigger the same functionality as the button click
      btn?.click(); // Simulate a button click
      // Add your async logic here
    }
  });
  btn?.addEventListener("click", async () => {
    const password = document.getElementById("password").value;
    const hash = md5(password);
    try {
      if (hash == "fc9dd304468e3bedac00efbe78bbef85") {
        passwordSection.remove();
        wrap.append(article);
      } else {
        alert("wrong code");
      }
    } catch (e) {
      alert("Incorrect password");
    }
  });
}

prepare();
