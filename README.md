<div align="center">

# Eco-Bliss-Bath
</div>

<p align="center">
    <img src="https://img.shields.io/badge/MariaDB-v11.7.2-blue">
    <img src="https://img.shields.io/badge/Symfony-v6.2-blue">
    <img src="https://img.shields.io/badge/Angular-v13.3.0-blue">
    <img src="https://img.shields.io/badge/docker--build-passing-brightgreen">
  <br><br><br>
</p>

# Prérequis
Pour démarrer cet applicatif web vous devez avoir les outils suivants:
- Docker
- NodeJs

# Installation et démarrage
Clonez le projet pour le récupérer
``` 
https://github.com/Joueurdego/Eco-Bliss-Bath-V2-main.git
```
Pour démarrer l'API avec ça base de données, depuis le dossier racine :
```
docker compose up -d
```
# Pour démarrer le frontend de l'applicatif
Rendez-vous dans le dossier frontend
```
cd ./frontend
```
Lancé le serveur local 
```
npm run start
```
# Lancé Cypress
Dans le dossier frontend
```
npx cypress open
```
Sélectionner E2E Testing et sélectionner Chrome
# Exécuter les test Cypress
Cliquer sur l'onglet Specs  et enfin sélectionner le test à exécuter  
# Bilan 
Rendez vous dans le dossier racine et sélectionner le fichier PDF "Bilan des tests"