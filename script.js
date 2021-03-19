var color1 = 'red';
var color2 = 'orande';
var color3 = 'blue';
var color4 = 'green';
var candieHTML= ""
var sprinkles =[];

var allColors = [color1, color2, color3, color4]


//creates the parts and adds them to their perspective containers

function candieParts(){
 var candiePiece = $('.candiePiece')
 var letters = '0123456789ABCDEF';
    var color = '#';
    for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];}
    color1=color;
var letters = '0123456789ABCDEF';
    var color = '#';
    for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];}
    color2=color;  
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];}
    color3=color; 
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];}
    color4=color;
    allColors = [color1, color2, color3, color4]
 for(let i=0;i<candiePiece.length;i++){
    setTimeout(() => {
        
    
     var width1= Math.floor(Math.random()*30+40);
     var height1= Math.floor(Math.random()*80+40);
     var width2= Math.floor(Math.random()*10+5);
     var height2= Math.floor(Math.random()*10+5);
     var left = Math.random()*20+40;
     var top = Math.random()*20+40;

     var angle1 = Math.random()*80+10;
     var angle2 = Math.random()*80+10;
     var angle3 = Math.random()*80+10;
     var angle4 = Math.random()*80+10;
     var cPart = $('<div>');
     $(cPart).addClass('candiePart')
     $(cPart).addClass('sprinkleJump')
     
     //determins if the candie part is going to be big part or dot
     var rotator = i+1;
    //  console.log(rotator%2)
     if(rotator%2==0){
         $(cPart).css("background",'radial-gradient('+color2 +','+ color1 +' 99%)')
         $(cPart).css('border-radius',angle1+"%"+ angle1+"%"+ angle1+"%"+angle1+"%");

         $(cPart).css('height','auto');
         $(cPart).css('padding-top',width2+'%');

     $(cPart).css('width', width2+'%');
     }
     else{ $(cPart).css('background','radial-gradient('+color3 +',' + color4 +' 99%)')
     $(cPart).css('border-radius',angle1+"%"+ angle2+"%"+ angle3+"%"+angle4+"%");

     $(cPart).css('height', height1+"%");
     $(cPart).css('width', width1+'%');}
    //  console.log(cPart)
         $(candiePiece[i]).append(cPart);
        }, i*60);
    }
}


//create the combined candie in the center
function combineCandie(){
    var left = Math.random()*60+20;
    var top = Math.random()*60+20;
    var candiePiece = $('.candiePiece')
    var candieParts = $('.candiePart')
    // candieParts.addClass('sprinkleJump');
    candieHTML= ""
     sprinkles =[];
    for(let i=0;i<candiePiece.length;i++){
        var left = Math.random()*80+20;
        var top = Math.random()*80+20;
        if(i==0||i%2==0){
        candieHTML+=$(candiePiece[i]).html();
        $(candiePiece[i]).html('');
        }
        else{
            $(candieParts[i]).css({'position':"absolute","left":left+'%',"top":top+'%'})
            // console.log(candiePiece[i])
            sprinkles.push($(candiePiece[i]).html());
            $(candiePiece[i]).html('');
        }
    }
    
    $('.candie').html(candieHTML);
    $('.candie').css("bottom","100%")
    var candieParts = $('.candiePart')
    
    for(let i=0;i<candieParts.length;i++){
        let left = Math.random()*10+20;
        let top = Math.random()*10+20;
        $(candieParts[i]).css({'position':"absolute","left":left+"%","top":top+"%"})
   
    }
    setTimeout(() => {
        //adds the sprinkes on to the main body
        for(let i=0;i<candieParts.length;i++){
            s=0
            let dotNumber = Math.random()*10+4;
             for(let j=0;j<dotNumber;j++){

                // console.log(sprinkles.length);
                // console.log(candieParts[i])
                // console.log(sprinkles[j])
                let left = Math.random()*99+1;
                let top = Math.random()*99+1;
                
                var sprinkle = $(sprinkles[s])
                $(sprinkle).removeClass('candiePart')
                $(sprinkle).addClass('sprinkle')
                
                sprinkle.css({'position':'absolute',"left":left+"%","top":top+"%"})
                sprinkle.addClass('sprinkleJump')
                    
                $(candieParts[i]).append(sprinkle)
                s++;
                if (s>sprinkles.length){
                    s=0}
                }
            }
        }, 500);
    }

//does the initial animation of dragging the candie parts towards the center
function candieMerge(){
    var candieParts = $('.candiePart')
    candieParts.removeClass('sprinkleJump');
    for(i=0;i<candieParts.length;i++){
        if(i==0||i%2==0){
            if(i<candieParts.length/2){
                 $(candieParts[i]).addClass("mergeRight"+i)
            }
            else if(i>candieParts.length/2){
                $(candieParts[i]).addClass("mergeLeft"+(candieParts.length-1-i))
            }

            }
        }
        setTimeout(() => {
            for(i=0;i<candieParts.length;i++){
                $(candieParts[i]).removeClass("mergeRight2")
                $(candieParts[i]).removeClass("mergeRight0")
                $(candieParts[i]).removeClass("mergeLeft1")
                $(candieParts[i]).removeClass("mergeLeft3")

            }
            
            
            
    }, 400);
}
//the canide falls
function candieDrop(){
    var candie = $('.candie');
    candie.addClass('candieDrop');
    setTimeout(() => {
        candie.removeClass('candieDrop');
        candie.html('');
    }, 800);
}


