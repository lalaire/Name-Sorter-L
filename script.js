
/* =====================================================
   PEOPLE DATA
   ===================================================== */
let people = [
    {name:"Olivia Carter", age:21, profession:"Student", gender:"Female"},
    {name:"Marcus Lee", age:34, profession:"Software Developer", gender:"Male"},
    {name:"Hannah Brooks", age:27, profession:"Nurse", gender:"Female"},
    {name:"Daniel Torres", age:45, profession:"Lawyer", gender:"Male"},
    {name:"Sofia Bennett", age:19, profession:"Student", gender:"Female"},
    {name:"Ethan Rivera", age:38, profession:"Teacher", gender:"Male"},
    {name:"Mia Collins", age:29, profession:"Accountant", gender:"Female"},
    {name:"Lucas Morgan", age:52, profession:"Doctor", gender:"Male"},
    {name:"Ava Mitchell", age:24, profession:"Graphic Designer", gender:"Female"},
    {name:"Noah Parker", age:31, profession:"Software Developer", gender:"Male"},
    {name:"Chloe Anderson", age:41, profession:"Lawyer", gender:"Female"},
    {name:"Liam Foster", age:22, profession:"Student", gender:"Male"},
    {name:"Isabella Reed", age:36, profession:"Nurse", gender:"Female"},
    {name:"James Cooper", age:48, profession:"Accountant", gender:"Male"},
    {name:"Amelia Hayes", age:55, profession:"Teacher", gender:"Female"},
    {name:"Benjamin Ward", age:63, profession:"Doctor", gender:"Male"},
    {name:"Grace Sullivan", age:28, profession:"Graphic Designer", gender:"Female"},
    {name:"Henry Morris", age:33, profession:"Software Developer", gender:"Male"},
    {name:"Lily Richardson", age:20, profession:"Student", gender:"Female"},
    {name:"Alexander Price", age:44, profession:"Lawyer", gender:"Male"},
    {name:"Ella Jenkins", age:39, profession:"Nurse", gender:"Female"},
    {name:"William Ross", age:57, profession:"Accountant", gender:"Male"},
    {name:"Sophia Turner", age:26, profession:"Teacher", gender:"Female"},
    {name:"Michael Scott", age:49, profession:"Doctor", gender:"Male"},
    {name:"Emily Howard", age:32, profession:"Graphic Designer", gender:"Female"},
    {name:"Jack Peterson", age:23, profession:"Student", gender:"Male"},
    {name:"Charlotte Gray", age:35, profession:"Software Developer", gender:"Female"},
    {name:"Samuel Watson", age:47, profession:"Lawyer", gender:"Male"},
    {name:"Harper Murphy", age:30, profession:"Nurse", gender:"Female"},
    {name:"David Coleman", age:61, profession:"Accountant", gender:"Male"},
    {name:"Abigail Evans", age:43, profession:"Teacher", gender:"Female"},
    {name:"Joseph Bell", age:54, profession:"Doctor", gender:"Male"},
    {name:"Evelyn Diaz", age:25, profession:"Graphic Designer", gender:"Female"},
    {name:"Matthew Sanders", age:37, profession:"Software Developer", gender:"Male"},
    {name:"Scarlett Bailey", age:18, profession:"Student", gender:"Female"},
    {name:"Christopher Wood", age:42, profession:"Lawyer", gender:"Male"},
    {name:"Victoria Barnes", age:33, profession:"Nurse", gender:"Female"},
    {name:"Andrew Ross", age:50, profession:"Accountant", gender:"Male"},
    {name:"Ella Phillips", age:46, profession:"Teacher", gender:"Female"},
    {name:"Ryan Bennett", age:59, profession:"Doctor", gender:"Male"},
    {name:"Natalie Cooper", age:27, profession:"Graphic Designer", gender:"Female"},
    {name:"Thomas Fisher", age:30, profession:"Software Developer", gender:"Male"},
    {name:"Zoe Simmons", age:21, profession:"Student", gender:"Female"},
    {name:"Charles Griffin", age:56, profession:"Lawyer", gender:"Male"},
    {name:"Madison Hayes", age:40, profession:"Nurse", gender:"Female"},
    {name:"Daniel Foster", age:64, profession:"Accountant", gender:"Male"},
    {name:"Layla Morris", age:34, profession:"Teacher", gender:"Female"},
    {name:"Anthony Reed", age:51, profession:"Doctor", gender:"Male"},
    {name:"Aria Collins", age:29, profession:"Graphic Designer", gender:"Female"},
    {name:"Jacob Turner", age:26, profession:"Software Developer", gender:"Male"},
    {name:"Maya Santos", age:19, profession:"College Student", gender:"Female"},
    {name:"Ethan Miller", age:22, profession:"Barista", gender:"Male"},
    {name:"Leah Cruz", age:24, profession:"Graphic Designer", gender:"Female"},
    {name:"Noah Bennett", age:27, profession:"Software Developer", gender:"Male"},
    {name:"Ariana Reyes", age:29, profession:"Registered Nurse", gender:"Female"},
    {name:"Marcus Thompson", age:31, profession:"Accountant", gender:"Male"},
    {name:"Sofia Navarro", age:34, profession:"Marketing Manager", gender:"Female"},
    {name:"Daniel Kim", age:36, profession:"Civil Engineer", gender:"Male"},
    {name:"Chloe Anderson", age:39, profession:"High School Teacher", gender:"Female"},
    {name:"Gabriel Torres", age:41, profession:"Restaurant Owner", gender:"Male"},
    {name:"Natalie Morgan", age:43, profession:"Journalist", gender:"Female"},
    {name:"Adrian Garcia", age:46, profession:"Police Officer", gender:"Male"},
    {name:"Rachel Williams", age:48, profession:"Lawyer", gender:"Female"},
    {name:"Julian Flores", age:51, profession:"Architect", gender:"Male"},
    {name:"Camille Johnson", age:54, profession:"Pharmacist", gender:"Female"},
    {name:"Victor Ramirez", age:57, profession:"University Professor", gender:"Male"},
    {name:"Helen Parker", age:61, profession:"Doctor", gender:"Female"},
    {name:"Robert Mitchell", age:65, profession:"Financial Consultant", gender:"Male"},
    {name:"Diana Coleman", age:68, profession:"Retired Business Owner", gender:"Female"},
    {name:"Samuel Brooks", age:72, profession:"Retired Engineer", gender:"Male"}
];
/* =====================================================
   UPDATE TOTAL RECORDS
   ===================================================== */
