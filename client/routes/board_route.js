Router.route("/board/:_id", function() {
 var boardId = this.params._id;
 this.subscribe("boardById", boardId);
 this.subscribe("storyByBoardId", boardId);
 this.subscribe("taskByBoardId", boardId);
 Session.set("currentBoardId", boardId);
    
    
 this.render("board", {
  data: function() {
   return {
    boardSelected: BoardDB.findOneFaster({
     _id: boardId
    }),
    storiesForBoard: StoryDB.findFaster({
     boardId: boardId
    })
       
       ///add code for type specific
       
       // <option value="SCRUM">Scrum</option>
       //  <option value="USER_JOURNEY">User Journey</option>
      // <option value="SERVICE_MODEL">Service Model</option>
      // <option value="BUSINESS_CANVAS">Business Canvas</option>
      // <option value="USER_PERSONA">User Persona </option>
       
   }
  }
 });
}, {
 name: "board", 
  fastRender: true
});