// ------------------- Elements ------------------- //
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const overlay = document.getElementById("overlay");
const themeIcon = document.getElementById("themeIcon");
const icon = themeIcon.querySelector("i");
const logoImg = document.getElementById("logoImg");
const sidebarContent = document.querySelector(".sidebar_content");
const mainContent = document.querySelector(".main-content");
const sidebarHeading = document.querySelector(".sidebar-header .heading");
const searchInput = document.querySelector(".sidebar .search_bar input");

// ------------------- Sidebar Toggle ------------------- //
toggleBtn.addEventListener("click", () => {
    // if (window.innerWidth > 768) {
        sidebar.classList.toggle("collapsed");
        renderSidebar(currentMenuKey, searchInput.value);
    // }
});

mobileMenuBtn.addEventListener("click", () => {
    sidebar.classList.add("mobile-visible");
    overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("mobile-visible");
    overlay.classList.remove("active");
});

// ------------------- Theme Toggle ------------------- //
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        icon.classList.replace("flaticon-contrast", "flaticon-sun");
        logoImg.src = "./assets/png/logo_white.png";
    } else {
        document.body.classList.remove("dark");
        icon.classList.replace("flaticon-sun", "flaticon-contrast");
        logoImg.src = "./assets/png/logo.png";
    }
});

themeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon.classList.replace("flaticon-contrast", "flaticon-sun");
        logoImg.src = "./assets/png/logo_white.png";
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.replace("flaticon-sun", "flaticon-contrast");
        logoImg.src = "./assets/png/logo.png";
        localStorage.setItem("theme", "light");
    }
});

