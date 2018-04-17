const prices = document.querySelector('.two')
const td = document.querySelector('one')
const button = document.querySelector('.button')

class Bitcoin {
    constructor() {
        this.getPrices()
        this.td = td
        this.prices = prices
    }
    setPrices(){
        for(td = 0; td < getPrices.length; i++){
           

        }
console.log(this.prices)
    }

    getPrices() {
        $.ajax({
            url: 'https://bitpay.com/api/rates',
            dataType: 'json',
            success: (data) => {
                console.log(data)
                this.prices = data
                this.name = data
                this.coin = data
            },
            error(error) {
                console.log(error)
            }
        })
    }
    
}


const bitcoin = new Bitcoin()



function name() {
    document.getElementById("one1").innerHTML = (bitcoin.prices[0].name);
    document.getElementById("two1").innerHTML = (bitcoin.name[0].rate);
    document.getElementById("three1").innerHTML = (bitcoin.coin[0].code);
    document.getElementById("one2").innerHTML = (bitcoin.prices[1].name);
    document.getElementById("two2").innerHTML = (bitcoin.name[1].rate);
    document.getElementById("three2").innerHTML = (bitcoin.coin[1].code);
    document.getElementById("one3").innerHTML = (bitcoin.prices[2].name);
    document.getElementById("two3").innerHTML = (bitcoin.name[2].rate);
    document.getElementById("three3").innerHTML = (bitcoin.coin[2].code);
    document.getElementById("one4").innerHTML = (bitcoin.prices[3].name);
    document.getElementById("two4").innerHTML = (bitcoin.name[3].rate);
    document.getElementById("three4").innerHTML = (bitcoin.coin[3].code);
    document.getElementById("one5").innerHTML = (bitcoin.prices[4].name);
    document.getElementById("two5").innerHTML = (bitcoin.name[4].rate);
    document.getElementById("three5").innerHTML = (bitcoin.coin[4].code);
    document.getElementById("one6").innerHTML = (bitcoin.prices[5].name);
    document.getElementById("two6").innerHTML = (bitcoin.name[5].rate);
    document.getElementById("three6").innerHTML = (bitcoin.coin[5].code);
    document.getElementById("one7").innerHTML = (bitcoin.prices[6].name);
    document.getElementById("two7").innerHTML = (bitcoin.name[6].rate);
    document.getElementById("three7").innerHTML = (bitcoin.coin[6].code);
}
document.getElementById("button").onclick = function () {
         name();
     }
     
     function newPrices() {
        var person = prompt("Enter new prices:", "BTC");

     }