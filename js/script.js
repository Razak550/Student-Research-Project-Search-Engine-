/* =====================================================
   RESEARCHFINDER
   STUDENT RESEARCH PROJECT SEARCH ENGINE SYSTEM

   SWD 417 ASSIGNMENT

   STUDENT: IBRAHIM UGBEDE ABDULRAZAK
   MATRIC NUMBER: 2025/HND/SWD/032

   TECHNOLOGIES: HTML, CSS, JAVASCRIPT
===================================================== */

"use strict";


/* =====================================================
   1. LOCAL STORAGE KEYS
===================================================== */

const STORAGE_KEYS = {
    projects: "researchfinder_projects",
    favorites: "researchfinder_favorites",
    theme: "researchfinder_theme"
};


/* =====================================================
   2. DEPARTMENT INFORMATION
===================================================== */

const DEPARTMENTS = {

    "computer-science": "Computer Science",

    "business": "Business Administration",

    "accounting": "Accounting",

    "public-administration": "Public Administration",

    "statistics": "Statistics",

    "engineering": "Engineering"

};


/* =====================================================
   3. CATEGORY INFORMATION
===================================================== */

const CATEGORIES = {

    "web-development": {
        name: "Web Development",
        icon: "🌐"
    },

    "database": {
        name: "Database Systems",
        icon: "🗄️"
    },

    "artificial-intelligence": {
        name: "Artificial Intelligence",
        icon: "🤖"
    },

    "management": {
        name: "Management",
        icon: "📊"
    },

    "finance": {
        name: "Finance",
        icon: "💰"
    },

    "data-analysis": {
        name: "Data Analysis",
        icon: "📈"
    },

    "other": {
        name: "Other Research",
        icon: "📚"
    }

};


/* =====================================================
   4. DEFAULT SAMPLE RESEARCH PROJECTS

   These are demonstration records, not verified
   academic submissions.
===================================================== */

