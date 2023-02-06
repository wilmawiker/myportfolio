import { IRepo } from "./models/IRepo";
import { getData } from "./services/gitService";

let mybutton: HTMLButtonElement = document.getElementById("btn-back-to-top") as HTMLButtonElement;

async function init()  {
    let repos: IRepo[] = await getData();
    console.log(repos)
}

const createHtmlForRepos = (repos:IRepo[]) => {

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

init();