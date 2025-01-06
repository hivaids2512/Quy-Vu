## Assumptions
- This design will not cover authentication and authorization part
- Score board update: real-time
- Data consistency: eventual consistency
- System can have multiple games, each game has only 1 score board
- 1 user can join multiple games.

## Application architect

![image](https://i.postimg.cc/Fsmjz7zN/ttt-drawio.png)

## Flow
### Flow 1: User join game
- When user join a game, mobile will establish a connection to `ScoreBoard` service.
- By user joining the game, a game Room will be upserted. A game room maintains socket connection from all users which are participating in the same game.

### Score update
- Up on a specific user action, mobile client trigger an API call to update the user's score. (see API specs for details)
- In api, the following 2 actions will be triggered
    - Call Redis command `ZINCRBY scoreBoard:{gameId} score {userId}` to update user score in score board. For example: `ZINCRBY scoreBoard:1 15 2` will increase the score of user id `2` in game id `1` with the score of `15`
    - Push message with the following payload to Kafka topic named `score_update`: `{ gameId: 1, action: 'headhot', score: 15 }`
- By pushing message to Kafka topic, the Kafka consumer will consume the message and update the user score to the database.

### Notify score board update
- `ScoreBoard` service will also subscribe Kafka topic named `score_update`.
- By getting the message from Kafka, `ScoreBoard` service will send to each of the member in the same game Room an updated score board with top 10 users. `ScoreBoard` service get updated scores from redis by following command: `ZRANGE scoreBoard:{gameId}  0 9  WITHSCORES REV `
- Mobile update the score board.

## Api

### Update game score
```
POST /v1/games/{gameId}/scores
Headers: Authorization Bearer token
Body: { gameId: 1, action: 'headhot', score: 15 }
```

### Database design

![image](https://i.postimg.cc/BnbPPD09/Screenshot-2025-01-05-at-17-03-01.png)

## Important notes for development
- High availability
    - Implement auto scaling for `Game` and `ScoreBoard` service.
    - Data replication and Failover for PosgresDb and Redis
- Retry machenism for Kafka consumers when messages are failed to process due to networking, IO or database error.
- User transaction when update user score to avoid concurrency issue
