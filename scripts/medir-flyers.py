#!/usr/bin/env python3
"""Genera _data/flyers.yml con el ancho y alto de cada flyer de convocatorias.

Las plantillas usan esos valores en los atributos width/height de <img> para
que la página no salte mientras cargan las imágenes. Correrlo cada vez que se
agrega un flyer:  python3 scripts/medir-flyers.py   (requiere Pillow)
"""
from pathlib import Path
from PIL import Image

raiz = Path(__file__).resolve().parent.parent
carpeta = raiz / "assets/images/convocatorias"
lineas = ["# Generado por scripts/medir-flyers.py. No editar a mano.\n"]
for f in sorted(carpeta.iterdir()):
    if f.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp", ".gif"}:
        continue
    w, h = Image.open(f).size
    lineas.append(f'"/assets/images/convocatorias/{f.name}": [{w}, {h}]\n')
(raiz / "_data/flyers.yml").write_text("".join(lineas), encoding="utf-8")
print(f"{len(lineas) - 1} flyers medidos")
