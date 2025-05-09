// Check if user is logged in and is a teacher
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser || currentUser.role !== 'teacher') {
        window.location.href = '../index.html';
    }
    
    // Logout button
    document.getElementById('logout').addEventListener('click', function() {
        sessionStorage.removeItem('currentUser');
        window.location.href = '../index.html';
    });
    
    // Navigation buttons
    document.getElementById('createExamBtn').addEventListener('click', function() {
        window.location.href = 'create-exam.html';
    });
    
    document.getElementById('viewExamsBtn').addEventListener('click', function() {
        window.location.href = 'exams.html';
    });
});