document.getElementById("findMe").onclick = findWithJSON;

let jsonText = '{"names":[{"name":"Jane Doe","sex":"f","born":"1990","died":"2045","father":"Fatherly McFather","mother":"Motherly McMother"},{"name":"Jack Stag","sex":"m","born":"1995","died":"2060","father":"Bojji Bojj","mother":"Oh Deer"},{"name":"Jacklyn Stagnyse","sex":"n","born":"2077","died":"2900","father":"Odin","mother":"Freya"}]}';

const json = JSON.parse(jsonText);

let myNames = json.names;

function findWithJSON() {
    let searchQuery = document.getElementById("name-search").value;
    let splitQuery = searchQuery.split(" ");
    //alert(searchQuery);
    //alert(splitQuery[0] + " " + splitQuery[1]);
    //alert(splitQuery[0].toUpperCase());
    let matchCount = 0;

    if (splitQuery.length == 1) {
        for (let i = 0; i < myNames.length; i++) {
            let nameSplit = myNames[i].name.split(" ");

            let includesfName = nameSplit[0].toUpperCase().includes(splitQuery[0].toUpperCase());
            let includeslName = nameSplit[1].toUpperCase().includes(splitQuery[0].toUpperCase());

            //alert(myNames[i].name);
            if (includesfName || includeslName) {
                matchCount++;
                document.getElementById("information").innerHTML += "Name: " + myNames[i].name + "<br>" + "Sex: " +
                    myNames[i].sex;
            }
            document.getElementById("information").innerHTML += " " + "<br>";
        }
    else
        if (splitQuery.length == 2) {
            for (let x = 0; i < myNames.length; x++) {
            }
        }
    }

}
