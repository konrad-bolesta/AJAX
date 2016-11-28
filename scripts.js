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
            countriesList.empty();
        resp.forEach(function(item){
            $("<li>").text(item.name + " ("+item.capital+")").appendTo(countriesList);
        });
    }

});