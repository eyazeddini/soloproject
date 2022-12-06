$(document).ready(function(){
    
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });

    $(window).scroll(function(){
        var sc=$(this).scrollTop();
        if(sc>50){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');  
        }
    })

})

function makeRecu(id,image,title,price){
    return{
    id:id,
    image:image,
    title:title,
    price:price
    }
}

var allProduct=[{name:"Falfoul",price:0.300},{name:"Fourre",price:2},{name:"Binto",price:2},{name:"Sablito",price:2},
                {name:"tomates",price:3.4},{name:"tomates cubées",price:5},{name:"sauce pizza",price:3.5},{name:"harissa",price:2},
                {name:"long penne",price:0.500},{name:"cannelloni",price:1},{name:"lasagne",price:1},{name:"Tagliatelle",price:1}]
  

function display(){
    var str=''
    for(var key in obj){
        str=str+" "+key+":"+obj[key]+" "
    }
}

var s=0; var counter=0
function Calcul(event){
    var id=event.target.id
    console.log(event)
    console.log(id)
    // var calcul={}
    // calcul.id=event.target.id
    // calcul.counter=0
    // calcul.s=0
    // calcul.sum=sum
    // return calcul
    
    for(var i=0;i<allProduct.length;i++){
        if(allProduct[i]['name']===id){
           s=s+allProduct[i]['price']
           counter++
        }
        
    }
    alert(s)

}

