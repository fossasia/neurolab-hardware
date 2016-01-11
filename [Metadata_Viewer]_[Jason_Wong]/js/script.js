//make sure document is loaded first
document.addEventListener('DOMContentLoaded', function(){
    
    var input = document.getElementById('input');
    
    //on change in input element execute function
    input.addEventListener("change", manageMetaData, false);
    
    function manageMetaData() {
        clearMetaData();
        printMetaData();
    }

    function printMetaData() {
        //set variables
        var input = document.getElementById('input');
        var basicInfo = document.getElementById("basicInfo");
        var filesDiv = document.getElementById("files");
        var template = document.getElementById("fileTemplate");
        //set files json equal to the files uploaded
        var files = input.files;        
        //display number of files
        basicInfo.innerHTML = "You have just uploaded " + files.length + " file(s)."; 
        for(var counter = 0; counter < files.length; counter++) {
            //clone the template inside content into a new div element
            var tmpl = template.content.cloneNode(true);
            //add the information to the appropriate divs
            tmpl.querySelector('.name').innerHTML = "Name: " + files[counter].name;
            tmpl.querySelector('.size').innerHTML = "Size: " + files[counter].size + " Bytes";
            if(files[counter].type == "") { //if file type is not known
                tmpl.querySelector('.type').innerHTML = "Type: Not Available";
            } else {
                tmpl.querySelector('.type').innerHTML = "Type: " + files[counter].type;
            }
            tmpl.querySelector('.date').innerHTML = "Date: " + files[counter].lastModifiedDate;
            //append the file div
            filesDiv.appendChild(tmpl);
        }
    }
    
    function clearMetaData() {
        var filesDiv = document.getElementById("files");
        filesDiv.innerHTML = "";
    }
    
});