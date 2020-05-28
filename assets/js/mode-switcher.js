let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = sessionStorage.getItem('theme');

if (systemInitiatedDark.matches) {
	document.getElementById("theme-toggle").classList.add('dark');
	document.getElementById("theme-toggle").classList.remove('light');
} else {
	document.getElementById("theme-toggle").classList.add('light');
	document.getElementById("theme-toggle").classList.remove('dark');
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("theme-toggle").classList.add('light');
    document.getElementById("theme-toggle").classList.remove('dark');
   	sessionStorage.setItem('theme', '');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("theme-toggle").classList.add('dark');
    document.getElementById("theme-toggle").classList.remove('light');
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
  let theme = sessionStorage.getItem('theme');
  if (theme === "dark") {
    document.getElementById("theme-toggle").classList.add('light');
    document.getElementById("theme-toggle").classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
    sessionStorage.setItem('theme', 'light');
	}	else if (theme === "light") {
    document.getElementById("theme-toggle").classList.add('dark');
    document.getElementById("theme-toggle").classList.remove('light');
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
  } else if (systemInitiatedDark.matches) {
    document.getElementById("theme-toggle").classList.add('dark');
    document.getElementById("theme-toggle").classList.remove('light');
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
	} else {
    document.getElementById("theme-toggle").classList.add('dark');
    document.getElementById("theme-toggle").classList.remove('light');
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
	}
}

if (theme === "dark") {
  document.getElementById("theme-toggle").classList.add('dark');
  document.getElementById("theme-toggle").classList.remove('light');
  document.documentElement.setAttribute('data-theme', 'dark');
  sessionStorage.setItem('theme', 'dark');
	// document.getElementById("theme-toggle").innerHTML = sun;
} else if (theme === "light") {
  document.getElementById("theme-toggle").classList.add('light');
  document.getElementById("theme-toggle").classList.remove('dark');
  document.documentElement.setAttribute('data-theme', 'light');
  sessionStorage.setItem('theme', 'light');
}
