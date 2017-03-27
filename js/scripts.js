$(document).ready(function(){
    //lndex
    loadhome("#ieeelogo");
    loadhome("#ieeefau");

    //about
    loadcontent("#whoweare", "html/about/whoweare.html");
    loadcontent("#leadership", "html/about/leadership.html");
    loadcontent("#members", "html/about/members.html");

    //blog
    loadcontent("#toc", "html/blog/toc.html");
    loadcontent("#categories", "html/blog/categories.html");
    loadcontent("#authors", "html/blog/authors.html");

    //contact
    loadcontent("#contact", "html/contact/contact.html");

    //events
    loadcontent("#eweek", "html/events/eweek.html");
    loadcontent("#bluemix", "html/events/bluemix.html");
    loadcontent("#southeastcon", "html/events/southeastcon.html");
    loadcontent("#meeting", "html/events/meeting.html");
});

function toggle_bg_off() { $("html").removeClass("full").addClass("full-no-image"); }
function toggle_bg_on() { $("html").removeClass("full-no-image").addClass("full"); }
function loadhome(elem)
{
    $(elem).click(function(){
        console.log(elem + " clicked");
        $("#content").hide();
        toggle_bg_on();
    });
}
function loadcontent(elem, pagedir)
{
    $(elem).click(function(){
        console.log(elem + " clicked");
        $("#content").load(pagedir);
        $("#content").show();
        toggle_bg_off();
        $(".dropdown-toggle").dropdown("toggle");
    });
}
