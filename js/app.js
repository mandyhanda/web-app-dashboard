var lineChart = new Chart($('.line-chart canvas'), {
  type: 'line',
  data: {
    datasets: [
      {
        backgroundColor: 'rgba(226, 227, 244, 0.7)',
        borderColor: 'rgba(116,120,186,1)',
        pointBackgroundColor: 'rgba(255,255,255,1)',
        pointBorderColor: 'rgba(116,120,186,1)',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointStyle: 'circle',
        borderWidth: 1,
        data: [
          210,
          320,
          250,
          200,
          220,
          420,
          280,
          220,
          400,
          300,
          200
        ]
      }
    ],
    labels: [
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    elements: {
      line: {
        tension: 0, // disables bezier curves
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            stepSize: 100
          }
        }
      ]
    }
  }
});

//Bar chart
var barChart = new Chart($('.bar-chart canvas'), {
  type: 'bar',
  data: {
    datasets: [
      {
        backgroundColor: 'rgba(116, 120, 186,1.0)',
        data: [
          50,
          100,
          150,
          100,
          250,
          200,
          70
        ]
      }
    ],
    labels: [
      'S',
      'M',
      'T',
      'W',
      'T',
      'F',
      'S'
    ]
  },
  options: {
    legend: {
      display: false
    },
    elements: {
      line: {
        tension: 0, // disables bezier curves
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            stepSize: 50
          }
        }
      ]
    }
  }
});

//Doughnut Chart
var doughnutChart = new Chart($(".doughnut-chart canvas"), {
  type: 'doughnut',
  data: {
    datasets: [
      {
        backgroundColor: [

          'rgba(122, 201, 149,1)', 'rgba(112, 177, 190,1)', 'rgba(116, 120, 186,1.0)'

        ],

        data: [15, 15, 70]
      }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Tablets', 'Phones', 'Desktop']
  },
  options: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 20,
        fontSize: 15,
        padding: 20
      }
    }
  }
});

//click listener for line chart buttons
$('.line-chart-buttons').on('click', (e) => {
  console.log(e.target);
  let $btn_clicked = $(e.target);
  if ($btn_clicked.attr('class').includes('line-chart-btn')) {
    $('.line-chart-buttons div').removeClass('line-chart-btn-highlighted');
    $btn_clicked.addClass('line-chart-btn-highlighted');
    if ($btn_clicked.text() === 'Daily') {
      lineChart.data.datasets[0].data = [
        210,
        320,
        250,
        200,
        220,
        420,
        280,
        220,
        400,
        300,
        200
      ];
      lineChart.data.labels = [
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ];
      lineChart.update();
    } else if ($btn_clicked.text() === 'Hourly') {
      lineChart.data.datasets[0].data = [
        110,
        220,
        150,
        500,
        120,
        220,
        380,
        420,
        500,
        200,
        100
      ];
      lineChart.data.labels = [
        '12AM',
        '1AM',
        '2AM',
        '3AM',
        '4AM',
        '5AM',
        '6AM',
        '7AM',
        '8AM',
        '9AM',
        '10AM'
      ];
      lineChart.update();

    } else if ($btn_clicked.text() === 'Weekly') {
      lineChart.data.datasets[0].data = [
        610,
        320,
        450,
        300,
        220,
        120,
        180,
        320,
        400,
        500,
        300
      ];
      lineChart.data.labels = [
        'Week1',
        'Week2',
        'Week3',
        'Week4',
        'Week5',
        'Week6',
        'Week7',
        'Week8',
        'Week9',
        'Week10',
        'Week11'
      ];
      lineChart.update();

    } else if ($btn_clicked.text() === 'Monthly') {
      lineChart.data.datasets[0].data = [
        310,
        120,
        150,
        300,
        220,
        520,
        380,
        320,
        100,
        200,
        400
      ];
      lineChart.data.labels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov'
      ];
      lineChart.update();

    }
  }
});

//close notification bar
$('.notification-bar-container .close').on('click', (e) => {
  $('.notification-bar-container').remove();
});

//send button
$('.send-button').on('click', (e) => {
  let userName = $("input[class='message-user-item']");
  let message = $("textarea[class='message-user-item']");
  if (userName.val().length === 0) {
    console.log("username empty");
    $("<span class='error-msg'>Username can not be empty!</span>").insertAfter(userName);
  }
  if (message.val().length === 0) {
    console.log("msg empty");
    $("<span class='error-msg'>Message can not be empty!</span>").insertAfter(message);
  }
  if (userName.val().length > 0 && message.val().length > 0) {
    console.log('msg sent');
    $("<span class='info-msg'>Message sent!</span>").insertBefore('.message-user-container .section-title');
    setTimeout(function() {
      $('.info-msg').remove();
      userName.val("");
      message.val("");
    }, 2000);

  }
});
// clear error messages
$('.message-user-item').on('focus', (e) => {
  $('.error-msg').remove();
});

//drop-down close button
$('.dropdown-close').on('click', (e) => {
  $(e.target.parentNode).remove();
});

//local storage - save settings

$("#send-email-notifications").on('change', function() {
  if ($(this).is(':checked')) {
    $(this).attr('value', 'true');
  } else {
    $(this).attr('value', 'false');
  }

  console.log($('#send-email-notifications').val());
});

$("#send-profile").on('change', function() {
  if ($(this).is(':checked')) {
    $(this).attr('value', 'true');
  } else {
    $(this).attr('value', 'false');
  }

  console.log($('#send-profile').val());
});

$('.save-button').on('click', (e) => {
  console.log("save");
  localStorage.setItem("send-email-notifications", $('#send-email-notifications').val());
  localStorage.setItem("send-profile-public", $('#send-profile').val());
  localStorage.setItem("timezone-value", $('.time-zone-dropdown').val());
  //localStorage.setItem("time-zone-value",$('.time-zone-dropdown:selected').text());

});

let sendProfile = localStorage.getItem("send-profile-public");
let emailNotification = localStorage.getItem("send-email-notifications");

if (emailNotification === 'true') {
  $('#send-email-notifications').prop('checked', true);
  $('#send-email-notifications').prop('value', true);

} else {
  $('#send-email-notifications').prop('checked', false);
  $('#send-email-notifications').prop('value', false);

}

if (sendProfile === 'true') {
  $('#send-profile').prop('checked', true);
  $('#send-profile').prop('value', true);

} else {
  $('#send-profile').prop('checked', false);
  $('#send-profile').prop('value', false);

}

let timezoneValue = localStorage.getItem("timezone-value");
console.log(timezoneValue);
if (timezoneValue !== null) {
  $('.time-zone-dropdown').val(timezoneValue);
}

//display notification items (dropdown) when bell icon is clicked
$('.bell-icon-container').on('click',(e)=>{
  $('.dropdown-content').toggle();
  $('.dot').hide();

});
