---
icon: gear
category:
  - Admin Documentation
tag:
  - software
  - spigot
star: true
sticky: true
order: 2
---

# Install

## Basic Installation

PortalShard works out of the box without any configuration and setup:

  - Download the latest released version of the plugin from Spigot MC or GitHub
  - Stop your server
  - Insert the PortalShard JAR file into your plugins folder
  - Start your server
  - Hop in game and create your first portal

## Permissions

If you are administrating a more complex server, you (and your staff) can allow for more moderation by giving your moderators and support staff some more privileges using permissions:

| Name                                      | Permission                                | Detailed Description                                                                      |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------- |
| Add Player to Portal                      | `portalshard.moderation.modify.addplayer` | Allows a player to add players to the portal by using the                                 |
| Change Player Portal Permission `USE`     | `portalshard.moderation.modify.use`       | Allows a player to toggle another player’s ability to use the portal                      |
| Change Player Portal Permission `CHARGE`  | `portalshard.moderation.modify.charge`    | Allows a player to toggle another player’s ability to charge the portal                   |
| Change Player Portal Permission `UPGRADE` | `portalshard.moderation.modify.upgrade`   | Allows a player to toggle another player’s ability to upgrade the portal                  |
| Change Player Portal Permission `DESTROY` | `portalshard.moderation.modify.destroy`   | Allows a player to toggle another player’s ability to destroy the portal                  |
| Change Portal Setting `Free For All`      | `portalshard.moderation.modify.ffa`       | Allows a player to toggle the portal setting FFA, which allows everyone to use the portal |

> [!tip]
> Except in special cases, it might be advisable to use `portalshard.moderation.*` to allow general moderation. But you are free to do whatever you like
