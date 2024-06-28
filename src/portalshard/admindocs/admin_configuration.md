---
icon: gear
category:
  - Admin Documentation
tag:
  - software
  - spigot
star: true
sticky: true
order: 3
---

# Configuration

This part of the documentation covers the configuration you need to do inside the plugin folder of PortalShard.

## The Configuration File

::: code-tabs#shell

@tab YAML

```yaml
version: 1
data:
  enableMySQL: false
  MySQL:
    Host: "localhost"
    Port: "3306"
    Database: "PortalShard"
    Username: "PortalShard"
    Password: "abcd1234ABCD!"
```

:::

Currently, this is only needed if you want to store the portals inside a MySQL database. If you do so (e.g. limited disk space) set the value `data.enableMySQL` to `true` and modify the MySQL details under `data.MySQL` and you should be good to go. 

If you don’t know what to do, lease the config alone for now.

> [!warning]
> This configuration section will change very soon, very much. If you update the plugin in the future, 
> rename this file to generate a new one and transfer the values to the newly generated one.