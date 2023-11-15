if (localStorage.getItem('viewcount')) {
  let count = parseInt(localStorage.getItem('viewcount'));
  count++;
  localStorage.setItem(localStorage.getItem('viewcount'));
  document.getElementById('viewCount').textContent = count;
}
 else {
  localStorage.setItem('viewCount', 1);
  document.getElementById('viewCount').textContent = "1";
  }