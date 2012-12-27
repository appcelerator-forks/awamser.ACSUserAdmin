var editor; // use a global for the submit and return data rendering in the examples

$(document).ready(function () {

    editor = new $.fn.dataTable.Editor({
        "ajaxUrl": {
            "create": "/user/create"
        },
        "domTable": "#users",
        "fields": [
            {
                "label": "First Name:",
                "name": "first_name"
            },
            {
                "label": "Last Name:",
                "name": "last_name"
            },
            {
                "label": "Username:",
                "name": "username"
            },
            {
                "label": "Mobile Phone:",
                "name": "custom_fields.phone.mobile"
            },
            {   "label": "Work Phone:",
                "name": "custom_fields.phone.work"
            },
            {   "label": "Home Phone:",
                "name": "custom_fields.phone.home"
            },
            {   "label": "Work Email:",
                "name": "custom_fields.email.work"
            },
            {   "label": "Home Email:",
                "name": "custom_fields.email.home"
            }

        ]
    });

    $('#users').dataTable({
        "sDom": "<'row-fluid'<'span6'T><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        "sAjaxDataProp" : 'users',
        "sAjaxSource": "/user/list",
        "aoColumns": [
            { "mData": "first_name" },
            { "mData": "last_name" },
            { "mData": "username" },
            { "mData": "email" },
            { "mData": "custom_fields.phone.mobile"},
            { "mData": "custom_fields.phone.work"}

        ],
        "oTableTools": {
            "sRowSelect": "single",
            "aButtons": [
                { "sExtends": "editor_create", "editor": editor },
                { "sExtends": "editor_edit", "editor": editor },
                { "sExtends": "editor_remove", "editor": editor }
            ]
        }
    });
});