document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-species');
    const conservationStatusSelect = document.getElementById('conservation-status');
    const habitatInput = document.getElementById('filter-habitat');
    const speciesCards = document.querySelectorAll('.species-card');
    const modal = document.getElementById('speciesModal');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close');
    const modalImage = document.querySelector('.modal-image');
    const modalTitle = document.querySelector('.modal-title');
    const modalScientificName = document.querySelector('.modal-scientific-name');
    const modalHabitat = document.querySelector('.modal-habitat .habitat-text');
    const modalThreatLevel = document.querySelector('.modal-threat-level .threat-level-value');
    const modalThreatsList = document.querySelector('.threats-list');
    const modalDescriptionContent = document.querySelector('.modal-description-content');

    function filterSpecies() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedStatus = conservationStatusSelect.value.toLowerCase();
        const habitatTerm = habitatInput.value.toLowerCase();

        speciesCards.forEach(card => {
            const name = card.dataset.name.toLowerCase();
            const status = card.dataset.status.toLowerCase();
            const habitat = card.dataset.habitat.toLowerCase();

            const nameMatch = name.includes(searchTerm);
            const statusMatch = selectedStatus === '' || status === selectedStatus;
            const habitatMatch = habitat.includes(habitatTerm);

            if (nameMatch && statusMatch && habitatMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Function to open the modal
    function openModal(card) {
        const speciesName = card.dataset.name;
        const speciesHabitat = card.dataset.habitat;
        const speciesThreatLevel = card.querySelector('p:nth-child(5)').textContent;
        const speciesThreats = Array.from(card.querySelectorAll('.threats span')).map(span => span.textContent);
        const speciesImageSrc = card.querySelector('img').src; // Get image source from the card


        modalImage.src = speciesImageSrc;
        modalTitle.textContent = speciesName;
        modalScientificName.textContent = card.querySelector('.scientific-name').textContent;
        modalHabitat.textContent = speciesHabitat;
        modalThreatLevel.textContent = speciesThreatLevel;
        modalDescriptionContent.textContent = getDescription(speciesName);  // Retrieve description
         console.log( 'teste ' + getDescription(speciesName))

        modalThreatsList.innerHTML = ''; // Clear existing threats
        speciesThreats.forEach(threat => {
            const threatSpan = document.createElement('span');
            threatSpan.textContent = threat;
            modalThreatsList.appendChild(threatSpan);
        });

        modal.style.display = 'block';
    }

     // Add click event to each species card
     speciesCards.forEach(card => {
        card.addEventListener('click', function() {
            openModal(this);   // Pass the clicked card to the function
        });
    });

    // Close the modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });


    searchInput.addEventListener('input', filterSpecies);
    conservationStatusSelect.addEventListener('change', filterSpecies);
    habitatInput.addEventListener('input', filterSpecies);
});


// Description function
function getDescription(speciesName) {
        switch (speciesName) {
            case 'Tartaruga-marinha-verde':
                return 'A tartaruga-marinha-verde é uma das maiores tartarugas marinhas. Alimenta-se principalmente de algas e plantas marinhas quando adulta.';
            case 'Baleia-azul':
                return 'A baleia-azul é o maior animal do planeta, habitando todos os oceanos.';
            case 'Tubarão-baleia':
                return 'O tubarão-baleia é o maior peixe do mundo, apesar do nome ele é um peixe.';
            case 'Água-viva-imortal':
                return 'A água-viva-imortal possui a capacidade de reverter ao estágio de pólipo, tornando-a potencialmente imortal.';
            case 'Peixe-palhaço':
                return 'O peixe-palhaço vive em simbiose com anêmonas marinhas, protegendo-se de predadores.';
            case 'Atum-azul':
                return 'O atum-azul é uma espécie de atum altamente valorizada na culinária, especialmente no sushi.';
            default:
                return 'Descrição não disponível.';
        }
    }