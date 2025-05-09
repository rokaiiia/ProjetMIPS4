// Toggle between login and register forms
document.getElementById('showRegister').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.login-form').style.display = 'none';
  document.querySelector('.register-form').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.register-form').style.display = 'none';
  document.querySelector('.login-form').style.display = 'block';
});

// Show/hide student fields based on role selection
document.getElementById('reg-role').addEventListener('change', function() {
  const studentFields = document.getElementById('student-fields');
  if (this.value === 'student') {
      studentFields.style.display = 'block';
  } else {
      studentFields.style.display = 'none';
  }
});

// Registration form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const user = {
      firstname: document.getElementById('reg-firstname').value,
      lastname: document.getElementById('reg-lastname').value,
      email: document.getElementById('reg-email').value,
      password: document.getElementById('reg-password').value,
      role: document.getElementById('reg-role').value,
      school: document.getElementById('reg-school').value,
      program: document.getElementById('reg-program').value
  };
  
  // Save to localStorage (replace with actual backend in production)
  localStorage.setItem('user_' + user.email, JSON.stringify(user));
  
  alert('Inscription réussie! Vous pouvez maintenant vous connecter.');
  document.querySelector('.register-form').style.display = 'none';
  document.querySelector('.login-form').style.display = 'block';
  this.reset();
});

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  // Get user from localStorage (replace with actual backend in production)
  const user = JSON.parse(localStorage.getItem('user_' + email));
  
  if (user && user.password === password) {
      // Save current user session
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      
      // Redirect based on role
      if (user.role === 'teacher') {
          window.location.href = 'teacher/dashboard.html';
      } else {
          window.location.href = 'student/dashboard.html';
      }
  } else {
      alert('Email ou mot de passe incorrect');
  }
});