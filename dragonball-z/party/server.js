export default class Server {
  onMessage(message, sender, room) {
    try {
      const data = JSON.parse(message);
      data.senderId = sender.id;
      room.broadcast(JSON.stringify(data), [sender.id]);
    } catch (e) {
      // If message is not JSON, just broadcast it as-is
      room.broadcast(message, [sender.id]);
    }
  }
}
