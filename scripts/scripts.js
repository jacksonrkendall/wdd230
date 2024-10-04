document.getElementById('currentYear').textContent = new Date().getFullYear();
        document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

document.getElementById('toggleButton').addEventListener('click', function() {
            var nav = document.getElementById('myNav');
            if (nav.style.display === 'none' || nav.style.display === '') {
                nav.style.display = 'block';
            } else {
                nav.style.display = 'none';
            }
        });