# D3.js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>D3Times</title>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
    crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
    crossorigin="anonymous">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/d3Style.css">

</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <h1>D3Times</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12  col-md-9">
        <div id="scatter">
          <!-- We append our chart here. -->
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12  col-md-9">
        <div class="article">
          <h2>Correlations Discovered Between Health Risks and Age, Income</h2>
          <p>In this Data Driven Document (D3), I have explored associations between median Age and percentage of smokers accoss all
            the states in USA. Each marker represents an individual state in The USA. Hover on the markers to start exploring!</p>

          <p>This document was created using D3, the JavaScript library for visualizing data with HTML, SVG, and CSS.</p>

          <p>This dataset was collected from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer-->
  <div id="footer">
    <p>The Coding Boot Camp&copy;2016</p>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3-tip/0.9.1/d3-tip.js"></script>
  <script type="text/javascript" src="assets/js/app.js"></script>

</body>

</html>