// ------------------- Sidebar Data ------------------- //
const sidebarMenus = {
    dashboard: [
        {
            heading: "Dashboard types",
            items: [
                { icon: "flaticon-view", label: "Overview", content: "<p>Dashboard Overview</p>" },
                {
                    icon: "flaticon-web-development-1",
                    label: "Executive Summary",
                    submenu: [
                        { label: "Revenue Overview", content: "<p>Summary 1 content</p>" },
                        { label: "Key Performance Indications", content: "<p>Summary 2 content</p>" },
                        { label: "Strategic Goals Progress", content: "<p>Summary 2 content</p>" },
                        { label: "Department Highlights", content: "<p>Summary 2 content</p>" }
                    ]
                },
                {
                    icon: "flaticon-chart",
                    label: "Operations Dashboard",
                    submenu: [
                        { label: "Project Timeline", content: "<p>Summary 1 content</p>" },
                        { label: "Resource Allocation", content: "<p>Summary 2 content</p>" },
                        { label: "Team Performance", content: "<p>Summary 2 content</p>" },
                        { label: "Capacity Planning", content: "<p>Summary 2 content</p>" },
                    ]
                },
                {
                    icon: "flaticon-chart-1",
                    label: "Financial Dashboard",
                    submenu: [
                        { label: "Budget vs Actual", content: "<p>Summary 1 content</p>" },
                        { label: "Cash Flow Analysis", content: "<p>Summary 2 content</p>" },
                        { label: "Expense Breakdown", content: "<p>Summary 2 content</p>" },
                        { label: "Profit & Loss Summary", content: "<p>Summary 2 content</p>" },
                    ]
                }
            ]
        },
        {
            heading: "Report Summaries",
            items: [
                {
                    icon: "flaticon-note",
                    label: "Weekly Reports",
                    submenu: [
                        { label: "Team Productivity: 87% ↑", content: "<p>Summary 1 content</p>" },
                        { label: "Project Completion: 12/15", content: "<p>Summary 2 content</p>" },
                        { label: "Budget Utilization: 73%", content: "<p>Summary 2 content</p>" },
                        { label: "Client Satisfaction: 4.6/5", content: "<p>Summary 2 content</p>" },
                    ]
                },
                {
                    icon: "flaticon-star",
                    label: "Monthly Insights",
                    submenu: [
                        { label: "Revenue Growth: +15.3%", content: "<p>Summary 1 content</p>" },
                        { label: "New Clients: 4", content: "<p>Summary 2 content</p>" },
                        { label: "Team Expansion: 8 hires", content: "<p>Summary 2 content</p>" },
                        { label: "Cost Reduction: 7.2%", content: "<p>Summary 2 content</p>" },
                    ]
                },
                {
                    icon: "flaticon-view",
                    label: "Quartely Analysis",
                    submenu: [
                        { label: "Market Position: Improvements", content: "<p>Summary 1 content</p>" },
                        { label: "ROI: 23.4%", content: "<p>Summary 2 content</p>" },
                        { label: "Customer Retention: 92%", content: "<p>Summary 2 content</p>" },
                        { label: "Innovation Index: 8.7/10", content: "<p>Summary 2 content</p>" },
                    ]
                }
            ]
        },
        {
            heading: "Business Intelligence",
            items: [
                {
                    icon: "flaticon-chart",
                    label: "Performance Metrics",
                    submenu: [
                        { label: "Sales Conversion: 34.2%", content: "<p>Summary 1 content</p>" },
                        { label: "Lead Response Time: 2.3h", content: "<p>Summary 2 content</p>" },
                        { label: "Customer Lifetime Value...", content: "<p>Summary 2 content</p>" },
                        { label: "Churn Rate: 3,1%", content: "<p>Summary 2 content</p>" },
                    ]
                },
                {
                    icon: "flaticon-chart-1",
                    label: "Predictive Analytics",
                    submenu: [
                        { label: "Q4 Revenue Forecast: $2.5", content: "<p>Summary 1 content</p>" },
                        { label: "Resource Demand: High", content: "<p>Summary 2 content</p>" },
                        { label: "Market Trends: Positive", content: "<p>Summary 2 content</p>" },
                        { label: "Risk Assessment: Low", content: "<p>Summary 2 content</p>" },
                    ]
                }
            ]
        }
    ],
    tasks: [
        { icon: "flaticon-plus", label: "New task", content: "<p>The rest of the page can be empty.</p>" },
        { icon: "flaticon-filter", label: "Filter task", content: "<p>The rest of the page can be empty.</p>" },
        {
            heading: "Tasks",
            items: [
                {
                    icon: "flaticon-clock", label: "Due today", submenu: [
                        { label: "Review design mockups", content: "<p>Summary 1 content</p>" },
                        { label: "Update documentation", content: "<p>Summary 2 content</p>" },
                        { label: "Test new feature", content: "<p>Summary 2 content</p>" },
                    ]
                },
                {
                    icon: "flaticon-check-2", label: "In progress", submenu: [
                        { label: "Implement user auth", content: "<p>Summary 1 content</p>" },
                        { label: "Database migration", content: "<p>Summary 2 content</p>" }
                    ]
                },
                {
                    icon: "flaticon-check-mark", label: "Completed", submenu: [
                        { label: "Fixed login bug", content: "<p>Summary 1 content</p>" },
                        { label: "Updated dependencies", content: "<p>Summary 2 content</p>" },
                        { label: "Code review completed", content: "<p>Summary 2 content</p>" },

                    ]
                },
            ]
        },
        {
            heading: "Others",
            items: [
                {
                    icon: "flaticon-flag-1", label: "Priority tasks", submenu: [
                        { label: "Summary 1", content: "<p>Summary 1 content</p>" },
                        { label: "Summary 2", content: "<p>Summary 2 content</p>" }
                    ]
                },
                {
                    icon: "flaticon-archive", label: "Archived", content: "<p>The rest of the page can be empty.</p>"
                },

            ]
        },
        // { icon: "flaticon-archive", label: "Archived", content: "<p>The rest of the page can be empty.</p>" },
    ],
    settings: [
        {
            heading: "Settings",
            items: [
                { icon: "flaticon-user-2", label: "Account Settings", content: "<p>Manage account details</p>" },
                { icon: "flaticon-verified", label: "Verified", content: "<p>Update general settings</p>" },
                { icon: "flaticon-notification", label: "Notifications", content: "<p>Update general settings</p>" },
                { icon: "flaticon-setting", label: "General Settings", content: "<p>Update general settings</p>" },
            ]
        }
    ],
    user: [
        {
            heading: "User",
            items: [
                { icon: "flaticon-user-2", label: "Profile", content: "<p>User profile details</p>" },
                { icon: "flaticon-log-out", label: "Logout", content: "<p>Logout from system</p>" }
            ]
        }
    ]
};

