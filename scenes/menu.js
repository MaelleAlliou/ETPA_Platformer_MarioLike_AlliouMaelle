//Création du Menu et Lancer le jeu
export default class Menu extends Phaser.Scene {
    constructor() {
        super('menu')
    }
            //DEBUT
            ////////////////////////////////////////////////////////////////////////////////////////////////////////
            var config = {
                type: Phaser.AUTO,
                width: 1000, height: 600,
                physics: {
                default: 'arcade',
                arcade: {
                gravity: { y: 600 },
                debug: true
                }},
                scene: {preload: preload, create: create, update: update }
                };
                new Phaser.Game(config);
                //FUNC PRELOAD
                function preload(){
                this.load.image('sky', 'assets/sky.png');
                this.load.image('ground', 'assets/platform.png');
                this.load.image('ground2', 'assets/platform_new.png');
                this.load.image('star', 'assets/star.png');
                this.load.image('platform_1', 'assets/platform_1');
                this.load.image('bomb', 'assets/bomb.png');
                this.load.image('objet', 'assets/objet.png');
    
                this.load.image('vie1', 'UI/vie1.png');
                this.load.image('vie2', 'UI/vie2.png');
                this.load.image('vie3', 'UI/vie3.png');
    
                this.load.image('bg', 'assets/menu.png');
                this.load.image('parchemin', 'assets/parchemin.png');
                this.load.image('testmap', 'assets/testmap.png');
    
                // chargement de l'image balle.png
                this.load.image("bullet", "assets/bullet2.png");  
                this.load.image("bullet2", "assets/bullet22.png");
    
                // chargement de l'image cible.png
                this.load.image("cible", "assets/mob.png");
                this.load.image('mob_bleu', 'assets/mob_bleu.png');  
    
    
    
                this.load.spritesheet('perso','assets/perso.png',
                { frameWidth: 32, frameHeight: 48 });
                this.load.spritesheet('debout', 'assets/perso6.png',
                { frameWidth: 32, frameHeight: 64});
                this.load.spritesheet('accroupi', 'assets/accroupi6.png',
                { frameWidth: 32, frameHeight: 32});
    
                this.load.image('Phaser_tuilesdejeu', 'assets/BLOCS.png');
                this.load.tilemapTiledJSON('carte', 'map.json');
                }
    
               
    
