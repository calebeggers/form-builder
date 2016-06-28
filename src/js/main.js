import $ from "jquery";

$.ajax({
	url: "http://json-data.herokuapp.com/forms",
	dataType: "json"
	}).then(function(response){
		console.log(response)
		response.forEach(function (object) {
			if (object.type == 'text') {
				inputText(object);
			} else if (object.type == 'select') {
				inputSelect(object);
			} else if (object.type == 'textarea') {
				inputTextarea(object);
			} else if (object.type == 'email'){
				inputEmail(object);
			} else if (object.type == 'tel'){
				inputTel(object);
			}
		})
	}
);

function inputText (object) {
	$(".form-fields").append(`<div class="input-container"><i class="fa ${object.icon}" aria-hidden="true"></i> <input type="${object.type}" name="${object.label}" placeholder="${object.label}" id="${object.id}"></div>`)
};

function inputSelect(object) {
	$(".form-fields").append(`<div class="input-container"><select name="${object.type}">
              <option value="value1" selected>${object.label}...</option> 
              <option value="value2">${object.options[0].label}</option>
              <option value="value3">${object.options[1].label}</option>
              <option value="value4">${object.options[2].label}</option>
              <option value="value5">${object.options[3].label}</option>
              <option value="value6">${object.options[4].label}</option>
            </select></div>`)
};

function inputTextarea(object) {
	$(".form-fields").append(`<div class="input-container"><i class="fa ${object.icon}" aria-hidden="true"></i> <textarea id="${object.id}" placeholder="${object.label}"></textarea></div>`);
};

function inputEmail(object) {
	$(".form-fields").append(`<div class="input-container"><i class="fa ${object.icon}" aria-hidden="true"></i> <input type="${object.type}" name="${object.label}" placeholder="${object.label}" id="${object.id}"></div>`);
};

function inputTel(object) {
	$(".form-fields").append(`<div class="input-container"><i class="fa ${object.icon}" aria-hidden="true"></i> <input type="${object.type}" name="${object.label}" placeholder="${object.label}" id="${object.id}"></div>`);
};