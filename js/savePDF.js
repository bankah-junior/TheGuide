function createPDF() {
    var sTable = document.getElementById('tab').innerHTML;

    var style = "<style>";
    style = style + "table {border-collapse: collapse; border-spacing: 0; width: 100%; font: 1px solid #DDD; border: 1px solid #000;}";
    style = style + "th {background-color: #f2f2f2; padding: 5rem;}";
    style = style + "th, td {";
    style = style + "padding: 2px 3px; text-align: left; border: 1px solid #000;}";
    style = style + "</style>";

    // CREATING A WINDOW OBJECT.
    var win = window.open('', '', 'height=700, width=700');

    win.document.write('<html><head>');

    // TITLE FOR THE PDF HEADER
    win.document.write('<title>My Personal TimeTable</title>');

    // ADDING STYLE TO THE HEAD TAG
    win.document.write(style);
    win.document.write('</head>');
    win.document.write('<body>');

    // THE TABLE CONTENTS INSIDE THE BODY TAG
    win.document.write(sTable);
    win.document.write('</body></html>');

    // CLOSE THE CURRENT WINDOW
    win.document.close();

    // PRINT THE CONTENT
    win.print();
}