# Control Center Bot - Your Ultimate Discord Moderation Assistant

Welcome to **CCBOT**, a versatile and feature-packed bot designed to assist with moderation, automate tasks, and enhance your Discord server management experience. With an array of commands, CCBOT simplifies tasks and adds useful functionalities that help you manage your server more efficiently.

---

## Features Overview

### General Commands

| Command      | Description                             | Options                            | Required Permissions          |
|--------------|-----------------------------------------|------------------------------------|--------------------------------|
| `/announce`  | Send an announcement to a channel       | `[channel]`, `[message]`           | Manage Messages               |
| `/avatar`    | View a user’s avatar                    | `[user]`                           | None                           |
| `/bot-info`  | Displays information about the bot      | None                               | None                           |
| `/cat`       | Sends a random image of a cat           | None                               | None                           |
| `/quote`     | Sends an inspirational quote            | None                               | None                           |
| `/report`    | Report abuse or misconduct to moderation| `[user]`, `[reason]`, `[proof]`    | None                           |

### Moderation Commands

| Command      | Description                             | Options                            | Required Permissions          |
|--------------|-----------------------------------------|------------------------------------|--------------------------------|
| `/ban`       | Ban a user from the current server      | `[user]`, `[reason]`               | Ban Members                   |
| `/kick`      | Kick a user from the current server     | `[user]`, `[reason]`               | Kick Members                  |
| `/warn`      | Issues a warning to a user              | `[user]`, `[reason]`               | Kick Members                  |
| `/softban`   | Softban a user (delete messages from past 7 days) | `[user]`, `[reason]`  | Ban Members                   |
| `/unmute`    | Unmute a user in the server             | `[user]`                           | Moderate Members              |

### Channel Management Commands

| Command           | Description                           | Options                            | Required Permissions          |
|-------------------|---------------------------------------|------------------------------------|--------------------------------|
| `/channel create` | Create a new channel                  | `[name]`, `[type]`, `[category]`   | Manage Channels               |
| `/channel delete` | Delete an existing channel            | `[channel]`, `[reason]`            | Manage Channels               |
| `/channel lock`   | Lock a channel (disable message sending) | `[channel]`                      | None (Fix in next update)     |
| `/channel unlock` | Unlock a channel (enable message sending) | `[channel]`                      | None (Fix in next update)     |

### Utility Commands

| Command         | Description                             | Options                            | Required Permissions          |
|-----------------|-----------------------------------------|------------------------------------|--------------------------------|
| `/roles`        | List all roles in the server            | None                               | None                           |
| `/role add`     | Add a role to a user                    | `[user]`, `[role]`                 | Manage Roles                  |
| `/role remove`  | Remove a role from a user               | `[user]`, `[role]`                 | Manage Roles                  |
| `/role all`     | Add a specified role to everyone on the server | `[role]`, `[include_bots]`      | Manage Roles                  |
| `/role create`  | Create a new role                       | `[name]`, `[color]`, `[hoist]`     | None (Fix in next update)     |
| `/role delete`  | Delete an existing role                 | `[name]`, `[color]`, `[hoist]`     | None (Fix in next update)     |

### Fun & Entertainment Commands

| Command        | Description                             | Options                            | Required Permissions          |
|----------------|-----------------------------------------|------------------------------------|--------------------------------|
| `/dadjoke`     | Sends a random dad joke                 | None                               | None                           |
| `/poll-create` | Create a poll with up to 3 options      | `[option1]`, `[option2]`, `[option3]` | None (Future update to admins only) |
| `/trivia`      | Sends a trivia question                 | None                               | None                           |
| `/rtd`         | Roll a dice or flip a coin              | `[arg]`                            | None                           |

### Voice Channel Commands

| Command         | Description                             | Options                            | Required Permissions          |
|-----------------|-----------------------------------------|------------------------------------|--------------------------------|
| `/vc deafen`    | Deafen a member in a voice channel      | `[member]`, `[reason]`, `[dm]`     | Deafen Members                |
| `/vc disconnect`| Disconnect a member from a voice channel | `[member]`, `[reason]`, `[dm]`     | Deafen Members                |
| `/vc mute`      | Mute a member in a voice channel        | `[member]`, `[reason]`, `[dm]`     | Mute Members                  |
| `/vc unmute`    | Unmute a member in a voice channel      | `[member]`, `[reason]`, `[dm]`     | Mute Members                  |

---

## Updates & Changes

As CCBOT is constantly updated to provide new features and improve performance, be sure to check for regular updates in the bot’s **Changelog** to keep track of any new or fixed commands.

---

## Getting Started

To invite **CCBOT** to your server, simply visit the invite link below:

- **Invite CCBOT**: [Invite Link](https://nexarisds.org/ccbot/invite)

Once added to your server, you can start using CCBOT immediately. Make sure you have the correct permissions to access certain commands. If you're unsure about how to use any command, type `/help` to get a list of available commands.