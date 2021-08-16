import Phaser from 'phaser'
import * as Colyseus from 'colyseus.js'
import Server from '../services/Server'
export default class HelloWorldScene extends Phaser.Scene{
    private server!: Server
    
    private client = new Colyseus.Client("ws://localhost:2567");
	constructor()
	{
		super('hello-world')
	}

	init(){
	    this.server = new Server();
        try {
            const room = this.client.joinOrCreate("world", {/* options */});
            console.log("joined successfully", room);

        } catch (e) {
            console.error("join error", e);
        }
    }
	preload()
    {

    }

    async create()
    {
        // this.scene.launch('game',{
        //     server:this.server
        // })
        // const room = await this.client.join('world');
        //
        // console.log(room.name);
    }
}
