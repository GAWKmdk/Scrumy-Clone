Template.board_list.helpers({
  typeBoardLabel: function(type) {
     if (type == "SCRUM")
      return "Scrum";
           
      if(type == "USER_JOURNEY")
          return "User Journey";
      
      if (type == "SERVICE_MODEL")
          return "Service Model";
        
      
      if (type == "BUSINESS_CANVAS")
          return "Business Canvas";
       
      
      if (type == "USER_PERSONA")
          return "User Persona";
         return null; 
    }
    
    
});



Template.registerHelper('formatDate', function(dateCreated) {
  return moment(dateCreated).format('MM-DD-YYYY');
});