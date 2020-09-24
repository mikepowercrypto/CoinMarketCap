let BASE_URL = "https://api.coingecko.com/api/v3";

let COINS_LIST_ENDPOINT = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h%2C%207d%2C%2030d%2C%201y";

let coinsId = BASE_URL + COINS_LIST_ENDPOINT;







fetch(coinsId)
      .then(res => {

        res.json().then(data => {
           
          for (var i = 0; i < data.length; i++) {
             
            
            $("#mytable").append("<tr>" +
              "<td id='rank'>" + data[i].market_cap_rank + "</td>" +

              "<td id='img'>"  + "<img src= '  " + data[i].image + "?localization=en</td>" +

              " <td id= ' name'> " + data[i].name + "</td>" +
            
              "<td id='marketCap'>" + "$"+ data[i].market_cap + "</td>" +

              "<td id='price'>" + "$"+ data[i].current_price + "</td>" +

              "<td id='volume'>" + "$"+ data[i].total_volume + "</td>" +

              "<td id='circulatingSupply'>" + data[i].circulating_supply + "</td>" +

              "<td id='priceChange'>" + data[i].price_change_24h + "%" + "</td>" +

              "</tr>")

             if(data[i].price_change_24h > 0) {$('#priceChange').css("color", "green");}

             if(data[i].price_change_24h < 0) {$('#priceChange').css("color", "red");}

              
             console.log(data[i])

          } 
            
        })

      })

   

        

          
     
     


     