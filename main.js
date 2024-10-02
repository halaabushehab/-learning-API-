$('#calc_btn').on('click',()=>{
 let first_input=$('#first_input ').val();
 let second_input=$('#second_input ').val();

 let result = divide((first_input), (second_input))
 if(result != 'unknown' ){
    $('#Result ').html(result);

 }

})

function divide(N1,N2){
    if(N2==0){
    //    alert("you can't divide by zero") 
    $('#Result ').html("you can't divide by zero");

    return "unknown"
    }
return N1/N2
}