//parent function that creates the candie
function createCandie(){
    candieMerge()
    setTimeout(() => {
     combineCandie()
    }, 400);

}


//at the start, creates the button that initiates the candie creation process
function start(){
     $('.createParts').removeClass('invisibleP')
     setTimeout(() => {
        $('.createParts p').removeClass('invisibleP')
        
    }, 500);
}

//button that creates the parts of the candie
$('.createParts').on('click',event=>{
    event.stopPropagation();
    event.preventDefault();
    candieParts();
    setTimeout(() => {
        $('.mergeParts').removeClass('invisibleP')
            setTimeout(() => {
                $('.mergeParts > p').removeClass('invisibleP')
                
            }, 500);
        
    }, 500);
    $('.createParts').addClass("invisibleP")
    $('.createParts > p').addClass("invisibleP")
})

//button that merges teh parts into a single piece
$('.mergeParts').on('click',event=>{
    event.stopPropagation();
    event.preventDefault();
    createCandie();
    $('.mergeParts').addClass("invisibleP")
//candie starts pulsing and the buttons are switched   
    setTimeout(() => {
        $('.candie').addClass('rotateCandie')
        $('.eatCandie').removeClass('invisibleP')
        setTimeout(() => {
            $('.eatCandie > p').removeClass('invisibleP')
            
        }, 500);
}, 1500);
    
})

//candie drops, person's eyes lower and then begins to chew candie, after a pause, the colored backgroud starts
$('.eatCandie').on('click',event=>{
    event.stopPropagation();
    event.preventDefault();
    $('.candie').removeClass('rotateCandie')
    candieDrop();
    openMouth()
    lowerdEyes()
    setTimeout(() => {
    $('.createParts').removeClass("invisibleP")
    setTimeout(() => {
        // closeMouth()
        chew()
        happyEyes();
        FlavorColor();
        $('.createParts > p').removeClass('invisibleP')
        setTimeout(() => {
            
            $('.lips').removeClass('lipChew')
            $('.mouth').removeClass('chew')
            $('.pupil').removeClass('loweredEyes')
            $('.eye').removeClass('happyEyes')
            $('.eye2').removeClass('happyEyes')
            }, 3000);
        }, 500);
    }, 1000);
    $('.mergeParts').addClass("invisibleP")
    $('.mergeParts > p').addClass("invisibleP")
    $('.eatCandie').addClass('invisibleP')
    $('.eatCandie > p').addClass('invisibleP')
})



function closeMouth(){
    $('.lips').addClass('closeMouth')
    $('.lips').removeClass('openMouth')
}

function openMouth(){
    $('.lips').removeClass('closeMouth')
    $('.mouth').addClass('raiseMouth')

    $('.lips').addClass('openMouth')
    $('.mouth').addClass('raiseMouth')
}
function chew(){
    $('.mouth').removeClass('raiseMouth')
    $('.lips').removeClass('openMouth')
    $('.lips').removeClass('closeMouth')
    setTimeout(() => {
        $('.lips').addClass('lipChew')
        $('.mouth').addClass('chew')
        
    }, 1);
    
}
function lowerdEyes(){
    $('.pupil').addClass('loweredEyes')
}

function happyEyes(){
    $('.eye').addClass('happyEyes')
    $('.eye2').addClass('happyEyes')
}

//adds the bits and pieces into the background
function addStuff(){
    for(let i=0;i<20;i++){
    var choice = Math.floor(Math.random()*3)+1;
     var number1 = Math.floor(Math.random()*3)+1;
     var number2 = Math.floor(Math.random()*3)+1
     var width1= Math.floor(Math.random()*200)+5;
     var height1= Math.floor(Math.random()*100)+5;
     var left = Math.random()*200-100;
     var top = Math.random()*200-100;
     var angle1 = Math.random()*80+10;
     var angle2 = Math.random()*80+10;
     var angle3 = Math.random()*80+10;
     var angle4 = Math.random()*80+10;
     var cPart = $('<div>');
     switch(choice){
         case 1:
            $(cPart).css('background','radial-gradient('+allColors[number1] +',' + allColors[number2] +' 99%)')

             break;
        case 2:
            $(cPart).css("background", "linear-gradient(to right," + allColors[number1]+ "," + allColors[number2]+' 20%)');
            

             break;
        case 3:
            $(cPart).css('background-color',allColors[number1])

             break;
        case 4:
            $(cPart).css('background-color',allColors[number2])
             break;
         
     }
     $(cPart).css('border-radius',angle1+"%"+ angle2+"%"+ angle3+"%"+angle4+"%");
     $(cPart).css({'position':"absolute","left":left+'%',"top":top+'%'})
     $(cPart).css('opacity',"70%")
     $(cPart).css('height', height1+"%");
     $(cPart).css('width', width1+'%');
     $('.interiorMind').append(cPart)
    }
}

//changes the background color per chew and then adds the differenc shapes
function FlavorColor(){
    $('.interiorMind').css("background-color",'white')
    $('.interiorMind').html("")
    
            $('.interiorMind').css("background-color",color1)
            addStuff()
            setTimeout(() => {
                $('.interiorMind').css("background-color",color2)
                addStuff()
                setTimeout(() => {
                    $('.interiorMind').css("background-color",color3)
                    addStuff()
                    setTimeout(() => {
                        $('.interiorMind').css("background-color",color4)
                        addStuff()
                        
                    }, 750);
                    
                }, 750);
                
            }, 750);}

start();
// $('  .lips').addClass('lipChew')

closeMouth();
// $('.eyes').addClass('happyEyes')
