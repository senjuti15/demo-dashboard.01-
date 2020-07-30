let chart12_options = {
    maintainAspectRatio: true,
   
    legend: {
      display: true
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 40,
      
      
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 1,
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

  let chart12 = {
    d12: canvas => {
      let ctx = canvas.getContext("2d");
  
      return {
        labels: [
          "Normal",
          "Attack-1",
          "Attack-2",
          "Attack-3",
          "Attack-4",
          "Attack-5"

        ],
        datasets: [
          {
            label: "Normal Score",
            fill: true,
            // backgroundColor: gradientStroke1,
            borderColor: ["#17a2b8"],
            borderWidth: 2,
            pointBackgroundColor: ["#17a2b8"],
            pointBorderColor: ["#17a2b8"],
            pointHoverBackgroundColor: ["#17a2b8"],
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '0',
            pointRadius: 4,
            data: [83.3, 0,0,0,0,0]
            
          },
          {
            label: "Attack Score",
            fill: true,
            // backgroundColor: gradientStroke1,
            borderColor: "#ff8d72",
            borderWidth: 2,
            pointBackgroundColor: "#ff8d72",
            pointBorderColor: "#ff8d72",
            pointHoverBackgroundColor: "#ff8d72",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '0',
            pointRadius: 4,
            data: [0,45,33,45,28,52]
            
          },
          // {
          //   label:"acc_scores_true",
          //   fill: true,
          //   // backgroundColor: gradientStroke,
          //   borderColor: "#ff8d72",
          //   borderWidth: 2,
          //   pointBackgroundColor: "#ff8d72",
          //   pointBorderColor: "#ff8d72",
          //   pointHoverBackgroundColor: "#ff8d72",
          //   pointBorderWidth: 1,
          //   pointHoverRadius: 4,
          //   pointHoverBorderWidth: 15,
          //   stack: '1',
          //   pointRadius: 4,
          //   data: [0.8333333333, 0.8333333333, 0.8333333333, 0.8333333333, 0.8333333333]
          // },
          // {
          //   label:"avg_conf_attacks",
          //   fill: true,
          //   // backgroundColor: gradientStroke2,
          //   borderColor: "#fff",
          //   borderWidth: 2,
          //   pointBackgroundColor: "#fff",
          //   // pointBorderColor: "rgba(0,0,0,0)",
          //   pointHoverBackgroundColor: "#fff",
          //   pointBorderWidth: 1,
          //   pointHoverRadius: 4,
          //   pointHoverBorderWidth: 15,
          //   stack: '2',
          //   pointRadius: 4,
          //   data: [0.9787748456, 0.8162133098, 0.8958935738, 0.7002533078, 0.2973600626]
          // },
          // {
          //   label:"true_conf",
          //   fill: true,
          //   // backgroundColor: gradientStroke2,
          //   borderColor: "#17a2b8",
          //   borderWidth: 2,
          //   pointBackgroundColor: "#17a2b8",
          //   pointBorderColor: "#17a2b8",
          //   pointHoverBackgroundColor: "#17a2b8",
          //   pointBorderWidth: 1,
          //   pointHoverRadius: 4,
          //   pointHoverBorderWidth: 15,
          //   stack: '3',
          //   pointRadius: 4,
          //   data: [0.8162133098, 0.8162133098, 0.8162133098, 0.8162133098, 0.8162133098]
          // }
        ]
      };
    },
    options: chart12_options
  };



  let chart13_options = {
    maintainAspectRatio: true,
   
    legend: {
      display: true
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 40,
      
      
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 50,
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

  let chart13 = {
    d13: canvas => {
      let ctx = canvas.getContext("2d");
  
      return {
        labels: [
          "Class-1",
          "Class-2",
          "Class-3",
          "Class-4",
          "Class-5"

        ],
        datasets: [
          {
            label: "Sensitivity - Threshold",
            fill: true,
            // backgroundColor: gradientStroke1,
            borderColor: "#17a2b8",
            borderWidth: 2,
            pointBackgroundColor: "#17a2b8",
            pointBorderColor: "#17a2b8",
            pointHoverBackgroundColor: "#17a2b8",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '0',
            pointRadius: 4,
            data: [37.5, 2, 35.2,7,3]
            
          },
          {
            label: "Sensitivity - Actual",
            // backgroundColor: gradientStroke1,
            borderColor: "#fff",
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '1',
            pointRadius: 4,
            data: [25, 25, 25,25,25]
            
          },
          {
            label:"Robustness - Threshold",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#ffc107",
            borderWidth: 2,
            pointBackgroundColor: "#ffc107",
            pointBorderColor: "#ffc107",
            pointHoverBackgroundColor: "#ffc107",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '2',
            pointRadius: 4,
            data: [39,40,39,39,39]
          },
          {
            label:"Robustness - Actual",
            fill: true,
            // backgroundColor: gradientStroke1,
            borderColor: "#fff",
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '4',
            pointRadius: 4,
            data: [75, 75, 75,75,75]
            
          },
        ]
      };
    },
    options: chart13_options
  };


  let chart14_options = {
    maintainAspectRatio: true,
   
    legend: {
      display: true
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 40,
      
      
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 10,
            suggestedMax: 120,
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

  let chart14 = {
    d14: canvas => {
      let ctx = canvas.getContext("2d");
  
      return {
        labels: [
          "Normal",
          "Attack-1",
          "Attack-2",
          "Attack-3"
        ],

        datasets: [
          
          {
            label: "Normal",
            fill: true,
            // backgroundColor: gradientStroke1,
            borderColor: "#17a2b8",
            borderWidth: 2,
            pointBackgroundColor: "#17a2b8",
            pointBorderColor: "#17a2b8",
            pointHoverBackgroundColor: "#17a2b8",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '0',
            pointRadius: 4,
            pointRadius: 4,
            data: [100,0, 0, 0]
          },
          {
            label: "Attack Score",
            fill: true,
            // backgroundColor: gradientStroke1,
            borderColor: "#ff8d72",
            borderWidth: 2,
            pointBackgroundColor: "#ff8d72",
            pointBorderColor: "#ff8d72",
            pointHoverBackgroundColor: "#ff8d72",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '0',
            pointRadius: 4,
            data: [0, 48.9, 12.4,2.7]
          },
          // {
          //   label:"Attack-3",
          //   fill: true,
          //   // backgroundColor: gradientStroke2,
          //   borderColor: "#17a2b8",
          //   borderWidth: 2,
          //   pointBackgroundColor: "#17a2b8",
          //   pointBorderColor: "#17a2b8",
          //   pointHoverBackgroundColor: "#17a2b8",
          //   pointBorderWidth: 1,
          //   pointHoverRadius: 4,
          //   pointHoverBorderWidth: 15,
          //   stack: '2',
          //   pointRadius: 4,
          //   data: [12.7, 87.3,100]
          // }
        ]
      };
    },
    options: chart14_options
  };

  let chart15_options = {
    maintainAspectRatio: true,
   
    legend: {
      display: true
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 40,
      
      
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
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

  let chart15 = {
    d15: canvas => {
      let ctx = canvas.getContext("2d");
  
      return {
        labels: [
          "Attack-1",
          "Attack-2",
          "Attack-3"
        ],

        datasets: [
          
          // {
          //   label:"Success",
          //   fill: true,
          //   // backgroundColor: gradientStroke,
          //   borderColor: "#fff",
          //   borderWidth: 2,
          //   pointBackgroundColor: "#fff",
          //   pointBorderColor: "#fff",
          //   pointHoverBackgroundColor: "#fff",
          //   pointBorderWidth: 1,
          //   pointHoverRadius: 4,
          //   pointHoverBorderWidth: 15,
          //   stack: '0',
          //   pointRadius: 4,
          //   data: [70, 67,87]
          // },
          {
            label:"Distortion rate (in % )",
            fill: true,
            // backgroundColor: gradientStroke2,
            borderColor: "#ff8d72",
            borderWidth: 2,
            pointBackgroundColor: "#ff8d72",
            // pointBorderColor: "rgba(0,0,0,0)",
            pointHoverBackgroundColor: "#fff8d72ff",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '1',
            pointRadius: 4,
            data: [30, 33, 13]
          },
          // {
          //   label:"Attack_1 (TF_ID_insert)",
          //   fill: true,
          //   // backgroundColor: gradientStroke2,
          //   borderColor: "#17a2b8",
          //   borderWidth: 2,
          //   pointBackgroundColor: "#17a2b8",
          //   pointBorderColor: "#17a2b8",
          //   pointHoverBackgroundColor: "#17a2b8",
          //   pointBorderWidth: 1,
          //   pointHoverRadius: 4,
          //   pointHoverBorderWidth: 15,
          //   stack: '2',
          //   pointRadius: 4,
          //   data: [0.255253, 0.227162,0.700004, 0.617827]
          // }
        ]
      };
    },
    options: chart15_options
  };


  let chart16_options = {
    maintainAspectRatio: true,
   
    legend: {
      display: true
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 40,
      
      
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 100,
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

  let chart16 = {
    d16: canvas => {
      let ctx = canvas.getContext("2d");
  
      return {
        labels: [
          "Normal",
          "Attack-1",
          "Attack-2",
        ],
        datasets: [
          {
            label: "Normal Score",
            fill: true,
            // backgroundColor: gradientStroke1,
            borderColor: ["#17a2b8"],
            borderWidth: 2,
            pointBackgroundColor: ["#17a2b8"],
            pointBorderColor: ["#17a2b8"],
            pointHoverBackgroundColor: ["#17a2b8"],
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '0',
            pointRadius: 4,
            data: [83.3, 0,0]
            
          },
          {
            label: "Attack Score",
            fill: true,
            // backgroundColor: gradientStroke1,
            borderColor: "#ff8d72",
            borderWidth: 2,
            pointBackgroundColor: "#ff8d72",
            pointBorderColor: "#ff8d72",
            pointHoverBackgroundColor: "#ff8d72",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '0',
            pointRadius: 4,
            data: [0,45,53]
            
          },
        
        ]
      };
    },
    options: chart16_options
  };

  let chart17_options = {
    maintainAspectRatio: true,
   
    legend: {
      display: true
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 40,
      
      
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
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
  
  let chart17 = {
    d17: canvas => {
      let ctx = canvas.getContext("2d");
  
      return {
        labels: [
          "Classifier-1",
          "Classifier-2",
          "Classifier-3",
          "Classifier-4"

        ],
        datasets: [
          {
            label: "Error",
            fill: true,
            // backgroundColor: gradientStroke1,
            borderColor: "#17a2b8",
            borderWidth: 2,
            pointBackgroundColor: "#17a2b8",
            pointBorderColor: "#17a2b8",
            pointHoverBackgroundColor: "#17a2b8",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '0',
            pointRadius: 4,
            data: [31.9, 70, 100,100]
            
          },
          {
            label: "Actual",
            fill: true,
            // backgroundColor: gradientStroke1,
            borderColor: "#fff",
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '1',
            pointRadius: 4,
            data: [25, 25, 25,25]
            
          },
          {
            label:"Robustness",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#ffc107",
            borderWidth: 2,
            pointBackgroundColor: "#ffc107",
            pointBorderColor: "#ffc107",
            pointHoverBackgroundColor: "#ffc107",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '2',
            pointRadius: 4,
            data: [42.39, 31.94, 2,2]
            
          },
          {
            label:"Actual",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#fff",
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '3',
            pointRadius: 4,
            data: [80, 80, 80,80]
            
          }
        ]
      };
    },
    options: chart17_options
  };

  module.exports = {
      chart12,
      chart13,
      chart14,
      chart15,
      chart16,
      chart17
  }