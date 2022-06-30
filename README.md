This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Coding Test Front end

L’objectif du test est de créer une page affichant le détail d’un véhicule, basé sur des APIs.

## Explications

Vous trouverez ci-dessous un projet à réaliser chez vous.

### Quelques consignes 

- Réalisez le projet comme si c’était un projet professionnel, avec les ressources que vous avez habituellement ;
- Le projet doit être basé sur ReactJS avec un rendu des pages côté server. Vous pouvez utiliser une librairie dédiée pour le SSR ;
- Pour ce test, la gestion des anciennes versions de navigateur n’est pas indispensable (pas de nécessité de polyfill)  
- Les captures sont fournies uniquement à titre d’exemple. L’objectif de ce test n’est _pas_ de les reproduire exactement à l’identique avec nécessairement toutes les données; 
- Il n'est pas indispensable de faire toute la page, plutôt se focaliser sur livrer une page fonctionnelle

### Livrables attendus 

- Temps de réalisation du projet. Prenez le temps que vous prendriez en entreprise. Pour des raisons techniques, la durée grand max est de 4h.
- Le projet en zip uploadé dans la plateforme.
- les commandes pour builder et executer le projet.

En fonction de la revue de ce projet, un entretien sera organisé.

## Contexte

Le groupe La Centrale propose à ses internautes de trouver leur futur véhicule. Pour cela, nous affichons les caractéristiques d’un véhicule sur une page, consultable sur différents appareils (mobile, tablette et desktop).
L’objectif de ce projet est de proposer une version simplifiée de la page responsive présentant un véhicule et contenant : 
- Un slider d’image de votre choix (ou à minima l'affichage de plusieurs images); 
- La mise en avant du prix du véhicule (avec, si disponible, le prix d’origine barré et le prix actuel);
- Les caractéristiques du véhicule ;
- Les équipements et options ; ces derniers ne s'affichent qu'à l'ouverture d'une popin au clic sur un bouton libellé "Plus de caractéristiques". 
- Un bouton permettant de contacter le vendeur, via l’ouverture d’un client email ;

L’affichage doit être fait pour les 3 véhicules proposés via des urls utilisant les id des véhicules : 
- /E40012456.html
- /F40012456.html
- /G40012456.html

### Récupération des données

Pour ce tests, nous allons utiliser les données de 3 véhicules dont les IDs sont : 
- E40012456
- F40012456
- G40012456

Chaque véhicule a ses données fournies par 4 api
- /cars/ID contenant les informations générales sur le véhicule ;
- /options/ID contenant les options du véhicule ;
- /pricing/ID contenant les informations sur le prix du véhicule ;
- /photos/ID contenant les informations sur les photos et vignettes du véhicule ;

Pour appeler les données :

Installer JSON Server (https://github.com/typicode/json-server)
```
    npm install -g json-server 
```

Lancer JSON SERVER
```
    json-server --watch cars.json
```
Vous pouvez maintenant appeler les différents services via les ID des véhicules 

Ex :
```
   curl --location --request GET 'http://localhost:3000/cars/E40012456'
   curl --location --request GET 'http://localhost:3000/options/E40012456'
   curl --location --request GET 'http://localhost:3000/pricing/E40012456'
   curl --location --request GET 'http://localhost:3000/photos/E40012456'
```

## Éléments fournis

- Un dossier contenant des exemples de captures pour les 3 tailles (desktop, tablette et mobile) ;
- Le modèle de donnée cars.json permettant de mocker les API ;


## Comment builder et lancer le projet

A compléter par le/la candidat/e