# Dummy JSON API Server
This project was created using [JSON Server](https://www.npmjs.com/package/json-server]) package. If you need a fake service in the development process, you can edit it as you wish.

&nbsp;
**You can find out how it is used at https://www.npmjs.com/package/json-server.**

&nbsp;
If you want to create an application via json, you can do so by editing the **db.json** file and then running the command below.
```
npm run start-json
```
&nbsp;
### Do you need more?


For this, you can edit the **index.js** file as you wish and then run the following command.

```
node index.js
```
&nbsp;
**How you can change running port?**

```
PORT=8000 node index.js
```

*For PowerShell;*
```
$env:PORT="8000"; node index.js
```
&nbsp;
*Note:* You want to change port for server of db.json, please edit port value in **package.json**.