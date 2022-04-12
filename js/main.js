var services = new Services();

function getListProduct() {
  document.getElementById("loading").style.display = "block";

  services
  .fetchData()
  //show Loading
    .then(function (result) {
      renderHTML(result.data);
      //Off loading
      document.getElementById("loading").style.display = "none";
    })
    .catch(function (error) {
      console.log(error);
    });
  //   renderHTML(services.arr);
}
getListProduct();

function renderHTML(arr) {
  var content = "";

  for (var i = 0; i < arr.length; i++) {
    content += `
        <div class="col-12 col-md-6 col-lg-4">
        <div class="card cardPhone">
          <img src="./img/${arr[i].hinhAnh}" class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h3 class="cardPhone__title">${arr[i].tenSP}</h3>
                <p class="cardPhone__text">${arr[i].moTa}</p>
              </div>
              <div>
                <h3 class="cardPhone__title">${arr[i].gia}</h3>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="cardPhone__rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div>
                <button class="btnPhone-shadow">
                  <i class="fa fa-shopping-cart"></i> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
  }
  document.getElementById("productList").innerHTML = content;
}
