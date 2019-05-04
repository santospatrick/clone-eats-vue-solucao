# Uber Eats clone com Vue!
> Estilos já prontos, foco no aprendizado com Vue.js

![Uber Eats clone com Vue!](docs/README.jpg)

* [Demonstração do produto final](https://agile-hollows-21544.herokuapp.com/)
* [English Version](README_EN.md)

## Configuração
1. Instale o [git](https://git-scm.com/downloads)
2. Instale o [node.js](https://nodejs.org/en/)
3. Instale o [yarn](https://yarnpkg.com/lang/en/docs/install/)
4. Instale o [vscode](https://code.visualstudio.com/)
* Baixe a extensão para [snippets de Vue](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
* Caso precise de ajude com acesso remoto, instale o [live share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
5. Crie uma conta no [Github](https://github.com/)
6. Crie uma conta no [Heroku](http://heroku.com)
7. Clique no botão de "Fork" no canto superior direito dessa página
* ![Botão de "Fork"](docs/fork.png)
8. Clone *o repositório que você acabou de 'forkar'* na sua máquina
* `git clone https://github.com/your_username/clone-eats-vue`
9. Inscreva-se no meu canal do [twitch](https://www.twitch.tv/patrickcoding), vamos desenvolver a UI juntos dia 4 de Maio das 14h as 18h (GMT-3)

## O que vamos desenvolver?
* [ ] Rota para página inicial
* [ ] Rota para produtos de cada restaurante
* [ ] Rota para carrinho
* [ ] Transição entre rotas
* [ ] Utilizar [Vuex](https://vuex.vuejs.org/) para controlar estados da aplicação

## Para que serve esse repositório?
Esse repositório já tem os estilos e imagens que vamos usar no projeto! Além disso, temos uma configuração de boas práticas de código a partir do ESLint!

## Fórmulas Emmet
Se você não sabe o que é o Emmet, ignore essa parte da documentação!

### `Header.vue`
```
.header>.container>(router-link[to="/"]>img[src="/assets/logo.svg" alt="Clone Eats logo"])+.header-right>(.header-user>img[src="/assets/user.svg" alt="Not logged user icon"])+(router-link[class="header-cart" to="/cart"]>img[src="/assets/cart.svg" alt="Cart icon"])+span
```

### `Home.vue`
```
main.container>(.search>img[src="/assets/search.svg" alt="Search Icon"]+input[type="text" placeholder="Pesquisar restaurante"])+PlaceList
```

### `PlaceItem.vue`
```
router-link[class="place" :to="`/${id}`"]>div[style="{'background-image': 'url'}"]+h3+h4
```

### `Place.vue`
```
div>(.place-header[style="{'background-image': 'url'}"]>.container>.place-title)+.container>OptionList
```

### `OptionList.vue`
```
.container>(.options>OptionItem)+.payment>router-link[class="payment-button" to="/cart"]{Pagamento}
```

### `OptionItem.vue`
```
div[@click="handleAddToCart" class="option"]>(.option-text>.option-title+.option-price)+.option-image[:style="{'background-image': 'url'}"]
```

### `Cart.vue`
```
.container>h1.cart-title{Pagar}+.cart-container>(ul.cart-list>li.cart-item>(.cart-text>.cart-place+.cart-order)+.cart-price)+.payment>button.payment-button{Finalizar}
```

## Muito obrigado!
* [Flaticon](https://www.flaticon.com/)
* [Dropbox](https://dropbox.com)
* [Unsplash](http://unsplash.com)
* [Popmotion](https://popmotion.io)