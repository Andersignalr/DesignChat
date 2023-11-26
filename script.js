
scrollToEnd();

function scrollToEnd() {
  var container = document.querySelector(".content-area");

  container.scrollTop = container.scrollHeight - container.clientHeight;
}
