

      
 function AgeCalculater() {

    selectElement = document.querySelector('#years');
    year = selectElement.options[selectElement.selectedIndex].value;
    selectElementM = document.querySelector('#months');
    month = selectElementM.options[selectElementM.selectedIndex].value;
    monthN = selectElementM.options[selectElementM.selectedIndex].text;
    selectElementD = document.querySelector('#days');
    day = selectElementD.options[selectElementD.selectedIndex].value;
    selectElementG = document.querySelector('#genders');
    gender = selectElementG.options[selectElementG.selectedIndex].text;
  
    var date = new Date();
    var days = date.getDate();
    var months = 1 + date.getMonth();
    var years = date.getFullYear();
    var monthss = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if(day > days){
      days = days + monthss[months - 1];
      months = months - 1;
    }
    if(month > months){
      months = months + 12;
      years = years - 1;
    }
    var Fday = days - day;
    var Fmonth = months - month;
    var Fyear = years - year;
    var AgeType = NaN;
    if (Fyear < 1){
      AgeType = 'Infants'
    } else if(Fyear >1 && Fyear <=3){
      AgeType = 'Toddlers'
    } else if(Fyear >3 && Fyear <=5){
      AgeType = 'Preschoolers '
    } else if(Fyear >5 && Fyear <=8){
      AgeType = 'Middle Childhood '
    } else if(Fyear >8 && Fyear <=11){
      AgeType = 'Middle Childhood '
    } else if(Fyear >11 && Fyear <=14){
      AgeType = 'Young Teens '
    } else if(Fyear >14 && Fyear <=17){
      AgeType = 'Teenagers '
    } else if(Fyear >17 && Fyear <=40){
      AgeType = 'Adult '
    } else if(Fyear >=40 && Fyear <=100){
      AgeType = 'Old '
    }

    document.getElementById('Birth-ID').innerHTML = 
    'Age : '+ Fyear + ' Years | ' + Fmonth +' Months | '+ Fday + ' Days' + '<br>'+
    'Month : ' + month + ' | ' + monthN + '<br>'+
    'Age-Type : ' + AgeType + '<br>'+
    'Date : ' + month + '-' + day + '-' + year + '<br>'+
    'Gender: ' + gender;

    function download(text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', 'MyAge.txt');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
    
    document.getElementById("DownloadBTN").addEventListener("click", function(){
        var text = 'Age : '+ Fyear + ' Years | ' + Fmonth +' Months | '+ Fday + ' Days' +
        ' // Month : ' + month + ' | ' + monthN + 
        ' // Age-Type : ' + AgeType +
        ' // Date : ' + month + '-' + day + '-' + year + 
        ' // Gender: ' + gender;
        download(text);
    }, false);

    document.querySelector('.note').classList.add('hazard');
  }