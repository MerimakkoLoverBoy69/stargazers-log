fetch('events.json')
  .then(response => response.json())
  .then(data => {
    const listContainer = document.createElement('ul');
    data.forEach(repo => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="${repo.url}" target="_blank">${repo.name}</a> by ${repo.owner}: ${repo.description}`;
      listContainer.appendChild(listItem);
    });
    document.body.appendChild(listContainer);
  })
  .catch(error => console.error('Error fetching the repositories:', error));