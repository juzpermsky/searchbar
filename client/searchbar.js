
  Template.body.helpers({
    settings: function() {
      return {
        position: "bottom",
        limit: 5,
        rules: [
          {
            collection: "test",
            options: "",
            matchAll: true,
            field: "name",
            template: Template.completeResult
          }]
      };
    }
  });
Template.body.events({
  "click #test>.value": function(event, template){
    //$("#test>.value").css({position: 'absolute'});
     $("#test>.value").animate({width: "toggle", paddingLeft: "toggle", paddingRight:"toggle"},"fast");

     $("#test>.property").removeClass("full").addClass("half");
  },
  "click #test>.property.half": function(event, template){
      console.log(event);
/*
      if (event.offsetX > event.target.offsetWidth) {
          span.className = 'c2';
      } else {
          span.className = 'c1';
*/
     $("#test>.property").removeClass("half").addClass("full");
    //$("#test>.value").css({position: 'relative'});
     $("#test>.value").animate({width: "toggle", paddingLeft: "toggle", paddingRight:"toggle"},"fast");
  }

});
