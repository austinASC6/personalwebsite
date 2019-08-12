function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.visibility === 'none') {
      x.style.visibility = 'block';
    } else {
      x.style.visibility = 'none';
    }
  }