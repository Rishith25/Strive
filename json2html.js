// json2html.js
export default function json2html(data) {
  // Extract unique headers from the array of objects
  const headers = Array.from(new Set(data.flatMap(Object.keys)));

  // Start creating the HTML table
  let html = `<table data-user="kamishetty.rishith@gmail.com">\n`;
  html += "  <thead>\n    <tr>";

  // Add each header as a table header
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += "</tr>\n  </thead>\n  <tbody>\n";

  // Add each row of data as a table row
  data.forEach(row => {
    html += "    <tr>";
    headers.forEach(header => {
      html += `<td>${row[header] || ""}</td>`;
    });
    html += "</tr>\n";
  });

  html += "  </tbody>\n</table>";

  return html;
}
