
      $(document).on('click', '.enviar-form-home', function(){

        var id_modalidade = "\"" + localStorage.id_modalidade + "\"";
        var nome_modalidade = "\"" + localStorage.Modalidade + "\"";
        var valor_consorcio = "\"" + localStorage.valor_consorcio + "\"";
        var valor_parcela = "\"" + localStorage.parcelas + "\"";
        var nome = "\"" + $('[name="nome"]').val() + "\" ";
        var telefone = "\"" + $('[name="telefone"]').val() + "\" ";
        var email = "\"" + $('[name="email"]').val() + "\" ";
        var event = new Date();
        var data = "\"" + event.toISOString() + "\"";

        var xhr = new XMLHttpRequest();

        var simula = '{"id_modalidade":' + id_modalidade + ',"nome_modalidade":' + nome_modalidade + ', "valor_bem":' + valor_consorcio + ',"valor_parcela":' + valor_parcela + ', "acao":"CTA1 - SIMULAÇÃO", "forma_contato":"1", "nome_lead":' + nome + ', "email_lead":' + email + ', "celular_lead":' + telefone + ',"ip":"186.202.173.147", "data":' + data + '}';

        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
              console.log("Informações enviadas: " + simula);
              console.log(this.responseText);
              $("#modal-cta-1-step-4").fadeOut(9);
              console.log("Enviado com sucesso");
              $("#modal-obrigado").fadeIn(9);
            }
          });
        xhr.open("POST","https://www.consortweb.com.br/restful/api/post/insert_simulacao.php",true);
        xhr.send(simula);

      });

      $(document).on('click', '.close-modal', function(){
        location.reload();
      });


      // INICIO FORM PRINCIPAL

        $('#valor-auto').mask('00,000,000,000,000.00', {reverse: true});
        $('#valor-moto').mask('00,000,000,000,000.00', {reverse: true});
        $('#valor-imovel').mask('00,000,000,000,000.00', {reverse: true});
        function mascaraValor(valor) {
            valor = valor.toString().replace(/\D/g,"");
            valor = valor.toString().replace(/(\d)(\d{8})$/,"$1.$2");
            valor = valor.toString().replace(/(\d)(\d{5})$/,"$1.$2");
            valor = valor.toString().replace(/(\d)(\d{2})$/,"$1,$2");
            return valor
        }

        // AUTO SOMA
        $(document).on("click", "#botao-continuar", function(){

        var valor_auto = $("#valor-auto").val();

        var formatado = Math.round(valor_auto.replace(/\D(\d{2})$/, '.$1').replace(/[^\d.]+/g, ""));

        var soma_auto_1 = formatado / 100 * 2;
        var soma_auto_2 = formatado / 100 * 4;
        var soma_auto_3 = formatado / 100 * 6;

         $('.valor_mudar_1').html("R$ "+mascaraValor(soma_auto_1.toFixed(2)));
         $('.valor_mudar_2').html("R$ "+mascaraValor(soma_auto_2.toFixed(2)));
         $('.valor_mudar_3').html("R$ "+mascaraValor(soma_auto_3.toFixed(2)));

         localStorage.removeItem('valor_consorcio');
         localStorage.setItem('valor_consorcio', formatado);

        var data_valor_parcela1 = $('#data-valor-parcela-1').val(soma_auto_1);
        var data_valor_parcela2 = $('#data-valor-parcela-2').val(soma_auto_2);
        var data_valor_parcela3 = $('#data-valor-parcela-3').val(soma_auto_3);


      });

      // MOTO SOMA
        $(document).on("click", "#moto-step2-pos4", function(){

        var valor_moto = $("#valor-moto").val();

        var formatado = Math.round(valor_moto.replace(/\D(\d{2})$/, '.$1').replace(/[^\d.]+/g, ""));

        var soma_moto_1 = formatado / 100 * 2;
        var soma_moto_2 = formatado / 100 * 4;
        var soma_moto_3 = formatado / 100 * 6;

         $('.valor_mudar_1').html("R$ "+mascaraValor(soma_moto_1.toFixed(2)));
         $('.valor_mudar_2').html("R$ "+mascaraValor(soma_moto_2.toFixed(2)));
         $('.valor_mudar_3').html("R$ "+mascaraValor(soma_moto_3.toFixed(2)));

         localStorage.removeItem('valor_consorcio');
         localStorage.setItem('valor_consorcio', formatado);

         var data_valor_parcela1 = $('#data-valor-parcela-moto-1').val(soma_moto_1);
         var data_valor_parcela2 = $('#data-valor-parcela-moto-2').val(soma_moto_2);
         var data_valor_parcela3 = $('#data-valor-parcela-moto-3').val(soma_moto_3);

      });

      // IMOVEL SOMA
        $(document).on("click", "#imovel-step2-pos4", function(){

        var valor_imovel = $("#valor-imovel").val();

        var formatado = Math.round(valor_imovel.replace(/\D(\d{2})$/, '.$1').replace(/[^\d.]+/g, ""));

        var soma_imovel_1 = formatado / 100 * 2;
        var soma_imovel_2 = formatado / 100 * 4;
        var soma_imovel_3 = formatado / 100 * 6;

         $('.valor_mudar_1').html("R$ "+mascaraValor(soma_imovel_1.toFixed(2)));
         $('.valor_mudar_2').html("R$ "+mascaraValor(soma_imovel_2.toFixed(2)));
         $('.valor_mudar_3').html("R$ "+mascaraValor(soma_imovel_3.toFixed(2)));

         localStorage.removeItem('valor_consorcio');
         localStorage.setItem('valor_consorcio', formatado);

         var data_valor_parcela1 = $('#data-valor-parcela-imovel-1').val(soma_imovel_1);
         var data_valor_parcela2 = $('#data-valor-parcela-imovel-2').val(soma_imovel_2);
         var data_valor_parcela3 = $('#data-valor-parcela-imovel-3').val(soma_imovel_3);

      });


      //AUTOMOVEL
        $(document).on("click", "#auto-step2-pos1", function(){
         $('.valor_mudar_1').html("R$ 250,00");
         $('.valor_mudar_2').html("R$ 500,00");
         $('.valor_mudar_3').html("R$ 750,00");

         localStorage.removeItem('valor_consorcio');
         localStorage.setItem('valor_consorcio','25000');


        var data_valor_parcela1 = $('#data-valor-parcela-1').val("250");
        var data_valor_parcela2 = $('#data-valor-parcela-2').val("500");
        var data_valor_parcela3 = $('#data-valor-parcela-3').val("750");

      });

        $(document).on("click", "#auto-step2-pos2", function(){
         $('.valor_mudar_1').html("R$ 800,00");
         $('.valor_mudar_2').html("R$ 1000,00");
         $('.valor_mudar_3').html("R$ 1500,00");

        localStorage.removeItem('valor_consorcio');
        localStorage.setItem('valor_consorcio','50000');

        var data_valor_parcela1 = $('#data-valor-parcela-1').val("800");
        var data_valor_parcela2 = $('#data-valor-parcela-2').val("1000");
        var data_valor_parcela3 = $('#data-valor-parcela-3').val("1500");

      });
        $(document).on("click", "#auto-step2-pos3", function(){
         $('.valor_mudar_1').html("R$ 1.500,00");
         $('.valor_mudar_2').html("R$ 2.000,00");
         $('.valor_mudar_3').html("R$ 3.000,00");

         localStorage.removeItem('valor_consorcio');
         localStorage.setItem('valor_consorcio','100000');


         var data_valor_parcela1 = $('#data-valor-parcela-1').val("1500");
         var data_valor_parcela2 = $('#data-valor-parcela-2').val("2000");
         var data_valor_parcela3 = $('#data-valor-parcela-3').val("3000");

      });

      //MOTO
      $(document).on("click", "#moto-step2-pos1", function(){
       $('.valor_mudar_1').html("R$ 150,00");
       $('.valor_mudar_2').html("R$ 250,00");
       $('.valor_mudar_3').html("R$ 450,00");

       localStorage.removeItem('valor_consorcio');
       localStorage.setItem('valor_consorcio','7500');

       var data_valor_parcela1 = $('#data-valor-parcela-moto-1').val("150");
       var data_valor_parcela2 = $('#data-valor-parcela-moto-2').val("250");
       var data_valor_parcela3 = $('#data-valor-parcela-moto-3').val("450");


      });
      $(document).on("click", "#moto-step2-pos2", function(){
       $('.valor_mudar_1').html("R$ 200,00");
       $('.valor_mudar_2').html("R$ 300,00");
       $('.valor_mudar_3').html("R$ 500,00");

       localStorage.removeItem('valor_consorcio');
       localStorage.setItem('valor_consorcio','10000');

       var data_valor_parcela1 = $('#data-valor-parcela-moto-1').val("200");
       var data_valor_parcela2 = $('#data-valor-parcela-moto-2').val("300");
       var data_valor_parcela3 = $('#data-valor-parcela-moto-3').val("500");
      });
      $(document).on("click", "#moto-step2-pos3", function(){
       $('.valor_mudar_1').html("R$ 300,00");
       $('.valor_mudar_2').html("R$ 500,00");
       $('.valor_mudar_3').html("R$ 800,00");

       localStorage.removeItem('valor_consorcio');
       localStorage.setItem('valor_consorcio','15000');

       var data_valor_parcela1 = $('#data-valor-parcela-moto-1').val("300");
       var data_valor_parcela2 = $('#data-valor-parcela-moto-2').val("500");
       var data_valor_parcela3 = $('#data-valor-parcela-moto-3').val("800");
      });

      //Imovel VALOR BEM
      $(document).on("click", "#imovel-step2-pos1", function(){
       $('.valor_mudar_1').html("R$ 650,00");
       $('.valor_mudar_2').html("R$ 800,00");
       $('.valor_mudar_3').html("R$ 1.000,00");

       localStorage.removeItem('valor_consorcio');
       localStorage.setItem('valor_consorcio','120000');

       var data_valor_parcela1 = $('#data-valor-parcela-imovel-1').val("650");
       var data_valor_parcela2 = $('#data-valor-parcela-imovel-2').val("800");
       var data_valor_parcela3 = $('#data-valor-parcela-imovel-3').val("1000");

      });
      $(document).on("click", "#imovel-step2-pos2", function(){
       $('.valor_mudar_1').html("R$ 1.000,00");
       $('.valor_mudar_2').html("R$ 1.200,00");
       $('.valor_mudar_3').html("R$ 1.500,00");

       localStorage.removeItem('valor_consorcio');
       localStorage.setItem('valor_consorcio','180000');

       var data_valor_parcela1 = $('#data-valor-parcela-imovel-1').val("1000");
       var data_valor_parcela2 = $('#data-valor-parcela-imovel-2').val("1200");
       var data_valor_parcela3 = $('#data-valor-parcela-imovel-3').val("1500");
      });
      $(document).on("click", "#imovel-step2-pos3", function(){
       $('.valor_mudar_1').html("R$ 1.350,00");
       $('.valor_mudar_2').html("R$ 1.600,00");
       $('.valor_mudar_3').html("R$ 2.000,00");

       localStorage.removeItem('valor_consorcio');
       localStorage.setItem('valor_consorcio','240000');

       var data_valor_parcela1 = $('#data-valor-parcela-imovel-1').val("1350");
       var data_valor_parcela2 = $('#data-valor-parcela-imovel-2').val("1600");
       var data_valor_parcela3 = $('#data-valor-parcela-imovel-3').val("2000");
      });

      // SETAR VALORES
      // AUTO SETAR VALORES
      $(document).on("click", "#auto-step3-pos1", function(){
          localStorage.removeItem('parcelas');
          localStorage.setItem('parcelas', $('#data-valor-parcela-1').val());
      });
      $(document).on("click", "#auto-step3-pos2", function(){
        localStorage.removeItem('parcelas');
        localStorage.setItem('parcelas', $('#data-valor-parcela-2').val());
      });
      $(document).on("click", "#auto-step3-pos3", function(){
        localStorage.removeItem('parcelas');
        localStorage.setItem('parcelas', $('#data-valor-parcela-3').val());
      });

      // MOTO SETAR VALORES

      $(document).on("click", "#moto-step3-pos1", function(){
        localStorage.removeItem('parcelas');
        localStorage.setItem('parcelas', $('#data-valor-parcela-moto-1').val());
      });
      $(document).on("click", "#moto-step3-pos2", function(){
        localStorage.removeItem('parcelas');
        localStorage.setItem('parcelas', $('#data-valor-parcela-moto-2').val());
      });
      $(document).on("click", "#moto-step3-pos3", function(){
        localStorage.removeItem('parcelas');
        localStorage.setItem('parcelas', $('#data-valor-parcela-moto-3').val());
      });

      // IMOVEL SETAR VALROES

      $(document).on("click", "#imovel-step3-pos1", function(){
        localStorage.removeItem('parcelas');
        localStorage.setItem('parcelas', $('#data-valor-parcela-imovel-1').val());
      });
      $(document).on("click", "#imovel-step3-pos2", function(){
        localStorage.removeItem('parcelas');
        localStorage.setItem('parcelas', $('#data-valor-parcela-imovel-2').val());
      });
      $(document).on("click", "#imovel-step3-pos3", function(){
        localStorage.removeItem('parcelas');
        localStorage.setItem('parcelas', $('#data-valor-parcela-imovel-3').val());
      });

        // FIM FORM PRINCIPAL




