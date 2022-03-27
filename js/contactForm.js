

$('#contactForm').validate({
    rules:{
        cfName: { required: true, minlength: 3, maxlength: 50},
        cphoneNumber: { required: true, minlength: 10, maxlength: 15},
        cEmail: { required: true, minlength: 3, maxlength: 50, email:true },
        cMessage: {required: true, minlength: 3, maxlength: 250},
    },
    messages: {
        cfName: {required:"Please enter a valid First Name", minlength:"First name should contain at least 3 characters"  },
        cphoneNumber:{ required:"Please enter a valid Phone Number", minlength:"Phone number should contain at least 10 characters"},
        cEmail: { required:"Please enter a valid email", minlength:"Email should contain at least 3 characters", email:"Needs to be valid email"},
        cMessage: { required:"Please enter a valid Message", minlength:"Message should contain at least 3 characters"  }
    },
    
    onfocusout: validateFields,
    submitHandler: createAjaxPost
});

function validateFields(element, event){
    console.log('COntact Button Trigger');
    $(event).valid();
}

function createAjaxPost(){
    const data = {
        cfName: $('#cfName')[0].value,
        cEmail: $('#cEmail')[0].value,
        cphoneNumber: $('#cphoneNumber')[0].value,
        cMessage: $('#cMessage')[0].value
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