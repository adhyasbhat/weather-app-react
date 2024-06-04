export function recommendation (temp,humidity,windspeed,category){
    console.log(temp,humidity,windspeed,category)
    if((temp >= 30 && temp <=35) && (humidity >=70 && humidity <=90) && (windspeed >=20 && windspeed <=40) && category == "Traveller" ){
        console.log("here1")
        return [{Activity:'Boating, fishing, parasailing, visiting botanical gardens',Tips:'Wear wide-brimmed hats, seek shade often, and take breaks in cool areas'}]
    }
    else if((temp >= 30 && temp <=35) && (humidity >=70 && humidity <=90) && (windspeed >=20 && windspeed <=40) && category == "Farmer"){
    console.log("here2")
        return [{Activity:'Pest monitoring and control, planting heat-tolerant crops',Tips:'Use drip irrigation to conserve water, monitor plant health closely'}]
    }
    else if((temp > 25) && (humidity >=70 && humidity <=90) && (windspeed >=10 && windspeed <=40) && category == "Traveller"){
        return[{Activity:'Visiting indoor attractions, swimming, visiting botanical gardens',Tips:'Stay hydrated, wear light clothing, and take breaks in cool areas'}]
    }
    else if((temp > 25) && (humidity >=70 && humidity <=90) && (windspeed >=10 && windspeed <=40) && category == "Farmer"){
        return[{Activity:'Planting heat-tolerant crops, pest monitoring and control',Tips:'Use drip irrigation to conserve water, monitor plant health closely'}]
    }
    else if((temp >= 0 && temp <=25) && (humidity >=70 && humidity <=90) && (windspeed <=22) && category == "Traveller"){
        return[{Activity:'Visiting historic sites, taking guided city tours, indoor rock climbing.',Tips:'Use waterproof footwear, carry an umbrella or raincoat'}]
    }
    else if((temp >= 0 && temp <=25) && (humidity >=70 && humidity <=90) && (windspeed <=22) && category == "Farmer"){
        return[{Activity:'Harvesting winter crops, pruning fruit trees, planting winter crops.',Tips:'Use frost protection measures, monitor plant health closely'}]
    }
    else if((temp <0) && (humidity >=70 && humidity <=90) && (windspeed <=40) && category == "Traveller"){
        return[{Activity:'Visiting museums, taking guided city tours, indoor rock climbing.',Tips:'Wear warm clothing, carry an umbrella or raincoat'}]
    }
    else if((temp <0) && (humidity >=70 && humidity <=90) && (windspeed <=40) && category == "Farmer"){
        return[{Activity:'Pruning fruit trees, planting winter crops, harvesting winter crops.',Tips:'Use frost protection measures, monitor plant health closely'}]
    }
    else if((temp >= 30 && temp <=35) && (humidity >=20 && humidity <=30) && (windspeed >=20 && windspeed <=40) && category == "Traveller"){
        return[{Activity:'Boating, fishing, parasailing, visiting botanical gardens',Tips:'Wear wide-brimmed hats, seek shade often, and take breaks in cool areas'}]
    }
    else if((temp >= 30 && temp <=35) && (humidity >=20 && humidity <=30) && (windspeed >=20 && windspeed <=40) && category == "Farmer"){
        return[{Activity:'Pest monitoring and control, planting heat-tolerant crops',Tips:'Use drip irrigation to conserve water, monitor plant health closely'}]
    }
    else if ((temp >35) && (humidity <20) && (windspeed <40) && category == "Traveller"){
        return[{Activity:'Visiting indoor attractions, swimming, visiting botanical gardens',Tips:'Stay hydrated, wear light clothing, and take breaks in cool areas'}]
    }
    else if((temp >35) && (humidity <20) && (windspeed <40) && category == "Farmer"){
        return[{Activity:'Planting heat-tolerant crops, pest monitoring and control',Tips:'Use drip irrigation to conserve water, monitor plant health closely'}]
    }
    else if ((temp >=10 && temp <=20) && (humidity >= 40 && humidity <=60) && (windspeed <=20) && category == "Traveller"){
        return[{Activity:'Camping, picnicking, outdoor yoga sessions',Tips:'Wear comfortable clothing, use insect repellent, stay hydrated'}]
    }
    else if((temp >=10 && temp <=20) && (humidity >= 40 && humidity <=60) && (windspeed <=20) && category == "Farmer"){
        return[{Activity:'Harvesting, crop rotation planning',Tips:'Utilize the favorable weather for extensive fieldwork, maintain regular watering schedules'}]
    }
    else if((temp <0) && (humidity >=40 && humidity <=60) && (windspeed >=20 && windspeed <=40) && category == "Traveller"){
        return[{Activity:'Cross-country skiing, snowshoeing, indoor swimming in heated pools',Tips:'Use thermal wear, protect face and extremities from wind chill, stay hydrated'}]
    }
    else if((temp <0) && (humidity >=40 && humidity <=60) && (windspeed >=20 && windspeed <=40) && category == "Farmer"){
        return[{Activity:'Clearing snow from pathways and access roads, maintaining greenhouse temperatures',Tips:'Clearing snow from pathways and access roads, maintaining greenhouse temperatures'}]
    }
    else if((temp >=0 && temp <=10) && (humidity >=30 && humidity <=50) && (windspeed <=40) && category == "Traveller"){
        console.log("here")
        return[{Activity:'Indoor climbing, attending theater performances, exploring covered arcades.',Tips:'Wear windproof outerwear, protect exposed skin, plan indoor breaks'}]
    }
    else if((temp >=0 && temp <=10) && (humidity >=30 && humidity <=50) && (windspeed <=40) && category == "Farmer"){
        return[{Activity:'Protecting livestock from wind, maintaining structures against wind damage.',Tips:'Use windbreaks, secure lightweight equipment, ensure shelters are sturdy.'}]
    }
    else{
        console.log("not found")
    }
}