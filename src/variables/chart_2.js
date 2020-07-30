let chart21_options = {
    maintainAspectRatio: true,
   
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 0,
      
      
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          
          barPercentage: 10,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 5,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ],
      xAxes: [
        {
     
          barPercentage: 0.7,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ]
    }
  };

  let chart21 = {
    d21: canvas => {
      let ctx = canvas.getContext("2d");
  
      return {
        labels: [
          "Ideal Bias",
          "Data Bias",
          "Model Bias"
        ],
        

        datasets: [
          
          {
            
            borderColor: ["#fff","#17a2b8","#ff8d72"],
            borderWidth: 2,
            pointBackgroundColor: "#17a2b8",
            pointBorderColor: "#17a2b8",
            pointHoverBackgroundColor: "#17a2b8",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [0.2, .5,.4]
          },
        ]
      };
    },
    options: chart21_options
  };

  

  let chart22 = { 
    d22: canvas => {
      let ctx = canvas.getContext("2d");
  
      return {
        labels: [
          "Ideal Bias",
          "Data Bias",
          "Model Bias"
        ],

        datasets: [
          
          {
            // backgroundColor: gradientStroke,
            borderColor: ["#fff","#17a2b8","#ff8d72"],
            borderWidth: 2,
            pointBackgroundColor: "#00c09d",
            pointBorderColor: "#00c09d",
            pointHoverBackgroundColor: "#00c09d",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [0.1, 3,2.5]
          }
        ]
      };
    },
    options: chart21_options
  };

  let chart23 = {
    d23: canvas => {
      let ctx = canvas.getContext("2d");
  
      return {
        labels: [
          "Ideal Bias",
          "Data Bias",
          "Model Bias"
        ],

        datasets: [
          
          {
           
          
            // backgroundColor: gradientStroke,
            borderColor: ["#fff","#17a2b8","#ff8d72"],
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [1, 4,3.8]
          }
        ]
      };
    },
    options: chart21_options
  };

  module.exports = { chart21, chart22, chart23 }