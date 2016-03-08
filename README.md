# Prerequisites

This project used node js and gulp. To check you have node and npm installed, type -
```
node -v
npm -v
```

You will then need to run `npm install`, if you have not installed gulp globally, you will need to type `npm install gulp --global`.
If this is the first time using node modules globally, you might get an EACCES error. You can fix this by changing your permissions for npm default directory.
Goto the [npm website](https://docs.npmjs.com/getting-started/fixing-npm-permissions) for details.

# React Tutorial

This is the React comment box example from [the React tutorial](http://facebook.github.io/react/docs/tutorial.html).

## To use

There are several simple server implementations included. They all serve static files from `public/` and handle requests to `/api/comments` to fetch or add data. Start a server with one of the following:

### Node

```sh
npm install
node server.js
```

### Ruby
```sh
ruby server.rb
```

And visit <http://localhost:3000/>. Try opening multiple tabs!

## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 node server.js
```
