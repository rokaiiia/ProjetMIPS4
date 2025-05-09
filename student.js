// Check if user is logged in and is a student
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser || currentUser.role !== 'student') {
        window.location.href = '../index.html';
    }
});