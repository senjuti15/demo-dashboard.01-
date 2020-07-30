let chart1_2_options = {
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
            suggestedMax: 90,
            padding: 1,
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
            padding: 2,
            fontColor: "#9a9a9a"
          }
        }
      ]
    }
  };

  let charts_bg_options = {
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
            suggestedMax: 90,
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

  let chart1_3_options = {
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

  
  
  let chartExample1 = {
    data1: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke1.addColorStop(1, "rgba(208,72,182,0.2)");
      gradientStroke1.addColorStop(0.4, "rgba(208,72,182,0.0)");
      gradientStroke1.addColorStop(0, "rgba(208,72,182,0)"); //pink colors

      let gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke1.addColorStop(1, "rgba(0,0,0,0.2)");
      gradientStroke1.addColorStop(0.4, "rgba(0,0,0,0.0)");
      gradientStroke1.addColorStop(0, "rgba(0,0,0,0)"); //white colors
  
      return {
        labels: [
          "Attack-1",
          "Attack-2",
          "Attack-3",
          "Attack-4",
          "Attack-5"

        ],
        datasets: [
          {
            label: "acc_scores_attacks",
            fill: true,
            backgroundColor: gradientStroke1,
            borderColor: "#d048b6 ",
            borderWidth: 2,
            pointBackgroundColor: "#d048b6 ",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d048b6 ",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '0',
            pointRadius: 4,
            data: [0.75, 0.0401046376109, 0.75, 0.5833333333, 0.08333333333]
            
          },
          {
            label:"acc_scores_true",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '1',
            pointRadius: 4,
            data: [0.8333333333, 0.8333333333, 0.8333333333, 0.8333333333, 0.8333333333]
          },
          {
            label:"avg_conf_attacks",
            fill: true,
            backgroundColor: gradientStroke2,
            borderColor: "#fff",
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: "rgba(0,0,0,0)",
            pointHoverBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '2',
            pointRadius: 4,
            data: [0.9787748456, 0.8162133098, 0.8958935738, 0.7002533078, 0.2973600626]
          },
          {
            label:"true_conf",
            fill: true,
            backgroundColor: gradientStroke2,
            borderColor: "#fff",
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: "rgba(0,0,0,0)",
            pointHoverBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '2',
            pointRadius: 4,
            data: [0.8162133098, 0.8162133098, 0.8162133098, 0.8162133098, 0.8162133098]
          }
        ]
      };
    },
    data3: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: [
          "Ideal Bias",
          "Data Bias",
          "Model Bias"
        ],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            stack: 0,
            data: [60, 80, 65]
          },
        ]
      };
    },
    options: chart1_2_options
  };

  let chartExample12 = {
    data12: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke1.addColorStop(1, "rgba(208,72,182,0.2)");
      gradientStroke1.addColorStop(0.4, "rgba(208,72,182,0.0)");
      gradientStroke1.addColorStop(0, "rgba(208,72,182,0)"); //pink colors

      let gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke1.addColorStop(1, "rgba(0,0,0,0.2)");
      gradientStroke1.addColorStop(0.4, "rgba(0,0,0,0.0)");
      gradientStroke1.addColorStop(0, "rgba(0,0,0,0)"); //white colors
  
      return {
        labels: [
          "Attack-1",
          "Attack-2",
          "Attack-3",
          "Attack-4",
          "Attack-5"

        ],
        datasets: [
          {
            label: "acc_scores_attacks",
            fill: true,
            backgroundColor: gradientStroke1,
            borderColor: "#d048b6 ",
            borderWidth: 2,
            pointBackgroundColor: "#d048b6 ",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d048b6 ",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '0',
            pointRadius: 4,
            data: [0.75, 0.0401046376109, 0.75, 0.5833333333, 0.08333333333]
            
          },
          {
            label:"acc_scores_true",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '1',
            pointRadius: 4,
            data: [0.8333333333, 0.8333333333, 0.8333333333, 0.8333333333, 0.8333333333]
          },
          {
            label:"avg_conf_attacks",
            fill: true,
            backgroundColor: gradientStroke2,
            borderColor: "#fff",
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: "rgba(0,0,0,0)",
            pointHoverBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '2',
            pointRadius: 4,
            data: [0.9787748456, 0.8162133098, 0.8958935738, 0.7002533078, 0.2973600626]
          },
          {
            label:"true_conf",
            fill: true,
            backgroundColor: gradientStroke2,
            borderColor: "#fff",
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: "rgba(0,0,0,0)",
            pointHoverBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '2',
            pointRadius: 4,
            data: [0.8162133098, 0.8162133098, 0.8162133098, 0.8162133098, 0.8162133098]
          }
        ]
      };
    },
    options: chart1_3_options
  };


  let chartExample13 = {
    data13: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke1.addColorStop(1, "rgba(208,72,182,0.2)");
      gradientStroke1.addColorStop(0.4, "rgba(208,72,182,0.0)");
      gradientStroke1.addColorStop(0, "rgba(208,72,182,0)"); //pink colors

      let gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke1.addColorStop(1, "rgba(0,0,0,0.2)");
      gradientStroke1.addColorStop(0.4, "rgba(0,0,0,0.0)");
      gradientStroke1.addColorStop(0, "rgba(0,0,0,0)"); //white colors
  
      return {
        labels: [
          "Attack-1",
          "Attack-2",
          "Attack-3",
          "Attack-4",
          "Attack-5"

        ],
        datasets: [
          {
            label: "acc_scores_attacks",
            fill: true,
            backgroundColor: gradientStroke1,
            borderColor: "#d048b6 ",
            borderWidth: 2,
            pointBackgroundColor: "#d048b6 ",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d048b6 ",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '0',
            pointRadius: 4,
            data: [0.040675382902717, 0.0401046376109, 0.035483668599048, 0.04022735183779, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05]
            
          },
          {
            label:"acc_scores_true",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '1',
            pointRadius: 4,
            data: [8.80281829833984, 0.712509274482727, 8.92784690856933, 7.59290790557861, 0.006320700980722, 0.001006763195619, 0.001096412306651, 0.009527378715574, 0.002538920147344, 0.000000369995774]
          },
          {
            label:"avg_conf_attacks",
            fill: true,
            backgroundColor: gradientStroke2,
            borderColor: "#fff",
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: "rgba(0,0,0,0)",
            pointHoverBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '2',
            pointRadius: 4,
            data: [1.00826403708882, 0, 1.03681016072833, 1.00462728410072, 1.03231908556709, 1.042789698804, 1.11082083731094, 1.04380031046062, 1.01549677699043, 0.997602783048703]
          },
          {
            label:"true_conf",
            fill: true,
            backgroundColor: gradientStroke2,
            borderColor: "#fff",
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: "rgba(0,0,0,0)",
            pointHoverBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '3',
            pointRadius: 4,
            data: [1.00826403708882, 0, 1.03681016072833, 1.00462728410072, 1.03231908556709, 1.042789698804, 1.11082083731094, 1.04380031046062, 1.01549677699043, 0.997602783048703]
          }
        ]
      };
    },
    options: chart1_2_options
  };



  
  
  let security1 = {
    d1: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      // gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      // gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      // gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: [ 
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"],
        datasets: [
          {
            label: "Security",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#00c09d",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00c09d",
            pointBorderColor: "#00c09d",
            pointHoverBackgroundColor: "#00c09d",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 3,
            stack: 0,
            data: [25, 27, 29, 31, 33, 35, 37, 39, 41, 42, 44, 46]
          },
          {
            label: "Ethics",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#e2e2e2",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#e2e2e2",
            pointBorderColor: "#e2e2e2",
            pointHoverBackgroundColor: "#e2e2e2",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 3,
            stack: 0,
            data: [25, 23, 22, 21, 18, 19, 17, 16, 15, 13, 12, 10]
          },
          {
            label: "Compliance",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#ff8d72",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#ff8d72",
            pointBorderColor: "#ff8d72",
            pointHoverBackgroundColor: "#ff8d72",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 3,
            stack: 0,
            data: [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14]
          },
          {
            label: "Transparency",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#17a2b8",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#17a2b8",
            pointBorderColor: "#17a2b8",
            pointHoverBackgroundColor: '#17a2b8',
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 3,
            stack: 0,
            data: [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14]
          }
        ]
        
      };
    },
    options: chart1_2_options
  };

  let ethics1  = {
    d2: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      // gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      // gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      // gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "Data",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#e2e2e2",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#e2e2e2",
            pointBorderColor: "#e2e2e2",
            pointHoverBackgroundColor: "#e2e2e2",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 3,
            data: [14, 40, 50, 19, 50, 30]
          },
          {
            label: "Data",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#ff8d72",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#ff8d72",
            pointBorderColor: "#ff8d72",
            pointHoverBackgroundColor: "#ff8d72",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 3,
            data: [25, 13, 50, 45, 50, 60]
          },
          {
            label: "Data",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#fff",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 3,
            data: [33, 11, 67, 70, 30, 70]
          }
        ]
      };
    },
    options: chart1_2_options
  };

  let compliance1 = {
    d4: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      // gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      // gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      // gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "Data",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#ff8d72",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#ff8d72",
            pointBorderColor: "#ff8d72",
            pointHoverBackgroundColor: "#ff8d72",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 3,
            data: [25, 13, 50, 45, 50, 60]
          }
        ]
      };
    },
    options: chart1_2_options
  };

  let busi_imp1 = {
    d5: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      // gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      // gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      // gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "Data",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#ffc107",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#ffc107",
            pointBorderColor: "#ffc107",
            pointHoverBackgroundColor: "#ffc107",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 3,
            data: [43, 34, 55, 12, 70, 40]
          }
        ]
      };
    },
    options: chart1_2_options
  };

  let Transparency1 = {
    d3: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      // gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      // gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      // gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "Data",
            fill: true,
            // backgroundColor: gradientStroke,
            borderColor: "#fff",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 3,
            data: [33, 11, 67, 70, 30, 70]
          }
        ]
      };
    },
    options: charts_bg_options
  };

  
  
  
  let chartExample3 = {
    data: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
       
          type: 'heatmap',
          data: {
              xLabels: ['2014', '2015', '2016', '2017'],
              yLabels: ['Strength', 'Intelligence', 'Stamina', 'Spirit'],
              datasets: [{
                  data: [{
                      y: 0, // index of 'Strength'
                      x: 0, // index of '2014'
                      a: 0.5, // alpha of the color [0, 1]
                      v: 500, // value
                  }, {
                      y: 2, // index of 'Stamina'
                      x: 0, // index of '2014'
                      a: 0.2, // alpha of the color [0, 1]
                      v: 250, // value
                  }, {
                       y: 1, // index of 'Intelligence'
                       x: 3, // index of '2017'
                       a: 1, // alpha of the color [0, 1]
                       v: 1000, // value
                  }]
              }]
          },
          options: {
              yColors: [ // colors for each lines
                  {r: 0,   g: 150, b: 136},
                  {r: 255, g: 235, b: 59},
                  {r: 255, g: 152, b: 0},
                  {r: 244, g: 67,  b: 54}
              ],
          }
      
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 120,
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ]
      }
    }
  };
  
  
  const chartExample4 = {
    data: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
      return {
        labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [90, 27, 60, 12, 80]
          }
        ]
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
  
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
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
              zeroLineColor: "transparent"
            },
            ticks: {
              suggestedMin: 50,
              suggestedMax: 125,
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ],
  
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(0,242,195,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ]
      }
    }
  };


  let badges1 = {
    b1: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke1.addColorStop(1, "rgba(208,72,182,0.2)");
      gradientStroke1.addColorStop(0.4, "rgba(208,72,182,0.0)");
      gradientStroke1.addColorStop(0, "rgba(208,72,182,0)"); //blue colors
  
      return {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"

        ],
        datasets: [
          {
            label: "After SigmaRed",
            fill: true,
            backgroundColor: gradientStroke1,
            borderColor: "#d048b6 ",
            borderWidth: 2,
            pointBackgroundColor: "#d048b6 ",
            pointBorderColor: "#d048b6",
            pointHoverBackgroundColor: "#d048b6 ",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '0',
            pointRadius: 4,
            data: [0, 30, 40, 60, 45, 70, 80, 100, 80, 95, 70, 90]
            
          },
          {
            label:"Before SigmaRed",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "r#1f8ef1",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            stack: '1',
            pointRadius: 4,
            data: [0, 15, 23, 25, 21, 25, 34, 30, 48, 55, 45, 55]
          }
        ]
      };
    },
    data1: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke1.addColorStop(1, "rgba(208,72,182,0.2)");
      gradientStroke1.addColorStop(0.4, "rgba(208,72,182,0.0)");
      gradientStroke1.addColorStop(0, "rgba(208,72,182,0)"); //blue colors
  
      return {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            stack: 0,
            data: [10, 40, 50, 60, 60, 30, 50, 80, 66, 70, 50, 80]
          },
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke1,
            borderColor: "rgba(208,72,182)",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            stack: 1,
            data: [0, 30, 40, 60, 40, 70, 80, 100, 80, 95, 70, 90]
          }
        ]
      };
    },
    options: chart1_2_options
  };


  
  
  module.exports = {
    chartExample1, // in src/views/Dashboard.js
 // in src/views/Dashboard.js
    chartExample3, // in src/views/Dashboard.js
    chartExample4, // in src/views/Dashboard.js
    badges1,
    busi_imp1 ,
    security1,
    ethics1,
    Transparency1,
    compliance1,
    chartExample12,
    chartExample13
  };