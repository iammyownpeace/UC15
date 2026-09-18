const seriesForm = document.querySelector('#series-form');
const titleInput = document.querySelector('#title');
const episodesInput = document.querySelector('#episodes');
const descriptionInput = document.querySelector('#description');
const authorInput = document.querySelector('#author');
const titleError = document.querySelector('#title-error');
const episodesError = document.querySelector('#episodes-error');
const descriptionError = document.querySelector('#description-error');
const authorError = document.querySelector('#author-error');
const formFeedback = document.querySelector('#form-feedback');

function showError(input, element, message) {
    input.closest('.input-wrapper').classList.add('has-error');
    element.textContent = message;
}

function clearError(input, element) {
    input.closest('.input-wrapper').classList.remove('has-error');
    element.textContent = '';
}

seriesForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formFeedback.textContent = '';

    let isValid = true;
    const fields = [
        [titleInput, titleError, 'Informe o título da série.'],
        [descriptionInput, descriptionError, 'Informe uma descrição.'],
        [authorInput, authorError, 'Informe o autor da série.']
    ];

    fields.forEach(([input, error, message]) => {
        if (!input.value.trim()) {
            showError(input, error, message);
            isValid = false;
        } else {
            clearError(input, error);
        }
    });

    const episodeCount = Number(episodesInput.value);
    if (!episodesInput.value || !Number.isInteger(episodeCount) || episodeCount < 1) {
        showError(episodesInput, episodesError, 'Informe uma quantidade válida de episódios.');
        isValid = false;
    } else {
        clearError(episodesInput, episodesError);
    }

    if (isValid) {
        formFeedback.textContent = 'Série cadastrada com sucesso na sua biblioteca!';
        seriesForm.reset();
    }
});
