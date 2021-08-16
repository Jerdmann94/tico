import { Client, Room } from 'colyseus.js'
import Phaser from 'phaser'
import {GameState, IWorldState} from '../../types/IWorldState'


export default class Server {
    private client: Client
    private events: Phaser.Events.EventEmitter

    private room?: Room<IWorldState>
    private _playerIndex = -1

    get playerIndex() {
        return this._playerIndex
    }

    get gameState() {
        if (!this.room) {
            return GameState.WaitingForPlayers
        }

        return this.room?.state.gameState
    }

    constructor() {
        this.client = new Client('ws://localhost:2567')
        this.events = new Phaser.Events.EventEmitter()
    }

    async join() {
        this.room = await this.client.joinOrCreate<IWorldState>('world')



        this.room.onStateChange.once(state => {
            this.events.emit('once-state-changed', state)
        })

    }

    leave() {
        this.room?.leave()
        this.events.removeAllListeners()
    }
}