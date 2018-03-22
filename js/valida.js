//console.log($('input'));
let validateForm = function validateForm(e){
  let $button = $(this);
  //Obtain form
  let $form = $button.parent('form');

  //Obtatin required elements
  let $required = $form.find('*[required]'); //Input / *

  validateRequiredFields($required);

  //Obtain any other element

  //Validate required elements

  e.preventDefault(); //Don't execute

}

let validateRequiredFields = function validateRequiredFields(fields){
    console.log(fields);
    $.each(fields, function() {
      let element = $(this);
      console.log(element);
    });
}
