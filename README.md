<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://cdn.discordapp.com/attachments/776831193043304468/1291367319942987838/DALLE-2024-10-03-10.13.12-A-logo-featuring-a-sheep-with-headphones-on_-listening-to-music.png?ex=66ffd709&is=66fe8589&hm=ac2f314cffe525cd85daafe3847ec0f424f4847ea1b3a7ee111645a1fffef2ee&" alt="Bootstrap logo" width="200" height="165">
  </a>
</p>

<h3 align="center">Electric Lamb</h3>

<p align="center">
  Une application pour avoir accès aux plannings et emplacements de chaque concerts dans un evenement musical
</p>

## Authors

- [Jules-maker](https://github.com/Jules-maker)
- [Maxime Martz](https://github.com/MaximeMartz)
- [ahmedooo1](https://github.com/ahmedooo1)
- [Castyan](https://github.com/Castyan)

## Informations

Projet d'école qui a pour objectif de créer une application d'accès aux plannings et emplacements de chaque concerts dans un evenement musical fictif.

Dates : 03/10/2024 - 04/10/2024

## API Reference

#### Plus de détails sur les api ici : 
[Lien vers le détails des API](https://google.com)

#### Get all user
```http
  GET /api/user
```

#### Models
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|   `user`  | `string` | Entrez /api/user pour remonter la liste de tout les artistes |

#### ARTIST
| Parameter    | Type     |  Description                                      |
|--------------|----------|---------------------------------------------------|
|   `name`     | `string` | Nom de l'artiste.|
|   `bio`      | `string` | Biographie de l'artiste.|
|   `genre`    | `string` | Genre musical de l'artiste.|
|   `image`    | `string` | URL de l'image de l'artiste.|
|   `socialMedia` | `string` | Liens vers les réseaux sociaux de l'artiste.|
|   `spotify`  | `string` | Lien Spotify de l'artiste.|

#### DATE
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Date`      | `date` | Jour et mois de l'évènement |

#### EVENT
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | Nom de l'évènement |
| `description`    | `string` | Description de l'évènement |
| `startTime`    | `string` | Heure de début de l'évènement (HH:mm) |
| `endTime`    | `string` | Heure de fin de l'évènement (HH:mm) |

#### GENRE
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | Nom du genre musical |
| `artists`    | `string` | Remonte les artistes en lien avec le ou les genres musicaux choisis |
| `events`    | `string` |  ??  |