                var platforms;
                var player;
                var cursors;
                var stars;
                var parchemin;
                var mob_bleu;
                var score;
                score = 0
                var scoreText;
                var bombs;
                var gameOver = false
                 function collectStar(player, star){
                    star.disableBody(true, true); 
                    Score += 1;
                    scoreText.setText('Mana : ' + score); 
                    if (stars.countActive(true) === 0){
                        stars.children.iterate(function (child) {
                            child.enableBody(true, child.x, 0, true, true);
                        }); 
                        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) :
                             Phaser.Math.Between(0, 400);
    
                        var bomb = bombs.create(x, 16, 'bomb');
                        bomb.setBounce(1);
                        bomb.setCollideWorldBounds(true);
                        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
                        bomb.allowGravity = false; 
    
                        // mise en place d'une variable boutonFeu
                        var boutonFeu;
                        // mise en place d'une variable groupeBullets
                        var groupeBullets;  
                        // mise en place d'une variable groupeCibles
                        var groupeCibles;  
                        var groupeCiblesBleu;
                        var cibles = cibles.create(300,500, 'cible');
                        var dash = (player.setVelocity = 600);
                        var objet
                        var textI
                    }
                }
    
                function hitBomb(player, bomb){
                    this.physics.pause();
                    player.setTint(0xff0000);
                    player.anims.play('turn');
                    gameOver = true;
                }
    
                function tirer(player) {
                    var coefDir;
                    if (player.direction == 'left') { coefDir = -1; } else { coefDir = 1 };
                    // on crée la balle a coté du joueur
                    var bullet = groupeBullets.create(player.x + (25 * coefDir), player.y - 4, 'bullet');
                    // parametres physiques de la balle.
                    bullet.setCollideWorldBounds(true);
                    bullet.body.allowGravity =false;
                    bullet.setVelocity(1000 * coefDir, 0); // vitesse en x et en y
                    } 
    
                    
                const TextIntro = objet.findObject("objet", obj => obj.name === "TextIntro");
    
                this.textl;
    
                this.textI = this.add.text(TextIntro.x300, TextIntro.y200, "Afficher texte", {
                font: "12px monospace",
                fill: "#ffffff",
                padding: { x: 20, y: 10 },
                }).setDepth(3);
                    
    
                //FUNCTION CREATE
                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                function create(){
                    
                    cursors = this.input.keyboard.createCursorKeys();
                    this.add.image(400, 300, 'sky');
    
                    this.add.image()
    
                    // création du clavier 
                    cursors = this.input.keyboard.createCursorKeys();
                    // affectation de la touche A à boutonFeu
                    boutonFeu = this.input.keyboard.addKey('A'); 
                    // création d'un groupe d'éléments vide
                    groupeBullets = this.physics.add.group(); 
    
    
                    // DASH
                    ////////////////////////////////////////////////////
                    cursors = this.input.keyboard.createCursorKeys();
                    dash = this.input.keyboard.addKey('B');
    
    
                    //PLATEFORMES
                    ////////////////////////////////////////////////////
                    platforms = this.physics.add.staticGroup();
                    //platforms.create(200, 140, 'testmap');
                    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
                    platforms.create(600, 400, 'ground');
                    platforms.create(50, 250, 'ground');
                    //platforms.create(750, 220, 'ground');
    
    
                    //OBJET
                    objet = this.physics.add.staticGroup();
                    objet.create(200, 528, 'objet');
    
                
    
                    player = this.physics.add.sprite(100, 450, 'debout');
                    player.setBounce(0.2);
                    player.setCollideWorldBounds(true);
                    this.physics.add.collider(player, platforms);
                    this.physics.add.collider(player, objet);
    
                    scoreText=this.add.text(16,16,':)',{fontSize:'28px',fill:'#000'});
    
    
                        
                    //CAMERA
                    this.cameras.main.setBounds(0,0, 4000, 448);
                    this.cameras.main.setSize(800, 600);
                    this.cameras.main.startFollow(player);
    
    
    
                    //CIBLES//ENNEMIS
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////
                    // MOB INTOUCHABLE
                    cibles = this.physics.add.group({
                    key: 'cible',
                    repeat: 0,
                    setXY: { x: 500, y: 0, stepX: 107 }
                    });  
    
                    // ajout du modèle de collision entre cibles et plate-formes
                    this.physics.add.collider(cibles, platforms);  
    
    
                    //MOB MOUVANT
                    cibles = this.physics.add.group({
                    key: 'mob_bleu',
                    repeat: 0,
                    setXY: { x: 800, y: 0, stepX: 107 }
                    });
    
                    // ajout du modèle de collision entre cibles et plate-formes
                    this.physics.add.collider(cibles, platforms);  
    
    
    
                    //3
                    mob_bleu = this.physics.add.group({
                    key: 'mob_bleu',
                    repeat: 0,
                    setXY: { x: 1100, y: 0, stepX: 107 }
                    });
    
                    // ajout du modèle de collision entre cibles et plate-formes
                    this.physics.add.collider(mob_bleu, platforms);  
    
    
    
    
    
    
    
                    // fonction déclenchée lorsque uneBalle et uneCible se superposent
                    function hit (uneBalle, uneCible) {
                    uneBalle.destroy(); // destruction de la balle
                    uneCible.destroy();  // destruction de la cible.   
                    }  
    
                    this.physics.add.overlap(groupeBullets, cibles, hit, null,this);
                    cibles.setVelocity(Phaser.Math.Between(-100, 0), 20);
    
                    function hitCibles(player, cibles){
                    this.physics.pause();
                    player.setTint(0xff0000);
                    player.anims.play('turn');
                    gameOver = true;
                }
                    
    
                    //CIBLES//ENNEMIS BLEU
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////
                    
    
    
    
    
    
    
    
    
    
                    //MOUVEMENT ANIM JOUEUR
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////
                    this.anims.create({
                        key: 'left',
                        frames: this.anims.generateFrameNumbers('debout', {start:0,end:3}),
                        frameRate: 10,
                        repeat: -1
                    });
                    this.anims.create({
                        key: 'turn',
                        frames: [ { key: 'debout', frame: 4 } ],
                        frameRate: 20
                    });
                    this.anims.create({
                        key: 'right',
                        frames: this.anims.generateFrameNumbers('debout', {start:5,end:8}),
                        frameRate: 10,
                        repeat: -1
                    });
                    this.anims.create({
                        key: 'down',
                        frames: this.anims.generateFrameNumbers('accroupi', {start:0,end:3}),
                        frameRate: 10,
                        repeat: -1
                    });
                }
    
                
    
    
                //MOUVEMENTS JOUEURS
                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                function update(){
                
                    if (gameOver){return;}
    
                    if (cursors.left.isDown){ //si la touche gauche est appuyée
                        player.setVelocityX(-120); //alors vitesse négative en X
                        player.anims.play('left', true); //et animation => gauche
                        player.direction = 'left';
                    }
                    else if (cursors.right.isDown){ //sinon si la touche droite est appuyée
                        player.setVelocityX(120); //alors vitesse positive en X
                        player.anims.play('right', true); //et animation => droite
                        player.direction = 'right';
                    }
                    else {
                        player.setVelocityX(0);
                        player.anims.play('turn');
                    }
                    if (cursors.up.isDown && player.body.touching.down){
                        //si touche haut appuyée ET que le perso touche le sol
                        player.setVelocityY(-480); //alors vitesse verticale négative
                        //(on saute)
                        player.body.setSize(32,64,Boolean);
                    }
                    else if (cursors.down.isDown){
                        player.anims.play('down');
                        player.body.setSize(32,32,Boolean);
                        player.body.setOffset(0,16);
                    }
                    else if (cursors.down.isDown && cursors.right.isDown){
                        player.setVelocityX(800); //alors vitesse positive en X
                        player.anims.play('right', true); //et animation => droite
                    }
                    // déclenchement de la fonction tirer() si appui sur boutonFeu 
                    if ( Phaser.Input.Keyboard.JustDown(boutonFeu)) {
                    tirer(player);
                    }  
                    if ( Phaser.Input.Keyboard.JustDown(dash) && cursors.right.isDown) {
                    player.setVelocityX(3000)
                    }
                    else if ( Phaser.Input.Keyboard.JustDown(dash) && cursors.left.isDown) {
                    player.setVelocityX(-3000)
                    }
                    if (player.body.touching.objet){
                    print.parchemin;
                    }
                }
            
        </script>
    </body>
    </html>