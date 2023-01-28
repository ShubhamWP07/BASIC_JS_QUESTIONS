// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm






 let getdate = {
    now : new Date(),
    year : function(){
      return this.now.getFullYear();
    },
    month : function(){
      return this.now.getMonth()+1;
    },
    date : function(){
      return this.now.getDate();
    },
    hour : function(){
      return this.now.getHours();
    },
    minute : function(){
      return this.now.getMinutes();
    }


  }

    //     - YYYY-MM-DD HH:mm

  console.log(getdate.year(),"-",getdate.month(),"-",getdate.date(), getdate.hour(),":",getdate.minute());

  //  OUTPUT

  //  2023 - 1 - 15 21 : 29


  // - DD-MM-YYYY HH:mm

  console.log(getdate.date(),"-",getdate.month(),"-",getdate.year(), getdate.hour(),":",getdate.minute());

  // OUTPUT 
  
  // 15 - 1 - 2023 21 : 33


  // DD/MM/YYYY HH:mm

  console.log(getdate.date(),"/",getdate.month(),"/",getdate.year(), getdate.hour(),":",getdate.minute());

  // OUTPUT

  //   15 / 1 / 2023 21 : 36