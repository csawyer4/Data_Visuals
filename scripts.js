//Population Line Graph
// labels along the x-axis
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];
var oceana = [3,3,2,2,2,2,6,13,30,57];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: africa,
        label: "Africa",
        borderColor: "#e60000",
        fill: false
      },{
        data: asia,
        label: "Asia",
        borderColor: "#ccff33",
        fill: false
      },
      {
        data: europe,
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      },
      {
        data: latinAmerica,
        label: "Latin America",
        borderColor: "#ff751a",
        fill: false
      },
      {
        data: northAmerica,
        label: "North America",
        borderColor: "#8e5ea2",
        fill: false
      },
      {
        data: oceana,
        label: "Oceana",
        borderColor: "#0099ff",
        fill: false
      }
    ]
  }
});

//Pokemon Bar Chart
var pokemonTypes = ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"];
var typeNums = [69, 30, 19, 43, 16, 26, 46, 4, 31, 69, 31, 23, 96, 27, 56, 43, 26, 111]
var typeColor = ["#b3b300", "#333300", "#660033", "#ffff00", "#d580ff", "#cc4400", "#ff0000", "#80c1ff", "#c6d9ec", "#77b300", "#996633", "#00ffff", "#ffffb3", "#4dff4d", "#ffcc00", "#a3a3c2", "#3973ac", "#3333ff"]

var poke = document.getElementById("PokeBar");
var PokeBar = new Chart(poke, {
  type: 'horizontalBar',
  data: {
    labels: pokemonTypes,
    datasets: [
      {
        label: "Number of Pokemon",
        backgroundColor: typeColor,
        data: typeNums
      }
    ]
  },
  options: {
    legend: { display: false },
    }
  })
