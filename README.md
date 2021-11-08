# most-used-words

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Problems

1. ipcRenderer não funciona com em6 module:

   - Fonte: [https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/683#issuecomment-600179004](https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/683#issuecomment-600179004)
   - Alterar o arquivo de configuração do Vue

     ```json
         // vue.config.js
         module.exports = {
           ...
           pluginOptions: {
              electronBuilder: {
                 nodeIntegration: true,
              },
           },
        };

     ```
