<<<<<<< HEAD
{
    /**
     * 
     * @param {HTMLDivElement} root 
     */
    async function updateTable(root){
        root.querySelector(".table-refresh__button").classList.add("table-refresh__button--refreshing");

        const table = root.querySelector(".table-refresh__table");
        const response = await fetch(root.dataset.url);
        const data = await response.json();

        // Clear Table
        table.querySelector("thead tr").innerHTML = "";
        table.querySelector("tbody").innerHTML = "";

        // Populate Headers
        for (const header of data.headers){
            table.querySelector("thead tr").insertAdjacentHTML("beforeend", `<th> ${header} </th>`)
        }

        // Populate Row
        for (const row of data.rows){
            table.querySelector("tbody").insertAdjacentHTML("beforeend", `
            <tr>
                ${ row.map(col=> `<td> ${col} </td>`).join("") }
            </tr>
            `);
        };

        // Updateing "Last Update" text
        root.querySelector('.table-refresh__label').textContent = `Last Update : ${new Date(data.lastUpdated).toLocaleString()}`;

        // Stop Rotating
        root.querySelector(".table-refresh__button").classList.remove("table-refresh__button--refreshing");
    };

    for (const root of document.querySelectorAll(".table-refresh[data-url]")){
        const table = document.createElement("table");
        const option = document.createElement("div");

        table.classList.add("table-refresh__table");
        option.classList.add("table-refresh__options");

        table.innerHTML = `
            <thead>
                <tr></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Loading</td>
                </tr>
            </tbody>
        `;

        option.innerHTML = `
            <span class="table-refresh__label">Last Update :Never</span>
            <button type="button" class="table-refresh__button">
                <i class="material-icons">refresh</i>
            </button>
        `;

        root.append(table,option);

        option.querySelector(".table-refresh__button").addEventListener("click", ()=>{
            updateTable(root)
        })
    }
=======
{
    /**
     * 
     * @param {HTMLDivElement} root 
     */
    async function updateTable(root){
        root.querySelector(".table-refresh__button").classList.add("table-refresh__button--refreshing");

        const table = root.querySelector(".table-refresh__table");
        const response = await fetch(root.dataset.url);
        const data = await response.json();

        // Clear Table
        table.querySelector("thead tr").innerHTML = "";
        table.querySelector("tbody").innerHTML = "";

        // Populate Headers
        for (const header of data.headers){
            table.querySelector("thead tr").insertAdjacentHTML("beforeend", `<th> ${header} </th>`)
        }

        // Populate Row
        for (const row of data.rows){
            table.querySelector("tbody").insertAdjacentHTML("beforeend", `
            <tr>
                ${ row.map(col=> `<td> ${col} </td>`).join("") }
            </tr>
            `);
        };

        // Updateing "Last Update" text
        root.querySelector('.table-refresh__label').textContent = `Last Update : ${new Date(data.lastUpdated).toLocaleString()}`;

        // Stop Rotating
        root.querySelector(".table-refresh__button").classList.remove("table-refresh__button--refreshing");
    };

    for (const root of document.querySelectorAll(".table-refresh[data-url]")){
        const table = document.createElement("table");
        const option = document.createElement("div");

        table.classList.add("table-refresh__table");
        option.classList.add("table-refresh__options");

        table.innerHTML = `
            <thead>
                <tr></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Loading</td>
                </tr>
            </tbody>
        `;

        option.innerHTML = `
            <span class="table-refresh__label">Last Update :Never</span>
            <button type="button" class="table-refresh__button">
                <i class="material-icons">refresh</i>
            </button>
        `;

        root.append(table,option);

        option.querySelector(".table-refresh__button").addEventListener("click", ()=>{
            updateTable(root)
        })
    }
>>>>>>> 5fdf0ab (Bahan)
}