const DEFAULT_PROJECTS = [

    {
        id: "project-001",

        title:
            "Design and Implementation of a Student Result Management System",

        author: "Sample Student A",

        department: "computer-science",

        category: "database",

        year: 2026,

        keywords: [
            "student",
            "result",
            "database",
            "academic performance"
        ],

        abstract:
            "This project presents the design and implementation " +
            "of a computerized student result management system. " +
            "The proposed system provides a structured approach " +
            "to recording, managing, and retrieving students' " +
            "academic results. It demonstrates how computerized " +
            "record management can reduce manual processing " +
            "and improve access to academic information.",

        createdAt: "2026-10-01T09:00:00.000Z"
    },

    {
        id: "project-002",

        title:
            "Development of an Online Library Management System",

        author: "Sample Student B",

        department: "computer-science",

        category: "web-development",

        year: 2026,

        keywords: [
            "library",
            "books",
            "web application",
            "management"
        ],

        abstract:
            "This project focuses on the development of an " +
            "online library management system that supports " +
            "the organization and retrieval of library records. " +
            "The system demonstrates features for managing " +
            "books, searching available resources, and " +
            "improving access to library information.",

        createdAt: "2026-10-02T09:00:00.000Z"
    },

    {
        id: "project-003",

        title:
            "Design of an AI-Based Student Support Chatbot",

        author: "Sample Student C",

        department: "computer-science",

        category: "artificial-intelligence",

        year: 2026,

        keywords: [
            "artificial intelligence",
            "chatbot",
            "student support",
            "automation"
        ],

        abstract:
            "This project explores the design of an " +
            "AI-based chatbot for student support. " +
            "The proposed application aims to provide " +
            "automated responses to frequently asked " +
            "academic questions and demonstrate how " +
            "conversational interfaces can improve " +
            "access to student information.",

        createdAt: "2026-10-03T09:00:00.000Z"
    },

    {
        id: "project-004",

        title:
            "Impact of Digital Marketing on Small Businesses",

        author: "Sample Student D",

        department: "business",

        category: "management",

        year: 2025,

        keywords: [
            "digital marketing",
            "small business",
            "social media",
            "management"
        ],

        abstract:
            "This research topic examines the potential " +
            "relationship between digital marketing " +
            "practices and the performance of small " +
            "businesses. It considers online advertising, " +
            "social media promotion, and customer engagement " +
            "as important areas of investigation.",

        createdAt: "2026-10-04T09:00:00.000Z"
    },

    {
        id: "project-005",

        title:
            "Financial Record Management in Small Businesses",

        author: "Sample Student E",

        department: "accounting",

        category: "finance",

        year: 2025,

        keywords: [
            "accounting",
            "financial records",
            "business",
            "finance"
        ],

        abstract:
            "This research topic investigates the " +
            "importance of proper financial record " +
            "management among small businesses. " +
            "It considers how organized accounting " +
            "records may support financial planning, " +
            "reporting, and business decision-making.",

        createdAt: "2026-10-05T09:00:00.000Z"
    },

    {
        id: "project-006",

        title:
            "Analysis of Student Academic Performance Using Statistical Methods",

        author: "Sample Student F",

        department: "statistics",

        category: "data-analysis",

        year: 2026,

        keywords: [
            "statistics",
            "students",
            "academic performance",
            "data analysis"
        ],

        abstract:
            "This project demonstrates the application " +
            "of statistical methods to student academic " +
            "performance data. It explores descriptive " +
            "analysis, comparisons, and the identification " +
            "of patterns that may support educational " +
            "planning and decision-making.",

        createdAt: "2026-10-06T09:00:00.000Z"
    },

    {
        id: "project-007",

        title:
            "Design and Implementation of an Online Course Registration System",

        author: "Sample Student G",

        department: "computer-science",

        category: "web-development",

        year: 2026,

        keywords: [
            "course registration",
            "students",
            "web application",
            "education"
        ],

        abstract:
            "This project presents a proposed web-based " +
            "course registration system designed to " +
            "simplify the process of selecting and " +
            "recording academic courses. It demonstrates " +
            "how digital registration can improve " +
            "the organization of student course records.",

        createdAt: "2026-10-07T09:00:00.000Z"
    },

    {
        id: "project-008",

        title:
            "Design of a Computerized Inventory Management System",

        author: "Sample Student H",

        department: "business",

        category: "management",

        year: 2025,

        keywords: [
            "inventory",
            "stock",
            "business management",
            "computerized system"
        ],

        abstract:
            "This project explores the design of a " +
            "computerized inventory management system " +
            "for tracking products and stock movement. " +
            "The proposed system demonstrates how " +
            "digital record keeping can support " +
            "inventory monitoring and reporting.",

        createdAt: "2026-10-08T09:00:00.000Z"
    },

    {
        id: "project-009",

        title:
            "Development of a Web-Based Hospital Appointment Booking System",

        author: "Sample Student I",

        department: "computer-science",

        category: "web-development",

        year: 2026,

        keywords: [
            "hospital",
            "appointment",
            "booking",
            "web development"
        ],

        abstract:
            "This project presents the design of a " +
            "web-based hospital appointment booking " +
            "system. The application concept provides " +
            "a platform for requesting appointments " +
            "and organizing booking information.",

        createdAt: "2026-10-09T09:00:00.000Z"
    },

    {
        id: "project-010",

        title:
            "The Role of Information Technology in Public Administration",

        author: "Sample Student J",

        department: "public-administration",

        category: "management",

        year: 2025,

        keywords: [
            "information technology",
            "public administration",
            "digital services",
            "governance"
        ],

        abstract:
            "This research topic examines the role " +
            "of information technology in public " +
            "administration. It considers digital " +
            "record keeping, information access, " +
            "and electronic service delivery " +
            "within public organizations.",

        createdAt: "2026-10-10T09:00:00.000Z"
    },

    {
        id: "project-011",

        title:
            "Design of a Smart Energy Monitoring System",

        author: "Sample Student K",

        department: "engineering",

        category: "other",

        year: 2026,

        keywords: [
            "energy",
            "monitoring",
            "engineering",
            "smart system"
        ],

        abstract:
            "This project explores the design of " +
            "a smart energy monitoring system. " +
            "The proposed system focuses on " +
            "tracking electricity consumption " +
            "and presenting usage information " +
            "for monitoring and analysis.",

        createdAt: "2026-10-11T09:00:00.000Z"
    },

    {
        id: "project-012",

        title:
            "Design and Implementation of a Student Attendance Management System",

        author: "Sample Student L",

        department: "computer-science",

        category: "database",

        year: 2026,

        keywords: [
            "attendance",
            "students",
            "database",
            "record management"
        ],

        abstract:
            "This project presents a computerized " +
            "student attendance management system. " +
            "The system concept focuses on recording " +
            "attendance, organizing student records, " +
            "and generating attendance summaries.",

        createdAt: "2026-10-12T09:00:00.000Z"
    }

];


/* =====================================================
   5. HTML ELEMENTS
===================================================== */

const sidebar =
    document.getElementById("sidebar");

const menuToggle =
    document.getElementById("menuToggle");

const menuItems =
    document.querySelectorAll(".menu-item");

const themeToggle =
    document.getElementById("themeToggle");

const pageTitle =
    document.getElementById("pageTitle");


// HEADER BUTTONS

const browseProjectsBtn =
    document.getElementById("browseProjectsBtn");

const addProjectBtn =
    document.getElementById("addProjectBtn");


// DASHBOARD SECTIONS

const statsSection =
    document.getElementById("statsSection");

const welcomeBanner =
    document.getElementById("welcomeBanner");

const quickSearchSection =
    document.getElementById("quickSearchSection");

const featuredSection =
    document.getElementById("featuredSection");


// MAIN SECTIONS

const projectsSection =
    document.getElementById("projectsSection");

const favoritesSection =
    document.getElementById("favoritesSection");

const recentSection =
    document.getElementById("recentSection");

const manageSection =
    document.getElementById("manageSection");


// DASHBOARD STATISTICS

const totalProjectsElement =
    document.getElementById("totalProjects");

const totalDepartmentsElement =
    document.getElementById("totalDepartments");

const totalFavoritesElement =
    document.getElementById("totalFavorites");

const totalCategoriesElement =
    document.getElementById("totalCategories");


