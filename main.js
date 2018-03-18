$(document).ready(function(){
    $('button').on('click',function(){
        var Fahrenheits, Celsius;
        Celsius = $('#C').val();
        Fahrenheits = $('#F').val();
        $("#Cbutton").click(function(){
            alert(Celsius+'˚C '+" is  "+(Celsius * 1.8 + 32)+"˚F");
        });

        $("#Fbutton").click(function(){
            alert(Fahrenheits+"˚F "+" is  "+((Fahrenheits - 32) * .5556)+"˚C");
        });
    });
});