$(document).ready(function(){
    $("#auto-step1").click(function(){
      localStorage.setItem('Modalidade','AUTO');
        localStorage.setItem('id_modalidade','1');
   });
    $("#moto-step1").click(function(){
      localStorage.setItem('Modalidade','MOTO');
        localStorage.setItem('id_modalidade','2');
   });
    $("#imovel-step1").click(function(){
      localStorage.setItem('Modalidade','IMÓVEL');
        localStorage.setItem('id_modalidade','3');
   });
    $("#step1-pos4").click(function(){
      localStorage.setItem('Modalidade','SERVIÇO');
        localStorage.setItem('id_modalidade','4');
   });
  $("step1-pos4").click(function(){
      localStorage.setItem('Modalidade','Serviços');
        localStorage.setItem('id_modalidade','4');
   });
    $("#auto-step2-pos1").click(function(){
        var cvalue = parseFloat(this.innerText.trim().substring(3))*1000
        localStorage.setItem('valor_consorcio',cvalue);
    });
    $("#auto-step2-pos2").click(function(){
      var cvalue = parseFloat(this.innerText.trim().substring(3))*1000
        localStorage.setItem('valor_consorcio',cvalue);
    });
    $("#auto-step2-pos3").click(function(){
      var cvalue = parseFloat(this.innerText.trim().substring(3))*1000
        localStorage.setItem('valor_consorcio',cvalue);
    });
    $("#auto-step2-pos4").click(function(){
        var cvalue = parseFloat(this.innerText.trim().substring(3))*1000
        localStorage.setItem('valor_consorcio',cvalue);

    });
    $("#auto-step3-pos1").click(function(){
        var pvalue = parseFloat(this.innerText.trim().substring(3))
        localStorage.setItem('parcela',pvalue);
    });
     $("#auto-step3-pos2").click(function(){
      var pvalue = parseFloat(this.innerText.trim().substring(3))
        localStorage.setItem('parcela',pvalue);
    });
     $("#auto-step3-pos3").click(function(){
      var pvalue = parseFloat(this.innerText.trim().substring(3))
        localStorage.setItem('parcela',pvalue);
    });
     $("#auto-step3-pos4").click(function(){
      var pvalue = parseFloat(this.innerText.trim().substring(3))
        localStorage.setItem('parcela',pvalue);
    });

    $("#form-passo-a-passo-sonho").change(function(){
        var passo_modalidade = $(this).children("option:selected").val();


    switch (passo_modalidade) {
      case "1":
        localStorage.setItem('titulo_modalidade','AUTO');
        break;
      case "2":
        localStorage.setItem('titulo_modalidade','MOTO');
        break;
      case "3":
        localStorage.setItem('titulo_modalidade','IMÓVEL');
        break;
      case "4":
        localStorage.setItem('titulo_modalidade','SERVIÇO');
        break;
    }

      localStorage.setItem('passo_modalidade', passo_modalidade);

    });

  $("#start-passo-a-passo").click(function(){
    var passo_valor = $('[name="form-passo-a-passo-valor"]').val();
    var passo_parcela = $('[name="form-passo-a-passo-parcela"]').val();

    localStorage.setItem('passo_valor', passo_valor);
    localStorage.setItem('passo_parcela', passo_parcela);
  });

});
