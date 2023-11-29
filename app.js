
$(function(){
    let api = 'api.php';
    let updateUsd = function(){
        let request = {'url': 'https://www.cbr.ru/'};
        $.get(api, request, function(response){
            let result = $(response).find('._dollar + div').text();
            $('#usd > .value').text(result);
        });
    }

    let updateEur = function(){
        let request = {'url': 'https://www.cbr.ru/'};
        $.get(api, request, function(response){
            let result = $(response).find('._euro + div').text();
            $('#eur > .value').text(result);
        });
    }

    let updateSpbWeather = function(){
        let request = {'url': 'https://pogoda.mail.ru/prognoz/sankt_peterburg/'};
        $.get(api, request, function(response){
            let result = $(response).find('.information__content__temperature').text();
            $('#weather > .value').text(result + " C");
        });
    }

    let updateWiki = function(){
        let request = {'url': 'https://en.wikipedia.org/wiki/Russian_Wikipedia'};
        $.get(api, request, function(response){
            let result = $(response).find('[title="ru:Special:Statistics"]').first().text();
            $('#wiki > .value').text(result);
        });
    }

    let updateAllData = function(){
        updateUsd();
        updateEur();
        updateSpbWeather();
        updateWiki();
    }

    updateAllData();
});