<!DOCTYPE html>
    <html>
        <body>

            <p id="demo"></p>

            <script>
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
                    myFunction(this);
    }
};
                xhttp.open("GET", "user_data.xml", true);
                xhttp.send();

                function myFunction(xml) {
    var x, i, xmlDoc, txt;
                xmlDoc = xml.responseXML;
                txt = "";
                x = xmlDoc.getElementsByTagName('title');
                for (i = 0 ; i <x.length; i++) {
                    txt += x[i].childNodes[0].nodeValue + "<br>";
    }
                document.getElementById("demo").innerHTML = txt;
}
            </script>

        </body>
    </html>