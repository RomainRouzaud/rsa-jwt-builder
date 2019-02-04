# RSA/JWT builder

v1.0.0

This tool provides an easy way to create a JWT token require to getting started with the Symphony API.

## Usage

Prerequisites
-------------
Generate the  the rsa public/private key pair

```shell
mkdir rsa
cd rsa
openssl genrsa -out privatekey.pem 4096
openssl req -newkey rsa:4096 -x509 -key privatekey.pem -out publickey.cer
openssl pkcs8 -topk8 -nocrypt -in privatekey.pem -out privatekey.pkcs8
openssl x509 -pubkey -noout -in publickey.cer > publickey.pem
```

Installation
------------
```shell
yarn install
```

How to start?
-------------
```shell
yarn start ./rsa/privatekey.pkcs8 training.bot1
```