function updateTotal() {
    document.getElementById("totalRecords").textContent =
        people.length;
}
/* =====================================================
   GROUP DATA
   ===================================================== */
function groupBy(key) {
    const map = {};
    people.forEach(person => {
        const value = person[key];
        if (!map[value]) {
            map[value] = [];
        }
        map[value].push(person);
    });
    return map;
}
/* =====================================================
   REPORT BY PROFESSION
   ===================================================== */
function showProfession() {
    const map = groupBy("profession");
    let html = `<h2>Report by Profession</h2>`;
    Object.keys(map)
        .sort()
        .forEach(profession => {
            html += `
                <div class="card">
                    <h3>${profession}</h3>
                    <div class="count">
                        Total: ${map[profession].length} person(s)
                    </div>
                    <div class="names">
                        ${map[profession]
                            .map(person =>
                                `<span class="tag">
                                    ${person.name}
                                </span>`
                            )
                            .join("")}
                    </div>
                </div>
            `;
        });
    document.getElementById("output").innerHTML = html;
}
/* =====================================================
   REPORT BY AGE
   ===================================================== */
function showAge() {
    const brackets = [
        {label:"18 - 25", min:18, max:25},
        {label:"26 - 35", min:26, max:35},
        {label:"36 - 45", min:36, max:45},
        {label:"46 - 55", min:46, max:55},
        {label:"56 - 65", min:56, max:65},
        {label:"66 - 75", min:66, max:75},
        {label:"76 - 85", min:76, max:85},
        {label:"86 - 95", min:86, max:95}
    ];
    let html = `<h2>Report by Age Bracket</h2>`;
    brackets.forEach(bracket => {
        const filtered = people.filter(person =>
            person.age >= bracket.min &&
            person.age <= bracket.max
        );
        html += `
            <div class="card">
                <h3>${bracket.label}</h3>
                <div class="count">
                    Total: ${filtered.length} person(s)
                </div>
                <div class="names">
                    ${
                        filtered.length
                        ? filtered
                            .map(person =>
                                `<span class="tag">
                                    ${person.name} (${person.age})
                                </span>`
                            )
                            .join("")
                        : `<span class="empty">
                            No records
                           </span>`
                    }
                </div>
            </div>
        `;
    });
    document.getElementById("output").innerHTML = html;
}
/* =====================================================
   REPORT BY GENDER
   ===================================================== */
