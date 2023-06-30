# Método de trabalho

## Link para Trello

[Trello Kanban Kirei](https://trello.com/b/wGibnQF5/kanban-4-kirei).

## Convenções nomeação

### Vídeo referência

[![JavaScript Best Practices and Coding Conventions - Write Clean Code](https://i.ytimg.com/vi_webp/RMN_bkZ1KM0/maxresdefault.webp)](https://www.youtube.com/watch?v=RMN_bkZ1KM0 "JavaScript Best Practices and Coding Conventions - Write Clean Code")
JavaScript Best Practices and Coding Conventions - Write Clean Code

### Sumário

- **Funções or Métodos JS:**  simpleClass || pokemonCenas (cammelCase);
- **Classes:** ClassName || PokemonCenas (PascalCase);
- **Variáveis:** utilizadoresChave || listaTarefas (camelCase);
- **Constantes:** PI_VALLUE || HOURS_IN_DAY || IVA_VALUE (SNAKE_UPPER_CASE);
- **Bool:** isValid || isGreen || isSold || isSet;

*No video ele não tinha exemplos para css/html portanto fui buscar o exemplo do prof para classes e a sugestão da Inês para IDs*

- **Classes CSS:** form-inscricao (lower-kebab-case);
- **Id HTML:** User-Field-Id  (Upper-Kebab-Case);

### Exemplos vídeo

```JS
// Variable naming
const camelCase = '';
let thisIsARandomCamelCaseName;
let exampleFunctionNAme;
let getUserCredentials;

// Meaningfull names
getUserData;
getUserCredentials;
getUserInfo;
getUserPosts;

// Favor descriptive over concise
findUser; ❌

findUserByNameOrEmail; ✅
setUserLoggedInTrue; ✅

// Use shorter version (concise) if unambiguous
getUserFromDatabase; ❌

getUser; ✅

// Use consistent verbs per concept
// Functions will usually create, read, update or delete something
getQuestions;
getUsers;

// Make booleans that read well in if-then statements
let car = {};

isSedan, isSold, isGreen, hasAirbag

car.isSedan; car.isSold; car.isGreen; car.hasAirbag;

if (car.isSedan){
    // ...
}

// Use PascalCase for ClassNames
class Task = {}; ✅
class task = {}; ❌

// Capitalize values that are constant everywhere SNAKE UPPER CASE
const SECONDS_IN_A_DAY = 86400;
const HOURS_IN_A_DAY = 24;
const PI_VALUE = 3.14;
const IVA_VALUE = 0.23;

// not all const are constant values
const user = foundUser;
const today = new Date();

// Avoid one-letter variable names
const query = () => {} ✅
const date = () => new Date(); ✅

const q = () => {} ❌
const d = () => new Date(); ❌

// unless in a cycle
for (let i = 0; i < 10; i++) {
    // ...
}
```

## Convenções comentação de cógido/funções DocBlocs

- **Classes :**

``` JS
/**
* A simple class
*
* This is the long description for this class,
* which can span as many lines as needed. It is
* not required, whereas the short description is
* necessary. What the thing does.
*
* @var: This holds the type and description of a variable or class property. The format is type element
description.
* @param: This tag shows the type and description of a func5on or method parameter. The format
is type $element_name element description.
*/
class SimpleClass (){
    ...
}
```

- **Métodos || Funções:**

``` JS
/**
* A simple Method || Function
*
* This is the long description for this fucntion,
* which can span as many lines as needed. It is
* not required, whereas the short description is
* necessary. What the thing does.
*
* @var: This holds the type and description of a variable. The format is type element
description.
* @param: This tag shows the type and description of a func5on or method parameter. The format
is type $element_name element description.
* @return: The type and description of the return value of a func5on or method are provided in
this tag. The format is type return element description.
*/
function nomeFunc (){
    ...
}
```
