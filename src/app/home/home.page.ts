import { Component, OnInit } from '@angular/core';
import 'phaser';
import MainScene from 'src/scenes/main.scene';
import 'phaser/plugins/spine/dist/SpinePlugin';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    phaserGame: Phaser.Game;
    config: Phaser.Types.Core.GameConfig;

    constructor() {
        this.config = {
            type: Phaser.AUTO,
            backgroundColor: '#ffffff',
            scale: {
                parent: 'phaser-game',
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: window.innerWidth,
                height: window.innerHeight
            },
            scene: [
                MainScene
            ],
            plugins: {
                global: [],
                scene: [
                    { key: 'SpinePlugin', plugin: (<any>window).SpinePlugin, mapping: 'spine' }
                ]
            }
        };
    }

    ngOnInit() {
        this.phaserGame = new Phaser.Game(this.config);
    }

}
