$('#contactForm').validate({
    rules:{
        
    },
    messages: {

    },
    
    onfocusout: validateFields,
    submitHandler: createAjaxPost
});

function validateFields(element, event){
    console.log('File Upload Button Trigger');
    $(event).valid();
}

function createAjaxPost(){
    const data = {
        profile_pic: $('#profile_pic')[0].value
    }
    const post = $.post('http://localhost:3000/insertContact', data);

    post.done(processResults);
    post.fail(processErrors);
}

$('#btnSubmit').click(function(){
    console.log('COntact Button Trigger');
    $('#contactForm').submit();
});

function processErrors(){
    console.log('Validation errors');
}

function processResults(rows, status, xhr){
    console.log("Data sent to the server");
}

