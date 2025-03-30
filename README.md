# Markedit
Markdown Text Editor powered by [Showdown](https://github.com/showdownjs/showdown)

---

**Summary**
- [Using Markedit](#using-markedit)
    - [Running Markedit locally](#running-markedit-locally)
- [Markdown syntax](#markdown-syntax)
    - [Headings](#headings)
    - [Styling text](#styling-text)
    - [Quoting text](#quoting-text)
    - [Quoting code](#quoting-code)
    - [Links](#links)
    - [Images](#images)
    - [Lists](#lists)
        - [Nested lists](#nested-lists)
        - [Task lists](#task-lists)
    - [Tables](#tables)
    - [Collapsed sections](#collapsed-sections)
    - [Using emojis](#using-emojis)
    - [Paragraphs](#paragraphs)
    - [Hiding content with comments](#hiding-content-with-comments)
    - [Ignoring Markdown formatting](#ignoring-markdown-formatting)
- [Markedit syntax](#markedit-syntax)
    - [Icons](#icons)
    - [Document Styling](#document-styling)

---

## Using Markedit
Visit <https://flarom.github.io/Markedit> to use it online.

### Running Markedit locally
1. Download the Markedit repo: `git clone https://github.com/flarom/markedit`
2. Open the downloaded folder: `cd Markedit`
3. Launch `index.html` in your favorite browser: `firefox index.html`

## Markdown syntax
*Referenced from [GitHub - "Basic writing and formatting syntax"](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)*
### Headings
Headings are used to categorize content, the size of the title demonstrates its position in a hierarchy of content.

To create a heading, start the line with the `#` character. The number of # you use will determine the hierarchy level and typeface size of the heading.

```
# A first-level heading
## A second-level heading
### A third-level heading
###### A sixth-level heading - The final possible level
```

### Styling text
| Style                  | Syntax            | Example                                  | Output                                 |
|:-----------------------|:------------------|-----------------------------------------:|:---------------------------------------|
| Bold                   | `** **`           | `**This is bold text**`                  | **This is bold text**                  |
| Italic                 | `* *`             | `*This text is italicized*`              | *This is italic text*                  |
| Strikethrough          | `~~ ~~`           | `~~This was mistaken text~~`             | ~~This was mistaken text~~             |
| Underline              | `__ __`           | `This is an __underlined__ text`         | This is an __underlined__ text         |
| Bold and nested italic | `** **` and `* *` | `**This text is *extremely* important**` | **This text is *extremely* important** |
| All bold and italic    | `*** ***`         | `***All this text is important***`       | ***All this text is important***       |
| Subscript              | `<sub> </sub>`    | `This is a <sub>subscript</sub> text`    | This is a <sub>subscript</sub> text    |
| Superscript            | `<sup> </sup>`    | `This is a <sup>superscript</sup> text`  | This is a <sup>superscript</sup> text  |

### Quoting text
You can quote text with a `>`.

```
Text that is not a quote

> Text that is a quote
```

Text that is not a quote

> Text that is a quote

### Quoting code
You can call out code or a command within a sentence with single backticks. The text within the backticks will not be formatted.
```
Use `git clone https://github.com/flarom/Markedit` to download this text editor repo.
```

Use `git clone https://github.com/flarom/Markedit` to download this text editor repo.

To format code or text into its own distinct block, use triple backticks.

````
```java
// insert the name of a language to apply sintax highlighting (not supported by Markedit)
public static void main(String[] args) {
    // Java code here
}
``` 
````

### Links
You can create an inline link by wrapping link text in brackets `[ ]`, and then wrapping the URL in parentheses `( )`

```
This text editor is powered by [Showdown](https://showdownjs.com/).
```
This text editor is powered by [Showdown](https://showdownjs.com/).

### Images
You can display an image by adding `!` and wrapping the alt text in `[ ]`. Alt text is a short text equivalent of the information in the image. Then, wrap the link for the image in parentheses `()`.

```
![Kasane Teto, the popular vocal synthesizer, dancing with a cute face](https://media1.tenor.com/m/PfX3-5yai3QAAAAd/kasane-teto.gif)
```
![Kasane Teto, the popular vocal synthesizer, dancing with a cute face](https://media1.tenor.com/m/PfX3-5yai3QAAAAd/kasane-teto.gif)

### Lists

You can make an unordered list by preceding one or more lines of text with `-`, `*`, or `+`.

```
- Unordered list item 1
- Unordered list item 2
```
- Unordered list item 1
- Unordered list item 2

To order your list, precede each line with a number.

```
1. Ordered list item 1
2. Ordered list item 2
```

1. Ordered list item 1
2. Ordered list item 2

#### Nested lists
You can create a nested list by indenting one or more list items below another item.
```
1. First list item
    - First nested list item
        - Second nested list item
```

1. First list item
    - First nested list item
        - Second nested list item

#### Task lists
To create a task list, preface list items with a hyphen and space followed by `[ ]`. To mark a task as complete, use `[x]`.
```
**Shopping list**
- [x] Pepsi
- [ ] Milk
- [ ] Blåhaj shark plush
```
**Shopping list**
- [x] Pepsi
- [ ] Milk
- [ ] Blåhaj shark plush

### Tables
You can create tables with pipes `|` and hyphens `-`. Hyphens are used to create each column's header, while pipes separate each column. You must include a blank line before your table in order for it to correctly render.

```
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

The pipes on either end of the table are optional.

Cells can vary in width and do not need to be perfectly aligned within columns. There must be at least two hyphens in each column of the header row.

```
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
```
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

You can align text to the left, right, or center of a column by including colons : to the left, right, or on both sides of the hyphens within the header row.

```
| Left-aligned | Center-aligned | Right-aligned |
|:-------------|:--------------:|--------------:|
| hello :wave: | hello :wave:   | hello :wave:  |
| hello :wave: | hello :wave:   | hello :wave:  |
```
| Left-aligned | Center-aligned | Right-aligned |
|:-------------|:--------------:|--------------:|
| hello :wave: | hello :wave:   | hello :wave:  |
| hello :wave: | hello :wave:   | hello :wave:  |

### Collapsed sections
You can temporarily obscure sections of your Markdown by creating a collapsed section that the reader can choose to expand. For example, when you want to include technical details in an issue comment that may not be relevant or interesting to every reader, you can put those details in a collapsed section.

Any Markdown within the `<details>` block will be collapsed until the reader clicks to expand the details.

Within the `<details>` block, use the `<summary>` tag to let readers know what is inside.

```
<details>
<summary>My collapsed section</summary>

This text is temporarily hidden
</details>
```
<details>
<summary>My collapsed section</summary>

This text is temporarily hidden
</details>

### Using emojis
You can add emoji to your writing by typing `:EMOJICODE:`, a colon followed by the name of the emoji.
```
The drunk emoji is kinda funny :woozy_face:.
```
The drunk emoji is kinda funny :woozy_face:.

For a full list of available emoji and codes, see the [Emoji-Cheat-Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).

### Paragraphs
You can create a new paragraph by leaving a blank line between lines of text.

### Hiding content with comments
You can tell Markedit to hide content from the rendered Markdown by placing the content in an HTML comment.
```
<!-- This content will not appear in the rendered Markdown -->
```

### Ignoring Markdown formatting
You can tell Markedit to ignore (or escape) Markdown formatting by using `\` before the Markdown character.
```
Let's rename \*our-new-project\* to \*our-old-project\*.
```
Let's rename \*our-new-project\* to \*our-old-project\*.

## Markedit syntax
### Icons
You can insert icons from [Google Material Symbols](https://fonts.google.com/icons) in your document by using the `<icon>` tag.
```
<icon>warning</icon> This feature is not supported by GitHub.
```
<icon>warning</icon> This feature is not supported by GitHub.

### Document styling

You can use comments to set custom colors to the document.
```
<!-- document.style.--bg=#272822 -->
<!-- document.style.--bg2=#2E2E2E -->
<!-- document.style.--bg2-transparent=#272822 -->
<!-- document.style.--text=#F8F8F2 -->
<!-- document.style.--text2=#A6E22E -->
<!-- document.style.--border=#66D9EF -->
<!-- document.style.--highlight=#F92672 -->
<!-- document.style.--highlightbg=#49483E -->

Monokai Theme
```

You can use comments to set custom typefaces to the document.
```
<!-- document.style.--font=Arial -->
<!-- document.style.--font-title=Consolas -->
<!-- document.style.--font-mono=monospace -->
```

You can also change the document width.
```
<!-- document.style.--max-document-width=1200px -->
```