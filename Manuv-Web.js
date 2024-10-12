
// Function to filter table rows and show suggestions
function filterTable() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("dataTable");
    let tr = table.getElementsByTagName("tr");
    
    // Live suggestions
    let suggestionBox = document.getElementById("suggestions");
    suggestionBox.innerHTML = ""; // Clear previous suggestions

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td");
        let rowContainsSearchTerm = false;

        for (let j = 0; j < td.length; j++) {
            if (td[j]) {
                let txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    rowContainsSearchTerm = true;
                    // Add live suggestion
                    let suggestion = document.createElement("div");
                    suggestion.innerHTML = txtValue;
                    suggestionBox.appendChild(suggestion);
                    break;
                }
            }
        }

        // Show or hide rows
        tr[i].style.display = rowContainsSearchTerm ? "" : "none";
    }
}