// QUICK SEARCH

const quickSearchForm =
    document.getElementById("quickSearchForm");

const quickSearchInput =
    document.getElementById("quickSearchInput");

const startSearchingBtn =
    document.getElementById("startSearchingBtn");

const viewAllProjectsBtn =
    document.getElementById("viewAllProjectsBtn");

const featuredProjectsContainer =
    document.getElementById("featuredProjectsContainer");


// PROJECT SEARCH AND FILTER

const projectSearch =
    document.getElementById("projectSearch");

const departmentFilter =
    document.getElementById("departmentFilter");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortProjects =
    document.getElementById("sortProjects");

const searchResultsCount =
    document.getElementById("searchResultsCount");

const projectsContainer =
    document.getElementById("projectsContainer");

const projectsEmpty =
    document.getElementById("projectsEmpty");


// FAVORITES

const favoritesContainer =
    document.getElementById("favoritesContainer");

const favoritesEmpty =
    document.getElementById("favoritesEmpty");

const emptyBrowseBtn =
    document.getElementById("emptyBrowseBtn");


// RECENT PROJECTS

const recentProjectsContainer =
    document.getElementById("recentProjectsContainer");

const recentEmpty =
    document.getElementById("recentEmpty");


// MANAGE PROJECTS

const manageProjectsContainer =
    document.getElementById("manageProjectsContainer");

const manageAddProjectBtn =
    document.getElementById("manageAddProjectBtn");

const openProjectFormBtn =
    document.getElementById("openProjectFormBtn");


// PROJECT FORM MODAL

const projectModal =
    document.getElementById("projectModal");

const projectModalTitle =
    document.getElementById("projectModalTitle");

const projectForm =
    document.getElementById("projectForm");

const projectIdInput =
    document.getElementById("projectId");

const projectTitleInput =
    document.getElementById("projectTitle");

const projectAuthorInput =
    document.getElementById("projectAuthor");

const projectDepartmentInput =
    document.getElementById("projectDepartment");

const projectCategoryInput =
    document.getElementById("projectCategory");

const projectYearInput =
    document.getElementById("projectYear");

const projectKeywordsInput =
    document.getElementById("projectKeywords");

const projectAbstractInput =
    document.getElementById("projectAbstract");

const closeProjectModalBtn =
    document.getElementById("closeProjectModal");

const cancelProjectBtn =
    document.getElementById("cancelProjectBtn");


// PROJECT DETAILS MODAL

const detailsModal =
    document.getElementById("detailsModal");

const detailsModalTitle =
    document.getElementById("detailsModalTitle");

const projectDetailsContent =
    document.getElementById("projectDetailsContent");

const closeDetailsModalBtn =
    document.getElementById("closeDetailsModal");

const closeDetailsBtn =
    document.getElementById("closeDetailsBtn");


/* =====================================================
   6. LOCAL STORAGE FUNCTIONS
===================================================== */

function readStorage(key) {

    try {

        return localStorage.getItem(key);

    } catch (error) {

        console.error(
            "Local Storage read error:",
            error
        );

        return null;

    }

}


function saveStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

        return true;

    } catch (error) {

        console.error(
            "Local Storage save error:",
            error
        );

        alert(
            "Unable to save information. " +
            "Please check your browser storage settings."
        );

        return false;

    }

}


function cloneData(data) {

    return JSON.parse(
        JSON.stringify(data)
    );

}


function loadCollection(key, defaults) {

    const saved = readStorage(key);

    if (saved === null) {

        return cloneData(defaults);

    }

    try {

        const parsed = JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed
            : cloneData(defaults);

    } catch (error) {

        console.error(
            "Unable to load saved data:",
            error
        );

        return cloneData(defaults);

    }

}


/* =====================================================
   7. APPLICATION DATA
===================================================== */

let projects = loadCollection(
    STORAGE_KEYS.projects,
    DEFAULT_PROJECTS
);

let favorites = loadCollection(
    STORAGE_KEYS.favorites,
    []
);

let currentView = "dashboard";

let activeModal = null;

let modalTrigger = null;


/* =====================================================
   8. GENERATE UNIQUE ID
===================================================== */

function generateId() {

    if (
        window.crypto &&
        typeof window.crypto.randomUUID === "function"
    ) {

        return window.crypto.randomUUID();

    }

    return (
        Date.now().toString(36) +
        "-" +
        Math.random().toString(36).slice(2)
    );

}


/* =====================================================
   9. CREATE HTML ELEMENT SAFELY

   User-provided content is inserted using
   textContent to prevent HTML injection.
===================================================== */

function createElement(
    tag,
    className = "",
    text = ""
) {

    const element =
        document.createElement(tag);

    if (className) {

        element.className = className;

    }

    if (text !== "") {

        element.textContent = String(text);

    }

    return element;

}


/* =====================================================
   10. DEPARTMENT AND CATEGORY HELPERS
===================================================== */

function getDepartmentName(department) {

    return DEPARTMENTS[department] ||
        "Other Department";

}


function getCategoryInfo(category) {

    return CATEGORIES[category] || {

        name: "Other Research",
        icon: "📚"

    };

}


