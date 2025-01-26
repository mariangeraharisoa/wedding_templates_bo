const main = document.querySelector("main");
const statistique = main.querySelector("#statistique");
const statEtudiants = statistique.querySelector("#etudiants");
const evoluEtudiants = statEtudiants.querySelector("#evolutionsEtudiants");
const statFormateurs = statistique.querySelector("#formateurs");
const evoluFormateurs = statistique.querySelector("#evolutionsFormateurs");
const statStage = statistique.querySelector("#stage");
const offreStage = statistique.querySelector("#offreStage");
const statRecrutement = statistique.querySelector("#recrutement");
const nbRecrutement = statistique.querySelector("#nbRecrutement");

const etudiantsStat = new Chart(evoluEtudiants, {
  type: "bar",
  data: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août"],
    datasets: [{
      label: "Nombre d'étudiants",
      data: [100, 120, 140, 130, 150, 160, 100, 50],
      backgroundColor: [
        "#0073D8",
        "#E4052E",
        "#03825C",
        "#F6BC02",
        "#0073D8",
        "#E4052E",
        "#03825C",
        "#F6BC02",
      ],
    }]
  },
  options: {
    title: {
      display: true,
      text: "Évolution du nombre d'étudiants par mois",
      fontSize: 14,
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Nombre d'étudiants",
        },
        ticks: {
          beginAtZero: true,
          stepSize: 20,
        },
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Mois",
        },
      }]
    },
    legend: {
      display: true,
      position: "top",
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

$(document).ready(function() {
  // Fonction pour créer le graphique
  function createChart(data) {
    const ctx = evoluFormateurs.getContext("2d");

    // Vérifiez si le graphique existe déjà et détruisez-le le cas échéant
    if(chart){
      chart.destroy();
    }

    // Créez le nouveau graphique avec les données de la requête Ajax
   chart= new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Développements", "Graphic Design", "Maintenance", "Bureautique"],
        datasets: [{
          label: "Nombre de formateurs",
          data: data.data_categorie,
          backgroundColor: [
            "#0073D8",
            "#E4052E",
            "#3C69C4",
            "#F6BC02"
          ]
        }]
      },
      options: {
        title: {
          display: true,
          text: "Répartition des formateurs par domaine",
          fontSize: 14,
        },
        legend: {
          display: true,
          position: "top",
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }

  // Effectuez la requête Ajax pour obtenir les données
  $.ajax({
    url: "http://127.0.0.1:8000/admin/accueil",
    method: "GET",
    dataType: "json",
    success: function(data){
      // Appelez la fonction pour créer le graphique avec les données obtenues
      createChart(data);
    },
    error: function(xhr, status, error) {
      console.error("Erreur lors de la requête Ajax :", error);
    }
  });
});


const formateursStat = new Chart(evoluFormateurs, {
  type: "doughnut",
  data: {
    labels: ["Développements", "Graphic Design", "Maintenance", "Bureautique"],
    datasets: [{
      label: "Nombre de formateurs",
      data: [15, 5, 3, 8],
      backgroundColor: [
        "#0073D8",
        "#E4052E",
        "#3C69C4",
        "#F6BC02"
      ]
    }]
  },
  options: {
    title: {
      display: true,
      text: "Répartition des formateurs par domaine",
      fontSize: 14,
    },
    legend: {
      display: true,
      position: "top",
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});
const stageSat = new Chart(offreStage, {
  type: "line",
  data: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août"],
    datasets: [{
      label: "Offre de stage",
      data: [8, 3, 10, 4, 9, 8, 2, 7],
      backgroundColor: "rgba(246, 188, 2, 0.2)",
      borderColor: "#F6BC02",
      borderWidth: 2,
    }]
  },
  options: {
    title: {
      display: true,
      text: "Tendance de l'offre de stage par mois",
      fontSize: 14,
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Nombre de stages",
        },
        ticks: {
          beginAtZero: true,
          stepSize: 2,
        },
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Mois",
        },
      }]
    },
    legend: {
      display: true,
      position: "top",
    }
  }
});
const recrutStat = new Chart(nbRecrutement, {
  type: "bar",
  data: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août"],
    datasets: [{
      label: "Nombre de Recrutement",
      data: [3, 8, 5, 9, 6, 7, 10, 2],
      backgroundColor: "#3C69C4"
    }]
  },
  options: {
    title: {
      display: true,
      text: "Évolution du revenu par mois",
      fontSize: 14,
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Evolution du revenu",
        },
        ticks: {
          beginAtZero: true,
          stepSize: 2,
        },
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Mois",
        },
      }]
    },
    legend: {
      display: true,
      position: "top",
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});