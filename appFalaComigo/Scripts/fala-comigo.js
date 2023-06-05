const voiceSelect = document.getElementById("voiceSelect");
let voices = [];

$('#createBoard').on('click', function () {
    $('#createBoardModal').modal('toggle');
});

$('body').on('click', '#createCard', function (e) {
    $('#createCardModal').modal('toggle');
});

function RenderBoardCards(pranchaId) {
    $('#loading').show();

    $.ajax({
        type: 'POST',
        url: '/FalaComigo/RenderCardsView',
        data: { "selectedBoardId": parseInt(pranchaId) },
        cache: false,
        success: function (result) {

            $('#loading').hide();

            $('.cards-placeholder').html(result);
            $('.cards-placeholder').show();
            $('.boards-container').hide();

        },
        error: function () {
            $('#loading').hide();
        }
    });
}

$('.search-image-button').on('click', function () {

    let searchText = $('#newCardSearchImage').val();
    if (!searchText) {
        searchText = $('#newBoardSearchImage').val();
    }
    if (!searchText) {
        searchText = $('#editBoardSearchImage').val();
    }
    if (!searchText) {
        searchText = $('#editCardSearchImage').val();
    }

    $('#loading').show();
    $('.select-image-check-icon-card').hide();
    $('.select-image-check-icon-board').hide();

    $.ajax({
        type: 'POST',
        url: '/FalaComigo/SearchImage',
        data: { searchText: searchText },
        cache: false,
        success: function (result) {

            $('#loading').hide();

            let imageDisplay = "<div>";

            result.pictograms.forEach(function (arrayItem) {
                imageDisplay = imageDisplay + '<img src="' + arrayItem.image + '" alt="select image" class="select-image" id="' + arrayItem._id + '" onclick="ClickOnImage(this)" data-selected="false">'
            });

            imageDisplay = imageDisplay + "</div>";

            $('#selectImage').html(imageDisplay);
            $('#selectImageModal').modal('toggle');
        }
    });
});


function ClickOnImage(element) {

    $('#btnSelectImage').removeAttr("disabled");

    $('.select-image').css('border-color', 'black');
    $('.select-image').css('border-width', '2.4px');
    $('.select-image').attr('data-selected', 'false');

    $(element).css('border-color', 'blue');
    $(element).css('border-width', '4px');
    $(element).attr('data-selected', 'true');
}

$('#btnSelectImage').on('click', function () {

    $('#btnSelectImage').attr("disabled", true);
    $('.select-image-check-icon-card').show();
    $('.select-image-check-icon-board').show();

    let id = $('img[data-selected="true"]').attr('id');
    $('.new-board-searchImage-button').attr('data-image-id', id);

    $('#selectImageModal').modal('toggle');
});

$('#buttonCreateBoard').on('click', function () {

    let newBoard = {
        UsuarioId: $('.selected-user').attr('data-user-id'),
        Nome: $('#newBoardName').val(),
        Descricao: $('#newBoardDiscription').val(),
        ArasaacIdImagem: $('.new-board-searchImage-button').attr('data-image-id'),
        Cor: $('#newBoardSelectCollor').val()
    }

    $('.select-image-check-icon-board').hide();

    $.ajax({
        type: 'POST',
        url: '/FalaComigo/CreateBoard',
        data: newBoard,
        cache: false,
        success: function (result) {
            location.reload()
        }
    });

});

$('#buttonCreateCard').on('click', function () {

    $('#loading').show();

    let newCard = {
        Nome: $('#newCardName').val(),
        ArasaacId: $('.new-board-searchImage-button').attr('data-image-id'),
        PranchaId: $('.cards-container').attr('data-pranchaId')
    }

    CleanCreateCardFields();

    $('.select-image-check-icon-card').hide();

    $.ajax({
        type: 'POST',
        url: '/FalaComigo/CreateCard',
        data: newCard,
        cache: false,
        success: function (result) {
            $('#loading').hide();
            $('#createCardModal').modal('toggle');
            RenderBoardCards(result.PranchaId);
        },
        error: function () {
            $('#loading').hide();
        }
    });

});

function CleanCreateCardFields() {
    $('#newCardName').val("");
    $('#newCardSearchImage').val("");
}

$('body').on('click', '.delete-board', function (e) {

    let boardId = $(this).attr('data-boardId');

    $.ajax({
        type: 'POST',
        url: '/FalaComigo/DeleteBoard',
        data: { boardId: parseInt(boardId) },
        cache: false,
        success: function (result) {
            location.reload();
        }
    });
});

$('body').on('click', '.delete-card', function (e) {
    let cardId = $(this).attr('data-cardId');

    $.ajax({
        type: 'POST',
        url: '/FalaComigo/DeleteCard',
        data: { cardId: parseInt(cardId) },
        cache: false,
        success: function (result) {
            RenderBoardCards($('.cards-container').attr('data-pranchaId'));
        }
    });
});