/* =====================================================
   11. DATE FORMATTING
===================================================== */

function formatDate(dateString) {

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {

        return "Unknown date";

    }

    return date.toLocaleDateString(
        "en-NG",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


/* =====================================================
   12. UPDATE DASHBOARD STATISTICS
===================================================== */

function updateStatistics() {

    totalProjectsElement.textContent =
        projects.length;

    const departments = new Set(
        projects.map(
            project => project.department
        )
    );

    totalDepartmentsElement.textContent =
        departments.size;

    const projectIds = new Set(
        projects.map(project => project.id)
    );

    const validFavorites = favorites.filter(
        id => projectIds.has(id)
    );

    totalFavoritesElement.textContent =
        new Set(validFavorites).size;

    const categories = new Set(
        projects.map(
            project => project.category
        )
    );

    totalCategoriesElement.textContent =
        categories.size;

}


/* =====================================================
   13. PAGE NAVIGATION
===================================================== */

const PAGE_TITLES = {

    dashboard: "Dashboard",

    projects: "Browse Research Projects",

    favorites: "My Favorite Projects",

    recent: "Recent Research Projects",

    manage: "Manage Research Projects"

};


function switchView(view) {

    if (
        !Object.prototype.hasOwnProperty.call(
            PAGE_TITLES,
            view
        )
    ) {

        return;

    }

    currentView = view;

    // HIDE ALL SECTIONS

    statsSection.hidden = true;

    welcomeBanner.hidden = true;

    quickSearchSection.hidden = true;

    featuredSection.hidden = true;

    projectsSection.hidden = true;

    favoritesSection.hidden = true;

    recentSection.hidden = true;

    manageSection.hidden = true;

    // SHOW SELECTED VIEW

    if (view === "dashboard") {

        statsSection.hidden = false;

        welcomeBanner.hidden = false;

        quickSearchSection.hidden = false;

        featuredSection.hidden = false;

        renderFeaturedProjects();

    } else if (view === "projects") {

        projectsSection.hidden = false;

        renderProjects();

    } else if (view === "favorites") {

        favoritesSection.hidden = false;

        renderFavorites();

    } else if (view === "recent") {

        recentSection.hidden = false;

        renderRecentProjects();

    } else if (view === "manage") {

        manageSection.hidden = false;

        renderManageProjects();

    }

    // PAGE TITLE

    pageTitle.textContent =
        PAGE_TITLES[view];

    // ACTIVE SIDEBAR LINK

    menuItems.forEach(item => {

        const isActive =
            item.dataset.view === view;

        item.classList.toggle(
            "active",
            isActive
        );

        if (isActive) {

            item.setAttribute(
                "aria-current",
                "page"
            );

        } else {

            item.removeAttribute(
                "aria-current"
            );

        }

    });

    // CLOSE MOBILE SIDEBAR

    closeSidebar();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   14. NAVIGATION EVENTS
===================================================== */

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        switchView(
            item.dataset.view
        );

    });

});


browseProjectsBtn.addEventListener(
    "click",
    () => switchView("projects")
);


startSearchingBtn.addEventListener(
    "click",
    () => switchView("projects")
);


viewAllProjectsBtn.addEventListener(
    "click",
    () => switchView("projects")
);


emptyBrowseBtn.addEventListener(
    "click",
    () => switchView("projects")
);


/* =====================================================
   15. QUICK SEARCH
===================================================== */

quickSearchForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const searchText =
            quickSearchInput.value.trim();

        projectSearch.value = searchText;

        departmentFilter.value = "all";

        categoryFilter.value = "all";

        switchView("projects");

    }
);


/* =====================================================
   16. FAVORITE STATUS
===================================================== */

function isFavorite(id) {

    return favorites.includes(id);

}


/* =====================================================
   17. TOGGLE FAVORITE
===================================================== */

function toggleFavorite(id) {

    let updatedFavorites;

    if (isFavorite(id)) {

        updatedFavorites = favorites.filter(
            item => item !== id
        );

    } else {

        updatedFavorites = [
            ...favorites,
            id
        ];

    }

    if (
        !saveStorage(
            STORAGE_KEYS.favorites,
            updatedFavorites
        )
    ) {

        return;

    }

    favorites = updatedFavorites;

    updateStatistics();

    renderFeaturedProjects();

    renderProjects();

    renderFavorites();

    renderRecentProjects();

}


/* =====================================================
   18. CREATE PROJECT CARD
===================================================== */

