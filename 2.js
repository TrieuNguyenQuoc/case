
class product {
    constructor(img, status ,price ) {
        this.img = img;
        this.status= status;
        this.price= price;
    }
    getImg() {
        return this.img;
    }
    setImg(value) {
        this.img = value;
    }
    getStatus() {
        return this.status;
    }
    setStatus(value) {
        this.status = value;
    }
    getprice() {
        return this.price;
    }
    setPrice(value) {
        this.price = value ;
    }
}
var product0 = new product("https://tse4.mm.bing.net/th?id=OIP.GRXW1KmAOTspj2m75IL5OQHaEL&pid=Api&P=0","THUÊ","2tr/đêm" ) ;
var product1 = new product("https://tse2.mm.bing.net/th?id=OIP.YNOh01g7JBiAOtU4wTy3WgHaE7&pid=Api&P=0","THUÊ","2tr/đêm") ;
var product2 = new product("https://tse2.mm.bing.net/th?id=OIP.yMF2lmcP3KHctQHv0WysuwAAAA&pid=Api&P=0","BÁN","4 tỷ") ;
var product3 = new product("","THUÊ", "2tr/đêm");
var product5 = new product("","THUÊ","") ;
var product6 = new product("", "BÁN", "") ;
var product7 = new product("", "THUÊ","") ;
var product8 = new product("", "THUÊ","") ;
let productArr1 = [product0, product1,product2,product3,product6,product5,product7,product8];
var productArr0 = [product0, product1,product2];
var productArr2 = [product3, product6,product5];
var productArr4 = [product2,product7];
function display(arr) {
    var user = localStorage.getItem("user");
    if ( user !== null) {
        document.getElementById("login").innerHTML = "<h4>" + user + "</h4>"
        document.getElementById("exitt").style.display = "block";
        document.getElementById("addproduct").style.display = "block";
        document.getElementById("login").style.pointerEvents="none";
    }
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (user !== null) {
            result +=
                "<ul class='listProduct'>" +

                "<li><img class='img-main' src='" + arr[i].getImg() + "' alt=''></li>" +

                "<li class='status'> <button class='btn-tt'> " + arr[i].getStatus() + "</button></li>" +

                "<li class='price' >" + arr[i].getprice() + "</li>" +

                "<li class='edit'> <button class='edittag' onclick='edit("+i +")'>" +"Edit" +" </button></li> " +

                "<li class='delet'> <button class='deletag' onclick='deleteProd("+i +")'>" +"Delete" +" </button>  </li>" +

                "</ul>"
        } else {
            result +=
                "<ul class='listProduct'>" +

                "<li><img class='img-main' src='" + arr[i].getImg() + "' alt=''></li>" +

                "<li class='status'> <button class='btn-tt'> " + arr[i].getStatus() + "</button></li>" +

                "<li class='price' > <span class='text-price'>" + arr[i].getprice() + "</span></li>" +

                "</ul>"
        }

    }
    document.getElementById("productMain").innerHTML = result;
}
function home() {
    display(productArr0)
}
function luachon() {
    display(productArr4)

}
function ne() {
    display(productArr2)

}
function today() {
    display(productArr4)

}
function allop() {
    display(productArr1)
}

let user = localStorage.getItem("user");
if (user === null) {
}   else {
    function edit(index) {
        let img = prompt("Input url");
        let inputstatus = prompt("status Rent Or Buy: ")
        let status = inputstatus.toUpperCase()
        let inputprice = prompt("Input price:");
        let price = inputprice.toUpperCase()
        productArr1[index] = new product(img, status, price);
        display(productArr1);
    }
    function uploadproduct() {
        let img = document.getElementById("anhurl").value;
        let input = document.getElementById("payorrent").value;
        let status = input.toUpperCase()
        let inputPrice = document.getElementById("gia").value;
        let price = inputPrice.toUpperCase()
        let productNew = new product(img, status, price);
        document.getElementById("taomoi").style.display="none";
        productArr1.push(productNew);
        display(productArr1);
        document.getElementById("anhurl").setAttribute("value","");

    }
    function deleteProd(index) {
        productArr1.splice(index, 1);
        display(productArr1)
    }
}function add() {
    document.getElementById("anhurl").setAttribute("value","");
    document.getElementById("taomoi").style.display="block";
    display(productArr1)
 }