/* Reset and General Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
}

/* Header and Navigation */
header {
    background: #1a1a1a;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.hamburger {
    font-size: 2rem;
    cursor: pointer;
    display: none;
}

.nav-menu {
    display: flex;
}

.nav-menu ul {
    display: flex;
    list-style: none;
}

.nav-menu li {
    margin-left: 2rem;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

.nav-menu a:hover {
    color: #00aaff;
}

/* Sections */
section {
    padding: 5rem 2rem;
    text-align: center;
}

h1, h2, h3 {
    color: #1a1a1a;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

p {
    max-width: 800px;
    margin: 0 auto 1rem;
}

/* Hero Section */
#home {
    background: linear-gradient(to right, #00aaff, #007acc);
    color: white;
    padding: 8rem 2rem;
}

.cta-button {
    padding: 0.8rem 2rem;
    background: #fff;
    color: #007acc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background 0.3s ease, color 0.3s ease;
}

.cta-button:hover {
    background: #007acc;
    color: white;
}

/* Services and Features */
.services-container, .features-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.service-item, .feature-item {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.service-item:hover, .feature-item:hover {
    transform: translateY(-5px);
}

.service-item img, #about img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 1rem;
}

/* Forms */
form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

label {
    text-align: left;
    font-weight: bold;
}

input, textarea {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

textarea {
    min-height: 100px;
    resize: vertical;
}

button {
    padding: 0.8rem;
    background: #007acc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background 0.3s ease;
}

button:hover {
    background: #005f99;
}

/* Footer */
footer {
    background: #1a1a1a;
    color: white;
    padding: 2rem;
    text-align: center;
}

footer ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
}

footer a {
    color: #00aaff;
    text-decoration: none;
    transition: color 0.3s ease;
}

footer a:hover {
    color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: block;
    }

    .nav-menu {
        display: none;
        position: absolute;
        top: 60px;
        right: 0;
        background: #1a1a1a;
        width: 200px;
        padding: 1rem;
    }

    .nav-menu.active {
        display: block;
    }

    .nav-menu ul {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-menu li {
        margin: 0;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }
}