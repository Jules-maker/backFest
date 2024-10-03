
![Logo](https://cdn.discordapp.com/attachments/776831193043304468/1291367319942987838/DALLE-2024-10-03-10.13.12-A-logo-featuring-a-sheep-with-headphones-on_-listening-to-music.png?ex=66ffd709&is=66fe8589&hm=ac2f314cffe525cd85daafe3847ec0f424f4847ea1b3a7ee111645a1fffef2ee&)
# Electric Lamb

Une application pour avoir accès aux plannings et emplacements de chaque concerts dans un evenement musical


## Auteurs

- [Jules-maker](https://github.com/Jules-maker)
- [Maxime Martz](https://github.com/MaximeMartz)
- [ahmedooo1](https://github.com/ahmedooo1)
- [Castyan](https://github.com/Castyan)

## Informations

Projet d'école qui a pour objectif de créer une application d'accès aux plannings et emplacements de chaque concerts dans un evenement musical fictif.

Dates : 03/10/2024 - 04/10/2024

## API References
## WORK IN PROGRESS ##

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

