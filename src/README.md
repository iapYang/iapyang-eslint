[![GitHub issues](https://img.shields.io/github/issues/iapYang/iapyang-eslint.svg?style=flat-square)](https://github.com/iapYang/iapyang-eslint/issues)
[![GitHub forks](https://img.shields.io/github/forks/iapYang/iapyang-eslint.svg?style=flat-square)](https://github.com/iapYang/iapyang-eslint/network)
[![GitHub stars](https://img.shields.io/github/stars/iapYang/iapyang-eslint.svg?style=flat-square)](https://github.com/iapYang/iapyang-eslint/stargazers)
[![npm](https://img.shields.io/npm/dt/iapyang-eslint.svg?style=flat)](https://www.npmjs.com/package/iapyang-eslint)

[![NPM](https://nodei.co/npm/iapyang-eslint.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/iapyang-eslint/)

## 前言

本配置是根据前人总结结合个人使用后的一套修改品。

## 用法

#### npm安装

```bash
npm i iapyang-eslint babel-eslint eslint -D
```

#### 新建`.eslintrc`文件

```javascript
{
    "extends": "./node_modules/iapyang-eslint/.eslintrc",
    "rules": {
      	// 此处添加或复写你自己的rules，以下是事例
        "no-underscore-dangle": 0,
        "prefer-rest-params": 0,
        "no-plusplus": 0,
        "max-len": 0
    }
}
```

## eslint配置

```javascript
%%<replace code>%%
```

