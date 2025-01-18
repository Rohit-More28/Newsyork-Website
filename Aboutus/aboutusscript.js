const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggle-sidebar');
const overlay = document.getElementById('overlay');

// Toggle sidebar visibility
toggleSidebar.addEventListener('click', (event) => {
    event.stopPropagation();
    sidebar.style.left = '0';
    overlay.style.display = 'block';
});

// Close sidebar when clicking the overlay
overlay.addEventListener('click', () => {
    sidebar.style.left = '-220px';
    overlay.style.display = 'none';
});

// Close sidebar on outside click
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !toggleSidebar.contains(event.target)) {
        sidebar.style.left = '-220px';
        overlay.style.display = 'none';
    }
});

// Prevent clicks inside sidebar from closing it
sidebar.addEventListener('click', (event) => {
    event.stopPropagation();
});
