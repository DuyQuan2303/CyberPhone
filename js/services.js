function Services() {
  this.arr = [];

  this.fetchData = function () {
    /**
     * Axios trả về đối tượng Promise
     * - Pending (chờ)
     * - Resolve ()
     * - Reject
     */
    return axios({
      url: "https://6255692552d8738c6921722e.mockapi.io/api/products",
      method: "GET",
    });
  };
}
