const submitForm = document.getElementById('tempreature_form');

const CallApi = async(e) => {
    e.preventDefault();
  var cityname= document.getElementById('cityname');
  var result_box=document.getElementById('result');
  var data_hide=document.getElementById('data_hide');
  var tempreature=document.getElementById('tempreature');
  const wheathericon=document.getElementById('temp_status');

    if(cityname.value==''){
        data_hide.style.visibility='hidden';

        result_box.style.color = "red";
        result_box.style.fontWeight = "bold";

        result_box.innerHTML=`Please write the city name`;
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=064ef6421859b9597ed82e4a5fc500a8`;
            var api=await fetch(url);
            var response=await api.json();
            var result=[response];
            const name=result[0].name+' , '+result[0].sys.country
            const status=result[0].weather[0].main;
            result_box.style.color = "white";
                  console.log(status);
            result_box.innerHTML=name;
            tempreature.innerHTML=result[0].main.temp;
            if(status=='Sunny'){
                wheathericon.innerHTML=" <i class='fas fa-sun' style='color: #eccc68;'></i> ";
               }else if(status=='Clouds'){
                wheathericon.innerHTML=" <i class='fas fa-cloud' style='color: #dfe4ea;'></i> ";
    
               }
               else if(status=='Rainy'){
                wheathericon.innerHTML=" <i class='fas fa-cloud-rain' style='color: #a4b0be;'></i> ";
    
               }
               else if(status=='Fog'){
                wheathericon.innerHTML=" <i class='fas fa-smog' style='color:#00dcff;'></i> ";
    
               }
               else if(status=='Rain'){
                wheathericon.innerHTML=" <i class='fas fa-cloud-rain' style='color: #aba9a9;'></i> ";
    
               }
               else{
                wheathericon.innerHTML=" <i class='fas fa-sun' style='color: yellow;'></i> ";
    
               }
            data_hide.style.visibility='visible';
        }catch{
            data_hide.style.visibility='hidden';

            result_box.style.color = "red";
            result_box.style.fontWeight = "bold";

            result_box.innerHTML=`Sorry ${cityname.value} city does not exist or another error try again`;
        }
      
        
    }
}

submitForm.addEventListener('submit', CallApi);
function  getCurrentDay(){
    var currentdate=new Date();
    var weekday = new Array(7);
   weekday[0] = "Sun";
   weekday[1] = "Mon";
   weekday[2] = "Tues";
   weekday[3] = "Wed";
   weekday[4] = "Thur";
   weekday[5] = "Fri";
   weekday[6] = "Sat";
   var DAY = weekday[currentdate.getDay()];
   //  console.log(DAY);
   return DAY;
}
function getCurrentTime(){
    var now=new Date();
    var months=now.getMonth();
    var date=now.getDate() ;
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    // var year=now.getFullYear() ;
    let hours=now.getHours();
    let minute=now.getMinutes();
    let period='AM';
    
    // console.log(month[months]+'/'+date);
    // return hours;
    return date+' '+month[months] ;
 }

getCurrentTime();
const day=document.getElementById('day');
const today_date=document.getElementById('today_date');

day.innerHTML=getCurrentDay();
today_date.innerHTML=getCurrentTime();