$('body').on('click', '.edit-board', function (e) {

    let boardId = $(this).attr('data-boardId');
    let boardName = $("div[data-boardId=" + boardId +"]").children('div').children('h4').children('b').text();
    let boardDescription = $("div[data-boardId=" + boardId +"]").children('div').children('p').text();
    let boardColor = $("div[data-boardId=" + boardId +"]").children('div').attr('class').split(' ')[1];
    let boardImage = $("div[data-boardId=" + boardId +"]").children('img').attr('src').split('/')[4];

    $('#boardId').val(boardId);
    $('#editBoardName').val(boardName);
    $('#editBoardDiscription').val(boardDescription);
    $('#editBoardSelectCollor').val(boardColor);
    $('.edit-board-searchImage-button').attr('data-image-id', boardImage);

    $('#editBoardModal').modal('toggle');
});

$('#buttonEditBoard').on('click', function () {

    let newInformationForBoard = {
        UsuarioId: $('.selected-user').attr('data-user-id'),
        Nome: $('#editBoardName').val(),
        Descricao: $('#editBoardDiscription').val(),
        ArasaacIdImagem: $('.edit-board-searchImage-button').attr('data-image-id'),
        Cor: $('#editBoardSelectCollor').val(),
        PranchaId: $('#boardId').val()
    };

    $.ajax({
        type: 'PATCH',
        url: '/FalaComigo/EditBoard',
        data: newInformationForBoard,
        cache: false,
        success: function (result) {
            location.reload();
        }
    });
});

$('body').on('click', '.edit-card', function (e) {
    let cardId = $(this).attr('data-cardId');
    let cardName = $("div[data-cardId=" + cardId + "]").children('div').children('h4').children('b').text();
    let cardImage = $("div[data-cardId=" + cardId + "]").children('img').attr('src').split('/')[4];

    $('#cardId').val(cardId);
    $('#editCardName').val(cardName);
    $('.edit-card-searchImage-button').attr('data-image-id', cardImage);

    $('#editCardModal').modal('toggle');
});


$('#buttonEditCard').on('click', function () {

    let newInformationForCard = {
        UsuarioId: $('.selected-user').attr('data-user-id'),
        Nome: $('#editCardName').val(),
        ArasaacId: $('.edit-card-searchImage-button').attr('data-image-id'),
        CartaoId: $('#cardId').val()
    };

    $('#editCardModal').modal('toggle');

    $.ajax({
        type: 'PATCH',
        url: '/FalaComigo/EditCard',
        data: newInformationForCard,
        cache: false,
        success: function (result) {
            RenderBoardCards($('.cards-container').attr('data-pranchaId'));
        }
    });
});

$('body').on('click', '.existing-card', function (e) {

    if (event.target.tagName.toLowerCase() === 'i') {
        return;
    }

    let message = $(this).find('div.card-information').find('b').text();

    Speak(message);

    AddToSentence(message);
});

function Speak(message) {

    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(message);

    SetVoice(utterance);

    speechSynthesis.speak(utterance);
}

function SetVoice(utterance) {

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
            utterance.voice = voices[i];
            break;
        }
    }
}

function AddToSentence(message) {

    let newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'sentence-card-name');

    let newText = document.createTextNode(message)
    newDiv.appendChild(newText);

    const sentenceDiv = document.getElementById("sentenceText");
    sentenceDiv.appendChild(newDiv);
}

function populateVoiceList() {

    voices = speechSynthesis.getVoices().filter(function (a) {
        if (a.lang.includes('pt')) {
            return true;
        }
        else {
            return false
        }
    }).sort(function (a, b) {
        let aname = a.name.toUpperCase();
        let bname = b.name.toUpperCase();

        if (aname < bname) {
            return -1;
        } else if (aname == bname) {
            return 0;
        } else {
            return +1;
        }
    });
    const selectedIndex =
        voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
    voiceSelect.innerHTML = "";

    for (let i = 0; i < voices.length; i++) {
        const option = document.createElement("option");
        option.textContent = `${voices[i].name} (${voices[i].lang})`;

        if (voices[i].default) {
            option.textContent += " -- DEFAULT";
        }

        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        voiceSelect.appendChild(option);
    }
    voiceSelect.selectedIndex = selectedIndex;
}


$('body').on('click', '.sentence-card-name', function () {
    $(this).remove();
});

window.speechSynthesis.onvoiceschanged = function () {
    populateVoiceList();
};

$('body').on('click', '#speakButton', function () {

    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }

    let sentence = "";

    $('.sentence-card-name').each(function (i, element) {
        sentence += element.innerText + " ";
    });
    Speak(sentence);
});

$('body').on('click', '#clearSentenceButton', function () {

    ClearSentence();
});

function ClearSentence() {
    $('.sentence-card-name').remove();
}

ClearSentence();