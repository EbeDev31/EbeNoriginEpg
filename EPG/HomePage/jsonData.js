
  var daydate=[

        {
          day:"Mon", 
          Date:"01.12"
        },

        {
            day:"Tue", 
            Date:"02.12"
          },
        {
            day:"Wed", 
            Date:"03.12"
          },
        {
          day:"Thur", 
          Date:"04.12"
        },
        {
          day:"Fri", 
          Date:"05.12"
        },
        {
          day:"Sat", 
          Date:"06.12"
        },
        {
          day:"Sun", 
          Date:"07.12"
        },
  ];


   var daydd=[

        {
          prog:"The Flash", 
          time:"14:00"
        },

         {
            prog:"The Arrow", 
            time:"15:00"
          },
          {
            prog:"Super Girl", 
            time:"16:00"
          },
            {
            prog:"The Vampire Diaries", 
            time:"17:00"
          },
            {
            prog:"Smallville", 
            time:"18:00"
          },
            {
            prog:"Heroes", 
            time:"19:00"
          },
           {
            prog:"Sense 8", 
            time:"20:00"
          },
  ];
/*getWeather = async (e) => {

                console.log("Starting.....");
                const api_call = await fetch("http://192.168.68.105:1337/epg");
                console.log("Done.....");
                let data="";
                let noErr=false;

                try{
                  console.log(".....Here??");
                 console.log( data = await api_call.json());
                  console.log(".....Anddd");
                  
                    }
                catch(e){

                    console.log("EbeHorror Out Catch!!!");
                    console.log(e);
                    noErr=true;

                    }

                console.log("This is Data:");
                console.log(data.channels[2]);
                console.log("Really??:");
}*/
//var guideData= getWeather();
  export{daydd};

  export{daydate};
 // export{guideData};