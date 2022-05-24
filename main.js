var guest_names_list=[]
function adding(){
    guest_names=document.getElementById("guest_name").value
   guest_names_list.push(guest_names)
   document.getElementById("guest").innerHTML=guest_names_list
console.log(typeof(guest_names_list))
document.getElementById("guest_name").value=''
}

var remove_commas=[]

function show(){
  
var list_len= guest_names_list.length
    var show_list=[]
    
    for(var i =0 ;i <list_len;i++){
show_list.push("<h4>" + guest_names_list[i] + "</h4>")
    }
    console.log(show_list)
    remove_commas=show_list.join(" ")
    document.getElementById("show_guest_list").innerHTML=remove_commas
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"
}
function sort(){
    var sort_list=[]
    sort_list=guest_names_list.sort()
    var full_sort_list=[]
    for(var m =0 ;m<guest_names_list.length;m++){
        full_sort_list.push("<h4>"+ guest_names_list[m] + "</h4>")
    }
    var remove_commas_sort=[]
     remove_commas_sort=full_sort_list.join(" ")
 document.getElementById("show_sort_guest_list").innerHTML=remove_commas_sort
}
function search(){
var search_input= document.getElementById("search_name").value
var search_length=guest_names_list.length
var found=0
for(var k = 0 ;k <search_length;k++){
   if(search_input==guest_names_list[k]){
      found =found+1
      
    }
    document.getElementById("show_search_name").innerHTML=search_input + " Found " + found + " time/s"
   
}
}
