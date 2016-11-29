$(function(){

    var url = "https://restcountries.eu/rest/v1/name/";
    var countriesList = $("#countries");

    $("#search").click(searchCountries);

    function searchCountries() {
            var countryName = $("#country-name").val();

        if(countryName.length <= 2) {
            countriesList.empty();
            $("<li>").text("You must write a minimum of three characters").appendTo(countriesList);
        } else {
            $.ajax({
                url: url + countryName,
                method: "GET",
                success: showCountriesList,
                error:function (xhr){
                    if(xhr.status === 404) {
                        countriesList.empty();
                        $("<li>").text("Country not found").appendTo(countriesList);
                    }
                }
            });
        }
    }

    function showCountriesList(resp) {
        if(resp.length === 1) {
            countriesList.empty();
            resp.forEach(function(item){
                $("<li>").text("Name: " + item.name).appendTo(countriesList);
                $("<li>").text("Capital: " + item.capital).appendTo(countriesList);
                $("<li>").text("Area: " + item.area).appendTo(countriesList);
                $("<li>").text("Population: " + item.population).appendTo(countriesList);
                $("<li>").text("Native name: " + item.nativeName).appendTo(countriesList);
                $("<li>").text("Demonym: " + item.demonym).appendTo(countriesList);
                $("<li>").text("Currencies: " + item.currencies).appendTo(countriesList);
                $("<li>").text("Region: " + item.region).appendTo(countriesList);
                $("<li>").text("Subregion: " + item.subregion).appendTo(countriesList);
                $("<li>").text("Alpha codes: " + item.alpha2Code + ", " + item.alpha3Code).appendTo(countriesList);
                $("<li>").text("Numeric code: " + item.numericCode).appendTo(countriesList);
                $("<li>").text("Caling codes: " + item.callingCodes).appendTo(countriesList);
                $("<li>").text("Top-Level Domain: " + item.topLevelDomain).appendTo(countriesList);
            });
        } else {
            countriesList.empty();
            resp.forEach(function(item){
                $("<li>").text(item.name).appendTo(countriesList).css({"cursor": "pointer"}).click(function (){
                    countriesList.empty();
                    $("<li>").text("Name: " + item.name).appendTo(countriesList);
                    $("<li>").text("Capital: " + item.capital).appendTo(countriesList);
                    $("<li>").text("Area: " + item.area).appendTo(countriesList);
                    $("<li>").text("Population: " + item.population).appendTo(countriesList);
                    $("<li>").text("Native name: " + item.nativeName).appendTo(countriesList);
                    $("<li>").text("Demonym: " + item.demonym).appendTo(countriesList);
                    $("<li>").text("Currencies: " + item.currencies).appendTo(countriesList);
                    $("<li>").text("Region: " + item.region).appendTo(countriesList);
                    $("<li>").text("Subregion: " + item.subregion).appendTo(countriesList);
                    $("<li>").text("Alpha codes: " + item.alpha2Code + ", " + item.alpha3Code).appendTo(countriesList);
                    $("<li>").text("Numeric code: " + item.numericCode).appendTo(countriesList);
                    $("<li>").text("Caling codes: " + item.callingCodes).appendTo(countriesList);
                    $("<li>").text("Top-Level Domain: " + item.topLevelDomain).appendTo(countriesList);
                });
            });
        }
    }
});