// ------------------- Helper Functions ------------------- //
function highlightText(text, filter) {
    if (!filter) return text;
    const regex = new RegExp(`(${filter})`, "gi");
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function createMenuItem(item, filter = "") {
    const li = document.createElement("li");
    li.classList.add("menu-item");

    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("menu-wrapper");

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("menu-inner");

    const iconEl = document.createElement("i");
    iconEl.className = `flaticon ${item.icon || ""}`;

    const span = document.createElement("span");
    span.classList.add("menu-label");
    span.innerHTML = highlightText(item.label, filter);
    if (sidebar.classList.contains("collapsed")) span.style.display = "none";

    innerDiv.appendChild(iconEl);
    innerDiv.appendChild(span);
    wrapperDiv.appendChild(innerDiv);

    let subUl;
    if (item.submenu) {
        subUl = document.createElement("ul");
        subUl.classList.add("submenu");

        item.submenu.forEach(sub => {
            const subLi = document.createElement("li");
            subLi.classList.add("submenu-item");
            subLi.innerHTML = `<span class="submenu-label">${highlightText(sub.label, filter)}</span>`;
            subLi.addEventListener("click", e => {
                e.stopPropagation();
                mainContent.innerHTML = `<header><h1>${sub.label}</h1></header><div class="page-content">${sub.content}</div>`;
            });
            subUl.appendChild(subLi);
        });

        if (!sidebar.classList.contains("collapsed")) {
            const arrow = document.createElement("i");
            arrow.className = "flaticon flaticon-down submenu-arrow";
            wrapperDiv.appendChild(arrow);
        }

        // ✅ Smooth submenu toggle
        wrapperDiv.addEventListener("click", () => {
            const isOpen = wrapperDiv.classList.contains("submenu-open");
            if (isOpen) {
                subUl.style.maxHeight = "0px";
                wrapperDiv.classList.remove("submenu-open");
            } else {
                subUl.style.maxHeight = subUl.scrollHeight + "px";
                wrapperDiv.classList.add("submenu-open");
            }
        });
    } else {
        wrapperDiv.addEventListener("click", () => {
            mainContent.innerHTML = `<header><h1>${item.label}</h1></header><div class="page-content">${item.content || ""}</div>`;
        });
    }

    li.appendChild(wrapperDiv);
    if (subUl) li.appendChild(subUl);
    return li;
}

// ------------------- Render Sidebar ------------------- //
let currentMenuKey = "dashboard";
function renderSidebar(menuKey, filter = "") {
    sidebarContent.innerHTML = "";
    const collapsed = sidebar.classList.contains("collapsed");

    sidebarMenus[menuKey].forEach(section => {
        const menubarDiv = document.createElement("div");
        menubarDiv.classList.add("menubar");

        if (section.heading && section.items) {
            const headingDiv = document.createElement("div");
            headingDiv.classList.add("menu-heading");
            headingDiv.innerHTML = `<span>${section.heading}</span>`;
            if (collapsed) headingDiv.style.display = "none";
            menubarDiv.appendChild(headingDiv);

            const ul = document.createElement("ul");
            ul.classList.add("menu");
            section.items.forEach(item => ul.appendChild(createMenuItem(item, filter)));
            menubarDiv.appendChild(ul);
        } else {
            const ul = document.createElement("ul");
            ul.classList.add("menu");
            ul.appendChild(createMenuItem(section, filter));
            menubarDiv.appendChild(ul);
        }

        sidebarContent.appendChild(menubarDiv);
    });

    sidebarHeading.textContent = collapsed ? "" :
        menuKey.charAt(0).toUpperCase() + menuKey.slice(1);
}

// ------------------- Icon Bar Events ------------------- //
const iconBarItems = document.querySelectorAll(".icon_bar .menu li");
iconBarItems.forEach((li, index) => {
    li.addEventListener("click", () => {
        iconBarItems.forEach(el => el.classList.remove("active"));
        li.classList.add("active");
        currentMenuKey = index === 0 ? "dashboard" :
            index === 1 ? "tasks" :
                index === 2 ? "settings" : "user";
        renderSidebar(currentMenuKey);
        searchInput.value = "";
        mainContent.innerHTML = "";
    });
});

// ------------------- Search ------------------- //
searchInput.addEventListener("input", () => {
    renderSidebar(currentMenuKey, searchInput.value);
});

// ------------------- Default Load ------------------- //
window.addEventListener("load", () => {
    currentMenuKey = "dashboard";
    searchInput.value = "";
    iconBarItems.forEach(el => el.classList.remove("active"));
    iconBarItems[0].classList.add("active");
    renderSidebar(currentMenuKey);
    mainContent.innerHTML = "";
    logoImg.src = document.body.classList.contains("dark")
        ? "./assets/png/logo_white.png"
        : "./assets/png/logo.png";
});