function createProjectCard(project) {

    const card = createElement(
        "article",
        "project-card"
    );

    const category =
        getCategoryInfo(project.category);

    // CARD TOP

    const top = createElement(
        "div",
        "project-card-top"
    );

    const icon = createElement(
        "div",
        "project-icon",
        category.icon
    );

    const badge = createElement(
        "span",
        "project-category",
        category.name
    );

    top.append(icon, badge);

    // PROJECT TITLE

    const title = createElement(
        "h3",
        "",
        project.title
    );

    // PROJECT AUTHOR

    const author = createElement(
        "p",
        "project-author"
    );

    const authorLabel = createElement(
        "strong",
        "",
        "Author: "
    );

    author.append(
        authorLabel,
        document.createTextNode(
            project.author
        )
    );

    // DEPARTMENT

    const department = createElement(
        "p",
        "project-department"
    );

    const departmentLabel = createElement(
        "strong",
        "",
        "Department: "
    );

    department.append(
        departmentLabel,
        document.createTextNode(
            getDepartmentName(
                project.department
            )
        )
    );

    // YEAR

    const year = createElement(
        "p",
        "project-year"
    );

    const yearLabel = createElement(
        "strong",
        "",
        "Year: "
    );

    year.append(
        yearLabel,
        document.createTextNode(
            String(project.year)
        )
    );

    // ABSTRACT

    const abstract = createElement(
        "p",
        "project-abstract",
        project.abstract
    );

    // ACTIONS

    const actions = createElement(
        "div",
        "project-card-actions"
    );

    const viewButton = createElement(
        "button",
        "btn btn-primary",
        "View Details →"
    );

    viewButton.type = "button";

    viewButton.addEventListener(
        "click",
        event => {

            openProjectDetails(
                project.id,
                event.currentTarget
            );

        }
    );

    // FAVORITE BUTTON

    const favorite = isFavorite(
        project.id
    );

    const favoriteButton = createElement(
        "button",
        `favorite-btn ${favorite ? "active" : ""}`,
        favorite ? "★" : "☆"
    );

    favoriteButton.type = "button";

    favoriteButton.setAttribute(
        "aria-label",
        favorite
            ? "Remove from favorites"
            : "Add to favorites"
    );

    favoriteButton.setAttribute(
        "aria-pressed",
        String(favorite)
    );

    favoriteButton.addEventListener(
        "click",
        () => {

            toggleFavorite(
                project.id
            );

        }
    );

    actions.append(
        viewButton,
        favoriteButton
    );

    // BUILD CARD

    card.append(
        top,
        title,
        author,
        department,
        year,
        abstract,
        actions
    );

    return card;

}


/* =====================================================
   19. RENDER FEATURED PROJECTS
===================================================== */

function renderFeaturedProjects() {

    featuredProjectsContainer.replaceChildren();

    const featured = [
        ...projects
    ]
        .sort((a, b) => {

            return (
                new Date(b.createdAt) -
                new Date(a.createdAt)
            );

        })
        .slice(0, 3);

    if (featured.length === 0) {

        featuredProjectsContainer.appendChild(
            createElement(
                "p",
                "",
                "No projects available yet."
            )
        );

        return;

    }

    featured.forEach(project => {

        featuredProjectsContainer.appendChild(
            createProjectCard(project)
        );

    });

}


/* =====================================================
   20. SEARCH PROJECTS
===================================================== */

function searchProjects() {

    const searchText =
        projectSearch.value
            .trim()
            .toLowerCase();

    const selectedDepartment =
        departmentFilter.value;

    const selectedCategory =
        categoryFilter.value;

    return projects.filter(project => {

        const searchableText = [

            project.title,

            project.author,

            project.abstract,

            ...(Array.isArray(project.keywords)
                ? project.keywords
                : []),

            getDepartmentName(
                project.department
            ),

            getCategoryInfo(
                project.category
            ).name

        ].join(" ").toLowerCase();

        const matchesSearch =
            searchableText.includes(searchText);

        const matchesDepartment =
            selectedDepartment === "all" ||
            project.department === selectedDepartment;

        const matchesCategory =
            selectedCategory === "all" ||
            project.category === selectedCategory;

        return (
            matchesSearch &&
            matchesDepartment &&
            matchesCategory
        );

    });

}


/* =====================================================
   21. SORT PROJECTS
===================================================== */

function sortProjectList(projectList) {

    const selectedSort =
        sortProjects.value;

    const sorted = [
        ...projectList
    ];

    if (selectedSort === "oldest") {

        sorted.sort((a, b) => {

            return (
                new Date(a.createdAt) -
                new Date(b.createdAt)
            );

        });

    } else if (selectedSort === "title") {

        sorted.sort((a, b) => {

            return a.title.localeCompare(
                b.title
            );

        });

    } else {

        sorted.sort((a, b) => {

            return (
                new Date(b.createdAt) -
                new Date(a.createdAt)
            );

        });

    }

    return sorted;

}


/* =====================================================
   22. RENDER ALL PROJECTS
===================================================== */

function renderProjects() {

    const filtered = searchProjects();

    const sorted = sortProjectList(
        filtered
    );

    projectsContainer.replaceChildren();

    searchResultsCount.textContent =
        `Showing ${sorted.length} ` +
        `of ${projects.length} projects`;

    if (sorted.length === 0) {

        projectsEmpty.hidden = false;

        return;

    }

    projectsEmpty.hidden = true;

    sorted.forEach(project => {

        projectsContainer.appendChild(
            createProjectCard(project)
        );

    });

}


/* =====================================================
   23. SEARCH AND FILTER EVENTS
===================================================== */

projectSearch.addEventListener(
    "input",
    renderProjects
);


departmentFilter.addEventListener(
    "change",
    renderProjects
);


categoryFilter.addEventListener(
    "change",
    renderProjects
);


