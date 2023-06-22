# Método de trabalho

## Convenções nomeação

- **Classes JS:**  SimpleClass || PokemonCenas (capitalizado, PascalCase);
- **Funções || Métodos:** nomeFuncao (camelCase);
- **Ligação API:** _LigacaoApi (_PascalCase, variavél que recebe o .json da API);
- **Components:**  Utilizador_Form ou Blog_Post (Snake_Case, maiusculas);
- **Elementos Componentes:** li_element || td_element (snake_case, minusculas)
- **Classes CSS:** nome-classe (kebab-case, minusculas);
- **Id HTML:** Nome-Id  (kebab-case com terminação ' -# ' , maiusculas);
- **Variáveis logica:** utilizadores-Chave || lista-Tarefas (kebab-Camel-Case)

## Convenções comentação de cógido/funções DocBlocks

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
