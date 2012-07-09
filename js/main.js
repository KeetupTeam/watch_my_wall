var node_js_url = location.protocol + "//" + location.hostname + ":8080/";

var websocket = io.connect(node_js_url);

jQuery(document).ready(function($) {
    // Code using $ as usual goes here.


    websocket.on('connect', function(data) {
        
        });

    websocket.on("sendEvent", function(data){
        
        var river_list = $('.elgg-list.elgg-list-river');
        if (river_list.length > 0) {
            var li = $('<li></li>');
            var id = 'item-river-'+data.river_item.id;
           
            if ($('#'+id).length > 0) {
                return false;
            }
           
           
            li.addClass('elgg-item');
            li.attr('id', id);
           
            li.append(data.msg);
           
            river_list.prepend(li);
           
        }
    });
});