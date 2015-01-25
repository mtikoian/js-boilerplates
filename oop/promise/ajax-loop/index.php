<!DOCTYPE html>
<html>

   
<script src="jquery-min.js"></script> 
<script>
$( document ).ready(function() {
    
    var p = new Promise(function(resolve, reject) { resolve(3); });
    Promise.all([true, p]).then(function(values) {
      console.log(values); // [true, 3]
    });
    
    
});

function getMovie(title) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
 
    request.open('GET', 'http://api.icndb.com/jokes/random?firstName=' + title);
    request.onload = function() {
      if (request.status == 200) {
        resolve(request.response); // we get the data here, so resolve the Promise
      } else {
        reject(Error(request.statusText)); // if status is not 200 OK, reject.
      }
    };
 
    request.onerror = function() {
      reject(Error("Error fetching data.")); // error occurred, so reject the Promise
    };
 
    request.send(); // send the request
  });
}

function fetchMovies() {
  var titles = document.getElementById('titles').value.split(',');
  var promises = [];
 
  for (var i in titles) {
    promises.push(getMovie(titles[i])); // push the Promises to our array
  }
  
  console.log(promises);
 
  Promise.all(promises).then(function(dataArr) {
    dataArr.forEach(function(data) {
      //var img = JSON.parse(data)[0].poster.imdb;
 
      document.getElementById('movies').innerHTML = document.getElementById('movies').innerHTML +  '<p>' + data + '</p>';
    });
  }).catch(function(err) {
    console.log(err);
  });
}
</script>

</head>
<body>
    <input type="text" name="titles" id="titles" placeholder="comma separated movie titles" size="30"/>
    <input type="button" value="fetch" onclick="fetchMovies()" />
    <input type="button" value="clear" onclick="clearMovies()" />
    <div id="movies">
    </div>
</body>
</html>