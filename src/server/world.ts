import { Client, Room } from 'colyseus'
import { Dispatcher } from '@colyseus/command'
import {WorldState} from "../server/WorldState";
import {GameState} from "../types/IWorldState";

export class World extends Room<WorldState>{
    private dispatcher = new Dispatcher(this)
    onCreate()
    {
        this.maxClients = 2
        this.setState(new WorldState())


    }

    onJoin(client: Client)
    {
        console.log(this.clients.length)
        const idx = this.clients.findIndex(c => c.sessionId === client.sessionId)
        console.log(idx)


        if (this.clients.length >= 2)
        {
            this.state.gameState = GameState.Playing
            this.lock()
        }
    }
}