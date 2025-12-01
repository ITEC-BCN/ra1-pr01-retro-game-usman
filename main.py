@namespace
class SpriteKind:
    Producto = SpriteKind.create()
    Decoracion = SpriteKind.create()
"""

Variables globales

"""
# Función para mostrar el cálculo de leña
def mostrar_resultado_lena(producto: str, cantidad: number):
    global lena2
    lena2 = calcular_lena(producto, cantidad)
    game.show_long_text("Necesitas " + ("" + str(lena2)) + " kg de leña",
        DialogLayout.CENTER)
    return lena2
# Lógica al tocar un producto

def on_on_overlap(player2, producto_sprite):
    global puede_interactuar, cantidad4
    if not (puede_interactuar):
        return
    puede_interactuar = False
    producto2 = identificar_producto(producto_sprite)
    if producto2 == None:
        puede_interactuar = True
        return
    cantidad4 = game.ask_for_number("Cuántos " + producto2 + " quieres?")
    if not (validar_cantidad(producto2, cantidad4)):
        puede_interactuar = True
        return
    mostrar_resultado_lena(producto2, cantidad4)
    confirmar_compra()
    alejar_jugador()
    puede_interactuar = True
sprites.on_overlap(SpriteKind.player, SpriteKind.Producto, on_on_overlap)

# Crear productos en el escenario
def crear_productos():
    global caballo, cabra, gallina, huevo, patata
    caballo = sprites.create(assets.image("""
        caballo
        """), SpriteKind.Producto)
    caballo.set_position(142, 100)
    cabra = sprites.create(assets.image("""
        cabra
        """), SpriteKind.Producto)
    cabra.set_position(135, 59)
    gallina = sprites.create(assets.image("""
        gallina
        """), SpriteKind.Producto)
    gallina.set_position(46, 68)
    huevo = sprites.create(assets.image("""
        huevo
        """), SpriteKind.Producto)
    huevo.set_position(78, 92)
    patata = sprites.create(assets.image("""
        patata
        """), SpriteKind.Producto)
    patata.set_position(15, 89)
# Función para validar la cantidad ingresada
def validar_cantidad(producto3: str, cantidad2: number):
    if cantidad2 <= 0:
        game.show_long_text("Cantidad no válida", DialogLayout.TOP)
        return False
    if producto3 != "Patata" and cantidad2 != int(cantidad2):
        game.show_long_text("Los animales deben ser enteros", DialogLayout.TOP)
        return False
    return True
# Función para confirmar la compra
def confirmar_compra():
    global decision2
    decision2 = game.ask_for_string("Comprar? (si/no)")
    if decision2 == "si":
        game.show_long_text("Compra realizada", DialogLayout.BOTTOM)
        return True
    else:
        game.show_long_text("Compra cancelada.", DialogLayout.BOTTOM)
        return False
# Función para calcular kg de leña
def calcular_lena(producto4: str, cantidad3: number):
    global kg
    kg = 0
    if producto4 == "Gallina":
        kg = cantidad3 * 6
    elif producto4 == "Patata":
        kg = cantidad3 * (2 / 1.5)
    elif producto4 == "Cabra":
        kg = cantidad3 * 5
    elif producto4 == "Huevos":
        kg = cantidad3 * (3 / 12)
    elif producto4 == "Caballo":
        kg = cantidad3 * 12
    return Math.round(kg * 100) / 100
# Función para alejar al jugador del producto
def alejar_jugador():
    mySprite.x += 20
    pause(500)
kg = 0
decision2 = ""
cantidad4 = 0
lena2 = 0
mySprite: Sprite = None
puede_interactuar = False
caballo: Sprite = None
cabra: Sprite = None
gallina: Sprite = None
huevo: Sprite = None
patata: Sprite = None
producto22 = ""
cantidad22 = 0
lena = 0
decision = ""
puede_interactuar = True
def identificar_producto(producto_sprite2: any):
    if producto_sprite2 == caballo:
        return "Caballo"
    elif producto_sprite2 == cabra:
        return "Cabra"
    elif producto_sprite2 == gallina:
        return "Gallina"
    elif producto_sprite2 == huevo:
        return "Huevos"
    elif producto_sprite2 == patata:
        return "Patata"
    else:
        return None
# Inicializar el juego
scene.set_background_image(assets.image("""
    forest
    """))
crear_productos()
mySprite = sprites.create(assets.image("""
        heroWalkFront3
        """),
    SpriteKind.player)
controller.move_sprite(mySprite)