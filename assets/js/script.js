$("document").ready(function(){

    let numero1 = 0;
    let numero2 = 0;
    let resultado =0;

    $("#btnSumar").click(()=>{
    
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 =$("#numero1").val();

        if (numero1===""){
            $("#error1").text("Debe agregar el primer numero:")
            $("#error1").css("color","red");
            return;
        }
        if(!/^\d+$/.test(numero1)){
            $("#error1").text("Debe solo agregar numeros:")
            $("#error1").css("color","red");
            return;
        }



        numero2 =$("#numero2").val();

        
        if (numero2===""){
            $("#error2").text("Debe agregar el segundo numero:")
            $("#error2").css("color","red");
            return;
        }
        if(!/^\d+$/.test(numero2)){
            $("#error2").text("Debe solo agregar numeros:")
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1)+parseInt(numero2);

        $("#resultado").text(resultado);

    })

    $("#btnRestar").click(()=>{
    
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 =$("#numero1").val();

        if (numero1===""){
            $("#error1").text("Debe agregar el primer numero:")
            $("#error1").css("color","red");
            return;
        }
        if(!/^\d+$/.test(numero1)){
            $("#error1").text("Debe solo agregar numeros:")
            $("#error1").css("color","red");
            return;
        }


        numero2 =$("#numero2").val();

        
        if (numero2===""){
            $("#error2").text("Debe agregar el segundo numero:")
            $("#error2").css("color","red");
            return;
        }
        if(!/^\d+$/.test(numero2)){
            $("#error2").text("Debe solo agregar numeros:")
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1)-parseInt(numero2);

        $("#resultado").text(resultado);

    })
    $("#btnMultiplicar").click(()=>{
    
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 =$("#numero1").val();

        if (numero1===""){
            $("#error1").text("Debe agregar el primer numero:")
            $("#error1").css("color","red");
            return;
        }
        if(!/^\d+$/.test(numero1)){
            $("#error1").text("Debe solo agregar numeros:")
            $("#error1").css("color","red");
            return;
        }


        numero2 =$("#numero2").val();

        
        if (numero2===""){
            $("#error2").text("Debe agregar el segundo numero:")
            $("#error2").css("color","red");
            return;
        }
        if(!/^\d+$/.test(numero2)){
            $("#error2").text("Debe solo agregar numeros:")
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1)*parseInt(numero2);

        $("#resultado").text(resultado);

    })
    $("#btnDividir").click(()=>{
    
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 =$("#numero1").val();

        if (numero1===""){
            $("#error1").text("Debe agregar el primer numero:")
            $("#error1").css("color","red");
            return;
        }
        if(!/^\d+$/.test(numero1)){
            $("#error1").text("Debe solo agregar numeros:")
            $("#error1").css("color","red");
            return;
        }


        numero2 =$("#numero2").val();

        
        if (numero2===""){
            $("#error2").text("Debe agregar el segundo numero:")
            $("#error2").css("color","red");
            return;
        }
        if (numero2==="0"){
            $("#error2").text("El segundo numero no puedo ser 0:")
            $("#error2").css("color","red");
            return;
        }
        if(!/^\d+$/.test(numero2)){
            $("#error2").text("Debe solo agregar numeros:")
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1)/parseInt(numero2);

        $("#resultado").text(resultado);


    })
    $("#btnLimpiar").click(()=>{
        limpiar();
    })

    function limpiar(){
        $("#numero1").val("");
        $("#numero2").val("");
        $("#resultado").val("");
    }
});