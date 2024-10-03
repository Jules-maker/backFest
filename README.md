<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://cdn.discordapp.com/attachments/776831193043304468/1291367299693154304/DALL_E-2024-10-03-10.13.12-A-logo-featuring-a-sheep-with-headphones-on_-listening-to-music-removebg-preview.png?ex=66ffd704&is=66fe8584&hm=71c5c2ec083623f75df9cd8b60d3a831ee8341875d22bcd219ba5851dc7ce178&" alt="Bootstrap logo" width="200" height="165">
  </a>
</p>

<h3 align="center">Electric Lamb</h3>

<p align="center">
  Une application pour avoir accès aux plannings et emplacements de chaque concerts dans un evenement musical
  <br>
  <a href="https://getbootstrap.com/docs/5.3/"><strong>Explore Bootstrap docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/twbs/bootstrap/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
  ·
  <a href="https://github.com/twbs/bootstrap/issues/new?assignees=&labels=feature&template=feature_request.yml">Request feature</a>
  ·
  <a href="https://themes.getbootstrap.com/">Themes</a>
  ·
  <a href="https://blog.getbootstrap.com/">Blog</a>
</p>

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

## BACK END
Cette partie décrit le fonctionnement de la partie Back-End de l'application Web.
# Sommaire

Work in progress


## API References
## WORK IN PROGRESS ##

#### Access

```http
  GET /api/public
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

