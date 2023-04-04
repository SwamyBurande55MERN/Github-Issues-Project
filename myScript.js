const perPage = 5;
let currentPage = 1;

function fetchIssues() {
  // using `` ==> to manipulate url dynamically
  const url = `https://api.github.com/repositories/1296269/issues?page=${currentPage}&per_page=${perPage}`;
  fetch(url)                               // fetch needs 2 .then()
    .then((response) => response.json())   // 1st .then()  ==>  to resolve promise to access data.
    .then((data) => {                      // 2nd .then()

      const issues = data.map((issue) => `<li>${issue.title}</li>`).join("");   // issue's Title
      document.getElementById("issues").innerHTML = issues; 
      document.getElementById(
        "page-number"
      ).textContent = `Page number ${currentPage}`; 
    });
}

document.getElementById("load_next").addEventListener("click", () => { // addEventListner ==> click ==> currentpage += 1
  currentPage++;
  fetchIssues();     // every time the page changes, fire the function ==> "fetchIssues"
});

document.getElementById("load_prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchIssues();     // every time the page changes, fire the function ==> "fetchIssues"
}
});

fetchIssues();  // for initial loading
