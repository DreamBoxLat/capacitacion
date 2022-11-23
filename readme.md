#### Clonamos el repositorio

```git clone https://github.com/DreamBoxLat/capacitacion.git```

```cd capacitacion```

```npm install```

#### Iniciamos la red de desarrollo en truffle

```truffle dev```

#### Compilamos y deployamos el contrato
```compile```
```migrate```



#### Creamos una instancia del contrato para poder efectuar llamadas sobre el

`let instance = await EtherSender.deployed()`

#### Guardamos las cuentas de truffle en un arreglo
`let accounts = await web3.eth.getAccounts()`

#### Verificamos balances
`await web3.eth.getBalance(accounts[0])`

`await web3.eth.getBalance(accounts[1])`

#### Enviamos ethers mediante el contrato hacia la segunda dirección

`instance.sendEthers(accounts[1],{value:40})`

#### verificamos el balance de las direcciones

`await web3.eth.getBalance(accounts[0])`

`await web3.eth.getBalance(accounts[1])`

#### Enviamos  dinero al contrato inteligente

`instance.receiveMoney({value: 40})`

#### revisamos el dinero almacenado en el contrato inteligente 

`instance.getBalance()`

#### Retiramos todo el dinero del contrato inteligente

`instance.withdrawAll()`


#### Revisamos el balance del contrato inteligente

`instance.getBalance()`

#### Enviamos dinero al contrato inteligente


`instance.receiveMoney({value: 40})`

`instance.getBalance()`

#### Realizamos el retiro del dinero del contrato inteligente desde otra dirección , esto nos muestra que no es posible si no es la addres dueña.

`instance.withdrawAll({from: accounts[1]})`


#### Ejecutamos el script

`exec src/functions/etherSender.js`


#### verificamos la cuenta de destino

await web3.eth.getBalance(accounts[1])

