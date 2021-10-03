SimpleCountdown.addTheme(
    {
      baby: {
         content: {
           title: "Baby",
           custom: '<div class="head"></div>' +
           '<div class="hair"></div>' +
           '<div class="eye eye-left"></div>' +
           '<div class="eye eye-right"></div>' +
           '<div class="ear ear-left"></div>' +
           '<div class="ear ear-right"></div>' +
           '<div class="cheek cheek-left"></div>' +
           '<div class="cheek cheek-right"></div>' +
           '<div class="pacifier">' +
             '<div class="pacifier-side pacifier-side-left"></div>' +
             '<div class="pacifier-side pacifier-side-right"></div>' +
             '<div class="pacifier-middle"></div>' +
           '</div>'
         },
         style: {
           container: ".sc-container{" +
              "font-family: sans-serif, 'Arial', 'Helvetica';" +
              "background: #131313;" +
              "background: -moz-linear-gradient(top,  #131313 0%, #2c2c2c 86%, #2c2c2c 86%, #474747 100%, #595959 100%, #666666 100%, #000000 100%, #000000 100%, #111111 100%, #000000 100%, #474747 100%, #1c1c1c 100%, #2b2b2b 100%, #4c4c4c 100%, #111111 100%, #111111 101%);" +
              "background: -webkit-linear-gradient(top,  #131313 0%,#2c2c2c 86%,#2c2c2c 86%,#474747 100%,#595959 100%,#666666 100%,#000000 100%,#000000 100%,#111111 100%,#000000 100%,#474747 100%,#1c1c1c 100%,#2b2b2b 100%,#4c4c4c 100%,#111111 100%,#111111 101%);" +
              "background: linear-gradient(to bottom,  #131313 0%,#2c2c2c 86%,#2c2c2c 86%,#474747 100%,#595959 100%,#666666 100%,#000000 100%,#000000 100%,#111111 100%,#000000 100%,#474747 100%,#1c1c1c 100%,#2b2b2b 100%,#4c4c4c 100%,#111111 100%,#111111 101%);" +
              "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#131313', endColorstr='#111111',GradientType=0 );" +
              "}",
           title: ".sc-title{" +
              "font-weight: 900;" +
              "font-size: 3em;" +
              "font-family: Verdana, Geneva, sans-serif;" +
              "color: rgba(255,255,255,1);" +
              "text-shadow: 2px 2px rgba(0,0,0,0.1);" +
           "}",
           brick:
            ".sc-brick{" +
              "margin: 5% 1%;" +
              "width: 75px;" +
              "height: 75px;" +
              "padding: 20px;" +
              "display:inline-block;" +
              "border-radius: 50% 50%;" +
            "}" +
  
            ".sc-brick:nth-child(1){" +
              "border: 2px solid #ffffff;" +
              "box-shadow: 1px 0.5px rgba(255,255,255,0.8);" +
            "}" +
            ".sc-brick:nth-child(1) .number{" +
              "color: rgba(255,255,255,0.8);" +
            "}" +
            ".sc-brick:nth-child(1) .legend{" +
              "color: #1B5E20;" +
              "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
            "}" +
  
            ".sc-brick:nth-child(2){" +
              "border: 2px solid #ffffff;" +
              "box-shadow: 1px 0.5px rgba(255,255,255,0.8);" +
            "}" +
            ".sc-brick:nth-child(2) .number{" +
              "color: rgba(255,255,255,0.9);" +
              "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
            "}" +
            ".sc-brick:nth-child(2) .legend{" +
              "color: #2E7D32;" +
              "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
            "}" +
  
            ".sc-brick:nth-child(3){" +
              "border: 2px solid #ffffff;" +
              "box-shadow: 1px 0.5px rgba(255,255,255,0.8);" +
            "}" +
            ".sc-brick:nth-child(3) .legend{" +
              "color: #388E3C;" +
              "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
            "}" +
            ".sc-brick:nth-child(3) .number{" +
              "color: rgba(255,255,255,1);" +
              "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
            "}" +
  
            ".sc-brick:nth-child(4){" +
              "border: 2px solid #ffffff;" +
              "box-shadow: 1px 0.5px rgba(255,255,255,0.8);" +
            "}" +
            ".sc-brick:nth-child(4) .number{" +
              "color: #FFD740;" +
              "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
            "}" +
            ".sc-brick:nth-child(4) .legend{" +
              "color: #388E3C;" +
              "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
            "}",
  
           number: ".sc-number{ " +
              "font-size: 1.7em;" +
              "color: white;" +
              "font-weight: 900;" +
              "text-shadow: 2px 2px rgba(0,0,0,0.1);" +
              "font-family: Tahoma, Geneva, sans-serif;" +
              "display: block;" +
              "margin-top: 10%;" +
           "}",
  
           legend:".sc-legend{" +
              "display: block;" +
              "font-size: 12px;" +
              "text-transform: uppercase;" +
              "margin-top: 8%;" +
              "color: #FFD740;" +
              "text-shadow: 0px 1px rgba(255,255,255,0.2), 2px 2px rgba(0,0,0,0.1);" +
              "text-shadow: 0.3px 0.2px rgba(255,255,255,0.5);" +
            "}",

            custom: ".sc-custom {" +
              "background-color: #29D5C9;" +
              "height: 300px;" +
              "width: 300px;" +
              "border-radius: 50%;" +
              "margin: 30px auto;" +
              "position: relative;" +
            "}" + 
            " .head {" +
              "background-color: #FDE9DA;" +
              "height: 50%;" +
              "width: 60%;" +
              "border-radius: 50%;" +
              "position: absolute;" +
              "top: 26%;" +
              "left: 20%;" +
              "box-shadow: 0px 3px 20px #177871;" +
            "}" +
            " .eye {" +
              "background-color: #333;" +
              "height: 5.5%;" +
              "width: 5.5%;" +
              "border-radius: 50%;" +
              "position: absolute;" +
              "top: 53%;" +
              "animation: blink 2s alternate infinite;" +
            "}" +
            " .eye:after {" +
              "content: '';" +
              "position: absolute;" +
              "top: 20%;" +
              "right: 20%;" +
              "height: 25%;" +
              "width: 25%;" +
              "background-color: #fff;" +
              "border-radius: 50%;" +
            "}" +
            " @keyframes blink {" +
              "0%, 95% {" +
                "transform: scaleY(1);" +
              "}" +
              "100% {" +
                "transform: scaleY(0.1);" +
              "}" +
            "}" +
            " .eye-left {" +
              "left: 35%;" +
            "}" +
            " .eye-right {" +
              "right: 35%;" +
            "}" +
            " .ear {" +
              "background-color: #FDE9DA;" +
              "height: 10%;" +
              "width: 8%;" +
              "border-radius: 50%;" +
              "position: absolute;" +
              "top: 48%;" +
            "}" +
            " .ear-left {" +
              "left: 16%;" +
              "box-shadow: -4px 0px 4px rgba(23, 120, 113, 0.44);" +
            "}" +
            " .ear-right {" +
              "right: 16%;" +
              "box-shadow: 4px 0px 4px rgba(23, 120, 113, 0.44);" +
            "}" +
            " .cheek {" +
              "background-color: #FFB7BF;" +
              "height: 4.5%;" +
              "width: 5%;" +
              "border-radius: 50%;" +
              "position: absolute;" +
              "top: 60%;" +
            "}" +
            " .cheek-left {" +
              "left: 30%;" +
            "}" +
            " .cheek-right {" +
              "right: 30%;" +
            "}" +
            " .hair {" +
              "background-color: transparent;" +
              "position: absolute;" +
              "top: 25.5%;" +
              "left: 44%;" +
              "width: 10%;" +
              "height: 10%;" +
              "border-radius: 50%;" +
              "border-left: 10px solid #663322;" +
              "border-bottom: 5px solid #663322;" +
            "}" +
            " .pacifier {" +
              "height: 8.5%;" +
              "width: 8.5%;" +
              "position: absolute;" +
              "top: 62%;" +
              "left: 46.1%;" +
              "animation: move 200ms linear infinite alternate;" +
            " }" +
            "@keyframes move {" +
              "to {" +
                "transform: translateY(-1px) scale(0.98);" +
              "}" +
            "}" +
            " .pacifier-middle {" +
              "position: absolute;" +
              "height: 100%;" +
              "width: 100%;" +
              "background: radial-gradient(rgb(223, 161, 255), rgb(163, 121, 235));" +
              "border-radius: 50%;" +
            " }" +
            ".pacifier-side {" +
              "position: absolute;" +
              "top: -5%;" +
              "height: 110%;" +
              "width: 105%;" +
              "border: 8px solid rgb(163, 121, 235);" +
              "opacity: 0.8;" +
              "border-radius: 50%;" +
              "box-sizing: border-box;" +
            "}" +
            ".pacifier-side-left {" +
              "right: 60%;" +
            " }" +       
            " .pacifier-side-right {" +
              "left: 60%;" +
            "}"
         }
       }
      }
   );