export function createTableWithRowHeaders(data) {
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.error("Invalid or empty data provided.");
      return "<p>No data available to display.</p>";
    }
  
    // Create the table element
    let table = "<table border='1' style='border-collapse: collapse; width: 100%;'>";
    
    // Generate table rows with headers for each key
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
      table += "<tr>";
      table += `<th style="padding: 8px; text-align: left; background-color: #f2f2f2;">${header}</th>`;
      
      data.forEach(row => {
        table += `<td style="padding: 8px; text-align: left;">${row[header] !== undefined ? row[header] : ''}</td>`;
      });
  
      table += "</tr>";
    });
  
    // Close the table tag
    table += "</table>";
    
    return table;
  }
  