import { Schema, ArraySchema, type } from '@colyseus/schema'
import {GameState, IWorldState} from "../types/IWorldState";
export class WorldState extends Schema implements IWorldState{
    @type('number')
    activePlayer = 0;
    @type('number')
    gameState = GameState.WaitingForPlayers;

}