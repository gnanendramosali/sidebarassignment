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
    sidebar.classList.toggle("collapsed");
    renderSidebar(currentMenuKey, searchInput?.value || "");
});

mobileMenuBtn.addEventListener("click", () => {
    sidebar.classList.add("mobile-visible");
    overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("mobile-visible");
    overlay.classList.remove("active");
    if (searchInput) searchInput.value = "";
    renderSidebar(currentMenuKey);
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
                { icon: "flaticon-view", label: "Overview",},
                {
                    icon: "flaticon-web-development-1",
                    label: "Executive Summary",
                    submenu: [
                        { label: "Revenue Overview",},
                        { label: "Key Performance Indications",},
                        { label: "Strategic Goals Progress",},
                        { label: "Department Highlights",}
                    ]
                },
                {
                    icon: "flaticon-chart",
                    label: "Operations Dashboard",
                    submenu: [
                        { label: "Project Timeline",},
                        { label: "Resource Allocation",},
                        { label: "Team Performance",},
                        { label: "Capacity Planning",},
                    ]
                },
                {
                    icon: "flaticon-chart-1",
                    label: "Financial Dashboard",
                    submenu: [
                        { label: "Budget vs Actual",},
                        { label: "Cash Flow Analysis",},
                        { label: "Expense Breakdown",},
                        { label: "Profit & Loss Summary",},
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
                        { label: "Team Productivity: 87% ↑",},
                        { label: "Project Completion: 12/15",},
                        { label: "Budget Utilization: 73%",},
                        { label: "Client Satisfaction: 4.6/5",},
                    ]
                },
                {
                    icon: "flaticon-star",
                    label: "Monthly Insights",
                    submenu: [
                        { label: "Revenue Growth: +15.3%",},
                        { label: "New Clients: 4",},
                        { label: "Team Expansion: 8 hires",},
                        { label: "Cost Reduction: 7.2%",},
                    ]
                },
                {
                    icon: "flaticon-view",
                    label: "Quartely Analysis",
                    submenu: [
                        { label: "Market Position: Improvements",},
                        { label: "ROI: 23.4%",},
                        { label: "Customer Retention: 92%",},
                        { label: "Innovation Index: 8.7/10",},
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
                        { label: "Sales Conversion: 34.2%",},
                        { label: "Lead Response Time: 2.3h",},
                        { label: "Customer Lifetime Value...",},
                        { label: "Churn Rate: 3,1%",},
                    ]
                },
                {
                    icon: "flaticon-chart-1",
                    label: "Predictive Analytics",
                    submenu: [
                        { label: "Q4 Revenue Forecast: $2.5",},
                        { label: "Resource Demand: High",},
                        { label: "Market Trends: Positive",},
                        { label: "Risk Assessment: Low",},
                    ]
                }
            ]
        }
    ],
    tasks: [
        { icon: "flaticon-plus", label: "New task", },
        { icon: "flaticon-filter", label: "Filter task", },
        {
            heading: "Tasks",
            items: [
                {
                    icon: "flaticon-clock", label: "Due today", submenu: [
                        { label: "Review design mockups",},
                        { label: "Update documentation",},
                        { label: "Test new feature",},
                    ]
                },
                {
                    icon: "flaticon-check-2", label: "In progress", submenu: [
                        { label: "Implement user auth",},
                        { label: "Database migration",}
                    ]
                },
                {
                    icon: "flaticon-check-mark", label: "Completed", submenu: [
                        { label: "Fixed login bug",},
                        { label: "Updated dependencies",},
                        { label: "Code review completed",},

                    ]
                },
            ]
        },
        {
            heading: "Others",
            items: [
                {
                    icon: "flaticon-flag-1", label: "Priority tasks", submenu: [
                        { label: "Summary 1",},
                        { label: "Summary 2",}
                    ]
                },
                {
                    icon: "flaticon-archive", label: "Archived",
                },

            ]
        },
    ],
    settings: [
        {
            heading: "Settings",
            items: [
                { icon: "flaticon-user-2", label: "Account Settings",},
                { icon: "flaticon-verified", label: "Verified",},
                { icon: "flaticon-notification", label: "Notifications",},
                { icon: "flaticon-setting", label: "General Settings",},
            ]
        }
    ],
    user: [
        {
            heading: "User",
            items: [
                { icon: "flaticon-user-2", label: "Profile",},
                { icon: "flaticon-log-out", label: "Logout",}
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

        let hasMatch = false;

        if (section.heading && section.items) {
            const headingDiv = document.createElement("div");
            headingDiv.classList.add("menu-heading");
            headingDiv.innerHTML = `<span>${section.heading}</span>`;
            if (collapsed) headingDiv.style.display = "none";

            const ul = document.createElement("ul");
            ul.classList.add("menu");

            section.items.forEach(item => {
                const labelMatch = item.label.toLowerCase().includes(filter.toLowerCase());

                let submenuMatches = [];
                if (item.submenu) {
                    submenuMatches = item.submenu.filter(sub =>
                        sub.label.toLowerCase().includes(filter.toLowerCase())
                    );
                }

                if (!filter || labelMatch || submenuMatches.length > 0) {
                    hasMatch = true;
                    const newItem = { ...item };
                    if (filter && submenuMatches.length > 0) {
                        newItem.submenu = submenuMatches;
                    }
                    ul.appendChild(createMenuItem(newItem, filter));
                }
            });

            if (hasMatch || !filter) {
                menubarDiv.appendChild(headingDiv);
                menubarDiv.appendChild(ul);
            }
        } else {
            const labelMatch = section.label?.toLowerCase().includes(filter.toLowerCase());
            if (!filter || labelMatch) {
                hasMatch = true;
                const ul = document.createElement("ul");
                ul.classList.add("menu");
                ul.appendChild(createMenuItem(section, filter));
                menubarDiv.appendChild(ul);
            }
        }

        if (hasMatch || !filter) {
            sidebarContent.appendChild(menubarDiv);
        }
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
        if (searchInput) searchInput.value = "";
        mainContent.innerHTML = "";
    });
});

// ------------------- Search ------------------- //
if (searchInput) {
    searchInput.addEventListener("input", () => {
        renderSidebar(currentMenuKey, searchInput.value);
    });
}

// ------------------- Default Load ------------------- //
window.addEventListener("load", () => {
    currentMenuKey = "dashboard";
    if (searchInput) searchInput.value = "";
    iconBarItems.forEach(el => el.classList.remove("active"));
    iconBarItems[0].classList.add("active");
    renderSidebar(currentMenuKey);
    mainContent.innerHTML = "";
    logoImg.src = document.body.classList.contains("dark")
        ? "./assets/png/logo_white.png"
        : "./assets/png/logo.png";
});
