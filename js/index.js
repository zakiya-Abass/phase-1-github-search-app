document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("github-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = document.getElementById("search");
    //console.log(userInput.value);

    fetch(`https://api.github.com/search/users?q=${userInput.value}`, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const ul = document.getElementById("user-list");
        const li = document.createElement("li");
        li.textContent = data.items[0].login;
        ul.appendChild(li);

        const img = document.createElement("img");
        const li2 = document.createElement("li");
        img.setAttribute("src", `${data.items[0].avatar_url}`);
        img.style.height = "120px";
        li2.appendChild(img);
        ul.appendChild(li2);

        const li3 = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.setAttribute("href", `${data.items[0].repos_url}`);
        anchor.textContent = "profile link";
        li3.appendChild(anchor);
        ul.appendChild(li3);

        // console.log(data.items[0]);
        // console.log(data.items[0].login);
        // console.log(data.items[0].avatar_url);
        // console.log(data.items[0].repos_url);
      });
  });
});
