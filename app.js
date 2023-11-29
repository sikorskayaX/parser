
$(function(){
    let api = 'api.php';
    let updateUsd = function(){
        let request = {'url': 'https://www.cbr.ru/'};
        $.get(api, request, function(response){
            let result = $(response).find('._dollar + div').text();
            $('#usd > .value').text(result);
        });
    }

    let updateSpbWeather = function(){

    }

    let updateWiki = function(){

    }

    let updateAllData = function(){
        updateUsd();
        updateSpbWeather();
        updateWiki();
    }

    updateAllData();
});