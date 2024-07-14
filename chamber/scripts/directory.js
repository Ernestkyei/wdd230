
function toggleView(viewType) {
    const gridButton = document.querySelector('.toggle-grid');
    const listButton = document.querySelector('.toggle-list');
    const directoryContainer = document.querySelector('.directory-container');

    if (viewType === 'grid') {
        gridButton.classList.add('active');
        listButton.classList.remove('active');
        directoryContainer.classList.remove('list-view');
    } else if (viewType === 'list') {
        listButton.classList.add('active');
        gridButton.classList.remove('active');
        directoryContainer.classList.add('list-view');
    }
}

toggleView('grid');

document.addEventListener('DOMContentLoaded', function() {
    fetch('scripts/members.json')
        .then(response => response.json())
        .then(data => {
            const directoryContainer = document.querySelector('.directory-container');
            directoryContainer.innerHTML = '';

            data.members.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');

                memberCard.innerHTML = `
                    <h2>${member.name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
                    <p><strong>Other Info:</strong> ${member.otherInfo}</p>
                    
                `;

                directoryContainer.appendChild(memberCard);
            });
        })
        .catch(error => console.error('Error fetching members.json:', error));
});