function showGender() {
    const map = groupBy("gender");
    let html = `<h2>Report by Gender</h2>`;
    Object.keys(map)
        .sort()
        .forEach(gender => {
            html += `
                <div class="card">
                    <h3>${gender}</h3>
                    <div class="count">
                        Total: ${map[gender].length} person(s)
                    </div>
                    <div class="names">
                        ${map[gender]
                            .map(person =>
                                `<span class="tag">
                                    ${person.name}
                                </span>`
                            )
                            .join("")}
                    </div>
                </div>
            `;
        });
    document.getElementById("output").innerHTML = html;
}
/* =====================================================
   SEARCH PEOPLE FORM
   ===================================================== */
function showSearchForm() {
    document.getElementById("output").innerHTML = `
        <h2>🔎 Search People</h2>
        <div class="search-box">
            <input
                type="text"
                id="searchInput"
                placeholder="Search name, age, profession, or gender..."
            >
            <button
                class="btn-search"
                onclick="searchPeople()">
                Search
            </button>
        </div>
        <div id="searchResults"></div>
    `;
}
/* =====================================================
   SEARCH PEOPLE
   ===================================================== */

function searchPeople() {
    const search = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();
    if (search === "") {
        document.getElementById("searchResults").innerHTML =
            `<p class="empty">
                Please enter something to search.
            </p>`;
        return;
    }
    const results = people.filter(person =>
        person.name.toLowerCase().includes(search) ||
        person.profession.toLowerCase().includes(search) ||
        person.gender.toLowerCase().includes(search) ||
        String(person.age).includes(search)
    );
    displayPeople(results, "Search Results");
}
/* =====================================================
   SEARCH PROFESSION FORM
   ===================================================== */
function showProfessionSearch() {
    const professions = [...new Set(
        people.map(person => person.profession)
    )].sort();
    let options = `
        <option value="">
            -- Select Profession --
        </option>
    `;
    professions.forEach(profession => {
        options += `
            <option value="${profession}">
                ${profession}
            </option>
        `;
    });
    document.getElementById("output").innerHTML = `
        <h2>💼 Search by Profession</h2>
        <div class="form-box">
            <select id="professionSelect">
                ${options}
            </select>
            <div class="form-buttons">
                <button
                    class="btn-prof-search"
                    onclick="searchProfession()">
                    Search Profession
                </button>
            </div>
        </div>
        <div id="professionResults"></div>
    `;
}
/* =====================================================
   SEARCH PROFESSION
   ===================================================== */
function searchProfession() {
    const profession =
        document.getElementById("professionSelect").value;
    if (profession === "") {
        document.getElementById("professionResults").innerHTML =
            `<p class="empty">
                Please select a profession.
            </p>`;
        return;
    }
    const results = people.filter(person =>
        person.profession === profession
    );
    displayPeople(results, "Profession Results");
}
/* =====================================================
   DISPLAY PEOPLE
   ===================================================== */
function displayPeople(list, title) {
    let html = `
        <h3>${title}</h3>
        <p class="count">
            Found: ${list.length} person(s)
        </p>
    `;
    if (list.length === 0) {
        html += `
            <p class="empty">
                No matching records found.
            </p>
        `;
    }
    list.forEach(person => {
        const index = people.indexOf(person);
        html += personCard(person, index);
    });
    const searchResults =
        document.getElementById("searchResults");
    const professionResults =
        document.getElementById("professionResults");
    if (searchResults) {
        searchResults.innerHTML = html;
    }
    if (professionResults) {
        professionResults.innerHTML = html;
    }
}
/* =====================================================
   PERSON CARD
   ===================================================== */
function personCard(person, index) {
    return `
        <div class="card person-card">
            <h3>${person.name}</h3>
            <div class="person-info">
                <strong>Age:</strong>
                ${person.age}
                <br>
                <strong>Profession:</strong>
                ${person.profession}
                <br>
                <strong>Gender:</strong>
                ${person.gender}
            </div>
            <div class="action-buttons">
                <button
                    class="btn-edit"
                    onclick="editPerson(${index})">
                    ✏️ Edit
                </button>
                <button
                    class="btn-delete"
                    onclick="deletePerson(${index})">
                    🗑️ Delete
                </button>
            </div>
        </div>
    `;
}
/* =====================================================
   ADD PERSON FORM
   ===================================================== */

