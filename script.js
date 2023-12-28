let classParent = document.querySelectorAll('.parent');
//let totalPanier = document.getElementsByClassName('panier')
//let totalPanier = document.getElementById('panier')
let totalPanier = document.getElementById('panier').querySelector('span:nth-child(2)');
for (let i = 0; i < classParent.length; i++) {

    let btnPlus = classParent[i].children[2].children[2]
    let btnMoins = classParent[i].children[2].children[0]
    let qantity = classParent[i].children[2].children[1]
    let qty = parseInt(qantity.innerHTML)
    let price = classParent[i].children[1].children[1]
    let prices = parseInt(price.innerHTML) 
    let total = classParent[i].children[4].children[1]
    let totales = parseInt(total.innerHTML)
    let delette = classParent[i].children[3].children[0]
    
    btnPlus.addEventListener("click", function () {
        qty++
        qantity.innerHTML = qty
        totales= qty * prices
        total.innerHTML= totales
        //updateTotal();
        updateTotalPanier()
    });

    btnMoins.addEventListener("click", function () {
        if (qty > 0) {
            qty--
            qantity.innerHTML = qty;
            totales= qty * prices
            total.innerHTML= totales
            updateTotalPanier()
        }
    });
    delette.addEventListener("click", function(){
        // Utilisez parentNode pour accéder à l'élément parent et supprimez-le
        classParent[i].parentNode.removeChild(classParent[i]);
        // Assurez-vous de mettre à jour le total du panier après la suppression
        updateTotalPanier();
    });
}
function updateTotalPanier() {
    let totalPanierValue = 0;
    for (let i = 0; i < classParent.length; i++) {
        let totalElement = classParent[i].querySelector('div:last-child span:nth-child(2)');
        totalPanierValue += parseInt(totalElement.innerHTML);
    }
    totalPanier.innerHTML = totalPanierValue;
}