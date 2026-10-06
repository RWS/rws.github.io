// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

$(document).ready(function () {
    if ($(".index-landing").length > 0) {
        $(".article").css("margin-top", "0px");
    }
});

// Press / to search; Esc clears the search and leaves the box
document.addEventListener('keydown', function (e) {
    var box = document.getElementById('search-query');
    if (!box) return;
    var tag = (document.activeElement && document.activeElement.tagName) || '';
    if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA' && !document.activeElement.isContentEditable) {
        e.preventDefault();
        box.focus();
    } else if (e.key === 'Escape' && document.activeElement === box) {
        box.value = '';
        box.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
        box.blur();
    }
});
