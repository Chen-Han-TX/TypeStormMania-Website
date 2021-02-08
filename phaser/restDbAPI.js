$(document).ready(function () {
    const APIKEY = "602135463f9eb665a16892a6";

    //get data from restDb
    function getContacts(limit = 10, all = true){
        let setting = {
            "async": true,
            "crossDomain": true,
            "url": "https://typestormmania-c0cf.restdb.io/rest/leaderboard",
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            }
        }
    }

    //Display data retrieved from restDb
    $.ajax(settings).done(function (response) {
      
        let content = "";
  
        for (var i = 0; i < response.length && i < limit; i++) {

          content = `${content}<tr id='${response[i]._id}'><td>${response[i].rank}</td>
          <td>${response[i].name}</td>
          <td>${response[i].score}</td>
          <td>${response[i].dateTimeOfScore}
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' 
          class='update' data-id='${response[i]._id}' data-rank='${response[i].rank}' data-name='${response[i].name}' 
          data-score='${response[i].score}' data-dateTimeOfScore='${response[i].dateTimeOfScore}'>Update</a></td></tr>`;
  
        }

        $("#leaderboard tbody").html(content);
        $("#leaderboardList").html(response.length);
      });
});