sortProjects.addEventListener(
    "change",
    renderProjects
);


/* =====================================================
   24. RENDER FAVORITES
===================================================== */

function renderFavorites() {

    favoritesContainer.replaceChildren();

    const favoriteProjects =
        projects.filter(project => {

            return isFavorite(
                project.id
            );

        });

    if (favoriteProjects.length === 0) {

        favoritesEmpty.hidden = false;

        return;

    }

    favoritesEmpty.hidden = true;

    favoriteProjects.forEach(project => {

        favoritesContainer.appendChild(
            createProjectCard(project)
        );

    });

}


/* =====================================================
   25. RENDER RECENT PROJECTS
===================================================== */

function renderRecentProjects() {

    recentProjectsContainer.replaceChildren();

    const recentProjects = [
        ...projects
    ]
        .sort((a, b) => {

            return (
                new Date(b.createdAt) -
                new Date(a.createdAt)
            );

        })
        .slice(0, 6);

    if (recentProjects.length === 0) {

        recentEmpty.hidden = false;

        return;

    }

    recentEmpty.hidden = true;

    recentProjects.forEach(project => {

        recentProjectsContainer.appendChild(
            createProjectCard(project)
        );

    });

}


/* =====================================================
   26. MODAL HELPERS
===================================================== */

function openModal(modal, trigger = null) {

    modalTrigger =
        trigger || document.activeElement;

    activeModal = modal;

    modal.hidden = false;

    document.body.style.overflow = "hidden";

    const firstField = modal.querySelector(
        "input:not([type='hidden']), " +
        "textarea, select, button"
    );

    if (firstField) {

        firstField.focus();

    }

}


function closeModal(modal) {

    modal.hidden = true;

    document.body.style.overflow = "";

    activeModal = null;

    if (
        modalTrigger &&
        modalTrigger.isConnected &&
        typeof modalTrigger.focus === "function"
    ) {

        modalTrigger.focus();

    }

    modalTrigger = null;

}


/* =====================================================
   27. OPEN ADD / EDIT PROJECT MODAL
===================================================== */

function openProjectModal(
    id = null,
    trigger = null
) {

    projectForm.reset();

    projectIdInput.value = "";

    if (id) {

        const project = projects.find(
            item => item.id === id
        );

        if (!project) {

            alert("Project not found.");

            return;

        }

        projectModalTitle.textContent =
            "Edit Research Project";

        projectIdInput.value =
            project.id;

        projectTitleInput.value =
            project.title;

        projectAuthorInput.value =
            project.author;

        projectDepartmentInput.value =
            project.department;

        projectCategoryInput.value =
            project.category;

        projectYearInput.value =
            project.year;

        projectKeywordsInput.value =
            project.keywords.join(", ");

        projectAbstractInput.value =
            project.abstract;

    } else {

        projectModalTitle.textContent =
            "Add Research Project";

        projectYearInput.value =
            new Date().getFullYear();

    }

    openModal(
        projectModal,
        trigger
    );

}


/* =====================================================
   28. SAVE RESEARCH PROJECT
===================================================== */

function saveProject(event) {

    event.preventDefault();

    if (!projectForm.reportValidity()) {

        return;

    }

    const title =
        projectTitleInput.value.trim();

    const author =
        projectAuthorInput.value.trim();

    const department =
        projectDepartmentInput.value;

    const category =
        projectCategoryInput.value;

    const year =
        Number(projectYearInput.value);

    const abstract =
        projectAbstractInput.value.trim();

    const keywords =
        projectKeywordsInput.value
            .split(",")
            .map(keyword => keyword.trim())
            .filter(Boolean);

    const editingId =
        projectIdInput.value;

    // VALIDATION

    if (
        !title ||
        !author ||
        !abstract ||
        keywords.length === 0
    ) {

        alert(
            "Please complete all required fields."
        );

        return;

    }

    if (
        !Object.prototype.hasOwnProperty.call(
            DEPARTMENTS,
            department
        )
    ) {

        alert("Please select a valid department.");

        return;

    }

    if (
        !Object.prototype.hasOwnProperty.call(
            CATEGORIES,
            category
        )
    ) {

        alert("Please select a valid category.");

        return;

    }

    if (
        !Number.isInteger(year) ||
        year < 2000 ||
        year > 2100
    ) {

        alert("Please enter a valid project year.");

        return;

    }

    let updatedProjects;

    if (editingId) {

        const exists = projects.some(
            project => project.id === editingId
        );

        if (!exists) {

            alert("Project not found.");

            return;

        }

        updatedProjects = projects.map(
            project => {

                if (project.id !== editingId) {

                    return project;

                }

                return {

                    ...project,

                    title,

                    author,

                    department,

                    category,

                    year,

                    keywords,

                    abstract,

                    updatedAt:
                        new Date().toISOString()

                };

            }
        );

    } else {

        const newProject = {

            id: generateId(),

            title,

            author,

            department,

            category,

            year,

            keywords,

            abstract,

            createdAt:
                new Date().toISOString()

        };

        updatedProjects = [
            newProject,
            ...projects
        ];

    }

    if (
        !saveStorage(
            STORAGE_KEYS.projects,
            updatedProjects
        )
    ) {

        return;

    }

    projects = updatedProjects;

    closeModal(projectModal);

    refreshApplication();

    switchView("projects");

    alert(
        editingId
            ? "Research project updated successfully!"
            : "Research project added successfully!"
    );

}


