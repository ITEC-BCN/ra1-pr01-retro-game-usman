namespace SpriteKind {
    export const Producto = SpriteKind.create()
    export const Decoracion = SpriteKind.create()
}

/** Variables globales */
//  Función para mostrar el cálculo de leña
function mostrar_resultado_lena(producto: string, cantidad: number): number {
    
    lena2 = calcular_lena(producto, cantidad)
    game.showLongText("Necesitas " + ("" + ("" + lena2)) + " kg de leña", DialogLayout.Center)
    return lena2
}

//  Lógica al tocar un producto
sprites.onOverlap(SpriteKind.Player, SpriteKind.Producto, function on_on_overlap(player2: Sprite, producto_sprite: Sprite) {
    
    if (!puede_interactuar) {
        return
    }
    
    puede_interactuar = false
    let producto2 = identificar_producto(producto_sprite)
    if (producto2 == null) {
        puede_interactuar = true
        return
    }
    
    cantidad4 = game.askForNumber("Cuántos " + producto2 + " quieres?")
    if (!validar_cantidad(producto2, cantidad4)) {
        puede_interactuar = true
        return
    }
    
    mostrar_resultado_lena(producto2, cantidad4)
    confirmar_compra()
    alejar_jugador()
    puede_interactuar = true
})
//  Crear productos en el escenario
function crear_productos() {
    
    caballo = sprites.create(assets.image`
        caballo
        `, SpriteKind.Producto)
    caballo.setPosition(142, 100)
    cabra = sprites.create(assets.image`
        cabra
        `, SpriteKind.Producto)
    cabra.setPosition(135, 59)
    gallina = sprites.create(assets.image`
        gallina
        `, SpriteKind.Producto)
    gallina.setPosition(46, 68)
    huevo = sprites.create(assets.image`
        huevo
        `, SpriteKind.Producto)
    huevo.setPosition(78, 92)
    patata = sprites.create(assets.image`
        patata
        `, SpriteKind.Producto)
    patata.setPosition(15, 89)
}

//  Función para validar la cantidad ingresada
function validar_cantidad(producto3: string, cantidad2: number): boolean {
    if (cantidad2 <= 0) {
        game.showLongText("Cantidad no válida", DialogLayout.Top)
        return false
    }
    
    if (producto3 != "Patata" && cantidad2 != Math.trunc(cantidad2)) {
        game.showLongText("Los animales deben ser enteros", DialogLayout.Top)
        return false
    }
    
    return true
}

//  Función para confirmar la compra
function confirmar_compra(): boolean {
    
    decision2 = game.askForString("Comprar? (si/no)")
    if (decision2 == "si") {
        game.showLongText("Compra realizada", DialogLayout.Bottom)
        return true
    } else {
        game.showLongText("Compra cancelada.", DialogLayout.Bottom)
        return false
    }
    
}

//  Función para calcular kg de leña
function calcular_lena(producto4: string, cantidad3: number): number {
    
    kg = 0
    if (producto4 == "Gallina") {
        kg = cantidad3 * 6
    } else if (producto4 == "Patata") {
        kg = cantidad3 * (2 / 1.5)
    } else if (producto4 == "Cabra") {
        kg = cantidad3 * 5
    } else if (producto4 == "Huevos") {
        kg = cantidad3 * (3 / 12)
    } else if (producto4 == "Caballo") {
        kg = cantidad3 * 12
    }
    
    return Math.round(kg * 100) / 100
}

//  Función para alejar al jugador del producto
function alejar_jugador() {
    mySprite.x += 20
    pause(500)
}

let kg = 0
let decision2 = ""
let cantidad4 = 0
let lena2 = 0
let mySprite : Sprite = null
let puede_interactuar = false
let caballo : Sprite = null
let cabra : Sprite = null
let gallina : Sprite = null
let huevo : Sprite = null
let patata : Sprite = null
let producto22 = ""
let cantidad22 = 0
let lena = 0
let decision = ""
puede_interactuar = true
function identificar_producto(producto_sprite2: any): string {
    if (producto_sprite2 == caballo) {
        return "Caballo"
    } else if (producto_sprite2 == cabra) {
        return "Cabra"
    } else if (producto_sprite2 == gallina) {
        return "Gallina"
    } else if (producto_sprite2 == huevo) {
        return "Huevos"
    } else if (producto_sprite2 == patata) {
        return "Patata"
    } else {
        return null
    }
    
}

//  Inicializar el juego
scene.setBackgroundImage(assets.image`
    forest
    `)
crear_productos()
mySprite = sprites.create(assets.image`
        heroWalkFront3
        `, SpriteKind.Player)
controller.moveSprite(mySprite)
