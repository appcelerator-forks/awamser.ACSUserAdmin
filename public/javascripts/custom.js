var editor; // use a global for the submit and return data rendering in the examples

$(document).ready(function () {
    $('#users').dataTable({
        "sDom": "<'row-fluid'<'span6'T><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        "sAjaxDataProp" : 'users',
        "sAjaxSource": "/user/list",
        "sPaginationType": "bootstrap",
        "aoColumns": [
            { "mData": "first_name" },
            { "mData": "last_name" },
            { "mData": "username" },
            { "mData": "email" }
        ]
    });
});