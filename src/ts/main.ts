import { repos} from "../data/repos/repos";

let mybutton: HTMLButtonElement = document.getElementById("btn-back-to-top") as HTMLButtonElement;

const createHtmlForRepos = () => {
  const workContent = document.getElementById("my-works");
  console.log(workContent);
  console.log(repos);
  repos.forEach((repo) => {
    let oneWork = document.createElement("div");
    oneWork.classList.add("oneWork");

    let nameOfproject = document.createElement("h5");
    nameOfproject.innerText = repo.name;

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");
    
    let webImg = document.createElement("img");
    webImg.classList.add("webworkimg");
    webImg.src = repo.webImg_url;

    let mobileImg = document.createElement("img");
    mobileImg.classList.add("mobileworkimg");
    mobileImg.src = repo.mobileImg_url;

    let description = document.createElement("p");
    description.classList.add("workDescription");
    description.innerHTML = repo.description;

    let workLink = document.createElement("a");
    workLink.classList.add("workLink");
    workLink.href = repo.git_url;
    workLink.innerText = "Link to GitHub repository";
    workLink.target = "blank";

    workContent?.appendChild(oneWork);

    oneWork.appendChild(nameOfproject);
    oneWork.appendChild(imgContainer)
    imgContainer.appendChild(webImg);
    imgContainer.appendChild(mobileImg);
    oneWork.appendChild(description);
    oneWork.appendChild(workLink);
  })
}


window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

createHtmlForRepos();