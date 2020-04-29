# Visite du Metropolitan Museum of Art de New-York

### Grandes lignes du projet hackathon

#### Must have

Première page :
- Quatre liens vers des "départements" du musée choisis aléatoirement
- Une animation au centre de ces liens

Seconde page :
- Un rappel du département visité
- Une image de l'oeuvre (triée sur les oeuvres mises en évidence par le musée et disposant d'une photo)
- l'auteur
- Le texte d'accompagnement
- Un lien vers la home page
- Deux boutons de navigation : retour à l'oeuvre précédente, aller à l'oeuvre suivante

#### Should have

Première page :

Seconde page :
- un compteur affichant le numéro de l'oeuvre affichée par rapport au total du département (information donnée par l'API)
- Un lien vers la page du musée sur cette oeuvre








### Requêtes vers l'API :
Url : https://metmuseum.github.io/

- Liste des départements 
```
https://collectionapi.metmuseum.org/public/collection/v1/departments
```
- Réponse :

>Field|Type|Default|Notes
>---|---|---|---
>departments | array | [] | An array containing the JSON objects that contain each department's departmentId and display name. The departmentId is to be used as a query parameter on the `/objects` endpoint
>departmentId | int	|-|	Department ID as an integer. The departmentId is to be used as a query parameter on the `/objects` endpoint
>displayName | string |-| Display name for a department



- Liste d'une collection dans un département :
  - Options :
    - [departmentId] : numéro du département obtenu par la requête ci-dessus
    - isOnView=true : oeuvres exposées
    - isHighlight=true : oeuvres mises en avant
    - hasImages=true : avec image !
    - q=* : toutes les oeuvres répondant aux critères ci-dessus
```
https://collectionapi.metmuseum.org/public/collection/v1/search?department=[departmentId]&isOnView=true&isHighlight=true&hasImages=true&q=*
```
- Réponse :
  
>Field | Type | Default | Notes
>--- | --- | --- | ---
>total | int || The total number of publicly-available objects
>objectIDs | int array | [] | An array containing the object ID of publicly-available object





- Info d'une oeuvre :
  - [objectID] : référence de l'oeuvre retournée par la requête ci-avant
```
https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]
```

Champs utiles :
  - primaryImage : lien vers l'image principale
  - title
  - artistDisplayName
  - 

- Réponse :   
Voir le tableau que retourne cette requète sur le site internet donnée en URL au début de cette section.