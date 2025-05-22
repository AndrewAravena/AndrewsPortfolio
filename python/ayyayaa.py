import os

base_dir = os.path.abspath(".")

os.chdir("resources/2025chandiddy")

images = []

for file in os.listdir("."):
    if file.lower().endswith(".jpg"):
        abs_path = os.path.abspath(file)
        rel_path = os.path.relpath(abs_path, base_dir)
        images.append(rel_path.replace(' \ ', "/").replace("DegitaltechnologyPortfolio/", ""))

print(images)