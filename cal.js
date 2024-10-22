function display(num){
    result.value = result.value + num  //for giving multiple numbers
}
function clearAll(){
    result.value=""
}
function backbtn(){
    result.value=result.value.slice(0,-1) //string method- end index is excluded here (remove last item)
}
function equal(){
    
   
    try{
        result.value=eval(result.value)
        if(result.value == 'undefined'){
            result.value = 'error'
            setTimeout(()=>{result.value=""},1000)
        }
    }
    catch{
        result.value = "error"
        setTimeout(()=>{result.value=""},1000)
    }
    
}