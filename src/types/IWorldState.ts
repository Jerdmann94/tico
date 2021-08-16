import { Schema, ArraySchema, type } from '@colyseus/schema'
export enum GameState
{
    WaitingForPlayers,
    Playing,
    Finished
}
// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IWorldState extends Schema{
    gameState: GameState

    activePlayer: number
}