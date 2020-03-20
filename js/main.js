//Função para exibir as seções
function hideAllSections() {
  
  $('section').hide();
  $("#a_home").show();
  $("#a_plataformas").show();
}

function showSection(a_section) {

  switch (a_section) {
      case 1:
        a_section = "#a_home";
          break;
      case 2:
        a_section = "#a_linux";
          break;
      case 3:
        a_section = "#a_git";
          break;
      case 4:
        a_section = "#a_vscode";
          break;
      case 5:
        a_section = "#a_heroku";
          break;
      case 6:
        a_section = "#a_html5";
          break;
      case 7:
        a_section = "#a_javascript";
          break;
      case 8:
        a_section = "#a_css3";
          break;
      case 9:
        a_section = "#a_es6";
          break;
      case 10:
        a_section = "#a_react";
          break;
      default:
        a_section = "#a_home";
          break;
  }

//  if (a_section === 2) {
  //  a_section = "#a_linux";
  //}
    $('section').hide();
    $(a_section).show();

}


// Função para recolher o menu quando a opção for selecionada
$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });
  
  // Função para recolher o menu quando clicar na página sem escolher nenhuma opção
  $(document).on('click', function(event){
    var $clickedOn = $(event.target),
    $collapsableItems = $('.collapse'),
    isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
    isLink = ($clickedOn.closest('#navToggle').length == 1),
    isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);
    
    if( (!isToggleButton && isLink) || isOutsideNavbar ) {
      $collapsableItems.each(function(){
        $(this).collapse('hide');
      });
    }
  });
  
  // Função para recolher o menu quando clicar na página sem escolher nenhuma opção
  $(document).on('click', function(event){
    var $clickedOn = $(event.target),
    $collapsableItems = $('.collapse'),
    isToggleButton = ($clickedOn.closest('.dropdownMenuButton').length == 1),
    isLink = ($clickedOn.closest('#dropdownMenuButton').length == 1),
    isOutsideNavbar = ($clickedOn.parents('.btn').length == 0);
    
    if( (!isToggleButton && isLink) || isOutsideNavbar ) {
      $collapsableItems.each(function(){
        $(this).collapse('hide');
      });
    }
  });