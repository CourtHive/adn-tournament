---
description: >-
  This is a Angular (12.2.4) Package which allows you to display Tournament
  Brackets.
---

# Adonsio's Tournament Bracket Package

## AdnTournament

This packages allows you to generate Tournament Brackets in **Angular v12.2.4**. It's currently **work in progress** so use it at your own risk.

**The Documentation will be more detailed soon**

#### If you have any questions reach out to me on Twitter [@adonsio](https://www.twitter.com/Adonsio)

## How to use

#### Match Component

Create a new Angular Component.   
 In the TypeScript file of the Component add a Input   


```typescript
@Input() match: any
```

The HTML part can be customized but for now here is an example

```html
<div class="ngtt__match-wrapper">
<div class="ngtt__team-wrapper" *ngFor="let team of match?.teams">
  <div class="ngtt__team-avatar"></div>
  <p  class="adn__team-title">{{team?.name}}</p>
  <div class="ngtt__team-score">{{team?.score}}</div>
</div>
</div>
```

#### Render the Tournament Bracket

Import the AdnSingleEliminationTree in your module and use it like so:

```html
    <adn-single-elimination-tree 
    [tournament]="myTournamentData" 
    [matchTemplate]="myMatchTemplate">
    </adn-single-elimination-tree>

    <ng-template #myMatchTemplate let-match>
      <app-match [match]="match"></app-match>
    </ng-template>
```

As Tournament you provide an object that contains your tournament data \(example shown below\) For the Match Template you provide your Match Component

#### Demo Tournament data

```typescript
  myTournamentData: AdnTournament = {
    rounds: [
      {
        type: 'Winnerbracket',
        matches: [
          {
            teams: [
                { name: 'Team  A', score: 1 }, 
                { name: 'Team  B', score: 2 }]
          },
          {
            teams: [
                { name: 'Team  C', score: 1 }, 
                { name: 'Team  D', score: 2 }]
          },
          {
            teams: [
                { name: 'Team  E', score: 1 }, 
                { name: 'Team  F', score: 2 }]
          },
          {
            teams: [
                { name: 'Team  G', score: 1 }, 
                { name: 'Team  H', score: 2 }]
          }, {
            teams: [
                { name: 'Team  A', score: 1 }, 
                { name: 'Team  B', score: 2 }]
          },
          {
            teams: [
                { name: 'Team  C', score: 1 }, 
                { name: 'Team  D', score: 2 }]
          },
          {
            teams: [
                { name: 'Team  E', score: 1 }, 
                { name: 'Team  F', score: 2 }]
          },
          {
            teams: [
                { name: 'Team  G', score: 1 }, 
                { name: 'Team  H', score: 2 }]
          }
        ]
      }, {
        type: 'Winnerbracket',
        matches: [
          {
            teams: [
                { name: 'Team  A', score: 1 }, 
                { name: 'Team  B', score: 2 }]
          },
          {
            teams: [
                { name: 'Team  C', score: 1 }, 
                { name: 'Team  D', score: 2 }]
          },
          {
            teams: [
                { name: 'Team  E', score: 1 }, 
                { name: 'Team  F', score: 2 }]
          },
          {
            teams: [
                { name: 'Team  G', score: 1 }, 
                { name: 'Team  H', score: 2 }]
          }
        ]
      },
      {
        type: 'Winnerbracket',
        matches: [
          {
            teams: [
                { name: 'Team  B', score: 1 }, 
                { name: 'Team  D', score: 2 }]
          },
          {
            teams: [
                { name: 'Team  F', score: 1 }, 
                { name: 'Team  H', score: 2 }]
          }
        ]
      },
      {
        type: 'Final',
        matches: [
          {
            teams: [
              {
                name: 'Team  D',
                score: 1
              },
              {
                name: 'Team  H',
                score: 2
              }
            ]
          },
        ]
      }
    ]
  };
```

### Styling

Import the styles from:

```css
 @import "node_modules/@adonsio/adn-tournament/lib/styles/adn-styles";
```

Or simply copy the styles folder located in

```text
 node_modules/@adonsio/adn-tournament/lib/
```

and paste it into your project

Then you are able to easily customize the styles in the `variables.scss`   
   


## Example

![Example](https://i.imgur.com/Mh8YTru.png)