projectForm.addEventListener(
    "submit",
    saveProject
);


/* =====================================================
   29. DELETE PROJECT
===================================================== */

function deleteProject(id) {

    const project = projects.find(
        item => item.id === id
    );

    if (!project) {

        return;

    }

    const confirmed = confirm(
        `Delete "${project.title}"?\n\n` +
        "This action cannot be undone."
    );

    if (!confirmed) {

        return;

    }

    const updatedProjects = projects.filter(
        item => item.id !== id
    );

    if (
        !saveStorage(
            STORAGE_KEYS.projects,
            updatedProjects
        )
    ) {

        return;

    }

    projects = updatedProjects;

    const updatedFavorites = favorites.filter(
        item => item !== id
    );

    favorites = updatedFavorites;

    saveStorage(
        STORAGE_KEYS.favorites,
        favorites
    );

    refreshApplication();

}


/* =====================================================
   30. RENDER MANAGE PROJECTS
===================================================== */

function renderManageProjects() {

    manageProjectsContainer.replaceChildren();

    if (projects.length === 0) {

        manageProjectsContainer.appendChild(
            createElement(
                "p",
                "",
                "No research projects available."
            )
        );

        return;

    }

    const sorted = [
        ...projects
    ].sort((a, b) => {

        return (
            new Date(b.createdAt) -
            new Date(a.createdAt)
        );

    });

    sorted.forEach(project => {

        const item = createElement(
            "div",
            "manage-project-item"
        );

        const info = createElement(
            "div",
            "manage-project-info"
        );

        const title = createElement(
            "h3",
            "",
            project.title
        );

        const meta = createElement(
            "p",
            "",
            `${project.author} | ` +
            `${getDepartmentName(project.department)} | ` +
            `${project.year}`
        );

        info.append(
            title,
            meta
        );

        const actions = createElement(
            "div",
            "manage-project-actions"
        );

        // VIEW BUTTON

        const viewButton = createElement(
            "button",
            "card-btn view",
            "👁 View"
        );

        viewButton.type = "button";

        viewButton.addEventListener(
            "click",
            event => {

                openProjectDetails(
                    project.id,
                    event.currentTarget
                );

            }
        );

        // EDIT BUTTON

        const editButton = createElement(
            "button",
            "card-btn edit",
            "✏️ Edit"
        );

        editButton.type = "button";

        editButton.addEventListener(
            "click",
            event => {

                openProjectModal(
                    project.id,
                    event.currentTarget
                );

            }
        );

        // DELETE BUTTON

        const deleteButton = createElement(
            "button",
            "card-btn delete",
            "🗑 Delete"
        );

        deleteButton.type = "button";

        deleteButton.addEventListener(
            "click",
            () => {

                deleteProject(
                    project.id
                );

            }
        );

        actions.append(
            viewButton,
            editButton,
            deleteButton
        );

        item.append(
            info,
            actions
        );

        manageProjectsContainer.appendChild(
            item
        );

    });

}


/* =====================================================
   31. PROJECT DETAILS MODAL
===================================================== */

function openProjectDetails(
    id,
    trigger = null
) {

    const project = projects.find(
        item => item.id === id
    );

    if (!project) {

        alert("Project not found.");

        return;

    }

    projectDetailsContent.replaceChildren();

    const wrapper = createElement(
        "div",
        "project-details"
    );

    // PROJECT TITLE

    const title = createElement(
        "h2",
        "details-title",
        project.title
    );

    // METADATA

    const meta = createElement(
        "div",
        "details-meta"
    );

    const metadata = [

        [
            "Author",
            project.author
        ],

        [
            "Department",
            getDepartmentName(
                project.department
            )
        ],

        [
            "Category",
            getCategoryInfo(
                project.category
            ).name
        ],

        [
            "Project Year",
            String(project.year)
        ]

    ];

    metadata.forEach(([label, value]) => {

        const item = createElement(
            "div",
            "details-meta-item"
        );

        const labelElement = createElement(
            "span",
            "",
            label
        );

        const valueElement = createElement(
            "strong",
            "",
            value
        );

        item.append(
            labelElement,
            valueElement
        );

        meta.appendChild(item);

    });

    // ABSTRACT

    const abstractSection = createElement(
        "div",
        "details-section"
    );

    const abstractHeading = createElement(
        "h3",
        "",
        "Project Abstract"
    );

    const abstractText = createElement(
        "p",
        "",
        project.abstract
    );

    abstractSection.append(
        abstractHeading,
        abstractText
    );

    // KEYWORDS

    const keywordSection = createElement(
        "div",
        "details-section"
    );

    const keywordHeading = createElement(
        "h3",
        "",
        "Research Keywords"
    );

    const keywordList = createElement(
        "div",
        "keyword-list"
    );

    const keywords = Array.isArray(
        project.keywords
    )
        ? project.keywords
        : [];

    keywords.forEach(keyword => {

        keywordList.appendChild(
            createElement(
                "span",
                "keyword-tag",
                keyword
            )
        );

    });

    keywordSection.append(
        keywordHeading,
        keywordList
    );

    // ADDED DATE

    const dateSection = createElement(
        "div",
        "details-section"
    );

    const dateText = createElement(
        "p",
        "",
        "Added: " +
        formatDate(project.createdAt)
    );

    dateSection.appendChild(
        dateText
    );

    wrapper.append(
        title,
        meta,
        abstractSection,
        keywordSection,
        dateSection
    );

    projectDetailsContent.appendChild(
        wrapper
    );

    detailsModalTitle.textContent =
        "Research Project Details";

    openModal(
        detailsModal,
        trigger
    );

}


