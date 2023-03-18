(function ($){

    $(document).on('keyup', '#searchInput', function(event){
        if(event.keyCode == 13)
            $('.search button').click();
    });

    $(document).on('click', '.search button', async function(event){
        let city = $('#searchInput').val();

        if($.trim(city) !== ''){
            clearInfo();
            showWarning('Loading...');
    
            let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&units=metric&appid=e97b31a72b34ebc449f34f524349c730`);
            let json = await results.json();
            console.log(json);
            if(json.cod === 200) {
                showInfo({
                    name: json.name,
                    country: json.sys.country,
                    temp: json.main.temp,
                    tempIcon: json.weather[0].icon,
                    windSpeed: json.wind.speed,
                    windAngle: json.wind.deg,
                    description: json.weather[0].description
                });
            } else {
                clearInfo();
                showWarning('City not found.');
            }
        } else {
            $('#searchInput').css({border: '2px solid #F00'});
            clearInfo();
            setTimeout(function() {
                $('#searchInput').css({border: ''});
            }, 2000);
        }

    });

    function showInfo(obj) {
        showWarning('');

        let {name, country, temp, tempIcon, windSpeed, windAngle, description} = obj;
        
        $('.title').html(`${name}, ${country}`)
        $('.temp .subInfo').html(`${temp} <sup>ºC</sup>`);
        $('.wind .subInfo').html(`${windSpeed} <span>km/h</span>`);
        $('.temp img').attr('src', `http://openweathermap.org/img/wn/${tempIcon}@2x.png`);
        $('.windPont').css({transform: `rotate(${windAngle-90}deg)`});
        $('.tempDescription').html(description.substr(0, 1).toUpperCase()+description.substr(1, description.length));
        $('.result').css({display:'block'});
    }
    
    function clearInfo() {
        showWarning('');
        $('.result').css({display:'none'});
    }
    
    function showWarning(msg) {
        $('.warn').html(msg);
    }

})(jQuery);