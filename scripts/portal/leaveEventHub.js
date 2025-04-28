// Script For Event Hub Map
var southperryMapId = 2000000;
var henesys = 100000000;

function enter(client) {
    var player = client.getPlayer();
    if (player.getJobStyle().getId() === 0) {
        player.changeMap(southperryMapId);
    } else {
        player.changeMap(henesys);
    }
}