/* =====================================================
   32. PROJECT FORM BUTTONS
===================================================== */

addProjectBtn.addEventListener(
    "click",
    event => {

        openProjectModal(
            null,
            event.currentTarget
        );

    }
);


manageAddProjectBtn.addEventListener(
    "click",
    event => {

        openProjectModal(
            null,
            event.currentTarget
        );

    }
);


openProjectFormBtn.addEventListener(
    "click",
    event => {

        openProjectModal(
            null,
            event.currentTarget
        );

    }
);


closeProjectModalBtn.addEventListener(
    "click",
    () => closeModal(projectModal)
);


cancelProjectBtn.addEventListener(
    "click",
    () => closeModal(projectModal)
);


/* =====================================================
   33. DETAILS MODAL BUTTONS
===================================================== */

closeDetailsModalBtn.addEventListener(
    "click",
    () => closeModal(detailsModal)
);


closeDetailsBtn.addEventListener(
    "click",
    () => closeModal(detailsModal)
);


/* =====================================================
   34. CLOSE MODAL BY CLICKING OUTSIDE
===================================================== */

[
    projectModal,
    detailsModal
].forEach(modal => {

    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {

                closeModal(modal);

            }

        }
    );

});


/* =====================================================
   35. KEYBOARD ACCESSIBILITY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (!activeModal) {

            return;

        }

        if (event.key === "Escape") {

            closeModal(activeModal);

            return;

        }

        if (event.key !== "Tab") {

            return;

        }

        const focusable = [
            ...activeModal.querySelectorAll(
                "button:not([disabled]), " +
                "input:not([disabled]):not([type='hidden']), " +
                "select:not([disabled]), " +
                "textarea:not([disabled])"
            )
        ];

        if (focusable.length === 0) {

            return;

        }

        const first = focusable[0];

        const last =
            focusable[focusable.length - 1];

        if (
            event.shiftKey &&
            document.activeElement === first
        ) {

            event.preventDefault();

            last.focus();

        } else if (
            !event.shiftKey &&
            document.activeElement === last
        ) {

            event.preventDefault();

            first.focus();

        }

    }
);


/* =====================================================
   36. MOBILE SIDEBAR
===================================================== */

function closeSidebar() {

    sidebar.classList.remove("open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


menuToggle.addEventListener(
    "click",
    () => {

        const isOpen =
            sidebar.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }
);


document.addEventListener(
    "click",
    event => {

        if (window.innerWidth > 700) {

            return;

        }

        if (
            sidebar.classList.contains("open") &&
            !sidebar.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            closeSidebar();

        }

    }
);


/* =====================================================
   37. DARK MODE
===================================================== */

function applyTheme(theme) {

    const isDark =
        theme === "dark";

    document.body.classList.toggle(
        "dark-mode",
        isDark
    );

    themeToggle.textContent = isDark
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";

    themeToggle.setAttribute(
        "aria-pressed",
        String(isDark)
    );

}


function loadTheme() {

    const saved = readStorage(
        STORAGE_KEYS.theme
    );

    return saved === "dark"
        ? "dark"
        : "light";

}


themeToggle.addEventListener(
    "click",
    () => {

        const isDark =
            document.body.classList.contains(
                "dark-mode"
            );

        const newTheme = isDark
            ? "light"
            : "dark";

        applyTheme(newTheme);

        try {

            localStorage.setItem(
                STORAGE_KEYS.theme,
                newTheme
            );

        } catch (error) {

            console.warn(
                "Unable to save theme:",
                error
            );

        }

    }
);


/* =====================================================
   38. ESCAPE KEY FOR MOBILE MENU
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            !activeModal &&
            sidebar.classList.contains("open")
        ) {

            closeSidebar();

            menuToggle.focus();

        }

    }
);


/* =====================================================
   39. REFRESH APPLICATION
===================================================== */

function refreshApplication() {

    updateStatistics();

    renderFeaturedProjects();

    renderProjects();

    renderFavorites();

    renderRecentProjects();

    renderManageProjects();

}


/* =====================================================
   40. INITIALIZE APPLICATION
===================================================== */

function initializeApp() {

    applyTheme(
        loadTheme()
    );

    refreshApplication();

    switchView("dashboard");

    console.log(
        "ResearchFinder Student Research Project " +
        "Search Engine is ready!"
    );

}


initializeApp();
