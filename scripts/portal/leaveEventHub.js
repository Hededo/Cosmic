// Script For Event Hub Map
var amherstMapId = 1000000;
var heneHunting1MapId = 104040000;

function enter(client) {
    var player = client.getPlayer();
    if (player.getJobStyle().getId() == 0) {
        player.changeMap(amherstMapId);
    } else {
        player.changeMap(heneHunting1MapId);
    }
}