function showAddForm() {
    document.getElementById("output").innerHTML = `
        <h2>➕ Add New Person</h2>
        <div class="form-box">
            <h3>Person Information</h3>
            <div class="form-grid">
                <input
                    type="text"
                    id="addName"
                    placeholder="Full Name"
                >
                <input
                    type="number"
                    id="addAge"
                    placeholder="Age"
                    min="1"
                    max="120"
                >
                <input
                    type="text"
                    id="addProfession"
                    placeholder="Profession"
                >
                <select id="addGender">
                    <option value="">
                        -- Select Gender --
                    </option>
                    <option value="Male">
                        Male
                    </option>
                    <option value="Female">
                        Female
                    </option>
                    <option value="Other">
                        Other
                    </option>
                </select>
            </div>
            <div class="form-buttons">
                <button
                    class="btn-save"
                    onclick="addPerson()">
                    💾 Save Person
                </button>
                <button
                    class="btn-cancel"
                    onclick="showAll()">
                    Cancel
                </button>
            </div>
        </div>
    `;
}
/* =====================================================
   ADD PERSON
   ===================================================== */
function addPerson() {
    const name =
        document.getElementById("addName").value.trim();
    const age =
        Number(document.getElementById("addAge").value);
    const profession =
        document.getElementById("addProfession").value.trim();
    const gender =
        document.getElementById("addGender").value;
    if (!name || !age || !profession || !gender) {
        alert("Please complete all fields.");
        return;
    }
    people.push({
        name: name,
        age: age,
        profession: profession,
        gender: gender
    });
    updateTotal();
    alert("Person added successfully!");
    showAll();
}
/* =====================================================
   EDIT PERSON FORM
   ===================================================== */

function editPerson(index) {
    const person = people[index];
    document.getElementById("output").innerHTML = `
        <h2>✏️ Edit Person</h2>
        <div class="form-box">
            <div class="form-grid">
                <input
                    type="text"
                    id="editName"
                    value="${person.name}"
                >
                <input
                    type="number"
                    id="editAge"
                    value="${person.age}"
                    min="1"
                    max="120"
                >
                <input
                    type="text"
                    id="editProfession"
                    value="${person.profession}"
                >
                <select id="editGender">
                    <option value="Male"
                        ${person.gender === "Male" ? "selected" : ""}>
                        Male
                    </option>
                    <option value="Female"
                        ${person.gender === "Female" ? "selected" : ""}>
                        Female
                    </option>
                    <option value="Other"
                        ${person.gender === "Other" ? "selected" : ""}>
                        Other
                    </option>
                </select>
            </div>
            <div class="form-buttons">
                <button
                    class="btn-save"
                    onclick="saveEdit(${index})">
                    💾 Save Changes
                </button>
                <button
                    class="btn-cancel"
                    onclick="showAll()">
                    Cancel
                </button>
            </div>
        </div>
    `;
}


/* =====================================================
   SAVE EDIT
   ===================================================== */
function saveEdit(index) {
    const name =
        document.getElementById("editName").value.trim();
    const age =
        Number(document.getElementById("editAge").value);
    const profession =
        document.getElementById("editProfession").value.trim();
    const gender =
        document.getElementById("editGender").value;
    if (!name || !age || !profession || !gender) {
        alert("Please complete all fields.");
        return;
    }
    people[index] = {
        name: name,
        age: age,
        profession: profession,
        gender: gender
    };
    alert("Person information updated!");
    showAll();
}
/* =====================================================
   DELETE PERSON
   ===================================================== */
function deletePerson(index) {
    const person = people[index];
    const confirmDelete = confirm(
        "Are you sure you want to delete " +
        person.name +
        "?"
    );
    if (!confirmDelete) {
        return;
    }
    people.splice(index, 1);
    updateTotal();
    alert("Person deleted successfully!");
    showAll();
}
/* =====================================================
   SHOW ALL DATA
   ===================================================== */
function showAll() {

    let html = `
        <h2>📋 All Data (${people.length})</h2>
    `;

    people.forEach((person, index) => {
        html += personCard(person, index);
    });
    document.getElementById("output").innerHTML = html;
}
/* =====================================================
   START PROGRAM
   ===================================================== */
updateTotal();
showAll();
