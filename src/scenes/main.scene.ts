enum DogAnimationsEnum {
    AGR = 'dog_agr',
    ATTACK = 'dog_attack',
    IDLE_1 = 'dog_idle_1',
    IDLE_2 = 'dog_idle_1',
    RUN = 'dog_run',
};

export default class MainScene extends Phaser.Scene {

    private dogSpine: SpineGameObject;
    private text: Phaser.GameObjects.Text;

    constructor() {
        super({ key: 'main' });
    }

    preload() {
        this.load.setPath('/assets/anims/dog/');
        this.load.spine('dog', 'dog.json', ['dog.atlas'], true);
    }

    create() {
        this.text = this.add.text(this.cameras.main.centerX, 50, 'Click on dog to AGR', {
            fontSize: '24px',
            color: '#000'
        }).setOrigin(0.5);

        this.dogSpine = this.add.spine(288, 302, 'dog', DogAnimationsEnum.RUN, true)
            .setInteractive()
            .on('pointerdown', () => {
                this.dogSpine.play(DogAnimationsEnum.AGR, true);
                setTimeout(() => {
                    this.dogSpine.play(DogAnimationsEnum.RUN, true);
                }, 1000);
            });
        this.dogSpine.setMix(DogAnimationsEnum.RUN, DogAnimationsEnum.AGR, 0.3);
        this.dogSpine.setMix(DogAnimationsEnum.AGR, DogAnimationsEnum.RUN, 0.3);
        this.dogSpine.setPosition(this.cameras.main.centerX + 50, this.cameras.main.height - 50);
    }
}