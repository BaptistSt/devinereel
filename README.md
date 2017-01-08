# Devinereel
[![GitHub tag](https://img.shields.io/github/tag/thibmaek/devinereel.svg?style=flat-square)]()
[![GitHub issues](https://img.shields.io/github/issues/thibmaek/devinereel.svg?style=flat-square)](https://github.com/thibmaek/devinereel/issues)
[![David](https://img.shields.io/david/thibmaek/devinereel.svg?style=flat-square)](https://david-dm.org/thibmaek/devinereel)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

> Project viewer for #devinehowest projects, running React on Heroku

## Background
This project started of as a fun experiment of ours to quickly deploy a static webapp with React on Heroku and see what we could cook up in a short period of time. We were also bothered with the current viewers and wanted something modern & easily adaptable and editable by everyone.
The list of year three students _at this time_ was included in initial v1 release.

## Adding yourself
It's highly possible that you are not in the list. Fear not, there is an easy way to add yourself.
Either click the button (__Opt. A__) in [the application](https://devinereel.herokuapp.com) or submit a pr (__Opt. B__) to [`src/js/static/Students.js`](./src/js/static/Students.js)

1. __Option A:__ will automatically fork this repo, create a patch branch and submit a PR. Please name your pr accordingly. 'Update Students.js' ain't no fun either. Oh and all this is of course only if you have a Github account, duh 🤷
2. __Option B:__ will make you supercool and will guarantee a stable code career throughout Devine (_at least, this is what we think_ 💁)

## Maintainers
> Current maintainers: [Thibault Maekelbergh](https://github.com/thibmaek), [Kevin Meyvaert](https://github.com/kevinmeyvaert), [Lotte Bijlsma](https://github.com/lottebijlsma)

__We will gladly turn over this repo to someone else once we graduate. Long live OSS ❤️__

### The 9 commandments of maintining Devinereel
* Push only to Heroku from the master branch
* Use feature branches prefixed with your initials and merge them into master (eg. `tm-persistent-state`)
  * Delete these once merged in, no dead branches pls 💀
* Use the labels for issues & pr's.
* Write modern code. Most stuff is transpiled, but then again most of us are going to view this in latest Chrome 😉
* _At this moment_, if using yarn do not upload yarn.lock to the Heroku slug. Check out [this issue](https://github.com/thibmaek/devineviewer/issues/14#issuecomment-198068202) as this is the case.
* Resolve modules from absolute paths with Webpack. No arguing about this.
* Clean up unused deps. Preferably keep using the currently integrated Greenkeeper.
* No `.env` files. We are not going to include a dependency just to set the PORT env. Prefix commands in the shell, or set cloud instance envs instead. (eg. `PORT=3000 webpack-dev-server`)
* Use gitmoji (preferably creating a hook with `gitmoji -i`.
* For your [tag release](https://github.com/thibmaek/devinereel/releases) you shall always use the funny/catchy name of a briefing PDF.
