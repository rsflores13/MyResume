function openTabs(evt, cityName) {
    //initialized variables
    var i, tabcontent, tablinks;
    //get tabcontent element using class name
    tabcontent = document.getElementsByClassName("tabcontent");
    //loop to each element
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    //get all tab link button
    tablinks = document.getElementsByClassName("tablinks");
    //removed active class name to all element
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    //get the selected button and marked as active
    document.getElementById(cityName).style.display = "inline";
    evt.currentTarget.className += " active";
}